import { useState } from "react";
import { Menu, X, MousePointerClick } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
  { label: "Contáctanos", href: "#contacto" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <MousePointerClick className="w-6 h-6 text-forest" />
            <span className="text-xl font-bold text-forest">unclic</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-forest transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-forest transition-colors"
            >
              Iniciar sesión
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-orange rounded-full hover:bg-orange-dark transition-colors"
            >
              Crear link gratis
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-gray-600 hover:text-forest py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100 space-y-3">
                <a href="#" className="block text-sm text-gray-600 py-2">
                  Iniciar sesión
                </a>
                <a
                  href="#"
                  className="block text-center px-5 py-2.5 text-sm font-medium text-white bg-orange rounded-full"
                >
                  Crear link gratis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
