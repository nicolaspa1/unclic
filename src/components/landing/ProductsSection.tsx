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
import { useLanguage } from "@/i18n/LanguageContext";

const trustIcons = [Headphones, DollarSign, Shield];

const featureIcons = [
  ShoppingBag, LayoutGrid, Play, Globe, Globe, Lock, Smartphone, QrCode,
  Instagram, FileSpreadsheet, DollarSign, Search, CreditCard, Zap, BarChart3, Target,
];

export const ProductsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();
  const visible = expanded ? t.products.features : t.products.features.slice(0, 8);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {t.products.trust.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <div key={i} className="flex items-start gap-4 p-6 bg-uc-violet-soft rounded-2xl">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <Icon className="w-5 h-5 text-uc-violet" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-uc-black">{item.title}</h3>
                    <p className="text-[13px] text-uc-gray mt-0.5">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-14">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              {t.products.title}{" "}
              <span className="font-serif italic text-uc-violet">{t.products.titleAccent}</span>
            </h2>
            <p className="mt-2 text-uc-gray text-[17px]">{t.products.subtitle}</p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visible.map((f, i) => {
            const Icon = featureIcons[i] || ShoppingBag;
            return (
              <FadeInItem key={`${f.title}-${i}`}>
                <div className="border border-uc-black/[0.06] rounded-2xl p-5 hover:bg-uc-warm transition-colors group">
                  <Icon className="w-5 h-5 text-uc-black mb-3 group-hover:text-uc-violet transition-colors" strokeWidth={1.5} />
                  <h4 className="text-[14px] font-semibold text-uc-black mb-0.5">{f.title}</h4>
                  <p className="text-[12px] text-uc-gray leading-relaxed">{f.description}</p>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>

        {t.products.features.length > 8 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-uc-violet text-[14px] font-medium hover:text-uc-violet-dark transition-colors"
            >
              {expanded ? (
                <>{t.products.showLess} <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>{t.products.showMore} <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
