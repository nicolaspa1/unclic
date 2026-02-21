import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { Link as LinkIcon, Package, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [LinkIcon, Package, Send];

export const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-uc-warm">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              {t.howItWorks.title}{" "}
              <span className="font-serif italic text-uc-violet">{t.howItWorks.titleAccent}</span>
            </h2>
            <p className="mt-4 text-uc-gray text-[17px] leading-relaxed">
              {t.howItWorks.subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-6">
          {t.howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <FadeInItem key={i}>
                <div className="relative bg-white rounded-2xl p-8 border border-uc-black/[0.04]">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-uc-violet text-white text-sm font-semibold">
                      {i + 1}
                    </span>
                    <Icon className="w-5 h-5 text-uc-gray-light" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[18px] font-semibold text-uc-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-uc-gray text-[15px] leading-relaxed">
                    {step.description}
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
