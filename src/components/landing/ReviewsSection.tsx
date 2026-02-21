import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const reviewMeta = [
  { initials: "VR", bg: "bg-violet-100", text: "text-violet-700" },
  { initials: "AM", bg: "bg-rose-100", text: "text-rose-700" },
  { initials: "DO", bg: "bg-amber-100", text: "text-amber-700" },
];

export const ReviewsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-uc-warm-mid">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              {t.reviews.title}{" "}
              <span className="font-serif italic text-uc-violet">{t.reviews.titleAccent}</span>
            </h2>
            <p className="mt-4 text-uc-gray text-[17px] leading-relaxed">
              {t.reviews.subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-5">
          {t.reviews.items.map((review, i) => {
            const meta = reviewMeta[i];
            return (
              <FadeInItem key={i}>
                <div className="bg-white rounded-2xl p-7 h-full flex flex-col border border-uc-black/[0.04]">
                  <p className="text-[15px] text-uc-black/80 leading-relaxed flex-1">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-5 border-t border-uc-black/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 ${meta.bg} rounded-full flex items-center justify-center text-xs font-semibold ${meta.text}`}>
                        {meta.initials}
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
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
};
