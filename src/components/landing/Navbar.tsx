import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Funciones", href: "#funciones" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.04]">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          <a href="#" className="text-[17px] font-semibold text-apple-black tracking-tight">
            unclic
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-apple-gray hover:text-apple-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-apple-gray hover:text-apple-black transition-colors"
            >
              Iniciar sesión
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 py-1.5 text-xs font-medium text-white bg-apple-blue rounded-full hover:bg-apple-blue-hover transition-colors"
            >
              Empezar gratis
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-1 text-apple-black"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/[0.04] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-apple-black py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-black/[0.06] space-y-2 mt-2">
                <a href="#" className="block text-sm text-apple-gray py-2">
                  Iniciar sesión
                </a>
                <a
                  href="#"
                  className="block text-center px-4 py-2 text-sm font-medium text-white bg-apple-blue rounded-full"
                >
                  Empezar gratis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
