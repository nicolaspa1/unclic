import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";

const reviews = [
  {
    name: "Luz Prada",
    role: "Creadora de @notiz",
    quote:
      "En una tarde subí todo mi catálogo y empecé a vender. La mejor inversión que he hecho para mi emprendimiento.",
    initials: "LP",
  },
  {
    name: "Lucía Mederos",
    role: "Creadora de @universo-lume",
    quote:
      "Era la solución que necesitaba. La idea del micrositio es genial ya que una página web suele ser muy costosa.",
    initials: "LM",
  },
  {
    name: "Camilo Restrepo",
    role: "Emprendedor",
    quote:
      "Mis clientes ahora pueden ver todo mi catálogo y hacer pedidos sin que yo tenga que mandar fotos una por una.",
    initials: "CR",
  },
];

export const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-apple-light">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-apple-black leading-[1.08]">
              Miles ya venden
              <br />
              <span className="text-apple-gray">con UnClic.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <FadeInItem key={review.name}>
              <div className="bg-white rounded-2xl p-7 h-full flex flex-col">
                <p className="text-[15px] text-apple-black/80 leading-relaxed flex-1">
                  "{review.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-9 h-9 bg-apple-black rounded-full flex items-center justify-center text-xs font-semibold text-white">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-apple-black">{review.name}</p>
                    <p className="text-xs text-apple-gray">{review.role}</p>
                  </div>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};
