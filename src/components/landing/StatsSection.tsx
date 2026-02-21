import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { ShoppingCart, Smartphone, DollarSign } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Recibe pedidos al instante",
    description:
      "Comparte tu link donde quieras y recibe cada pedido directo a tu WhatsApp.",
  },
  {
    icon: Smartphone,
    title: "Gestiona desde tu celular",
    description:
      "Publica productos, actualiza precios y administra todo desde tu teléfono.",
  },
  {
    icon: DollarSign,
    title: "0% de comisiones",
    description:
      "Tus ganancias son 100% tuyas. Solo pagas tu plan mensual, nada más.",
  },
];

export const StatsSection = () => {
  return (
    <section id="funciones" className="py-20 md:py-28">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              Una ventana a todo{" "}
              <span className="font-serif italic text-uc-coral">tu negocio.</span>
            </h2>
            <p className="mt-4 text-uc-gray text-[17px] leading-relaxed">
              Tu showroom online con catálogo, colecciones y links.
              Un sitio completo donde tus clientes exploran y compran fácil.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-5">
          {features.map((feature) => (
            <FadeInItem key={feature.title}>
              <div className="bg-uc-warm rounded-2xl p-8 hover:bg-uc-warm-mid transition-colors">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-5">
                  <feature.icon className="w-5 h-5 text-uc-coral" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-semibold text-uc-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-uc-gray text-[15px] leading-relaxed">
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
