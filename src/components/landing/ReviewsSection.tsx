import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Luz Prada",
    handle: "@notiz",
    role: "Creadora",
    quote:
      "En una tarde subí todo mi catálogo y empecé a vender. La mejor inversión que he hecho para mi emprendimiento.",
    avatar: "LP",
  },
  {
    name: "Lucía Mederos",
    handle: "@universo-lume",
    role: "Creadora",
    quote:
      "Gracias UnClic. Era la solución que necesitaba para mi emprendimiento... La idea del micrositio es genial ya que suele ser muy costoso tener una página web y UnClic te da esa posibilidad.",
    avatar: "LM",
  },
  {
    name: "Camilo Restrepo",
    handle: "@camilostore",
    role: "Emprendedor",
    quote:
      "Mis clientes ahora pueden ver todo mi catálogo y hacer pedidos sin que yo tenga que mandar fotos una por una. Un cambio total para mi negocio.",
    avatar: "CR",
  },
];

export const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-warm-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
              Por qué elegir{" "}
              <span className="font-display italic">UnClic</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Trabajamos para que cada parte de tu experiencia sea exactamente
              como necesitas que sea.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <FadeInItem key={review.name}>
              <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
                <p className="text-gray-600 leading-relaxed flex-1">
                  "{review.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-sm font-semibold text-purple-700">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-forest">{review.name}</p>
                      <p className="text-xs text-gray-500">
                        {review.role} de {review.handle}
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-xs text-orange hover:text-orange-dark font-medium"
                  >
                    Visitar link <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};
