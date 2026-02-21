import { FadeIn } from "@/components/FadeIn";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-6 md:pt-44 md:pb-10">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <FadeIn>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] font-semibold tracking-tight text-apple-black leading-[1.05]">
            Vende en redes.
            <br />
            <span className="text-apple-gray">Con un único link.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-5 text-lg sm:text-xl text-apple-gray max-w-[600px] mx-auto leading-relaxed font-light">
            Crea tu tienda online en minutos. Comparte un solo link, muestra tu
            catálogo y recibe pedidos por WhatsApp.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center px-7 py-3 text-[17px] font-medium text-white bg-apple-blue rounded-full hover:bg-apple-blue-hover transition-colors"
            >
              Empezar gratis
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center px-7 py-3 text-[17px] font-medium text-apple-blue hover:underline transition-colors"
            >
              Conoce más &gt;
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
