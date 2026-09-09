import LazyImage from "@/components/LazyImage";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const WA_NUMBER = "5491139259252";
const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const TEMPLATES = [
    {
        id: "nexus-landing",
        name: "Nexus Landing",
        category: "SaaS · Landing",
        price: "$49 USD",
        thumbnail: "https://picsum.photos/seed/nexus-landing/1200/800?grayscale",
        desc: "Landing de alto impacto para SaaS. Hero animado, features, pricing y testimonios. Lista para conectar tu producto.",
        stack: ["React", "Tailwind", "Framer Motion"],
    },
    {
        id: "obsidian-portfolio",
        name: "Obsidian Portfolio",
        category: "Personal · Portfolio",
        price: "$39 USD",
        thumbnail: "https://picsum.photos/seed/obsidian-portfolio/1200/800?grayscale",
        desc: "Portfolio minimalista estilo brutalismo financiero. Proyectos, sobre-mí y contacto. Ideal para devs y diseñadores.",
        stack: ["HTML5", "CSS3", "JavaScript"],
    },
    {
        id: "ledger-dashboard",
        name: "Ledger Dashboard",
        category: "Admin · Dashboard",
        price: "$79 USD",
        thumbnail: "https://picsum.photos/seed/ledger-dashboard/1200/800?grayscale",
        desc: "Panel de administración con gráficos, tablas y KPIs. Sidebar colapsable, modo oscuro y componentes listos para tu API.",
        stack: ["React", "Tailwind", "Recharts"],
    },
    {
        id: "mercado-store",
        name: "Mercado Store",
        category: "E-Commerce · Starter",
        price: "$89 USD",
        thumbnail: "https://picsum.photos/seed/mercado-store/1200/800?grayscale",
        desc: "Tienda online completa: catálogo, carrito, checkout y panel de productos. Conectá tu pasarela y vendé.",
        stack: ["Next.js", "Stripe", "MongoDB"],
    },
    {
        id: "prisma-blog",
        name: "Prisma Blog",
        category: "Contenido · Blog",
        price: "$29 USD",
        thumbnail: "https://picsum.photos/seed/prisma-blog/1200/800?grayscale",
        desc: "Blog minimalista con MDX, búsqueda y RSS. Performance extrema y SEO listo para indexar en Google.",
        stack: ["Astro", "MDX", "CSS3"],
    },
    {
        id: "flow-auth-kit",
        name: "Flow Auth Kit",
        category: "UI Kit · Auth",
        price: "$69 USD",
        thumbnail: "https://picsum.photos/seed/flow-auth-kit/1200/800?grayscale",
        desc: "Kit de autenticación con login, registro, recuperación y OTP. Componentes accesibles y temas personalizables.",
        stack: ["React", "Firebase", "Tailwind"],
    },
];

export default function Templates() {
    return (
        <section id="templates" className="snap-section relative border-t border-border">
            <div className="grid-texture absolute inset-0 opacity-[0.08] pointer-events-none" />
            <div className="vignette absolute inset-0 pointer-events-none" />
            <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-28 w-full relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                    <div className="lg:col-span-7">
                        <div className="mono-label mb-4">SECCIÓN · 04 / TEMPLATES</div>
                        <h2 className="fluid-h2 font-semibold text-balance">Templates ya armados</h2>
                    </div>
                    <div className="lg:col-span-5 lg:col-start-8 flex items-end">
                        <p className="text-lg text-muted-foreground text-balance">
                            Diseños listos para usar. Comprás, personalizás y publicás en horas.
                            Cada template incluye código limpio, documentación y soporte de instalación.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
                    {TEMPLATES.map((t, i) => (
                        <article key={t.id} className="group relative bg-background flex flex-col animate-fade-up"
                            style={{ animationDelay: `${i * 0.05}s`, contentVisibility: "auto", containIntrinsicSize: "520px" }}>
                            <div className="relative overflow-hidden border-b border-border">
                                <LazyImage src={t.thumbnail} alt={`Preview ${t.name}`} aspect="3/2"
                                    sizes="(max-width: 768px) 90vw, 33vw" imgClassName="group-hover:scale-105" />
                                <div className="absolute top-3 left-3 mono-label text-[10px] bg-background/80 backdrop-blur px-2 py-1">
                                    {t.category}
                                </div>
                            </div>
                            <div className="p-6 md:p-7 flex flex-col flex-1">
                                <h3 className="fluid-h3 font-semibold mb-2 group-hover:text-accent transition-colors">{t.name}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t.desc}</p>
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {t.stack.map((s) => (
                                        <span key={s} className="font-mono text-[10px] px-2 py-1 border border-border text-muted-foreground">{s}</span>
                                    ))}
                                </div>
                                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                                    <span className="font-mono text-lg tabular-nums">{t.price}</span>
                                    <a href={waLink(`Hola Ezequiel, quiero consultar por el template "${t.name}" (${t.price}) 🛒`)}
                                        target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all">
                                        <WhatsAppIcon className="h-4 w-4" /> Consultar
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8">
                    <p className="mono-label text-[10px]">¿NECESITÁS UN TEMPLATE A MEDIDA? TAMBIÉN LO ARMO.</p>
                    <a href={waLink("Hola Ezequiel, necesito un template a medida 🛠️")} target="_blank" rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                        Pedir template custom
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}