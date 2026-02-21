import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { Link as LinkIcon, Package, Send } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: LinkIcon,
    title: "Elige tu link único",
    description:
      "Escoge un nombre para tu enlace o conecta tu propio dominio.",
  },
  {
    number: "2",
    icon: Package,
    title: "Agrega tu marca y catálogo",
    description:
      "Agrega tu marca y catálogo a nuestro diseño probado y listo para vender.",
  },
  {
    number: "3",
    icon: Send,
    title: "¡Cuéntale al mundo!",
    description:
      "¡Tu link está listo! Compártelo y empieza a recibir pedidos por WhatsApp.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
              Tu sitio listo en{" "}
              <span className="font-display italic">días, no meses.</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Tener tu propio sitio no debería ser complicado. En lugar de perder
              tiempo buscando herramientas o esperando ayuda, aquí lo haces tú,
              paso a paso y en minutos.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <FadeInItem key={step.number}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange text-white font-bold text-lg mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-forest mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 aspect-[4/3] flex items-center justify-center">
                  <step.icon className="w-16 h-16 text-orange/30" />
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};
