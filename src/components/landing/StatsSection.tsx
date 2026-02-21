import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { ShoppingCart, Smartphone, DollarSign } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [ShoppingCart, Smartphone, DollarSign];

export const StatsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="funciones" className="py-20 md:py-28">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              {t.stats.title}{" "}
              <span className="font-serif italic text-uc-violet">{t.stats.titleAccent}</span>
            </h2>
            <p className="mt-4 text-uc-gray text-[17px] leading-relaxed">
              {t.stats.subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-5">
          {t.stats.features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <FadeInItem key={i}>
                <div className="bg-uc-warm rounded-2xl p-8 hover:bg-uc-warm-mid transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-5">
                    <Icon className="w-5 h-5 text-uc-violet" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[18px] font-semibold text-uc-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-uc-gray text-[15px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
};
