export default function FinalCTA() {
  return (
    <section className="snap-section relative border-t border-border overflow-hidden">
      <div className="spotlight absolute inset-0 pointer-events-none" />
      <div className="grid-texture absolute inset-0 opacity-[0.1] pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-36 text-center relative">
        <div className="mono-label mb-6 flex items-center justify-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          EMPEZÁ HOY
        </div>
        <h2 className="fluid-hero font-semibold text-balance">¿Tenés una idea?</h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
          Hablemos y veamos cómo podemos convertirla en un producto digital.
        </p>
        <a href="#contacto"
          className="group mt-10 inline-flex items-center gap-2 bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground hover:animate-pulse-accent transition-all">
          Hablemos de tu proyecto
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}