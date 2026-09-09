import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_WIDTHS = [400, 640, 960, 1280];

/**
 * Build a tiny blurred placeholder (LQIP) + a responsive srcset for the
 * hosts we serve images from. Falls back to the plain `src` for anything else.
 */
function buildVariants(src, widths) {
    if (!src) return { placeholder: null, srcset: null };

    const picsum = src.match(
        /^(https:\/\/picsum\.photos\/seed\/[^/]+\/)(\d+)\/(\d+)(\?.*)?$/
    );
    if (picsum) {
        const [, base, w0, h0, qs = ""] = picsum;
        const ratio = parseInt(h0, 10) / parseInt(w0, 10);
        const placeholder = `${base}24/${Math.round(24 * ratio)}${qs ? qs + "&blur=5" : "?blur=5"
            }`;
        const srcset = widths
            .map((w) => `${base}${w}/${Math.round(w * ratio)}${qs} ${w}w`)
            .join(", ");
        return { placeholder, srcset };
    }

    if (src.includes("images.unsplash.com")) {
        const sep = src.includes("?") ? "&" : "?";
        const placeholder = `${src}${sep}w=24&blur=40&q=30`;
        const srcset = widths
            .map((w) => `${src}${sep}w=${w}&q=80&auto=format&fit=crop ${w}w`)
            .join(", ");
        return { placeholder, srcset };
    }

    return { placeholder: null, srcset: null };
}

/**
 * Advanced lazy-loaded image:
 *  - Native `loading="lazy"` + `decoding="async"` for offscreen images.
 *  - `priority` opts into eager loading + fetchpriority="high" (LCP image).
 *  - IntersectionObserver (rootMargin 200px) defers the network request until
 *    the image nears the viewport — keeps main-thread free (low TBT/INP).
 *  - LQIP blur-up placeholder fades into the full image on load.
 *  - `aspect-ratio` reserves the box before load → zero CLS.
 *  - Responsive srcset → right-sized bytes per device.
 */
export default function LazyImage({
    src,
    alt,
    aspect = "16/10",
    className,
    imgClassName,
    priority = false,
    sizes = "(max-width: 768px) 90vw, 30vw",
}) {
    const wrapRef = useRef(null);
    const imgRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const { placeholder, srcset } = buildVariants(src, DEFAULT_WIDTHS);

    useEffect(() => {
        if (priority) {
            setVisible(true);
            return;
        }
        const el = wrapRef.current;
        if (!el) return;
        if (typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return;
        }
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { rootMargin: "200px" }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [priority]);

    useEffect(() => {
        if (priority && imgRef.current) {
            imgRef.current.setAttribute("fetchpriority", "high");
        }
    }, [priority]);

    return (
        <div
            ref={wrapRef}
            className={cn("relative overflow-hidden bg-card", className)}
            style={{ aspectRatio: aspect.replace("/", " / ") }}
        >
            {visible && placeholder && !loaded && (
                <img
                    src={placeholder}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        filter: "blur(12px)",
                        transform: "scale(1.05)",
                        opacity: loaded ? 0 : 1,
                        transition: "opacity 0.4s ease",
                    }}
                />
            )}
            {visible && (
                <img
                    ref={imgRef}
                    src={src}
                    srcSet={srcset || undefined}
                    sizes={srcset ? sizes : undefined}
                    alt={alt}
                    loading={priority ? "eager" : "lazy"}
                    decoding="async"
                    onLoad={() => setLoaded(true)}
                    className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                        loaded ? "opacity-100" : "opacity-0",
                        imgClassName
                    )}
                />
            )}
        </div>
    );
}