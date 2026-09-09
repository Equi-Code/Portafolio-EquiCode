const STACK = ["React", "JavaScript", "HTML5", "CSS3", "Vue.js", "Node.js", "MongoDB", "Python"];

const PILLARS = [
  { icon: "⚡", title: "Performance primero", desc: "Código optimizado, carga rápida y Lighthouse scores que marcan la diferencia." },
  { icon: "🎨", title: "UI/UX centrada en el usuario", desc: "Interfaces intuitivas que convierten visitantes en clientes. Diseño que comunica." },
  { icon: "📱", title: "Mobile-first siempre", desc: "Responsive real — no solo que se vea bien en mobile. Probado en dispositivos reales." },
  { icon: "🤝", title: "Comunicación clara", desc: "Actualizaciones constantes, entregas en tiempo y explicaciones sin tecnicismos innecesarios." },
];

const EXPERIENCE = [
  {
    period: "2024 — Presente", role: "Desarrollador Web Frontend", company: "Freelance — EquiCode",
    desc: "Diseño y desarrollo de sitios web modernos y optimizados. Implementación de interfaces con HTML, CSS, JavaScript y frameworks como React, Angular y Vue. Proyecto final: e-commerce con Node.js, Express, MongoDB y Socket.IO.",
    stack: ["React", "Vue.js", "Node.js", "MongoDB", "Express"],
  },
  {
    period: "2010 — 2023", role: "Oficial Sr. de Negocios", company: "Banco de Valores",
    desc: "13 años como agente bursátil. Gestión de carteras de inversión, asesoramiento financiero personalizado y análisis de mercados de capitales. Atención de clientes institucionales y personas de alto patrimonio.",
    stack: ["Finanzas", "Inversiones", "Mercado de Capitales"],
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="snap-section relative border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <div className="mono-label mb-4">SECCIÓN · 05 / SOBRE MÍ</div>
            <h2 className="fluid-h2 font-semibold text-balance">Código limpio, impacto real</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Soy <span className="text-foreground font-medium">Ezequiel Riente</span>, Desarrollador Web Frontend
              apasionado por transformar ideas en experiencias digitales únicas. Mi objetivo es crear sitios web
              modernos, accesibles y fáciles de usar.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Vengo de 13 años en el sector financiero como agente bursátil, lo que me da una mirada única: entiendo
              tanto el código como el impacto real en el negocio. Esa combinación me hace un desarrollador que piensa
              en resultados.
            </p>
          </div>
        </div>

        <div className="border-y border-border py-6 mb-20 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap will-change-transform">
            {[...STACK, ...STACK, ...STACK].map((s, i) => (
              <span key={i} className="font-mono text-2xl md:text-3xl font-medium text-muted-foreground/40">
                {s} <span className="text-accent/40 mx-6">/</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-20">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-background p-8 group hover:bg-card transition-colors">
              <div className="text-2xl mb-5">{p.icon}</div>
              <h3 className="text-base font-semibold mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="mono-label mb-8">TRAYECTORIA · EXPERIENCIA LABORAL</div>
          <div className="border-t border-border">
            {EXPERIENCE.map((e) => (
              <div key={e.role} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-border">
                <div className="md:col-span-3"><div className="mono-label text-[11px]">{e.period}</div></div>
                <div className="md:col-span-5">
                  <h3 className="text-xl font-semibold tracking-tight">{e.role}</h3>
                  <div className="text-sm text-accent mt-1">{e.company}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3 max-w-md">{e.desc}</p>
                </div>
                <div className="md:col-span-4 md:text-right">
                  <div className="flex md:justify-end flex-wrap gap-1.5">
                    {e.stack.map((s) => (
                      <span key={s} className="font-mono text-[10px] px-2 py-1 border border-border text-muted-foreground">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background p-8 md:p-10">
            <div className="mono-label mb-4">SECTOR ANTERIOR</div>
            <div className="text-3xl font-semibold tracking-tight mb-2">Banca & Finanzas</div>
            <div className="text-accent font-mono text-sm">— 13 años</div>
          </div>
          <div className="bg-background p-8 md:p-10">
            <div className="mono-label mb-4">ESPECIALIDAD ACTUAL</div>
            <div className="text-3xl font-semibold tracking-tight mb-2">Desarrollo Web Frontend</div>
            <div className="text-accent font-mono text-sm">— React · Buenos Aires, AR</div>
          </div>
        </div>
      </div>
    </section>
  );
}