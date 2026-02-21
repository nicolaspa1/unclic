import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { useState } from "react";
import {
  Headphones,
  DollarSign,
  Shield,
  ShoppingBag,
  LayoutGrid,
  Play,
  Globe,
  Lock,
  Smartphone,
  QrCode,
  Instagram,
  FileSpreadsheet,
  Search,
  BarChart3,
  CreditCard,
  Zap,
  ChevronDown,
  ChevronUp,
  Target,
} from "lucide-react";

const trustItems = [
  {
    icon: Headphones,
    title: "Soporte por WhatsApp",
    description:
      "Cuando necesites ayuda, hablarás con un equipo real que te responde rápido y entiende lo que necesitas.",
  },
  {
    icon: DollarSign,
    title: "Garantía de reembolso",
    description:
      "Si no es lo que esperabas, tienes 30 días desde el primer cobro para pedir el reembolso del 100%.",
  },
  {
    icon: Shield,
    title: "Pagos seguros con SSL",
    description:
      "Tu información de pago está protegida con tecnología de encriptación de máxima seguridad.",
  },
];

const allFeatures = [
  { icon: ShoppingBag, title: "Catálogo virtual", description: "Sube productos ilimitados con hasta 8 imágenes por producto." },
  { icon: LayoutGrid, title: "Colecciones", description: "Agrupa productos y organiza tu catálogo." },
  { icon: Play, title: "Shoppable videos", description: "Muestra tus productos en videos y permite una compra directa." },
  { icon: Globe, title: "Links ilimitados", description: "Agrega todos los links que necesitas y déjalos visibles en tu espacio." },
  { icon: Globe, title: "Conecta tu dominio", description: "Conecta tu dominio a tu tienda UnClic y fortalece tu marca." },
  { icon: Lock, title: "Certificado SSL gratuito", description: "Seguridad sin costos extra para tu tienda." },
  { icon: Smartphone, title: "Sitio optimizado para móviles", description: "Diseñada para funcionar y verse bien en cualquier dispositivo." },
  { icon: QrCode, title: "Código QR único", description: "Lleva tráfico desde el mundo físico a tu link de ventas UnClic." },
  { icon: Instagram, title: "Importa Reels y Fotos de IG", description: "Conecta el IG de tu negocio y trae reels y fotos a tu sitio." },
  { icon: FileSpreadsheet, title: "Carga masiva .xls*", description: "¿Tienes muchos productos? Importa fácilmente desde un spreadsheet." },
  { icon: DollarSign, title: "0% de comisiones por venta", description: "No cobramos comisiones por venta. Lo que vendes es tuyo." },
  { icon: Search, title: "Optimización SEO", description: "Haz que tu link sea fácil de encontrar en buscadores." },
  { icon: CreditCard, title: "Métodos de pago manuales", description: "Activa pagos contra entrega o concreta el pago por WhatsApp." },
  { icon: Zap, title: "Métodos de pago automáticos", description: "Automatiza tus pagos con pasarelas como Stripe y Mercado Pago." },
  { icon: Smartphone, title: "Recibe pedidos por WhatsApp", description: "Recibe la notificación de cada pedido al instante." },
  { icon: BarChart3, title: "Analíticas comprensibles", description: "Obtén insights detallados para mejorar el rendimiento de tu espacio." },
  { icon: Target, title: "Pixel para Meta/TikTok", description: "Agrega pixeles para crear anuncios y medir tu rendimiento." },
];

export const ProductsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleFeatures = expanded ? allFeatures : allFeatures.slice(0, 8);

  return (
    <section className="py-20 md:py-28 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {trustItems.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-4">
                  <item.icon className="w-7 h-7 text-orange" />
                </div>
                <h3 className="text-lg font-semibold text-forest mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
              Incluye todo lo que{" "}
              <span className="font-display italic">necesitas</span>
            </h2>
            <p className="mt-3 text-gray-500">y mucho más en camino...</p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleFeatures.map((feature, i) => (
            <FadeInItem key={`${feature.title}-${i}`}>
              <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-sm transition-shadow">
                <feature.icon className="w-5 h-5 text-forest mb-3" />
                <h4 className="text-sm font-semibold text-forest mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <div className="text-center mt-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-orange transition-colors"
          >
            {expanded ? (
              <>
                Ver menos <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Ver más <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
