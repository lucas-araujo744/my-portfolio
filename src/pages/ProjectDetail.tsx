import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Layers, FileText } from "lucide-react";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { content, t } = useLanguage();
  const { projects } = content;
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">{t.projectDetail.notFound}</h1>
          <Link to="/" className="text-primary hover:underline">
            {t.projectDetail.backHome}
          </Link>
        </div>
      </main>
    );
  }

  const hasLinks = project.repositoryUrl || project.demoUrl;

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container">
        <Link
          to="/#projetos"
          className="inline-flex items-center text-sm text-foreground/70 hover:text-primary mb-10 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> {t.projectDetail.back}
        </Link>

        <article className="max-w-6xl mx-auto space-y-12">
          <header className="max-w-3xl space-y-5 opacity-0 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              {t.projectDetail.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{project.title}</h1>
            <p className="text-lg md:text-xl text-foreground/75 leading-relaxed">{project.description}</p>

            {hasLinks && (
              <div className="flex flex-wrap gap-3 pt-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-md font-medium button-hover"
                  >
                    <ExternalLink size={18} className="mr-2" /> {t.projectDetail.viewOnline}
                  </a>
                )}
                {project.repositoryUrl && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-secondary text-secondary-foreground border border-border rounded-md font-medium button-hover"
                  >
                    <Github size={18} className="mr-2" /> {t.projectDetail.viewCode}
                  </a>
                )}
              </div>
            )}
          </header>

          {project.imageUrl && (
            <div className="glass-card overflow-hidden shadow-xl opacity-0 animate-fade-in animation-delay-100">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/60">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                {project.demoUrl && (
                  <span className="ml-3 hidden sm:block truncate text-xs text-muted-foreground">
                    {project.demoUrl.replace(/^https?:\/\//, "")}
                  </span>
                )}
              </div>
              <img src={project.imageUrl} alt={project.title} className="w-full h-auto block" />
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8 opacity-0 animate-fade-in animation-delay-200">
            <div className="lg:col-span-2 space-y-8">
              <section className="glass-card p-6 md:p-8">
                <h2 className="flex items-center gap-3 text-xl font-semibold mb-4">
                  <span className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <FileText size={18} />
                  </span>
                  {t.projectDetail.description}
                </h2>
                <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                  {project.longDescription || project.description}
                </p>
              </section>

              {project.highlights && (
                <section>
                  <h2 className="text-xl font-semibold mb-4">{t.projectDetail.highlights}</h2>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="glass-card hover-lift p-4 flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/85 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 self-start">
              <section className="glass-card p-6">
                <h2 className="flex items-center gap-3 text-lg font-semibold mb-4">
                  <span className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Layers size={18} />
                  </span>
                  {t.projectDetail.technologies}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm bg-secondary border border-border rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {hasLinks && (
                <section className="glass-card p-6 space-y-3">
                  <h2 className="text-lg font-semibold">{t.projectDetail.links}</h2>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 text-foreground/80 hover:text-primary transition-colors"
                    >
                      <span className="truncate">{project.demoUrl.replace(/^https?:\/\//, "")}</span>
                      <ExternalLink size={16} className="shrink-0" />
                    </a>
                  )}
                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 text-foreground/80 hover:text-primary transition-colors"
                    >
                      <span className="truncate">GitHub</span>
                      <Github size={16} className="shrink-0" />
                    </a>
                  )}
                </section>
              )}
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ProjectDetail;
