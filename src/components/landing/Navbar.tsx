import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { useLanguage } from "@/i18n/LanguageContext";

const LangToggle = ({ className = "" }: { className?: string }) => {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center gap-1.5 bg-uc-black/[0.04] rounded-full p-0.5 ${className}`}
      aria-label="Switch language"
    >
      <Globe className="w-3.5 h-3.5 text-uc-gray ml-2" />
      <span
        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-all ${
          lang === "es"
            ? "bg-white text-uc-black shadow-sm"
            : "text-uc-gray"
        }`}
      >
        ES
      </span>
      <span
        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-all ${
          lang === "en"
            ? "bg-white text-uc-black shadow-sm"
            : "text-uc-gray"
        }`}
      >
        EN
      </span>
    </button>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.features, href: "#funciones" },
    { label: t.nav.howItWorks, href: "#como-funciona" },
    { label: t.nav.pricing, href: "#precios" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-uc-black/[0.04]">
      <div className="max-w-[1040px] mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-uc-gray hover:text-uc-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LangToggle />
            <a href="#" className="text-[13px] text-uc-gray hover:text-uc-black transition-colors">
              {t.nav.login}
            </a>
            <a
              href="#"
              className="inline-flex items-center px-5 py-2 text-[13px] font-medium text-white bg-uc-violet rounded-full hover:bg-uc-violet-dark transition-colors"
            >
              {t.nav.cta}
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <LangToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-1 text-uc-black"
              aria-label={t.nav.menu}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-uc-black/[0.04] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-[15px] text-uc-black py-2.5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-uc-black/[0.06] space-y-2 mt-2">
                <a href="#" className="block text-[15px] text-uc-gray py-2">
                  {t.nav.login}
                </a>
                <a
                  href="#"
                  className="block text-center px-5 py-2.5 text-[15px] font-medium text-white bg-uc-violet rounded-full"
                >
                  {t.nav.cta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
