import { FadeIn } from "@/components/FadeIn";
import { ArrowRight, Heart } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="bg-uc-warm-mid rounded-[28px] p-12 md:p-20 text-center">
            <Heart className="w-8 h-8 text-uc-violet mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tight text-uc-black leading-[1.05]">
              Tu momento
              <br />
              <span className="font-serif italic text-uc-violet">es ahora.</span>
            </h2>
            <p className="mt-5 text-uc-gray text-[17px] max-w-[420px] mx-auto leading-relaxed">
              Cada día que pasa sin tu link es un día de ventas perdidas. Empieza gratis, en minutos.
            </p>
            <a
              href="#"
              className="mt-9 inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-medium text-white bg-uc-violet rounded-full hover:bg-uc-violet-dark transition-colors shadow-[0_2px_16px_rgba(124,58,237,0.25)]"
            >
              Empieza gratis
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
