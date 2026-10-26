import { useLanguage } from "@/hooks/use-language";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const { content, t } = useLanguage();
  const { projects } = content;

  return (
    <section id="projetos" className="section bg-background">
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-card overflow-hidden hover-lift opacity-0 animate-fade-in shadow-md hover:shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video bg-secondary flex items-center justify-center overflow-hidden">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center p-6">
                    <h3 className="text-xl font-medium text-secondary-foreground/70">{project.title}</h3>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-secondary rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-secondary rounded-md font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link to={`/projeto/${project.id}`} className="flex items-center text-sm font-medium text-primary hover:underline">
                    {t.projects.details} <ArrowRight size={16} className="ml-1" />
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                        aria-label={t.projects.viewCode}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                        aria-label={t.projects.viewDemo}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
