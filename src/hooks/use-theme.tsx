import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isChanging: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    // Verifica se há um tema salvo no localStorage, ou usa a preferência do sistema
    const savedTheme = window.localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    
    // Atualiza o localStorage e a classe no document quando o tema mudar
    window.localStorage.setItem("theme", theme);
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme, isLoaded]);

  const toggleTheme = () => {
    // Aplicar a mudança de tema imediatamente
    setIsChanging(true);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    
    // Apenas para permitir animação do botão, mas não do tema
    setTimeout(() => {
      setIsChanging(false);
    }, 150);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isChanging }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
} 