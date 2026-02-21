import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { useState } from "react";
import {
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
  DollarSign,
  Target,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const allFeatures = [
  { icon: ShoppingBag, title: "Catálogo virtual", description: "Productos ilimitados con hasta 8 imágenes cada uno." },
  { icon: LayoutGrid, title: "Colecciones", description: "Agrupa y organiza tu catálogo." },
  { icon: Play, title: "Shoppable videos", description: "Videos con compra directa." },
  { icon: Globe, title: "Links ilimitados", description: "Todos los enlaces que necesites." },
  { icon: Globe, title: "Dominio propio", description: "Conecta tu dominio y fortalece tu marca." },
  { icon: Lock, title: "SSL gratuito", description: "Seguridad sin costo extra." },
  { icon: Smartphone, title: "Optimizado para móviles", description: "Se ve perfecto en cualquier dispositivo." },
  { icon: QrCode, title: "Código QR", description: "Del mundo físico a tu tienda online." },
  { icon: Instagram, title: "Importa de Instagram", description: "Trae reels y fotos directo a tu sitio." },
  { icon: FileSpreadsheet, title: "Carga masiva", description: "Importa productos desde un archivo .xls." },
  { icon: DollarSign, title: "0% comisiones", description: "Lo que vendes es 100% tuyo." },
  { icon: Search, title: "SEO optimizado", description: "Fácil de encontrar en buscadores." },
  { icon: CreditCard, title: "Pagos manuales", description: "Contra entrega o coordinación por WhatsApp." },
  { icon: Zap, title: "Pagos automáticos", description: "Stripe, Mercado Pago y más." },
  { icon: BarChart3, title: "Analíticas", description: "Insights para mejorar tu rendimiento." },
  { icon: Target, title: "Pixel Meta/TikTok", description: "Mide tus anuncios con precisión." },
];

export const ProductsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? allFeatures : allFeatures.slice(0, 8);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-apple-black leading-[1.08]">
              Incluye todo.
            </h2>
            <p className="mt-2 text-apple-gray text-lg font-light">
              Y mucho más en camino.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visible.map((f, i) => (
            <FadeInItem key={`${f.title}-${i}`}>
              <div className="border border-black/[0.06] rounded-2xl p-5 hover:bg-apple-light/50 transition-colors">
                <f.icon className="w-5 h-5 text-apple-black mb-3" strokeWidth={1.5} />
                <h4 className="text-[15px] font-semibold text-apple-black mb-1">{f.title}</h4>
                <p className="text-xs text-apple-gray leading-relaxed">{f.description}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {allFeatures.length > 8 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-apple-blue text-sm font-medium hover:underline"
            >
              {expanded ? (
                <>Ver menos <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Ver todo <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
