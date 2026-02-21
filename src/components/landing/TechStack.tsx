import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Plan Starter",
    price: "17.900",
    currency: "COP",
    period: "/mes",
    features: [
      "Hasta 25 productos",
      "Hasta 4 imágenes por producto",
      "Links ilimitados",
      "2 shoppable videos",
    ],
    cta: "Prueba 14 días gratis",
    popular: false,
  },
  {
    name: "Plan Pro",
    price: "22.900",
    currency: "COP",
    period: "/mes",
    features: [
      "Productos ilimitados",
      "Hasta 8 imágenes por producto",
      "Links ilimitados",
      "5 shoppable videos",
    ],
    cta: "Prueba 14 días gratis",
    popular: true,
  },
];

export const TechStack = () => {
  return (
    <section id="precios" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
              Crece sin gastar{" "}
              <span className="font-display italic">de más.</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Mes a mes. Sin contratos largos. Sin cargos por cancelación. Elige el
              plan que se adapte a ti y disfruta de todo lo que ofrece UnClic.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <FadeInItem key={plan.name}>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 relative hover:border-orange/50 transition-colors">
                {plan.popular && (
                  <span className="absolute -top-3 left-8 bg-orange text-white text-xs font-medium px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-forest">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-sm text-gray-500">{plan.currency}</span>
                  <span className="text-4xl font-bold text-forest">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>

                <a
                  href="#"
                  className="mt-6 flex items-center justify-center gap-2 w-full py-3 px-6 text-sm font-medium text-white bg-orange rounded-full hover:bg-orange-dark transition-colors"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-orange shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center text-sm text-orange hover:text-orange-dark font-medium"
                >
                  Ver todas las características
                </a>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};
