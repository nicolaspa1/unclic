import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { ShoppingCart, Smartphone, DollarSign } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Ventas sin intermediarios",
    description: "Tu cliente ve, elige y te escribe. Sin carritos abandonados ni procesos largos.",
  },
  {
    icon: Smartphone,
    title: "Control total desde el bolsillo",
    description: "Sube productos, cambia precios, revisa pedidos. Todo desde tu celular, donde estés.",
  },
  {
    icon: DollarSign,
    title: "Cada peso es tuyo",
    description: "No tocamos tus ventas. Sin comisiones ocultas, sin porcentajes, sin letra pequeña.",
  },
];

export const StatsSection = () => {
  return (
    <section id="funciones" className="py-20 md:py-28">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              Tu marca, tu espacio,{" "}
              <span className="font-serif italic text-uc-violet">tus reglas.</span>
            </h2>
            <p className="mt-4 text-uc-gray text-[17px] leading-relaxed">
              Un espacio propio para mostrar lo que haces, con tu estilo.
              Catálogo, colecciones, links — todo donde tus clientes te encuentran.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-5">
          {features.map((feature) => (
            <FadeInItem key={feature.title}>
              <div className="bg-uc-warm rounded-2xl p-8 hover:bg-uc-warm-mid transition-colors">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-5">
                  <feature.icon className="w-5 h-5 text-uc-violet" strokeWidth={1.5} />
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
