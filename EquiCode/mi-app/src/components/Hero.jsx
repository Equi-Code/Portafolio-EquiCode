import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const METRICS = [
  { value: 13, suffix: "+", label: "Años en banca" },
  { value: 5, suffix: "+", label: "Proyectos desplegados" },
  { value: 99, suffix: ".9", label: "Uptime backend", raw: true },
];

function useCountUp(target, raw = false) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          setVal(Math.floor(eased * target));
          if (p < 1) requestAnimationFrame(tick);
          else setVal(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return { val, ref };
}

function Metric({ value, suffix, label, raw }) {
  const { val, ref } = useCountUp(value, raw);
  return (
    <div ref={ref} className="border-t border-border py-5">
      <div className="font-mono text-2xl md:text-3xl font-medium tabular-nums">
        {raw ? (val >= 99 ? 99 : val) : val}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mono-label mt-2">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="snap-section relative overflow-hidden pt-16">
      <div className="grid-texture absolute inset-0 opacity-[0.12] pointer-events-none" />
      <div className="vignette absolute inset-0 pointer-events-none" />
      <div className="spotlight absolute inset-0 pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-5 md:px-10 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 py-12 md:py-16">
          <div className="lg:col-span-8 flex flex-col justify-center animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="mono-label">DISPONIBLE PARA PROYECTOS · 2026</span>
            </div>

            <h1 className="fluid-hero font-semibold text-balance">
              Desarrollo web
              <br />
              <span className="text-muted-foreground">profesional para</span>{" "}
              <span className="text-gradient">tu negocio.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance">
              Ezequiel Riente — Diseño y desarrollo sitios web, aplicaciones y soluciones
              digitales que ayudan a tu negocio a crecer. Frontend con React, enfocado en
              resultados reales.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contacto" className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground hover:animate-pulse-accent transition-all">
                Hablemos de tu proyecto
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <Link to="/proyectos" className="group inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-medium hover:border-foreground transition-colors">
                Ver proyectos
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="mono-label mb-6 flex items-center justify-between">
              <span>DOSSIER · 01</span>
              <span className="text-accent">●</span>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              {METRICS.map((m) => <Metric key={m.label} {...m} />)}
            </div>
            <div className="mt-6 mono-label text-[10px] leading-relaxed">
              STACK: REACT · JAVASCRIPT · HTML5 · CSS3 · NODE.JS · MONGODB
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex h-12 items-center justify-between mono-label text-[10px]">
            <span>SCROLL ↓</span>
            <span className="hidden sm:inline">LAT 34.6037° S · LON 58.3816° W</span>
            <span>BUE/AR</span>
          </div>
        </div>
      </div>
    </section>
  );
}