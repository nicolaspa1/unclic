import { FadeIn } from "@/components/FadeIn";

export const AboutSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[600px] mx-auto">
            <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-semibold tracking-tight text-apple-black leading-[1.05]">
              Sueña. Crea.
              <br />
              <span className="text-apple-gray">Vende.</span>
            </h2>
            <p className="mt-5 text-apple-gray text-lg font-light">
              Tu tienda online lista hoy. Sin código. Sin complicaciones.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center px-7 py-3 text-[17px] font-medium text-white bg-apple-blue rounded-full hover:bg-apple-blue-hover transition-colors"
            >
              Empezar gratis
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
