import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const planPrices = [
  { price: "17.900", currency: "COP", period: "/mes", dark: false },
  { price: "22.900", currency: "COP", period: "/mes", dark: true },
];

export const TechStack = () => {
  const { t } = useLanguage();

  return (
    <section id="precios" className="py-20 md:py-28 bg-uc-warm">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              {t.pricing.title}{" "}
              <span className="font-serif italic text-uc-violet">{t.pricing.titleAccent}</span>
            </h2>
            <p className="mt-4 text-uc-gray text-[17px] leading-relaxed">
              {t.pricing.subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 gap-6 max-w-[700px] mx-auto">
          {t.pricing.plans.map((plan, i) => {
            const meta = planPrices[i];
            return (
              <FadeInItem key={i}>
                <div
                  className={`relative rounded-2xl p-8 transition-shadow hover:shadow-lg ${
                    meta.dark
                      ? "bg-uc-black text-white"
                      : "bg-white border border-uc-black/[0.06]"
                  }`}
                >
                  {i === 1 && (
                    <span className="absolute -top-3 left-8 bg-uc-violet text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                      {t.pricing.recommended}
                    </span>
                  )}

                  <p className={`text-sm font-medium ${meta.dark ? "text-white/60" : "text-uc-gray"}`}>
                    {plan.name}
                  </p>

                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className={`text-xs ${meta.dark ? "text-white/40" : "text-uc-gray-light"}`}>
                      {meta.currency}
                    </span>
                    <span className="text-[40px] font-semibold tracking-tight leading-none">
                      {meta.price}
                    </span>
                    <span className={`text-sm ${meta.dark ? "text-white/40" : "text-uc-gray-light"}`}>
                      {meta.period}
                    </span>
                  </div>

                  <a
                    href="#"
                    className={`mt-7 flex items-center justify-center gap-2 w-full py-3 text-[15px] font-medium rounded-xl transition-colors ${
                      meta.dark
                        ? "bg-uc-violet text-white hover:bg-uc-violet-dark"
                        : "bg-uc-black text-white hover:bg-uc-dark"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <ul className="mt-7 space-y-3">
                    {plan.features.map((feature, j) => (
                      <li
                        key={j}
                        className={`flex items-center gap-3 text-[14px] ${
                          meta.dark ? "text-white/70" : "text-uc-gray"
                        }`}
                      >
                        <Check
                          className="w-4 h-4 shrink-0 text-uc-violet"
                          strokeWidth={2}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
};
