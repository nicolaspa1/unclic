import { FadeIn } from "@/components/FadeIn";
import { ShoppingCart, Smartphone, DollarSign, Store } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Recibe pedidos desde tu propio sitio",
    description:
      "Comparte tu sitio donde quieras y empieza a recibir pedidos por WhatsApp.",
  },
  {
    icon: Smartphone,
    title: "Administra todo desde tu celular",
    description:
      "Crea tu link, publica productos y gestiona tu catálogo fácil desde tu celular.",
  },
  {
    icon: DollarSign,
    title: "0% de comisiones por venta",
    description:
      "Tus ganancias son tuyas. Solo pagas el uso de la pasarela si decides activarla.",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
              Una ventana a todo tu{" "}
              <span className="font-display italic">negocio</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Lanza tu showroom online con todo lo que tu marca ofrece: catálogo,
              colecciones, links y más. Un sitio completo donde tus clientes pueden
              explorar y comprar con facilidad.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <div className="relative">
              <div className="bg-warm-100 rounded-3xl p-8 aspect-[4/5] flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-xs">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-orange rounded-full" />
                    <div>
                      <p className="text-sm font-semibold text-forest">Tu Tienda</p>
                      <p className="text-xs text-gray-500">tumarca.unclic.shop</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Colecciones</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square bg-warm-100 rounded-lg" />
                      ))}
                    </div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-3">Productos</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square bg-warm-200 rounded-lg" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <Store className="w-5 h-5 text-orange" />
                  <span className="text-xs font-medium text-forest">Probar en vivo</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-warm-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-forest">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
