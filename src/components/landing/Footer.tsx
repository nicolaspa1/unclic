export const Footer = () => {
  return (
    <footer className="bg-apple-black text-white">
      <div className="max-w-[980px] mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center">
          <a href="#" className="text-lg font-semibold tracking-tight mb-6">
            unclic
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-white/50 mb-3">
            <a href="#funciones" className="hover:text-white transition-colors">Funciones</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a>
            <a href="#precios" className="hover:text-white transition-colors">Precios</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-white/30 mb-8">
            <a href="#" className="hover:text-white/50 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white/50 transition-colors">Términos</a>
          </div>

          <p className="text-[13px] text-white/30">
            © {new Date().getFullYear()} UnClic, Inc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
