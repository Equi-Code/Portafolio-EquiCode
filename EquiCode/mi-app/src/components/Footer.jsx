import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const LOGO = "/favicon.webp";

const WA_NUMBER = "5491139259252";
const DEFAULT_WA = "Hola Ezequiel, vi tu portfolio y quiero consultarte sobre un proyecto 🚀";
const waLink = (text) => `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

const FOOTER_LINKS = [
  { label: "Servicios", to: "/#servicios" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Proceso", to: "/proceso" },
  { label: "Testimonios", to: "/#testimonios" },
  { label: "FAQ", to: "/faq" },
  { label: "Contacto", to: "/#contacto" },
];

export default function Footer() {
  const [time, setTime] = useState("");

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

  return (
    <footer className="relative border-t border-border overflow-hidden">
      <div className="grid-texture absolute inset-0 opacity-[0.08] pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-20 relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="EquiCode" width="36" height="36" loading="eager" decoding="async" className="h-9 w-9 rounded-md" />
            <div>
              <div className="font-mono text-sm font-semibold tracking-tight text-gradient">EquiCode</div>
              <div className="mono-label text-[10px]">Ezequiel Riente · Frontend Dev</div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center items-center">
            {FOOTER_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="mono-label text-[10px] hover:text-accent transition-colors">
                {l.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          <div className="flex md:justify-end items-center gap-3">
            <a href={waLink(DEFAULT_WA)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors">
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/equi_code/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors">
              <FaInstagram className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/ezequielnicolasriente/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors">
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a href="https://github.com/Equi-Code" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors">
              <FaGithub className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 pt-6 border-t border-border">
          <div className="mono-label text-[10px] flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} EZEQUIEL RIENTE · DISEÑADO Y DESARROLLADO EN BUENOS AIRES</span>
            <Link to="/aviso-legal" className="hover:text-accent transition-colors">AVISO LEGAL →</Link>
          </div>
          <div className="mono-label text-[10px]">
            LAT 34.6037° S · LON 58.3816° W · {time}
          </div>
        </div>
      </div>
    </footer>
  );
}