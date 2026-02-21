import { FadeIn } from "@/components/FadeIn";
import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito saber de tecnología?",
    answer:
      "Para nada. Si sabes subir una foto a Instagram, sabes usar UnClic. Todo se hace desde el celular, sin tocar una línea de código.",
  },
  {
    question: "¿Se quedan con parte de mis ventas?",
    answer:
      "Nunca. No cobramos comisiones por venta. Pagas un plan fijo mensual y listo. Si activas una pasarela de pago, el costo de la pasarela corre aparte.",
  },
  {
    question: "¿Puedo usar mi dominio propio?",
    answer:
      "Claro. Conectas tunegocio.com en un par de clics y tu tienda se ve totalmente profesional bajo tu marca.",
  },
  {
    question: "¿Cómo me pagan mis clientes?",
    answer:
      "Como prefieras: podés activar Mercado Pago o Stripe para cobro automático, o simplemente coordinar el pago por WhatsApp o contra entrega.",
  },
  {
    question: "¿Qué pasa después de los 14 días gratis?",
    answer:
      "Eliges tu plan y seguís vendiendo. No pedimos tarjeta para la prueba, así que no hay cargos sorpresa. Si no te convence, simplemente no continúas.",
  },
  {
    question: "¿Y si no me gusta después de pagar?",
    answer:
      "Tienes 30 días desde tu primer pago para pedir el reembolso completo. Sin preguntas, sin vueltas.",
  },
];

export const FAQSection = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-uc-warm">
      <div className="max-w-[1040px] mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <FadeIn>
              <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-uc-black leading-[1.08]">
                ¿Dudas?{" "}
                <span className="font-serif italic text-uc-violet">Normal.</span>
              </h2>
              <p className="mt-4 text-uc-gray text-[15px] leading-relaxed">
                Si no encuentras tu respuesta acá, escríbenos. Contestamos rápido y en español.
              </p>
              <a
                href="https://wa.me/573332430037"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-[14px] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: +57 333 243 0037
              </a>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-uc-black/[0.08] py-0.5"
                  >
                    <AccordionTrigger className="text-left text-[16px] text-uc-black font-semibold hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-uc-gray text-[15px] leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
