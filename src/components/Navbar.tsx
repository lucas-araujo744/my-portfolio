import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useLanguage } from "@/hooks/use-language";

const NAV_ITEMS = [
  { key: "about", href: "#sobre" },
  { key: "experience", href: "#experiencia" },
  { key: "projects", href: "#projetos" },
  { key: "skills", href: "#habilidades" },
  { key: "contact", href: "#contato" }
] as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, isChanging } = useTheme();
  const { language, toggleLanguage, content, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const renderNavItems = (className: string, onClick?: () => void) => (
    <ul className={className}>
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <Link to={`/${item.href}`} className="font-medium hover:text-primary" onClick={onClick}>
            {t.nav[item.key]}
          </Link>
        </li>
      ))}
    </ul>
  );

  const languageToggle = (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium hover:text-primary"
      aria-label={t.switchLanguage}
      title={t.switchLanguage}
    >
      <Languages size={18} />
      {language === "pt" ? "EN" : "PT"}
    </button>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 animate-header-slide-down ${
        isScrolled ? "bg-card/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="text-xl font-semibold hover:text-primary">
          {content.personalInfo.name}
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <nav>{renderNavItems("flex space-x-6 text-sm")}</nav>

          {languageToggle}

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === "light" ? t.themeToDark : t.themeToLight}
            disabled={isChanging}
          >
            <div className={`transition-transform duration-150 ${isChanging ? "rotate-180" : ""}`}>
              {theme === "dark" ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
            </div>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          {languageToggle}

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === "light" ? t.themeToDark : t.themeToLight}
            disabled={isChanging}
          >
            <div className={`transition-transform duration-150 ${isChanging ? "rotate-180" : ""}`}>
              {theme === "dark" ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
            </div>
          </button>

          <button
            className="p-2 rounded-md focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t.openMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-card transition-transform duration-300 transform ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="container pt-20">
          <nav>{renderNavItems("flex flex-col space-y-5 py-6 text-lg", () => setIsOpen(false))}</nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
