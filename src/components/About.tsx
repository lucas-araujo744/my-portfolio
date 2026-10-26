import { contactInfo } from "@/lib/data";
import { useLanguage } from "@/hooks/use-language";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/perfil.jpg";

const About = () => {
  const { content, t } = useLanguage();
  const { personalInfo } = content;

  return (
    <section id="sobre" className="py-16 bg-accent">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-lg">{personalInfo.summary}</p>

              <p className="text-lg">{t.about.journey}</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">{t.about.githubTitle}</h3>
              <p className="text-lg">{t.about.githubText}</p>

              <div className="mt-4 flex flex-col gap-4">
                <div className="p-4 border border-border rounded-lg bg-card shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">{t.about.featuredTitle}</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    {t.about.featured.map((item) => (
                      <li key={item.name}>
                        <strong>{item.name}</strong>: {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="p-3 border border-border rounded-md bg-card text-center">
                    <p className="text-2xl font-bold text-primary">50+</p>
                    <p className="text-sm text-muted-foreground">{t.about.stats.repositories}</p>
                  </div>
                  <div className="p-3 border border-border rounded-md bg-card text-center">
                    <p className="text-2xl font-bold text-primary">10+</p>
                    <p className="text-sm text-muted-foreground">{t.about.stats.technologies}</p>
                  </div>
                  <div className="p-3 border border-border rounded-md bg-card text-center">
                    <p className="text-2xl font-bold text-primary">3+</p>
                    <p className="text-sm text-muted-foreground">{t.about.stats.years}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} /> {contactInfo.email}
              </a>
              <a
                href={`https://github.com/${contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href={`https://linkedin.com/${contactInfo.linkedIn}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <span className="inline-flex items-center gap-2 text-foreground">
                <MapPin size={18} /> {contactInfo.location}
              </span>
            </div>
          </div>

          <div className="lg:ml-auto mt-8 lg:mt-0">
            <div className="w-full md:w-full lg:w-full h-[400px] sm:h-[500px] lg:h-[600px] max-w-2xl bg-card rounded-lg overflow-hidden shadow-lg mx-auto glass-card">
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover opacity-0 animate-fade-in"
                onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
