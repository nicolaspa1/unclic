import { FadeIn } from "@/components/FadeIn";
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
      "No. UnClic está diseñado para que crees y administres tu sitio en minutos, directamente desde tu celular. No se requiere ningún conocimiento técnico.",
  },
  {
    question: "¿Cobran comisiones por venta?",
    answer:
      "No. El 100% de tus ventas son tuyas. Solo pagas tu plan mensual y el costo de la pasarela de pagos si decides activarla.",
  },
  {
    question: "¿Puedo usar mi propio dominio?",
    answer:
      "Sí. Puedes conectar tu dominio personalizado para darle un aspecto más profesional a tu tienda.",
  },
  {
    question: "¿Cómo recibo los pagos?",
    answer:
      "Puedes activar Mercado Pago o Stripe para pagos automáticos, o recibir pagos contra entrega y coordinar por WhatsApp.",
  },
  {
    question: "¿Cómo funciona la prueba gratuita?",
    answer:
      "Tienes 14 días para probar todas las funcionalidades sin necesidad de tarjeta de crédito. Al terminar, eliges el plan que prefieras.",
  },
  {
    question: "¿Tienen garantía de reembolso?",
    answer:
      "Sí. Si no estás satisfecho, dentro de los primeros 30 días desde tu primer pago puedes solicitar el reembolso completo.",
  },
];

export const FAQSection = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-apple-light">
      <div className="max-w-[680px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-apple-black leading-[1.08]">
              Preguntas frecuentes.
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-black/[0.08] py-1"
              >
                <AccordionTrigger className="text-left text-[17px] text-apple-black font-semibold hover:no-underline py-5 [&[data-state=open]]:text-apple-black">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-apple-gray text-[15px] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
};
