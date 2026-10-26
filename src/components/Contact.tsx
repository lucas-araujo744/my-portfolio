import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { useLanguage } from "@/hooks/use-language";
import type { ReactNode } from "react";

const ContactItem = ({
  icon,
  title,
  value,
  link,
  linkText = value
}: {
  icon: ReactNode;
  title: string;
  value: string;
  link: string;
  linkText?: string;
}) => (
  <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm border border-gray-300 dark:border-border hover:shadow-md transition-all hover:translate-y-[-2px]">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div className="text-left overflow-hidden">
      <h4 className="font-medium">{title}</h4>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground/80 hover:text-primary flex items-center gap-1 truncate"
      >
        <span className="truncate">{linkText}</span>
        <ExternalLink size={14} className="opacity-50 shrink-0" />
      </a>
    </div>
  </div>
);

const Contact = () => {
  const whatsappNumber = contactInfo.phone.replace(/\D/g, "");
  const { t } = useLanguage();

  return (
    <section id="contato" className="section bg-background">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>

        <div className="max-w-3xl mx-auto">
          <div className="opacity-0 animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 text-center">{t.contact.subtitle}</h3>
            <p className="text-foreground/80 mb-8 text-center">
              {t.contact.text}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ContactItem
                icon={<Mail size={20} className="text-primary" />}
                title="Email"
                value={contactInfo.email}
                link={`mailto:${contactInfo.email}`}
              />

              <ContactItem
                icon={<Phone size={20} className="text-primary" />}
                title="WhatsApp"
                value={contactInfo.phone}
                link={`https://wa.me/55${whatsappNumber}`}
                linkText={t.contact.sendMessage}
              />

              <ContactItem
                icon={<Linkedin size={20} className="text-primary" />}
                title="LinkedIn"
                value={`linkedin.com/${contactInfo.linkedIn}`}
                link={`https://linkedin.com/${contactInfo.linkedIn}`}
                linkText={t.contact.viewProfile}
              />
            </div>

            <div className="mt-8 text-center">
              <a
                href={`https://github.com/${contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors border border-gray-300 dark:border-border"
              >
                <Github size={18} /> {t.contact.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
