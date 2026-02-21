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
  Headphones,
  Shield,
} from "lucide-react";

const trustItems = [
  { icon: Headphones, title: "Soporte por WhatsApp", description: "Un equipo real que responde rápido." },
  { icon: DollarSign, title: "Garantía de reembolso", description: "30 días para pedir tu 100% de vuelta." },
  { icon: Shield, title: "Pagos seguros con SSL", description: "Encriptación de máxima seguridad." },
];

const allFeatures = [
  { icon: ShoppingBag, title: "Catálogo virtual", description: "Productos ilimitados, hasta 8 fotos cada uno." },
  { icon: LayoutGrid, title: "Colecciones", description: "Agrupa y organiza tu catálogo." },
  { icon: Play, title: "Shoppable videos", description: "Videos con compra directa." },
  { icon: Globe, title: "Links ilimitados", description: "Todos los enlaces que necesites." },
  { icon: Globe, title: "Dominio propio", description: "Conecta tu dominio personalizado." },
  { icon: Lock, title: "SSL gratuito", description: "Seguridad incluida sin costo." },
  { icon: Smartphone, title: "Diseño mobile-first", description: "Perfecto en cualquier dispositivo." },
  { icon: QrCode, title: "Código QR", description: "Del mundo físico a tu tienda online." },
  { icon: Instagram, title: "Importa de Instagram", description: "Trae reels y fotos a tu sitio." },
  { icon: FileSpreadsheet, title: "Carga masiva", description: "Importa desde archivos .xls." },
  { icon: DollarSign, title: "0% comisiones", description: "Lo que vendes es 100% tuyo." },
  { icon: Search, title: "SEO optimizado", description: "Fácil de encontrar en Google." },
  { icon: CreditCard, title: "Pagos manuales", description: "Contra entrega o coordinación." },
  { icon: Zap, title: "Pagos automáticos", description: "Stripe, Mercado Pago y más." },
  { icon: BarChart3, title: "Analíticas", description: "Insights de tu rendimiento." },
  { icon: Target, title: "Pixel Meta/TikTok", description: "Mide tus anuncios con precisión." },
];

export const ProductsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? allFeatures : allFeatures.slice(0, 8);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {trustItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-6 bg-uc-coral-soft rounded-2xl">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <item.icon className="w-5 h-5 text-uc-coral" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-uc-black">{item.title}</h3>
                  <p className="text-[13px] text-uc-gray mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-14">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              Incluye{" "}
              <span className="font-serif italic text-uc-coral">todo.</span>
            </h2>
            <p className="mt-2 text-uc-gray text-[17px]">Y mucho más en camino.</p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visible.map((f, i) => (
            <FadeInItem key={`${f.title}-${i}`}>
              <div className="border border-uc-black/[0.06] rounded-2xl p-5 hover:bg-uc-warm transition-colors group">
                <f.icon className="w-5 h-5 text-uc-black mb-3 group-hover:text-uc-coral transition-colors" strokeWidth={1.5} />
                <h4 className="text-[14px] font-semibold text-uc-black mb-0.5">{f.title}</h4>
                <p className="text-[12px] text-uc-gray leading-relaxed">{f.description}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {allFeatures.length > 8 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-uc-coral text-[14px] font-medium hover:text-uc-coral-dark transition-colors"
            >
              {expanded ? (
                <>Ver menos <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Ver todas las funciones <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
