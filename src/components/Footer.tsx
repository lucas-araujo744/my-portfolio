import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { contactInfo, personalInfo } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = contactInfo.phone.replace(/\D/g, "");

  return (
    <footer className="py-12 bg-accent border-t border-gray-800 dark:border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">{personalInfo.name}</h3>
            <p className="text-muted-foreground">{personalInfo.title}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://github.com/${contactInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-gray-300 dark:border-border flex items-center justify-center hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={`https://linkedin.com/${contactInfo.linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-gray-300 dark:border-border flex items-center justify-center hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`https://wa.me/55${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-gray-300 dark:border-border flex items-center justify-center hover:border-primary hover:text-primary"
              aria-label="WhatsApp"
            >
              <Phone size={18} />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="w-10 h-10 rounded-full bg-card border border-gray-300 dark:border-border flex items-center justify-center hover:border-primary hover:text-primary"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-border" />

        <div className="mt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} {personalInfo.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
