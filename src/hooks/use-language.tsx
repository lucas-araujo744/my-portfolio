import { createContext, useContext, useEffect, useState } from "react";
import { content, uiText, type Language } from "@/lib/data";

type LanguageProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  content: (typeof content)[Language];
  t: (typeof uiText)[Language];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  // Verifica se há um idioma salvo no localStorage, ou usa o idioma do navegador
  try {
    const savedLanguage = window.localStorage.getItem("language");
    if (savedLanguage === "pt" || savedLanguage === "en") return savedLanguage;
  } catch {
    // localStorage indisponível
  }
  return window.navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    try {
      window.localStorage.setItem("language", language);
    } catch {
      // localStorage indisponível
    }
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, content: content[language], t: uiText[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
