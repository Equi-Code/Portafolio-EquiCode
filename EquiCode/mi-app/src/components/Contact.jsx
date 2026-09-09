// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import WhatsAppIcon from "@/components/WhatsAppIcon";

// const LOGO = "https://media.base44.com/images/public/6a7c42ae1aa8846a13534cfd/684ac1456_Favicon.png";
// const WA_NUMBER = "5491139259252";
// const DEFAULT_WA = "Hola Ezequiel, vi tu portfolio y quiero consultarte sobre un proyecto 🚀";
// const waLink = (text) => `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// const PROJECT_TYPES = ["Landing Page", "Web Corporativa", "E-Commerce", "Automatización", "UX/UI", "Otro"];

// const FOOTER_LINKS = [
//   { label: "Servicios", to: "/#servicios" },
//   { label: "Proyectos", to: "/proyectos" },
//   { label: "Proceso", to: "/proceso" },
//   { label: "FAQ", to: "/faq" },
//   { label: "Contacto", to: "/#contacto" },
// ];

// function Field({ label, children }) {
//   return (
//     <label className="block mb-6">
//       <span className="mono-label block mb-2">{label}</span>
//       {children}
//     </label>
//   );
// }

// const inputClass =
//   "w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors";

// export default function Contact() {
//   const [time, setTime] = useState("");
//   const [form, setForm] = useState({ name: "", email: "", project: PROJECT_TYPES[0], message: "" });
//   const [sent, setSent] = useState(false);

//   useEffect(() => {
//     const tick = () => {
//       setTime(new Date().toLocaleTimeString("es-AR", {
//         hour: "2-digit", minute: "2-digit", hour12: false,
//         timeZone: "America/Argentina/Buenos_Aires",
//       }));
//     };
//     tick();
//     const id = setInterval(tick, 30000);
//     return () => clearInterval(id);
//   }, []);

//   const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const text = `Hola Ezequiel, soy ${form.name} (${form.email}).\nProyecto: ${form.project}.\n${form.message}`;
//     window.open(waLink(text), "_blank", "noopener,noreferrer");
//     setSent(true);
//   };

//   return (
//     <section id="contacto" className="snap-section relative border-t border-border overflow-hidden">
//       <div className="grid-texture absolute inset-0 opacity-[0.12] pointer-events-none" />
//       <div className="spotlight absolute inset-0 pointer-events-none" />
//       <div className="vignette absolute inset-0 pointer-events-none" />

//       <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-36 relative w-full">
//         <div className="mono-label mb-8 flex items-center gap-3">
//           <span className="relative flex h-2 w-2">
//             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
//             <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
//           </span>
//           SYSTEM STATUS: READY FOR PROJECTS
//         </div>

//         <h2 className="fluid-hero font-bold text-balance max-w-5xl">
//           Iniciemos tu<br />
//           <span className="text-accent">próximo proyecto.</span>
//         </h2>

//         <p className="mt-8 max-w-xl text-lg text-muted-foreground text-balance">
//           Una consulta sin compromiso. Contame tu idea y te respondo con un plan claro,
//           tiempos reales y presupuesto transparente.
//         </p>

//         <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-px bg-border border border-border">
//           {/* Formulario */}
//           <form onSubmit={onSubmit} className="lg:col-span-7 bg-background p-8 md:p-10">
//             <div className="mono-label mb-8">FORMULARIO · CONSULTA RÁPIDA</div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Field label="Nombre">
//                 <input name="name" required value={form.name} onChange={onChange} placeholder="Tu nombre" className={inputClass} />
//               </Field>
//               <Field label="Email">
//                 <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="tu@email.com" className={inputClass} />
//               </Field>
//             </div>

//             <Field label="Tipo de proyecto">
//               <select name="project" value={form.project} onChange={onChange} className={`${inputClass} appearance-none cursor-pointer`}>
//                 {PROJECT_TYPES.map((t) => <option key={t} value={t} className="bg-background">{t}</option>)}
//               </select>
//             </Field>

//             <Field label="Mensaje">
//               <textarea name="message" required rows={4} value={form.message} onChange={onChange} placeholder="Contame brevemente sobre tu proyecto…" className={`${inputClass} resize-none`} />
//             </Field>

//             <button type="submit"
//               className="group inline-flex items-center justify-center gap-3 bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground hover:animate-pulse-accent transition-all w-full md:w-auto">
//               <WhatsAppIcon className="h-5 w-5" />
//               Enviar por WhatsApp
//               <span className="transition-transform group-hover:translate-x-1">→</span>
//             </button>

//             <p className="mono-label text-[10px] mt-4">
//               {sent ? "✓ ABRIENDO WHATSAPP CON TU MENSAJE…" : "SE ABRE WHATSAPP CON TU MENSAJE PRE-CARGADO · SIN COMPROMISO"}
//             </p>
//           </form>

//           {/* Contacto directo */}
//           <div className="lg:col-span-5 bg-card p-8 md:p-10 flex flex-col">
//             <div className="mono-label mb-8">CONTACTO DIRECTO</div>

//             <a href={waLink(DEFAULT_WA)} target="_blank" rel="noopener noreferrer"
//               className="group flex items-center gap-4 border border-border p-4 mb-px hover:border-accent transition-colors">
//               <span className="flex h-11 w-11 items-center justify-center bg-accent/10 text-accent">
//                 <WhatsAppIcon className="h-6 w-6" />
//               </span>
//               <span>
//                 <span className="block text-sm font-medium">WhatsApp</span>
//                 <span className="mono-label text-[10px]">+54 9 11 3925 9252 · RESPONDO RÁPIDO</span>
//               </span>
//               <span className="ml-auto text-accent transition-transform group-hover:translate-x-1">→</span>
//             </a>

//             <a href="mailto:hello@equi-code.dev"
//               className="group flex items-center gap-4 border border-border p-4 mb-px hover:border-accent transition-colors">
//               <span className="flex h-11 w-11 items-center justify-center bg-card text-foreground font-mono text-lg">@</span>
//               <span>
//                 <span className="block text-sm font-medium">Email</span>
//                 <span className="mono-label text-[10px]">ezequielrientecode@gmail.com</span>
//               </span>
//               <span className="ml-auto text-accent transition-transform group-hover:translate-x-1">→</span>
//             </a>

//             <div className="grid grid-cols-2 gap-px bg-border border border-border mt-6">
//               <div className="bg-card p-4">
//                 <div className="mono-label mb-1">UBICACIÓN</div>
//                 <div className="text-sm">Buenos Aires, AR</div>
//               </div>
//               <div className="bg-card p-4">
//                 <div className="mono-label mb-1">HORA LOCAL</div>
//                 <div className="text-sm font-mono tabular-nums">{time} ●</div>
//               </div>
//             </div>

//             <a href="https://github.com/Equi-Code" target="_blank" rel="noopener noreferrer"
//               className="mt-auto pt-8 mono-label text-[10px] hover:text-accent transition-colors">
//               GITHUB · @EQUI-CODE →
//             </a>
//           </div>
//         </div>

//         {/* Footer bar */}
//         <footer className="mt-20 border-t border-border pt-10">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
//             <div className="flex items-center gap-3">
//               <img src={LOGO} alt="EquiCode" width="36" height="36" loading="eager" decoding="async" className="h-9 w-9 rounded-md" />
//               <div>
//                 <div className="font-mono text-sm font-semibold tracking-tight">EquiCode</div>
//                 <div className="mono-label text-[10px]">Ezequiel Riente · Desarrollador Full Stack</div>
//               </div>
//             </div>

//             <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center items-center">
//               {FOOTER_LINKS.map((l) => (
//                 <Link key={l.to} to={l.to} className="mono-label text-[10px] hover:text-accent transition-colors">
//                   {l.label.toUpperCase()}
//                 </Link>
//               ))}
//             </nav>

//             <div className="flex md:justify-end items-center gap-3">
//               {/* WhatsApp */}
//               <a href={waLink(DEFAULT_WA)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
//                 className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors">
//                 <WhatsAppIcon className="h-4 w-4" />
//               </a>

//               {/* Instagram */}
//               <a href="https://www.instagram.com/equi_code" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
//                 className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors">
//                 <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                 </svg>
//               </a>

//               {/* LinkedIn */}
//               <a href="https://www.linkedin.com/in/ezequielnicolasriente" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
//                 className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors">
//                 <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                 </svg>
//               </a>

//               {/* GitHub */}
//               <a href="https://github.com/Equi-Code" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
//                 className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors">
//                 <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
//                   <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row justify-between gap-4 pt-6 border-t border-border">
//             <div className="mono-label text-[10px] flex flex-wrap items-center gap-x-4 gap-y-1">
//               <span>© {new Date().getFullYear()} EZEQUIEL RIENTE · DISEÑADO Y DESARROLLADO EN BUENOS AIRES</span>
//               <Link to="/aviso-legal" className="hover:text-accent transition-colors">AVISO LEGAL →</Link>
//             </div>
//             <div className="mono-label text-[10px]">
//               LAT 34.6037° S · LON 58.3816° W · {time}
//             </div>
//           </div>
//         </footer>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const WA_NUMBER = "5491139259252";
const DEFAULT_WA = "Hola Ezequiel, vi tu portfolio y quiero consultarte sobre un proyecto 🚀";
const waLink = (text) => `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

const PROJECT_TYPES = ["Landing Page", "Web Corporativa", "E-Commerce", "Automatización", "UX/UI", "Otro"];

function Field({ label, children }) {
  return (
    <label className="block mb-6">
      <span className="mono-label block mb-2">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors";

export default function Contact() {
  const [time, setTime] = useState("");
  const [form, setForm] = useState({ name: "", email: "", project: PROJECT_TYPES[0], message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString("es-AR", {
        hour: "2-digit", minute: "2-digit", hour12: false,
        timeZone: "America/Argentina/Buenos_Aires",
      }));
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const text = `Hola Ezequiel, soy ${form.name} (${form.email}).\nProyecto: ${form.project}.\n${form.message}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="contacto" className="snap-section relative border-t border-border overflow-hidden">
      <div className="grid-texture absolute inset-0 opacity-[0.12] pointer-events-none" />
      <div className="spotlight absolute inset-0 pointer-events-none" />
      <div className="vignette absolute inset-0 pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-36 relative w-full">
        <div className="mono-label mb-8 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          SYSTEM STATUS: READY FOR PROJECTS
        </div>

        <h2 className="fluid-hero font-bold text-balance max-w-5xl">
          Iniciemos tu<br />
          <span className="text-accent">próximo proyecto.</span>
        </h2>

        <p className="mt-8 max-w-xl text-lg text-muted-foreground text-balance">
          Una consulta sin compromiso. Contame tu idea y te respondo con un plan claro,
          tiempos reales y presupuesto transparente.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-px bg-border border border-border">
          {/* Formulario */}
          <form onSubmit={onSubmit} className="lg:col-span-7 bg-background p-8 md:p-10">
            <div className="mono-label mb-8">FORMULARIO · CONSULTA RÁPIDA</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Nombre">
                <input name="name" required value={form.name} onChange={onChange} placeholder="Tu nombre" className={inputClass} />
              </Field>
              <Field label="Email">
                <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="tu@email.com" className={inputClass} />
              </Field>
            </div>

            <Field label="Tipo de proyecto">
              <select name="project" value={form.project} onChange={onChange} className={`${inputClass} appearance-none cursor-pointer`}>
                {PROJECT_TYPES.map((t) => <option key={t} value={t} className="bg-background">{t}</option>)}
              </select>
            </Field>

            <Field label="Mensaje">
              <textarea name="message" required rows={4} value={form.message} onChange={onChange} placeholder="Contame brevemente sobre tu proyecto…" className={`${inputClass} resize-none`} />
            </Field>

            <button type="submit"
              className="group inline-flex items-center justify-center gap-3 bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground hover:animate-pulse-accent transition-all w-full md:w-auto">
              <WhatsAppIcon className="h-5 w-5" />
              Enviar por WhatsApp
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>

            <p className="mono-label text-[10px] mt-4">
              {sent ? "✓ ABRIENDO WHATSAPP CON TU MENSAJE…" : "SE ABRE WHATSAPP CON TU MENSAJE PRE-CARGADO · SIN COMPROMISO"}
            </p>
          </form>

          {/* Contacto directo */}
          <div className="lg:col-span-5 bg-card p-8 md:p-10 flex flex-col">
            <div className="mono-label mb-8">CONTACTO DIRECTO</div>

            <a href={waLink(DEFAULT_WA)} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-border p-4 mb-px hover:border-accent transition-colors">
              <span className="flex h-11 w-11 items-center justify-center bg-accent/10 text-accent">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm font-medium">WhatsApp</span>
                <span className="mono-label text-[10px]">+54 9 11 3925 9252 · RESPONDO RÁPIDO</span>
              </span>
              <span className="ml-auto text-accent transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a href="mailto:hello@equi-code.dev"
              className="group flex items-center gap-4 border border-border p-4 mb-px hover:border-accent transition-colors">
              <span className="flex h-11 w-11 items-center justify-center bg-card text-foreground font-mono text-lg">@</span>
              <span>
                <span className="block text-sm font-medium">Email</span>
                <span className="mono-label text-[10px]">HELLO@EQUI-CODE.DEV</span>
              </span>
              <span className="ml-auto text-accent transition-transform group-hover:translate-x-1">→</span>
            </a>

            <div className="grid grid-cols-2 gap-px bg-border border border-border mt-6">
              <div className="bg-card p-4">
                <div className="mono-label mb-1">UBICACIÓN</div>
                <div className="text-sm">Buenos Aires, AR</div>
              </div>
              <div className="bg-card p-4">
                <div className="mono-label mb-1">HORA LOCAL</div>
                <div className="text-sm font-mono tabular-nums">{time} ●</div>
              </div>
            </div>

            <a href="https://github.com/Equi-Code" target="_blank" rel="noopener noreferrer"
              className="mt-auto pt-8 mono-label text-[10px] hover:text-accent transition-colors">
              GITHUB · @EQUI-CODE →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}