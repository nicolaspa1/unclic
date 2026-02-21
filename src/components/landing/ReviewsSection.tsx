import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Valentina Ríos",
    role: "Fundadora de @vale.accesorios",
    quote:
      "Antes mandaba fotos por WhatsApp una por una. Ahora mando un link y mis clientes eligen solos. Me ahorré horas al día.",
    initials: "VR",
    bg: "bg-violet-100",
    text: "text-violet-700",
  },
  {
    name: "Andrés Moreno",
    role: "Creador de @andres.leather",
    quote:
      "Pensé que necesitaba una web profesional para vender en serio. UnClic me dio eso en una tarde y por una fracción del costo.",
    initials: "AM",
    bg: "bg-rose-100",
    text: "text-rose-700",
  },
  {
    name: "Daniela Ospina",
    role: "Dueña de @dani.postres",
    quote:
      "Lo que más me gusta es que los pedidos llegan directo a mi WhatsApp con todo detallado. No tengo que preguntar nada, solo confirmar.",
    initials: "DO",
    bg: "bg-amber-100",
    text: "text-amber-700",
  },
];

export const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-uc-warm-mid">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              Quienes ya dieron{" "}
              <span className="font-serif italic text-uc-violet">el clic.</span>
            </h2>
            <p className="mt-4 text-uc-gray text-[17px] leading-relaxed">
              Emprendedores reales que pasaron de mandar fotos sueltas a tener su propia vitrina online.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <FadeInItem key={review.name}>
              <div className="bg-white rounded-2xl p-7 h-full flex flex-col border border-uc-black/[0.04]">
                <p className="text-[15px] text-uc-black/80 leading-relaxed flex-1">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-uc-black/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 ${review.bg} rounded-full flex items-center justify-center text-xs font-semibold ${review.text}`}>
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-uc-black">{review.name}</p>
                      <p className="text-[12px] text-uc-gray">{review.role}</p>
                    </div>
                  </div>
                  <a href="#" className="text-uc-violet hover:text-uc-violet-dark transition-colors">
                    <ExternalLink className="w-4 h-4" />
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
