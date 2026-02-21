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
  { icon: Headphones, title: "Soporte humano", description: "Te responde gente real, por WhatsApp, en minutos." },
  { icon: DollarSign, title: "30 días de garantía", description: "No te convence, te devolvemos todo. Sin preguntas." },
  { icon: Shield, title: "Transacciones protegidas", description: "Certificado SSL incluido. Tu dinero y datos, seguros." },
];

const allFeatures = [
  { icon: ShoppingBag, title: "Catálogo completo", description: "Sube todo lo que vendes con hasta 8 fotos por producto." },
  { icon: LayoutGrid, title: "Colecciones", description: "Clasifica por categoría, estilo o temporada." },
  { icon: Play, title: "Videos comprables", description: "De verlo a comprarlo en un toque." },
  { icon: Globe, title: "Links sin límite", description: "Agrega cuantos enlaces necesites." },
  { icon: Globe, title: "Tu dominio", description: "Usa tunombre.com para más credibilidad." },
  { icon: Lock, title: "SSL incluido", description: "Candadito verde gratis, siempre." },
  { icon: Smartphone, title: "Pensado para el celular", description: "Se ve perfecto en cualquier pantalla." },
  { icon: QrCode, title: "Código QR", description: "Lleva clientes del mundo real a tu tienda." },
  { icon: Instagram, title: "Conexión con Instagram", description: "Trae tus reels y fotos en un clic." },
  { icon: FileSpreadsheet, title: "Carga masiva", description: "Muchos productos? Súbelos desde Excel." },
  { icon: DollarSign, title: "Cero comisiones", description: "Vendiste $100, te quedas con $100." },
  { icon: Search, title: "SEO listo", description: "Que te encuentren buscando en Google." },
  { icon: CreditCard, title: "Pagos flexibles", description: "Efectivo, transferencia, como acuerden." },
  { icon: Zap, title: "Cobro automático", description: "Stripe y Mercado Pago integrados." },
  { icon: BarChart3, title: "Métricas claras", description: "Entiende qué funciona y qué mejorar." },
  { icon: Target, title: "Pixels de tracking", description: "Conecta Meta y TikTok Ads fácil." },
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
              <div key={item.title} className="flex items-start gap-4 p-6 bg-uc-violet-soft rounded-2xl">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <item.icon className="w-5 h-5 text-uc-violet" strokeWidth={1.5} />
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
              Hecho para que vendas{" "}
              <span className="font-serif italic text-uc-violet">más.</span>
            </h2>
            <p className="mt-2 text-uc-gray text-[17px]">Todo incluido. Y seguimos sumando.</p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visible.map((f, i) => (
            <FadeInItem key={`${f.title}-${i}`}>
              <div className="border border-uc-black/[0.06] rounded-2xl p-5 hover:bg-uc-warm transition-colors group">
                <f.icon className="w-5 h-5 text-uc-black mb-3 group-hover:text-uc-violet transition-colors" strokeWidth={1.5} />
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
              className="inline-flex items-center gap-1.5 text-uc-violet text-[14px] font-medium hover:text-uc-violet-dark transition-colors"
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
