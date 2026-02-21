import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import {
  LayoutGrid,
  Play,
  CreditCard,
  MessageCircle,
  FileText,
  Link as LinkIcon,
} from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Colecciones",
    description: "Agrupa productos por categorías para que tus clientes naveguen fácil.",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
  },
  {
    icon: Play,
    title: "Shoppable videos",
    description: "Muestra productos en acción. Importa tus Reels y permite compras directas.",
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
  },
  {
    icon: CreditCard,
    title: "Opciones de pago",
    description: "Mercado Pago, contra entrega o WhatsApp. Tú decides cómo cobrar.",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
  },
  {
    icon: MessageCircle,
    title: "Pedidos por WhatsApp",
    description: "Cada pedido llega directo a tu WhatsApp, al instante.",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
  },
  {
    icon: FileText,
    title: "Tu historia",
    description: "Cuenta quién eres y conecta con las personas que te compran.",
    bg: "bg-sky-50",
    iconBg: "bg-sky-100",
  },
  {
    icon: LinkIcon,
    title: "Links",
    description: "Agrega tus redes sociales y cualquier enlace que quieras compartir.",
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              Todo lo que necesitas para{" "}
              <span className="font-serif italic text-uc-coral">tu sitio.</span>
            </h2>
            <p className="mt-4 text-uc-gray text-[17px] leading-relaxed">
              Que tus clientes vean tus productos, pregunten y te compren fácil.
              Todo desde un solo lugar.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <FadeInItem key={feature.title}>
              <div className={`${feature.bg} rounded-2xl p-7 h-full transition-all hover:scale-[1.02] hover:shadow-sm`}>
                <div className={`w-10 h-10 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-5 h-5 text-uc-black" strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-semibold text-uc-black mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-uc-gray text-[14px] leading-relaxed">
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
