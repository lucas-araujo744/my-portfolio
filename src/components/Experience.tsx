import { experiences, education } from "@/lib/data";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  return (
    <section id="experiencia" className="section bg-accent">
      <div className="container">
        <h2 className="section-title">Experiência & Educação</h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <h3 className="text-xl font-semibold mb-8 pb-2 border-b border-border">Experiência Profissional</h3>

            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full transform -translate-x-[5px]" />
                <h4 className="text-lg font-medium">{exp.title}</h4>
                <p className="text-primary font-medium mt-1">{exp.company}</p>
                <p className="text-sm text-muted-foreground mt-1 mb-3">{exp.period}</p>
                <ul className="space-y-2 text-foreground/80">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary leading-6">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {exp.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-card border border-border rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-12">
            <h3 className="text-xl font-semibold mb-8 pb-2 border-b border-border">Educação</h3>

            {education.map((edu, index) => (
              <div
                key={`${edu.institution}-${index}`}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary opacity-0 animate-fade-in hover:shadow-sm rounded-lg p-4"
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                <div className="absolute left-0 top-4 w-3 h-3 bg-primary rounded-full transform -translate-x-[5px]" />
                <h4 className="text-lg font-medium">{edu.title}</h4>

                <div className="flex items-center mt-1">
                  <p className="text-primary font-medium">{edu.institution}</p>
                  {edu.websiteUrl && (
                    <a
                      href={edu.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mt-1 mb-3">{edu.period}</p>
                <ul className="space-y-2 text-foreground/80">
                  {edu.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary leading-6">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
