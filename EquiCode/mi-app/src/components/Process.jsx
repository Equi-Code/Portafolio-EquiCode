const STEPS = [
  { num: "01", title: "Descubrimiento", desc: "Conozco tu negocio, objetivos y necesidades antes de escribir una sola línea de código.", detail: "📋 Brief del proyecto" },
  { num: "02", title: "Diseño & Desarrollo", desc: "Diseño la experiencia y desarrollo una solución rápida, moderna y totalmente responsive.", detail: "🎨 Preview en Figma" },
  { num: "03", title: "Lanzamiento", desc: "Optimización, testing, deploy y soporte para que el proyecto salga listo para crecer.", detail: "🚀 Sitio en vivo" },
];

const PRINCIPLES = ["📅 Fechas realistas", "💬 Comunicación directa", "⚡ Código optimizado"];

export default function Process() {
  return (
    <section id="proceso" className="snap-section relative border-t border-border bg-card/30 overflow-hidden">
      <div className="grid-texture absolute inset-0 opacity-[0.08] pointer-events-none" />
      <div className="vignette absolute inset-0 pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-36 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-6">
            <div className="mono-label mb-6">SECCIÓN · 04 / PROCESO</div>
            <h2 className="fluid-h2 font-semibold tracking-tight text-balance">Cómo transformo una idea en un producto digital</h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Cada proyecto sigue una metodología clara para garantizar una experiencia fluida,
              comunicación constante y resultados de calidad.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {STEPS.map((s) => (
            <div key={s.num} className="bg-background p-10 md:p-14 group hover:bg-card transition-colors flex flex-col">
              <div className="flex items-baseline justify-between mb-12">
                <span className="font-mono text-6xl md:text-7xl font-medium text-border leading-none group-hover:text-accent/30 transition-colors">{s.num}</span>
                <span className="h-px flex-1 ml-6 bg-border" />
              </div>
              <h3 className="fluid-h3 font-semibold tracking-tight mb-4">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">{s.desc}</p>
              <div className="mono-label text-[11px] text-foreground/70 pt-6 border-t border-border">{s.detail}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
          {PRINCIPLES.map((p) => (
            <span key={p} className="mono-label text-[11px] flex items-center gap-2">
              <span className="text-accent">◆</span>{p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}