import { FadeIn } from "@/components/FadeIn";
import {
  MessageCircle,
  ShoppingBag,
  Link as LinkIcon,
  Heart,
  Star,
} from "lucide-react";

export const TrustedBy = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-[1040px] mx-auto px-6">
        <FadeIn>
          <div className="bg-uc-warm-mid rounded-[28px] overflow-hidden p-8 md:p-14">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-uc-black/[0.04] max-w-[280px]">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 bg-uc-violet rounded-lg flex items-center justify-center">
                      <LinkIcon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-uc-black">tumarca</span>
                      <span className="text-uc-gray">.unclic.shop</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {["bg-violet-100", "bg-amber-100", "bg-rose-100", "bg-sky-100", "bg-emerald-100", "bg-fuchsia-100"].map(
                      (bg, i) => (
                        <div key={i} className={`aspect-square ${bg} rounded-xl`} />
                      )
                    )}
                  </div>
                  <div className="mt-3 flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-[11px] text-uc-gray ml-1">12 reseñas</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 space-y-3">
                {[
                  { icon: MessageCircle, color: "bg-green-500", name: "Laura", amount: "$85.000" },
                  { icon: ShoppingBag, color: "bg-uc-violet", name: "Karina", amount: "$120.000" },
                  { icon: Heart, color: "bg-pink-500", name: "Juan", amount: "$45.000" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-uc-black/[0.04] flex items-center justify-between max-w-[380px]"
                    style={{ marginLeft: i === 1 ? "2rem" : 0 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 ${item.color} rounded-full flex items-center justify-center shrink-0`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-uc-black">
                          ¡Nuevo pedido! <span className="font-normal text-uc-gray">de {item.name}</span>
                        </p>
                        <p className="text-[11px] text-uc-gray-light">Hace {(i + 1) * 2} min</p>
                      </div>
                    </div>
                    <span className="text-[13px] font-semibold text-uc-black">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
