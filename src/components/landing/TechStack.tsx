import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "17.900",
    currency: "COP",
    period: "/mes",
    features: [
      "Hasta 25 productos",
      "4 imágenes por producto",
      "Links ilimitados",
      "2 shoppable videos",
      "Soporte por WhatsApp",
    ],
    cta: "Empezar gratis",
    dark: false,
  },
  {
    name: "Pro",
    price: "22.900",
    currency: "COP",
    period: "/mes",
    badge: "Recomendado",
    features: [
      "Productos sin límite",
      "8 imágenes por producto",
      "Links ilimitados",
      "5 videos comprables",
      "Soporte prioritario",
      "Tu propio dominio",
    ],
    cta: "Empezar gratis",
    dark: true,
  },
];

export const TechStack = () => {
  return (
    <section id="precios" className="py-20 md:py-28 bg-uc-warm">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              Precios simples.{" "}
              <span className="font-serif italic text-uc-violet">Sin sorpresas.</span>
            </h2>
            <p className="mt-4 text-uc-gray text-[17px] leading-relaxed">
              Mes a mes, cancela cuando quieras. Prueba todo gratis por 14 días sin dejar tarjeta.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 gap-6 max-w-[700px] mx-auto">
          {plans.map((plan) => (
            <FadeInItem key={plan.name}>
              <div
                className={`relative rounded-2xl p-8 transition-shadow hover:shadow-lg ${
                  plan.dark
                    ? "bg-uc-black text-white"
                    : "bg-white border border-uc-black/[0.06]"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-8 bg-uc-violet text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}

                <p className={`text-sm font-medium ${plan.dark ? "text-white/60" : "text-uc-gray"}`}>
                  {plan.name}
                </p>

                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className={`text-xs ${plan.dark ? "text-white/40" : "text-uc-gray-light"}`}>
                    {plan.currency}
                  </span>
                  <span className="text-[40px] font-semibold tracking-tight leading-none">
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.dark ? "text-white/40" : "text-uc-gray-light"}`}>
                    {plan.period}
                  </span>
                </div>

                <a
                  href="#"
                  className={`mt-7 flex items-center justify-center gap-2 w-full py-3 text-[15px] font-medium rounded-xl transition-colors ${
                    plan.dark
                      ? "bg-uc-violet text-white hover:bg-uc-violet-dark"
                      : "bg-uc-black text-white hover:bg-uc-dark"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 text-[14px] ${
                        plan.dark ? "text-white/70" : "text-uc-gray"
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
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};
