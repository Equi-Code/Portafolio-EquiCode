import { Link } from "react-router-dom";

const SECTIONS = [
  {
    id: "responsable",
    title: "1. Responsable del tratamiento",
    body: "El responsable del tratamiento de los datos personales recogidos a través de este sitio es Ezequiel Riente (EquiCode), con domicilio en Buenos Aires, Argentina. Podés contactarlo a través de hello@equi-code.dev o por WhatsApp al +54 9 11 3925 9252.",
  },
  {
    id: "finalidad",
    title: "2. Finalidad del tratamiento",
    body: "Los datos que compartás a través del formulario de contacto, WhatsApp o correo electrónico se utilizan únicamente para responder consultas, elaborar presupuestos, gestionar la relación profesional y remitir información relacionada con los servicios solicitados.",
  },
  {
    id: "legitimacion",
    title: "3. Legitimación",
    body: "La base legal para el tratamiento de tus datos es el consentimiento expreso que otorgás al enviar el formulario de contacto o al iniciar una conversación por los canales habilitados.",
  },
  {
    id: "conservacion",
    title: "4. Conservación de los datos",
    body: "Los datos se conservan mientras dure la relación profesional y, posteriormente, durante los plazos legalmente exigibles. Una vez cumplidos, se suprimen salvo obligación legal de conservación.",
  },
  {
    id: "derechos",
    title: "5. Derechos del interesado",
    body: "Podés ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a hello@equi-code.dev. También podés presentar una reclamación ante la autoridad de control competente.",
  },
  {
    id: "propiedad",
    title: "6. Propiedad intelectual",
    body: "Todos los contenidos de este sitio —textos, diseño, código, logotipo y elementos gráficos— son propiedad de Ezequiel Riente / EquiCode, salvo los proyectos de clientes que se exhiben con fines de portafolio. Queda prohibida su reproducción total o parcial sin autorización.",
  },
  {
    id: "cookies",
    title: "7. Cookies y tecnologías similares",
    body: "Este sitio no utiliza cookies de terceros ni herramientas de seguimiento publicitario. Únicamente se emplean elementos técnicos esenciales para el correcto funcionamiento y la medición anónima del tráfico.",
  },
  {
    id: "responsabilidad",
    title: "8. Limitación de responsabilidad",
    body: "Ezequiel Riente no se hace responsable de los contenidos de los sitios externos enlazados desde este portafolio, ni de los daños derivados de un uso indebido de la información aquí publicada.",
  },
];

export default function AvisoLegal() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="grid-texture absolute inset-0 opacity-[0.08] pointer-events-none" />
      <div className="vignette absolute inset-0 pointer-events-none" />

      <div className="mx-auto max-w-3xl px-5 md:px-10 relative">
        <div className="mono-label mb-6">DOCUMENTO · AVISO LEGAL</div>
        <h1 className="fluid-h2 font-semibold tracking-tight mb-5 text-balance">
          Aviso Legal y Política de Privacidad
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-12">
          El presente aviso legal regula el uso del sitio https://www.equicode.com.ar y establece las
          condiciones de acceso, navegación y tratamiento de datos. Al utilizar este sitio,
          aceptás las prácticas aquí descriptas.
        </p>

        <div className="border-t border-border">
          {SECTIONS.map((s) => (
            <div key={s.id} className="border-b border-border py-8">
              <h2 className="text-lg font-semibold tracking-tight mb-3">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <Link to="/" className="group inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Volver al inicio
          </Link>
          <span className="mono-label text-[10px]">ÚLTIMA ACTUALIZACIÓN · 2026</span>
        </div>
      </div>
    </section>
  );
}