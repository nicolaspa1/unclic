import { FadeIn } from "@/components/FadeIn";
import { MessageCircle, ShoppingBag, Link as LinkIcon } from "lucide-react";

export const TrustedBy = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <div className="relative bg-apple-light rounded-3xl overflow-hidden p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="bg-white rounded-2xl p-6 shadow-sm max-w-[320px]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 bg-apple-black rounded-full flex items-center justify-center">
                      <LinkIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-apple-black">tumarca</span>
                      <span className="text-sm text-apple-gray">.unclic.shop</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square bg-gray-100 rounded-xl" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 max-w-[300px]">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-apple-black">¡Nuevo pedido de Laura!</p>
                    <p className="text-xs text-apple-gray">Hace 2 min</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 max-w-[260px] ml-8">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <ShoppingBag className="w-5 h-5 text-apple-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-apple-black">¡Nuevo pedido de Karina!</p>
                    <p className="text-xs text-apple-gray">Hace 5 min</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 max-w-[280px]">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                    <ShoppingBag className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-apple-black">¡Nuevo pedido de Juan!</p>
                    <p className="text-xs text-apple-gray">Hace 8 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
