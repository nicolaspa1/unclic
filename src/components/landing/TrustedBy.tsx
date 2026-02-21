import {
  Smartphone,
  Shield,
  Clock,
  Headphones,
  Ban,
  CreditCard,
} from "lucide-react";

const items = [
  { icon: Smartphone, text: "Maneja todo desde tu celular" },
  { icon: Shield, text: "Garantía de reembolso" },
  { icon: Clock, text: "14 días de prueba gratis" },
  { icon: Headphones, text: "Soporte por WhatsApp" },
  { icon: Ban, text: "0% de comisiones por venta" },
  { icon: CreditCard, text: "Pagos seguros con SSL" },
];

export const TrustedBy = () => {
  return (
    <div className="bg-forest text-white py-3 overflow-hidden">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 mx-6 shrink-0">
            <item.icon className="w-4 h-4 text-orange-light" />
            <span className="text-sm font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
