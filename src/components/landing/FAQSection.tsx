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
    question: "¿Necesito saber programar?",
    answer:
      "No. UnClic está diseñado para que crees y administres tu sitio en minutos, directamente desde tu celular. No necesitas conocimientos técnicos.",
  },
  {
    question: "¿Cobran comisiones por venta?",
    answer:
      "No. El 100% de tus ventas son tuyas. Solo pagas tu plan mensual y, si la activas, el costo de la pasarela de pagos.",
  },
  {
    question: "¿Puedo usar mi propio dominio?",
    answer:
      "Sí. Puedes conectar tu dominio personalizado para darle un aspecto más profesional a tu tienda.",
  },
  {
    question: "¿Cómo recibo los pagos?",
    answer:
      "Puedes activar Mercado Pago o Stripe para pagos automáticos, o coordinar pagos contra entrega y por WhatsApp.",
  },
  {
    question: "¿Cómo funciona la prueba gratuita?",
    answer:
      "Tienes 14 días para probar todas las funcionalidades sin tarjeta de crédito. Al terminar, eliges tu plan.",
  },
  {
    question: "¿Tienen garantía de reembolso?",
    answer:
      "Sí. Dentro de los primeros 30 días desde tu primer pago puedes solicitar el reembolso completo del 100%.",
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
                Preguntas{" "}
                <span className="font-serif italic text-uc-coral">frecuentes.</span>
              </h2>
              <p className="mt-4 text-uc-gray text-[15px] leading-relaxed">
                ¿Tienes más preguntas? Escríbenos y lo resolvemos juntos.
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
