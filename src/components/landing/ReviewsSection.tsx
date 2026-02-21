import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Luz Prada",
    role: "Creadora de @notiz",
    quote:
      "En una tarde subí todo mi catálogo y empecé a vender. La mejor inversión que he hecho para mi emprendimiento.",
    initials: "LP",
    bg: "bg-amber-100",
    text: "text-amber-700",
  },
  {
    name: "Lucía Mederos",
    role: "Creadora de @universo-lume",
    quote:
      "Era la solución que necesitaba. La idea del micrositio es genial ya que una página web suele ser muy costosa y UnClic te da esa posibilidad.",
    initials: "LM",
    bg: "bg-rose-100",
    text: "text-rose-700",
  },
  {
    name: "Camilo Restrepo",
    role: "Emprendedor",
    quote:
      "Mis clientes ahora ven todo mi catálogo y hacen pedidos sin que yo tenga que mandar fotos una por una. Un cambio total.",
    initials: "CR",
    bg: "bg-sky-100",
    text: "text-sky-700",
  },
];

export const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-uc-warm-mid">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              Ya miles venden con{" "}
              <span className="font-serif italic text-uc-coral">UnClic.</span>
            </h2>
            <p className="mt-4 text-uc-gray text-[17px] leading-relaxed">
              Cada parte de la experiencia está pensada para que funcione exactamente como necesitas.
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
                  <a href="#" className="text-uc-coral hover:text-uc-coral-dark transition-colors">
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
