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
    question: "¿Necesito saber programar o diseñar?",
    answer:
      "No. UnClic está diseñada para que crees y administres tu sitio en pocos minutos, directamente desde tu celular.",
  },
  {
    question: "¿Cobran comisiones por venta?",
    answer:
      "No. UnClic no cobra comisiones por las ventas que realices. El 100% de tus ventas son tuyas. Solo pagas el costo de la pasarela de pagos si decides activarla.",
  },
  {
    question: "¿Puedo usar mi propio dominio?",
    answer:
      "Sí. Puedes conectar tu propio dominio personalizado a tu tienda UnClic para fortalecer tu marca y darle un aspecto más profesional.",
  },
  {
    question: "¿Puedo recibir pagos directamente en UnClic?",
    answer:
      "Sí. Puedes activar pasarelas de pago como Mercado Pago o Stripe para recibir pagos automáticos. También puedes recibir pagos contra entrega o coordinar por WhatsApp.",
  },
  {
    question: "¿Cómo funciona el periodo de prueba?",
    answer:
      "Tienes 14 días para probar todas las funcionalidades de UnClic gratis. No necesitas tarjeta de crédito para empezar. Al terminar, puedes elegir el plan que mejor se adapte a ti.",
  },
  {
    question: "¿Cómo funciona la garantía de 30 días?",
    answer:
      "Si no estás satisfecho con UnClic, dentro de los primeros 30 días desde tu primer pago puedes solicitar el reembolso completo del 100%. Sin preguntas.",
  },
];

export const FAQSection = () => {
  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest">
                Preguntas frecuentes
              </h2>
              <p className="mt-4 text-gray-600">
                ¿Tienes más preguntas o simplemente quieres hablar? Escríbenos y
                lo resolvemos juntos.
              </p>
              <a
                href="https://wa.me/573332430037"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: +57 333 2430037
              </a>
            </div>
          </FadeIn>

          <FadeIn>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-forest font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
