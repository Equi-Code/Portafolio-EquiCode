const SERVICES = [
  { icon: "🚀", title: "Landing Pages", desc: "Páginas que convierten visitas en clientes. Rápidas, atractivas y optimizadas.", features: ["Diseño orientado a conversión", "Mobile-first y responsive", "SEO optimizado", "Entrega en 5–7 días"], price: "Desde $150 USD" },
  { icon: "🌐", title: "Webs Profesionales", desc: "Sitios corporativos con identidad propia, CMS y analytics integrado.", features: ["Diseño personalizado", "Panel de administración", "Google Analytics", "Mantenimiento incluido"], price: "Desde $300 USD" },
  { icon: "🛒", title: "E-Commerce", desc: "Tiendas online completas con checkout, pagos y gestión de inventario.", features: ["Carrito y checkout", "Pasarela de pagos", "Panel de productos", "Reportes de ventas"], price: "Desde $500 USD" },
  { icon: "⚡", title: "Automatizaciones", desc: "Flujos de trabajo que eliminan tareas manuales y ahorran tiempo real.", features: ["Integración de APIs", "Notificaciones automáticas", "Formularios inteligentes", "Reportes automáticos"], price: "Desde $200 USD" },
  { icon: "🎨", title: "Interfaces UX/UI", desc: "Diseño de interfaces centradas en el usuario que convierten y retienen.", features: ["Prototipo en Figma", "Sistema de diseño", "User testing básico", "Handoff para devs"], price: "Desde $180 USD" },
];

export default function Services() {
  return (
    <section id="servicios" className="snap-section relative border-t border-border">
      <div className="vignette absolute inset-0 pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-28 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <div className="mono-label mb-4">SECCIÓN · 02 / SERVICIOS</div>
            <h2 className="fluid-h2 font-semibold text-balance">¿En qué puedo ayudarte?</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-muted-foreground text-balance">
              Soluciones digitales que generan resultados reales para tu negocio.
              Cada servicio se adapta al alcance y los objetivos de tu marca.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="group relative bg-background p-8 md:p-10 transition-colors hover:bg-card animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl">{s.icon}</span>
                <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="fluid-h3 font-semibold mb-3 group-hover:text-accent transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2 mb-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="text-accent text-xs">▸</span>{f}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-border mono-label text-[11px] flex items-center justify-between">
                <span>{s.price}</span>
                <span className="text-muted-foreground">según alcance</span>
              </div>
            </article>
          ))}

          <article className="group relative bg-card p-8 md:p-10 flex flex-col justify-between border-t md:border-t-0 border-border">
            <div>
              <div className="text-3xl mb-6">💬</div>
              <h3 className="fluid-h3 font-semibold mb-3">¿Proyecto custom?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Si tu idea no entra en estas categorías, hablemos. Me adapto a lo que necesitás.
              </p>
            </div>
            <a href="https://wa.me/+5491139259252?text=Hola%20Ezequiel%2C%20tengo%20un%20proyecto%20y%20quiero%20consultarte%20%F0%9F%9A%80"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all">
              Consultame gratis →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}