import { useState } from "react";
import LazyImage from "@/components/LazyImage";

const PROJECTS = [
  {
    id: "magali", name: "Magalí Sol Cerezo", category: "Web Personal · Wellness", year: "2025",
    thumbnail: "https://picsum.photos/seed/magali-sol/1600/1000?grayscale",
    problem: "Profesional holística sin presencia digital ni canal de reservas online.",
    solution: "Sitio personal con secciones de terapias, reservas online, testimonios y contacto integrado por WhatsApp e Instagram.",
    stack: ["HTML5", "CSS3", "JavaScript", "WebP"],
    metrics: [{ label: "Terapias", value: "7" }, { label: "Sesiones", value: "Online" }, { label: "Reservas", value: "WhatsApp" }, { label: "Formato", value: "Responsive" }],
    links: [{ label: "Ver sitio →", href: "https://magalisolcerezo.com" }],
  },
  {
    id: "consultores", name: "Consultores Modernos", category: "Corporativo · Legal & RRHH", year: "2025",
    thumbnail: "https://picsum.photos/seed/consultores-modernos/1600/1000?grayscale",
    problem: "Estudio jurídico y de RRHH sin sitio profesional ni presentación de servicios.",
    solution: "Sitio corporativo con áreas de servicio, quiénes somos, misión y valores, FAQs y aviso legal.",
    stack: ["Google Sites", "No-Code", "SEO"],
    metrics: [{ label: "Áreas", value: "RRHH + Legal" }, { label: "Equipo", value: "Abogados UBA" }, { label: "Aviso Legal", value: "✓" }, { label: "Contacto", value: "IG · LinkedIn" }],
    links: [{ label: "Ver sitio →", href: "https://www.consultoresmodernos.com" }],
  },
  {
    id: "bagrie", name: "Bagrie Shop", category: "E-Commerce", year: "2024",
    thumbnail: "https://picsum.photos/seed/bagrie-shop/1600/1000?grayscale",
    problem: "Negocio sin presencia digital ni sistema de ventas online.",
    solution: "E-commerce completo con carrito, gestión de productos y checkout. React + API REST.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    metrics: [{ label: "Revenue", value: "$48,340" }, { label: "Orders", value: "682" }, { label: "Products", value: "1,450" }, { label: "Conv. Rate", value: "4.2%" }],
    links: [{ label: "Demo →", href: "https://bagrieshop.netlify.app/" }, { label: "GitHub", href: "https://github.com/Equi-Code/proyecto-bagrie" }],
  },
  {
    id: "cotizaciones", name: "Cotizaciones Financieras", category: "FinTech", year: "2024",
    thumbnail: "https://picsum.photos/seed/cotizaciones-fin/1600/1000?grayscale",
    problem: "Cálculo manual de plazos fijos e info financiera dispersa.",
    solution: "App con cálculo de plazos fijos y cotizaciones en tiempo real. Une expertise financiero con frontend.",
    stack: ["JavaScript", "APIs REST", "CSS3"],
    metrics: [{ label: "BTC/USD", value: "$48,920" }, { label: "Variación", value: "+2.34%" }, { label: "Plazo Fijo", value: "$124,580" }, { label: "TNA", value: "+24.58%" }],
    links: [{ label: "Demo →", href: "https://equi-code.github.io/bagriecotizaciones/" }, { label: "GitHub", href: "https://github.com/Equi-Code/bagriecotizaciones" }],
  },
  {
    id: "oestech", name: "OESTECH", category: "Corporativo", year: "2024",
    thumbnail: "https://picsum.photos/seed/oestech-corp/1600/1000?grayscale",
    problem: "Empresa tech sin sitio web profesional ni identidad digital.",
    solution: "Sitio corporativo responsive con animaciones, SEO y performance optimizada.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    metrics: [{ label: "Servicios", value: "Web Dev" }, { label: "Soporte", value: "IT" }, { label: "Cloud", value: "✓" }, { label: "SEO", value: "✓" }],
    links: [{ label: "Demo →", href: "https://equi-code.github.io/OESTECH/" }, { label: "GitHub", href: "https://github.com/Equi-Code/OESTECH" }],
  },
  {
    id: "backend", name: "Back-End Node.js", category: "Backend", year: "2025",
    thumbnail: "https://picsum.photos/seed/backend-node/1600/1000?grayscale",
    problem: "API sin arquitectura escalable ni autenticación segura.",
    solution: "API RESTful con arquitectura por capas, JWT, Firebase Firestore y deploy en Vercel.",
    stack: ["Node.js", "JWT", "Firebase", "Vercel"],
    metrics: [{ label: "Uptime", value: "99.9%" }, { label: "Auth", value: "JWT" }, { label: "DB", value: "Firestore" }, { label: "Deploy", value: "Vercel" }],
    links: [{ label: "Demo →", href: "https://back-end-node-js-pf-r7nu.vercel.app/" }, { label: "GitHub", href: "https://github.com/Equi-Code/Back-End-Node-JS-PF" }],
  },
  {
    id: "esol", name: "E-Commerce Esol", category: "Full Stack", year: "2024",
    thumbnail: "https://picsum.photos/seed/esol-ecommerce/1600/1000?grayscale",
    problem: "Gestión de inventario sin actualizaciones en tiempo real.",
    solution: "Backend con API REST, WebSockets live y arquitectura MVC. Proyecto final ESOL.",
    stack: ["Node.js", "Express", "Socket.IO", "MongoDB"],
    metrics: [{ label: "Productos", value: "1,248" }, { label: "Estado", value: "Live" }, { label: "Real-time", value: "Socket.IO" }, { label: "Usuarios", value: "3 en vivo" }],
    links: [{ label: "Ver código", href: "https://github.com/Equi-Code/Proyecto-Final-Esol" }],
  },
];

function ProjectRow({ p, index }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      className="group relative border-t border-border transition-colors hover:bg-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ contentVisibility: "auto", containIntrinsicSize: "500px" }}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-6 py-12 md:py-16 items-start">
          <div className="col-span-12 md:col-span-1 mb-3 md:mb-0">
            <span className="font-mono text-xs text-muted-foreground tabular-nums">0{index + 1}</span>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="relative mb-6 overflow-hidden border border-border">
              <LazyImage
                src={p.thumbnail}
                alt={`Preview ${p.name}`}
                aspect="16/10"
                sizes="(max-width: 768px) 90vw, 30vw"
                imgClassName="group-hover:scale-105"
              />
            </div>
            <div className="mono-label text-[10px] mb-3 text-accent">{p.category}</div>
            <h3 className="fluid-h3 font-semibold tracking-tight group-hover:text-accent transition-colors">{p.name}</h3>
          </div>
          <div className="col-span-12 md:col-span-4 mt-2 md:mt-0">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground/50">Problema —</span> {p.problem}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              <span className="text-foreground/50">Solución —</span> {p.solution}
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 mt-2 md:mt-0 md:text-right">
            <div className="flex md:justify-end flex-wrap gap-1.5 mb-4">
              {p.stack.map((t) => (
                <span key={t} className="font-mono text-[10px] px-2.5 py-1 border border-border text-muted-foreground">{t}</span>
              ))}
            </div>
            <div className="mono-label text-[10px]">{p.year}</div>
          </div>
        </div>

        <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${hover ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border mb-6">
              {p.metrics.map((m) => (
                <div key={m.label} className="bg-background p-4">
                  <div className="mono-label text-[10px] mb-1">{m.label}</div>
                  <div className="font-mono text-lg tabular-nums">{m.value}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              {p.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="snap-section relative border-t border-border overflow-hidden">
      <div className="grid-texture absolute inset-0 opacity-[0.08] pointer-events-none" />
      <div className="vignette absolute inset-0 pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-36 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7">
            <div className="mono-label mb-6">SECCIÓN · 03 / PORTAFOLIO</div>
            <h2 className="fluid-h2 font-semibold tracking-tight text-balance">Proyectos destacados</h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end justify-end">
            <a href="https://github.com/Equi-Code" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
              Ver todo en GitHub
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        {PROJECTS.map((p, i) => <ProjectRow key={p.id} p={p} index={i} />)}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}