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
    description:
      "Agrupa tus productos por temas, estilos o categorías para que tus clientes naveguen fácil y encuentren lo que buscan.",
    color: "bg-amber-50",
  },
  {
    icon: Play,
    title: "Shoppable videos",
    description:
      "Muestra tus productos en acción y deja que te compren directo desde el video. Puedes traer fácilmente tus Reels desde Instagram.",
    color: "bg-rose-50",
  },
  {
    icon: CreditCard,
    title: "Opciones de pago",
    description:
      "Acepta pagos por Mercado Pago, contra entrega o coordinando por WhatsApp, según lo que más se acomode a ti y a tus clientes.",
    color: "bg-green-50",
  },
  {
    icon: MessageCircle,
    title: "Pedidos por WhatsApp",
    description:
      "Recibe tus pedidos directamente a tu WhatsApp y mantén una comunicación cercana con tus clientes.",
    color: "bg-emerald-50",
  },
  {
    icon: FileText,
    title: "Acerca de",
    description:
      "Un espacio para contar tu historia, mostrar lo que haces y conectar desde lo real con las personas que te compran.",
    color: "bg-orange-50",
  },
  {
    icon: LinkIcon,
    title: "Links",
    description:
      "Agrega enlaces a tus redes sociales o cualquier otro contenido que quieras compartir con tus clientes.",
    color: "bg-purple-50",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
              Todo lo que necesitas para{" "}
              <span className="font-display italic">tu sitio</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Permite que tus clientes vean tus productos, hagan preguntas y te
              compren fácil, todo desde un solo lugar.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FadeInItem key={feature.title}>
              <div className={`${feature.color} rounded-2xl p-6 h-full transition-shadow hover:shadow-md`}>
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
                  <feature.icon className="w-5 h-5 text-forest" />
                </div>
                <h3 className="text-lg font-semibold text-forest mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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
