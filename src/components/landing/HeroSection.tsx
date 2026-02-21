import { FadeIn, FadeInItem, FadeInStagger } from "@/components/FadeIn";
import { ArrowRight, MessageCircle, ShoppingBag, Link as LinkIcon } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-forest leading-[1.1]">
                Vende en redes con un{" "}
                <span className="font-display italic text-orange">
                  único link.
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Crea un link simple para vender desde tus redes sociales. Muestra
                tu marca, agrega tu catálogo y comienza a recibir pedidos directo
                por WhatsApp, todo en unos minutos.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-orange rounded-full hover:bg-orange-dark transition-colors"
                >
                  Crear link gratis
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-forest border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Ver demo
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeInStagger className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-warm-100 rounded-3xl" />

              <FadeInItem>
                <div className="absolute top-8 left-8 right-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center">
                      <LinkIcon className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-forest">tumarca</span>
                      <span className="text-sm text-gray-400">.unclic.shop</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square bg-warm-100 rounded-xl" />
                    ))}
                  </div>
                </div>
              </FadeInItem>

              <FadeInItem>
                <div className="absolute bottom-24 left-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-xs font-medium text-gray-800">¡Nuevo pedido de Laura!</p>
                    <p className="text-[10px] text-gray-500">Hace 2 min</p>
                  </div>
                </div>
              </FadeInItem>

              <FadeInItem>
                <div className="absolute bottom-8 right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-orange" />
                  <div>
                    <p className="text-xs font-medium text-gray-800">+3 ventas hoy</p>
                    <p className="text-[10px] text-gray-500">$210.000</p>
                  </div>
                </div>
              </FadeInItem>
            </div>
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
};
