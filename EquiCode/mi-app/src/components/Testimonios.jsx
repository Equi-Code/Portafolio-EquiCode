// import { useState, useEffect, useCallback } from "react";

// function GoogleG({ className = "" }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
//       <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
//       <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
//       <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
//       <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.3 1 3.34 3.69 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
//     </svg>
//   );
// }

// const TESTIMONIALS = [
//   {
//     name: "Jonathan Domínguez",
//     role: "Local Guide · 94 opiniones",
//     quote: "La verdad un genio Eze. Yo fui con una idea y él la convirtió en algo mucho mejor de lo que había pensado. Sin duda voy a seguir eligiéndolo.",
//     rating: 5,
//   },
//   {
//     name: "Daiana Luque",
//     role: "Local Guide · 10 opiniones",
//     quote: "Excelente experiencia. Muy profesional y atento a la hora de entender lo que necesita el cliente y proponer soluciones. Se nota el compromiso con el trabajo y el cuidado por los detalles. Si estás buscando a alguien para desarrollar una web o mejorar la presencia digital de tu negocio, lo recomiendo totalmente.",
//     rating: 5,
//   },
//   {
//     name: "Aracelli L",
//     role: "Local Guide · 14 opiniones",
//     quote: "Les pedimos una página web para las invitaciones de nuestro casamiento. Nuestros invitados eran argentinos y franceses, con lo cual necesitábamos una página en la que podamos tener los 2 idiomas y queríamos algo en un estilo en particular. No sólo el resultado quedó excelente, sino que durante el proceso fueron muy meticulosos, respetuosos, atentos y súper reactivos. Súper delicada, elegante y moderna: exactamente lo que queríamos. Los recomiendo 100%.",
//     rating: 5,
//   },
//   {
//     name: "Magalí Sol Cerezo",
//     role: "6 opiniones",
//     quote: "Eze hizo mi página web y quedó hermosa! Le estoy muy agradecida porque me tuvo mucha paciencia con mis inquietudes, supo entender a la perfección lo que quería y encima la terminó súper rápido. Sos un gran profesional.",
//     rating: 5,
//   },
//   {
//     name: "Fernando Broitman",
//     role: "7 opiniones",
//     quote: "Excelente servicio. Siempre que tuvimos algún problema o consulta con sistemas, redes o equipos, nos ayudaron a resolverlo rápido y de manera efectiva. Siempre con muy buena predisposición y atención. Totalmente recomendables.",
//     rating: 5,
//   },
// ];

// const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=EquiCode&stick=H4sIAAAAAAAA_-NgU1I1qDBKSUkyTjZKMTMC0kZJhlYGFZaJJsbJyabGKSnJSSaWZhaLWDlcC0sznfNTUgEeLVnaNAAAAA&hl=es&mat=CYeLYfWNOES3ElYBa0lj_9d2PdNwafd85ql2__HZVqrtZ22c_EyGKnJZjqp4ohEONErmgWAm7a4-oqtJ4o72NpvrlcYsoW1DiBUs0E1szLkIIdVhRJeb2VjSNToLkbWScg&authuser=0";

// function Stars({ rating, className = "" }) {
//   return (
//     <span className={`text-accent tracking-tight ${className}`} aria-label={`${rating} de 5 estrellas`}>
//       {"★".repeat(rating)}
//     </span>
//   );
// }

// export default function Testimonios() {
//   const [active, setActive] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const count = TESTIMONIALS.length;

//   const go = useCallback((dir) => setActive((a) => (a + dir + count) % count), [count]);

//   useEffect(() => {
//     if (paused) return;
//     const id = setInterval(() => setActive((a) => (a + 1) % count), 6000);
//     return () => clearInterval(id);
//   }, [paused, count]);

//   const t = TESTIMONIALS[active];

//   return (
//     <section id="testimonios" className="snap-section relative border-t border-border bg-card/30">
//       <div className="vignette absolute inset-0 pointer-events-none" />
//       <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-28 w-full relative">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
//           <div className="lg:col-span-6">
//             <div className="mono-label mb-4 flex items-center gap-2">
//               <GoogleG className="h-3.5 w-3.5" />
//               RESEÑAS · GOOGLE
//             </div>
//             <h2 className="fluid-h2 font-semibold text-balance">Lo que dicen mis clientes</h2>
//           </div>
//           <div className="lg:col-span-5 lg:col-start-8 flex items-end">
//             <p className="text-lg text-muted-foreground text-balance">
//               Reseñas verificadas de proyectos entregados. Tu experiencia puede ser la próxima.
//             </p>
//           </div>
//         </div>

//         <div
//           className="relative"
//           onMouseEnter={() => setPaused(true)}
//           onMouseLeave={() => setPaused(false)}
//         >
//           <div className="border border-border bg-background p-8 md:p-14 min-h-[260px] md:min-h-[300px] flex flex-col">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-2">
//                 <GoogleG className="h-4 w-4" />
//                 <Stars rating={t.rating} className="text-sm" />
//               </div>
//               <span className="mono-label text-[10px] tabular-nums">
//                 {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
//               </span>
//             </div>

//             <blockquote
//               key={active}
//               className="animate-fade-up text-lg md:text-2xl leading-relaxed text-foreground/90 flex-1 max-w-3xl font-medium"
//             >
//               “{t.quote}”
//             </blockquote>

//             <figcaption className="pt-6 mt-8 border-t border-border">
//               <div className="text-sm font-semibold">{t.name}</div>
//               <div className="mono-label text-[10px] mt-1">{t.role}</div>
//             </figcaption>
//           </div>

//           <button
//             onClick={() => go(-1)}
//             aria-label="Reseña anterior"
//             className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center border border-border bg-background hover:border-accent hover:text-accent transition-colors"
//           >
//             ←
//           </button>
//           <button
//             onClick={() => go(1)}
//             aria-label="Reseña siguiente"
//             className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center border border-border bg-background hover:border-accent hover:text-accent transition-colors"
//           >
//             →
//           </button>
//         </div>

//         <div className="flex justify-center gap-2 mt-6">
//           {TESTIMONIALS.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActive(i)}
//               aria-label={`Ir a reseña ${i + 1}`}
//               className={`h-1.5 transition-all ${
//                 i === active ? "w-8 bg-accent" : "w-4 bg-border hover:bg-muted-foreground"
//               }`}
//             />
//           ))}
//         </div>

//         <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-border pt-8">
//           <div>
//             <div className="mono-label mb-2 flex items-center gap-2">
//               <GoogleG className="h-3.5 w-3.5" />
//               RESEÑAS VERIFICADAS EN GOOGLE
//             </div>
//             <div className="flex items-center gap-3">
//               <span className="text-2xl font-semibold">5.0</span>
//               <Stars rating={5} className="text-lg" />
//               <span className="text-sm text-muted-foreground">— basado en 10 reseñas en Google</span>
//             </div>
//           </div>
//           <a
//             href={GOOGLE_REVIEWS_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
//           >
//             Ver las 10 reseñas en Google
//             <span className="transition-transform group-hover:translate-x-1">→</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useRef } from "react";
import { Link } from "react-router-dom";

function GoogleG({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.3 1 3.34 3.69 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}

const TESTIMONIALS = [
  {
    name: "Jonathan Domínguez",
    role: "Local Guide · 94 opiniones",
    quote: "La verdad un genio Eze. Yo fui con una idea y él la convirtió en algo mucho mejor de lo que había pensado. Sin duda voy a seguir eligiéndolo.",
    rating: 5,
  },
  {
    name: "Daiana Luque",
    role: "Local Guide · 10 opiniones",
    quote: "Excelente experiencia. Muy profesional y atento a la hora de entender lo que necesita el cliente y proponer soluciones. Se nota el compromiso con el trabajo y el cuidado por los detalles. Si estás buscando a alguien para desarrollar una web o mejorar la presencia digital de tu negocio, lo recomiendo totalmente.",
    rating: 5,
  },
  {
    name: "Aracelli L",
    role: "Local Guide · 14 opiniones",
    quote: "Les pedimos una página web para las invitaciones de nuestro casamiento. Nuestros invitados eran argentinos y franceses, con lo cual necesitábamos una página en la que podamos tener los 2 idiomas y queríamos algo en un estilo en particular. No sólo el resultado quedó excelente, sino que durante el proceso fueron muy meticulosos, respetuosos, atentos y súper reactivos. Súper delicada, elegante y moderna: exactamente lo que queríamos. Los recomiendo 100%.",
    rating: 5,
  },
  {
    name: "Magalí Sol Cerezo",
    role: "6 opiniones",
    quote: "Eze hizo mi página web y quedó hermosa! Le estoy muy agradecida porque me tuvo mucha paciencia con mis inquietudes, supo entender a la perfección lo que quería y encima la terminó súper rápido. Sos un gran profesional.",
    rating: 5,
    project: "Magalí Sol Cerezo",
    projectTo: "/proyectos",
  },
  {
    name: "Fernando Broitman",
    role: "7 opiniones",
    quote: "Excelente servicio. Siempre que tuvimos algún problema o consulta con sistemas, redes o equipos, nos ayudaron a resolverlo rápido y de manera efectiva. Siempre con muy buena predisposición y atención. Totalmente recomendables.",
    rating: 5,
  },
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=EquiCode&stick=H4sIAAAAAAAA_-NgU1I1qDBKSUkyTjZKMTMC0kZJhlYGFZaJJsbJyabGKSnJSSaWZhaLWDlcC0sznfNTUgEeLVnaNAAAAA&hl=es&mat=CYeLYfWNOES3ElYBa0lj_9d2PdNwafd85ql2__HZVqrtZ22c_EyGKnJZjqp4ohEONErmgWAm7a4-oqtJ4o72NpvrlcYsoW1DiBUs0E1szLkIIdVhRJeb2VjSNToLkbWScg&authuser=0";

function Stars({ rating, className = "" }) {
  return (
    <span className={`text-accent tracking-tight ${className}`} aria-label={`${rating} de 5 estrellas`}>
      {"★".repeat(rating)}
    </span>
  );
}

export default function Testimonios() {
  const scroller = useRef(null);

  const scrollByCard = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const perView = window.innerWidth >= 1024 ? 3 : 1;
    const cardWidth = el.clientWidth / perView;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <section id="testimonios" className="snap-section relative border-t border-border bg-card/30">
      <div className="vignette absolute inset-0 pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-28 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <GoogleG className="h-4 w-4" />
              <Stars rating={5} className="text-base" />
              <span className="text-lg font-semibold">5.0</span>
              <span className="mono-label text-[10px]">EN GOOGLE</span>
            </div>
            <h2 className="fluid-h2 font-semibold text-balance">Lo que dicen mis clientes</h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end justify-end gap-3">
            <button onClick={() => scrollByCard(-1)} aria-label="Anterior"
              className="h-10 w-10 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors">←</button>
            <button onClick={() => scrollByCard(1)} aria-label="Siguiente"
              className="h-10 w-10 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors">→</button>
          </div>
        </div>

        <div
          ref={scroller}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-1 px-1
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]
                         bg-card/60 backdrop-blur-sm border border-border/80 p-7 flex flex-col
                         hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Stars rating={t.rating} className="text-sm" />
                <GoogleG className="h-4 w-4" />
              </div>
              <div className="text-5xl text-accent/20 font-serif leading-none mb-1 select-none">“</div>
              <blockquote className="text-sm leading-relaxed text-foreground/85 flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="pt-5 mt-5 border-t border-border/60">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="mono-label text-[10px] mt-1 flex items-center gap-2">
                  <GoogleG className="h-3 w-3" /> Google · {t.rating} estrellas
                </div>
                {t.project && (
                  <Link to={t.projectTo} className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors">
                    Proyecto: {t.project} <span>→</span>
                  </Link>
                )}
              </figcaption>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-border pt-8">
          <div>
            <div className="mono-label mb-2 flex items-center gap-2">
              <GoogleG className="h-3.5 w-3.5" />
              RESEÑAS VERIFICADAS EN GOOGLE
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold">5.0</span>
              <Stars rating={5} className="text-lg" />
              <span className="text-sm text-muted-foreground">— basado en reseñas en Google</span>
            </div>
          </div>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors">
            Ver reseñas en Google
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}