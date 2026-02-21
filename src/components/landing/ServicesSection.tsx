import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import {
  LayoutGrid,
  Play,
  CreditCard,
  MessageCircle,
  FileText,
  Link as LinkIcon,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const featureMeta = [
  { icon: LayoutGrid, bg: "bg-violet-50", iconBg: "bg-violet-100" },
  { icon: Play, bg: "bg-rose-50", iconBg: "bg-rose-100" },
  { icon: CreditCard, bg: "bg-emerald-50", iconBg: "bg-emerald-100" },
  { icon: MessageCircle, bg: "bg-green-50", iconBg: "bg-green-100" },
  { icon: FileText, bg: "bg-amber-50", iconBg: "bg-amber-100" },
  { icon: LinkIcon, bg: "bg-sky-50", iconBg: "bg-sky-100" },
];

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[580px] mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-uc-black leading-[1.08]">
              {t.services.title}{" "}
              <span className="font-serif italic text-uc-violet">{t.services.titleAccent}</span>
            </h2>
            <p className="mt-4 text-uc-gray text-[17px] leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.features.map((feature, i) => {
            const meta = featureMeta[i];
            return (
              <FadeInItem key={i}>
                <div className={`${meta.bg} rounded-2xl p-7 h-full transition-all hover:scale-[1.02] hover:shadow-sm`}>
                  <div className={`w-10 h-10 ${meta.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <meta.icon className="w-5 h-5 text-uc-black" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-uc-black mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-uc-gray text-[14px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
};
