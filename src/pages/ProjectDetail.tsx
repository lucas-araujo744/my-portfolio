import { useParams, Link } from "react-router-dom";
import { projects } from "@/lib/data";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">Projeto não encontrado</h1>
          <Link to="/" className="text-primary hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container">
        <Link to="/#projetos" className="inline-flex items-center text-foreground/70 hover:text-primary mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Voltar para projetos
        </Link>

        <article className="max-w-4xl mx-auto space-y-10">
          <header className="space-y-4 opacity-0 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-semibold">{project.title}</h1>
            <p className="text-lg text-foreground/80">{project.description}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm bg-secondary rounded-md font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {project.imageUrl && (
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md opacity-0 animate-fade-in animation-delay-100">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
            </div>
          )}

          <section className="prose max-w-none opacity-0 animate-fade-in animation-delay-200 dark:prose-invert">
            <h2>Descrição</h2>
            <p>{project.longDescription || project.description}</p>

            {project.highlights && (
              <>
                <h2>Destaques</h2>
                <ul>
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <footer className="flex flex-wrap gap-4 opacity-0 animate-fade-in animation-delay-300">
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#24292e] text-white rounded-md button-hover"
              >
                <Github size={18} className="mr-2" /> Ver código no GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md button-hover"
              >
                <ExternalLink size={18} className="mr-2" /> Ver projeto online
              </a>
            )}
          </footer>
        </article>
      </div>
    </main>
  );
};

export default ProjectDetail;
