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
    description: "Agrupa productos por categorías para que tus clientes encuentren lo que buscan.",
  },
  {
    icon: Play,
    title: "Shoppable videos",
    description: "Muestra productos en acción. Importa tus Reels y permite compras directas.",
  },
  {
    icon: CreditCard,
    title: "Opciones de pago",
    description: "Mercado Pago, contra entrega o coordinación por WhatsApp. Tú decides.",
  },
  {
    icon: MessageCircle,
    title: "Pedidos por WhatsApp",
    description: "Recibe cada pedido directo a tu WhatsApp, al instante.",
  },
  {
    icon: FileText,
    title: "Tu historia",
    description: "Un espacio para contar quién eres y conectar con quienes te compran.",
  },
  {
    icon: LinkIcon,
    title: "Links",
    description: "Agrega tus redes sociales y cualquier enlace que quieras compartir.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-apple-black leading-[1.08]">
              Todo lo que necesitas.
              <br />
              <span className="text-apple-gray">Nada que no.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <FadeInItem key={feature.title}>
              <div className="group bg-apple-light rounded-2xl p-7 transition-colors hover:bg-gray-100/80">
                <feature.icon
                  className="w-7 h-7 text-apple-black mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-[17px] font-semibold text-apple-black mb-1.5">
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
