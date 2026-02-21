import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "Elige tu link",
    description: "Escoge un nombre para tu enlace o conecta tu propio dominio.",
  },
  {
    number: "02",
    title: "Agrega tu catálogo",
    description: "Sube tus productos con fotos, precios y descripciones.",
  },
  {
    number: "03",
    title: "Comparte y vende",
    description: "Compártelo en tus redes y recibe pedidos por WhatsApp.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-apple-light">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-apple-black leading-[1.08]">
              Listo en minutos.
              <br />
              <span className="text-apple-gray">No en meses.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <FadeInItem key={step.number}>
              <div className="bg-white rounded-2xl p-8">
                <span className="text-[48px] font-bold text-apple-light leading-none select-none">
                  {step.number}
                </span>
                <h3 className="text-[21px] font-semibold text-apple-black mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-apple-gray text-[15px] leading-relaxed">
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
