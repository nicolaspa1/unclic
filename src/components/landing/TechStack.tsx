import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { Check } from "lucide-react";

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
    cta: "Prueba 14 días gratis",
    highlight: false,
  },
  {
    name: "Pro",
    price: "22.900",
    currency: "COP",
    period: "/mes",
    features: [
      "Productos ilimitados",
      "8 imágenes por producto",
      "Links ilimitados",
      "5 shoppable videos",
      "Soporte prioritario",
      "Dominio personalizado",
    ],
    cta: "Prueba 14 días gratis",
    highlight: true,
  },
];

export const TechStack = () => {
  return (
    <section id="precios" className="py-20 md:py-28 bg-apple-light">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-apple-black leading-[1.08]">
              Elige tu plan.
            </h2>
            <p className="mt-4 text-apple-gray text-lg font-light">
              Sin contratos. Sin cargos por cancelación. 14 días gratis.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 gap-5 max-w-[720px] mx-auto">
          {plans.map((plan) => (
            <FadeInItem key={plan.name}>
              <div
                className={`rounded-2xl p-8 ${
                  plan.highlight
                    ? "bg-apple-black text-white"
                    : "bg-white border border-black/[0.08]"
                }`}
              >
                <p
                  className={`text-sm font-medium ${
                    plan.highlight ? "text-white/60" : "text-apple-gray"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span
                    className={`text-xs ${
                      plan.highlight ? "text-white/50" : "text-apple-gray"
                    }`}
                  >
                    {plan.currency}
                  </span>
                  <span className="text-[40px] font-semibold tracking-tight leading-none">
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlight ? "text-white/50" : "text-apple-gray"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <a
                  href="#"
                  className={`mt-6 flex items-center justify-center w-full py-3 text-[15px] font-medium rounded-xl transition-colors ${
                    plan.highlight
                      ? "bg-apple-blue text-white hover:bg-apple-blue-hover"
                      : "bg-apple-blue text-white hover:bg-apple-blue-hover"
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 text-sm ${
                        plan.highlight ? "text-white/80" : "text-apple-gray"
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 shrink-0 ${
                          plan.highlight ? "text-apple-blue" : "text-apple-blue"
                        }`}
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
