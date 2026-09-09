import { useState, useEffect, useRef } from "react";

/**
 * Mounts its children only when they approach the viewport.
 * Combined with React.lazy + Suspense, this defers both JS download
 * and execution for below-the-fold sections, reducing initial JS payload.
 */
export default function MountOnView({
  children,
  fallback = null,
  rootMargin = "300px",
  intrinsicHeight = "600px",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
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
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : intrinsicHeight }}>
      {visible ? children : fallback}
    </div>
  );
}