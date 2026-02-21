import { FadeIn } from "@/components/FadeIn";
import { Heart, ArrowRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-warm-200/60 via-warm-100/40 to-white" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlNWRkZDMiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTE2aDJ2NGgtMnYtNHptLTQgMGgydjRoLTJ2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-sm mb-6">
              <Heart className="w-7 h-7 text-orange" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
              Sueña. Crea.{" "}
              <span className="font-display italic">Vende.</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Hazlo realidad ahora: crea tu link y vende hoy.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-orange rounded-full hover:bg-orange-dark transition-colors"
            >
              Crear link gratis
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
