import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LINKS = [
  { label: "Servicios", to: "/servicios", num: "01" },
  { label: "Proyectos", to: "/proyectos", num: "02" },
  { label: "Proceso", to: "/proceso", num: "03" },
  { label: "Testimonios", to: "/testimonios", num: "04" },
  { label: "FAQ", to: "/faq", num: "05" },
  { label: "Contacto", to: "/contacto", num: "06" },
];

const LOGO = "/favicon.webp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-background/70 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO} alt="EquiCode" width="32" height="32" loading="eager" decoding="async" className="h-8 w-8 rounded-md" />
              <span className="font-mono text-sm font-semibold tracking-tight text-gradient">EquiCode</span>
              <span className="hidden sm:inline mono-label text-[10px]">BS-AS</span>
            </Link>

            <nav className="hidden md:flex items-center gap-7">
              {LINKS.map((l) => (
                <Link key={l.to} to={l.to}
                  className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <span className="font-mono text-[10px] text-accent opacity-0 group-hover:opacity-100 transition-opacity">{l.num}</span>
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 mono-label text-[10px]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                DISPONIBLE · {time}
              </div>
              <button onClick={() => setOpen(true)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Abrir menú">
                <span className="h-px w-6 bg-foreground" />
                <span className="h-px w-6 bg-foreground" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm md:hidden">
          <div className="grid-texture absolute inset-0 opacity-20" />
          <div className="relative flex h-full flex-col px-5 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={LOGO} alt="EquiCode" width="32" height="32" loading="eager" decoding="async" className="h-8 w-8 rounded-md" />
                <span className="font-mono text-sm font-semibold text-gradient">EquiCode</span>
              </div>
              <button onClick={() => setOpen(false)} className="mono-label p-2" aria-label="Cerrar menú">CERRAR ✕</button>
            </div>
            <nav className="mt-16 flex flex-col">
              {LINKS.map((l, i) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 border-b border-border py-6 animate-fade-up"
                  style={{ animationDelay: `${i * 0.06}s` }}>
                  <span className="font-mono text-xs text-accent">{l.num}</span>
                  <span className="text-3xl font-semibold tracking-tight group-hover:text-accent transition-colors">{l.label}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-10">
              <div className="mono-label text-[10px] flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                DISPONIBLE · {time} · BUENOS AIRES
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}