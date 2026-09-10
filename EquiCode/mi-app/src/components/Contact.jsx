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
                <span className="mono-label text-[10px]">ezequielrientecode@gmail.com</span>
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