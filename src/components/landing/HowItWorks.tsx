import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { Link as LinkIcon, Package, Send } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: LinkIcon,
    title: "Elige tu link",
    description: "Escoge un nombre para tu enlace o conecta tu propio dominio personalizado.",
  },
  {
    number: "2",
    icon: Package,
    title: "Agrega tu catálogo",
    description: "Sube tus productos con fotos, precios y descripciones. Organízalos en colecciones.",
  },
  {
    number: "3",
    icon: Send,
    title: "Comparte y vende",
    description: "Compártelo en tus redes y recibe pedidos directamente por WhatsApp.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-uc-warm">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              Tu sitio listo en{" "}
              <span className="font-serif italic text-uc-coral">minutos.</span>
            </h2>
            <p className="mt-4 text-uc-gray text-[17px] leading-relaxed">
              Sin esperar diseñadores ni programadores. Lo haces tú,
              paso a paso, desde tu celular.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <FadeInItem key={step.number}>
              <div className="relative bg-white rounded-2xl p-8 border border-uc-black/[0.04]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-uc-coral text-white text-sm font-semibold">
                    {step.number}
                  </span>
                  <step.icon className="w-5 h-5 text-uc-gray-light" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-semibold text-uc-black mb-2">
                  {step.title}
                </h3>
                <p className="text-uc-gray text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};
