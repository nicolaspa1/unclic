import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  toggle: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("es");
  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
