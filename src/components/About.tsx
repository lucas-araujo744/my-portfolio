import { personalInfo, contactInfo } from "@/lib/data";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/perfil.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-accent">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-lg">{personalInfo.summary}</p>

              <p className="text-lg">
                Minha jornada na programação começou com pequenos experimentos e evoluiu para o desenvolvimento
                de soluções corporativas completas. Gosto de traduzir necessidades de negócio em experiências digitais
                eficientes, mantendo o foco em código limpo e escalável.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Meu Portfólio no GitHub</h3>
              <p className="text-lg">
                Construí mais de 50 projetos em diferentes tecnologias e áreas de aplicação.
                Essa variedade mostra minha evolução constante como desenvolvedor e minha curiosidade por novos desafios.
              </p>

              <div className="mt-4 flex flex-col gap-4">
                <div className="p-4 border border-border rounded-lg bg-card shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">Projetos Destacados</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>LokinhoSkins</strong>: Plataforma completa de rifas com automação de pagamentos, integrações externas e painel administrativo.
                    </li>
                    <li>
                      <strong>Cineflex</strong>: Aplicativo web para reservas de cinema com seleção de assentos em tempo real e experiência responsiva.
                    </li>
                    <li>
                      <strong>Zap Recall</strong>: Jogo de flashcards gamificado com metas diárias, indicadores de desempenho e foco mobile-first.
                    </li>
                    <li>
                      <strong>Cadstro de Task</strong>: Um aplicativo para gerenciar tarefas diárias, desenvolvido com NestJS, incluindo cadastro de usuários e autenticação JWT.
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="p-3 border border-border rounded-md bg-card text-center">
                    <p className="text-2xl font-bold text-primary">50+</p>
                    <p className="text-sm text-muted-foreground">Repositórios</p>
                  </div>
                  <div className="p-3 border border-border rounded-md bg-card text-center">
                    <p className="text-2xl font-bold text-primary">10+</p>
                    <p className="text-sm text-muted-foreground">Tecnologias</p>
                  </div>
                  <div className="p-3 border border-border rounded-md bg-card text-center">
                    <p className="text-2xl font-bold text-primary">3+</p>
                    <p className="text-sm text-muted-foreground">Anos de Código</p>
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
