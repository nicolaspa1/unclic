import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { ShoppingCart, Smartphone, DollarSign } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Recibe pedidos al instante",
    description:
      "Comparte tu link y recibe pedidos directo por WhatsApp. Sin intermediarios.",
  },
  {
    icon: Smartphone,
    title: "Gestiona desde tu celular",
    description:
      "Publica productos, actualiza precios y administra tu catálogo desde donde estés.",
  },
  {
    icon: DollarSign,
    title: "Sin comisiones",
    description:
      "Tus ganancias son 100% tuyas. Solo pagas tu plan mensual.",
  },
];

export const StatsSection = () => {
  return (
    <section id="funciones" className="py-20 md:py-28">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[600px] mx-auto">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-apple-black leading-[1.08]">
              Una ventana a todo
              <br />
              <span className="text-apple-gray">tu negocio.</span>
            </h2>
            <p className="mt-4 text-apple-gray text-lg font-light leading-relaxed">
              Tu showroom online con catálogo, colecciones y links.
              Todo en un solo lugar.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((feature) => (
            <FadeInItem key={feature.title}>
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-apple-light rounded-2xl mb-5">
                  <feature.icon className="w-6 h-6 text-apple-black" strokeWidth={1.5} />
                </div>
                <h3 className="text-[19px] font-semibold text-apple-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-apple-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};
