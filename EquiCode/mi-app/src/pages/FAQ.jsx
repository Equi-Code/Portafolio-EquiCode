import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "¿Cuánto cuesta un proyecto?",
    a: "Depende del alcance. Una landing page arranca desde $150 USD, una web profesional desde $300 USD, un e-commerce desde $500 USD y automatizaciones desde $200 USD. Te paso un presupuesto detallado y sin sorpresas después de la primera consulta.",
  },
  {
    q: "¿Cuánto tarda la entrega?",
    a: "Landing pages: 5 a 7 días. Webs corporativas: 2 a 3 semanas. E-commerce: 3 a 5 semanas. Automatizaciones: 1 a 2 semanas. Los tiempos se ajustan al alcance real y se definen antes de empezar.",
  },
  {
    q: "¿Qué tecnologías usás?",
    a: "Frontend con React, JavaScript, HTML5 y CSS3. Backend con Node.js, Express y MongoDB. También trabajo con Vue.js y Firebase. Siempre elijo el stack que mejor se adapta a tu proyecto.",
  },
  {
    q: "¿Ofrecés mantenimiento post-entrega?",
    a: "Sí. Incluyo 30 días de soporte gratuito después de la entrega para ajustes. Después podés contratar un plan mensual de mantenimiento según las necesidades del proyecto.",
  },
  {
    q: "¿Cómo es el proceso de pago?",
    a: "Generalmente 50% al iniciar el proyecto y 50% al entregar. Para proyectos de mayor duración se puede acordar un plan de pagos por hitos. Transferencia, Mercado Pago o cripto.",
  },
  {
    q: "¿Trabajás de forma remota?",
    a: "Sí, trabajo 100% remoto desde Buenos Aires con clientes de cualquier parte del mundo. La comunicación es por WhatsApp, email o videollamada, con actualizaciones constantes.",
  },
  {
    q: "¿El sitio incluye SEO?",
    a: "Sí. Todas mis webs incluyen SEO técnico básico: meta tags, performance optimizada, estructura semántica y Google Analytics. Si necesitás SEO avanzado, lo cotizamos aparte.",
  },
  {
    q: "¿Qué necesitás para empezar?",
    a: "Un brief con tu idea, los objetivos del negocio y cualquier material de branding que tengas (logo, colores, textos). Si no tenés nada de eso, te guío para definirlo en la primera reunión.",
  },
];

export default function FAQ() {
  return (
    <section className="snap-section relative border-t border-border">
      <div className="vignette absolute inset-0 pointer-events-none" />
      <div className="mx-auto max-w-[1100px] px-5 md:px-10 py-20 md:py-28 w-full relative">
        <div className="mb-16 text-center">
          <div className="mono-label mb-4">SECCIÓN · 06 / FAQ</div>
          <h1 className="fluid-h2 font-semibold text-balance">Preguntas frecuentes</h1>
          <p className="mt-6 text-lg text-muted-foreground text-balance max-w-xl mx-auto">
            Todo lo que necesitás saber antes de empezar a trabajar juntos.
          </p>
        </div>

        <Accordion type="single" collapsible className="border-t border-border">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left text-lg md:text-xl font-medium py-6 hover:text-accent transition-colors hover:no-underline min-h-[56px]">
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6 pl-10">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 border-t border-border pt-10 text-center">
          <div className="mono-label mb-4">¿NO ENCONTRÁS TU RESPUESTA?</div>
          <a
            href="https://wa.me/+5491139259252?text=Hola%20Ezequiel%2C%20tengo%20una%20consulta%20que%20no%20est%C3%A1%20en%20el%20FAQ%20%F0%9F%9A%80"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-foreground px-6 py-3.5 min-h-[44px] text-sm font-medium text-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Consultame por WhatsApp
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}