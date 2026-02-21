import { FadeIn } from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-28 pb-4 md:pt-40 md:pb-8">
      <div className="max-w-[1040px] mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-uc-violet font-medium text-sm tracking-wide mb-4">
            {t.hero.badge}
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="text-[42px] sm:text-[56px] lg:text-[76px] font-semibold tracking-tight text-uc-black leading-[1.04]">
            {t.hero.titleLine1}
            <br />
            <span className="font-serif italic font-medium text-uc-violet">
              {t.hero.titleLine2}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-6 text-[17px] sm:text-lg text-uc-gray max-w-[540px] mx-auto leading-relaxed">
            {t.hero.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-white bg-uc-violet rounded-full hover:bg-uc-violet-dark transition-colors shadow-[0_2px_16px_rgba(124,58,237,0.3)]"
            >
              {t.hero.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center text-[15px] font-medium text-uc-black hover:text-uc-violet transition-colors"
            >
              {t.hero.secondary}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
