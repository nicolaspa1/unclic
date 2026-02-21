import { FadeIn } from "@/components/FadeIn";
import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

export const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-20 md:py-28 bg-uc-warm">
      <div className="max-w-[1040px] mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <FadeIn>
              <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-uc-black leading-[1.08]">
                {t.faq.title}{" "}
                <span className="font-serif italic text-uc-violet">{t.faq.titleAccent}</span>
              </h2>
              <p className="mt-4 text-uc-gray text-[15px] leading-relaxed">
                {t.faq.subtitle}
              </p>
              <a
                href="https://wa.me/573210000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-[14px] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {t.faq.whatsapp}
              </a>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn>
              <Accordion type="single" collapsible className="w-full">
                {t.faq.items.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-uc-black/[0.08] py-0.5"
                  >
                    <AccordionTrigger className="text-left text-[16px] text-uc-black font-semibold hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-uc-gray text-[15px] leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
