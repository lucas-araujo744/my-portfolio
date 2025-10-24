import cineImage from "@/assets/cine.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  repositoryUrl?: string;
  demoUrl?: string;
  highlights?: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  title: string;
  institution: string;
  period: string;
  description: string[];
  websiteUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: "lokinhoskins",
    title: "LokinhoSkins",
    description: "Site de rifas completo, abrangendo tanto front-end quanto back-end.",
    longDescription:
      "Site de rifas desenvolvido para o cliente Lokinho com arquitetura completa. O front-end foi desenvolvido com React e Next.js, enquanto o back-end utiliza Express, Prisma e PostgreSQL. A infraestrutura inclui Docker e Nginx, com integrações para APIs externas como Twitch e Mercado Pago.",
    technologies: [
      "React",
      "Next.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "Twitch API",
      "Mercado Pago",
      "Socket.io"
    ],
    imageUrl: "/lovable-uploads/370698821-f8bb75cd-5f13-42ad-8b36-f268c65e1de1.gif",
    repositoryUrl: "https://github.com/CapiSite/LokinhoRifas",
    demoUrl: "https://lokinhoskins.com.br",
    highlights: [
      "Interface intuitiva para participação em rifas",
      "Painel administrativo para gerenciamento",
      "Integração com Twitch para eventos ao vivo",
      "Pagamentos seguros via Mercado Pago",
      "Notificações em tempo real com Socket.io",
      "Otimização com Redis para caching"
    ]
  },
  {
    id: "cineflex",
    title: "Cineflex",
    description: "Aplicativo web para compra de ingressos de cinema com fluxo completo de reservas.",
    longDescription:
      "Aplicação SPA construída com React que permite explorar filmes em cartaz, selecionar sessões, escolher assentos e finalizar reservas com preenchimento de dados dos participantes. Todo o fluxo é orientado por feedback visual e validações para garantir uma experiência fluida.",
    technologies: ["React", "Vite", "TypeScript", "Styled-components", "Axios"],
    imageUrl: cineImage,
    demoUrl: "https://cineflex-sooty-rho.vercel.app",
    highlights: [
      "Listagem de filmes consumindo API externa em tempo real",
      "Seleção visual de assentos com estados dinâmicos",
      "Resumo da reserva com dados do comprador e convidados"
    ]
  },
  {
    id: "zap-recall",
    title: "Zap Recall",
    description: "Jogo de flashcards gamificado para memorização com sistema de metas diárias.",
    longDescription:
      "Projeto front-end que oferece uma experiência mobile-first para revisar conteúdos por meio de flashcards. O usuário define metas, acompanha o progresso e vê animações responsivas conforme responde cada carta.",
    technologies: ["React", "TypeScript", "Styled-components"],
    demoUrl: "https://zap-recall-self.vercel.app",
    highlights: [
      "Fluxo de estudo configurável por metas",
      "Feedback visual imediato para acertos e erros",
      "Design responsivo otimizado para dispositivos móveis"
    ]
  }
];

export const experiences: Experience[] = [
  {
    title: "Desenvolvedor Full Stack",
    company: "Capisite Serviços Digitais",
    period: "01/2024 - Presente",
    description: [
      "Desenvolvimento completo de aplicações empresariais, com foco em gestão integrada e otimização de processos",
      "Implementação de soluções ponta a ponta, utilizando tecnologias modernas como TypeScript, React, Node.js e Docker",
      "Gerenciamento de infraestrutura em ambientes de nuvem, com configuração e manutenção de bancos de dados",
      "Projeto principal: Integrado - aplicativo de gestão empresarial completa, desenvolvido com autonomia total no processo de design, implementação e manutenção"
    ],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Prisma ORM", "Supabase", "Nginx"]
  },
  {
    title: "Desenvolvedor Front-end",
    company: "Life Tecnologia e Consultoria",
    period: "09/2023 - 01/2024",
    description: [
      "Desenvolvi mais de 20 aplicações web completas, tanto front-end quanto back-end, com foco na análise de requisitos especificados",
      "Gerenciei bancos de dados relacionais, otimizando consultas para melhorar a velocidade do sistema",
      "Apliquei boas práticas de qualidade de código ao criar testes automatizados para garantir uma experiência do usuário fluida",
      "Colaborei em equipes, aprimorando habilidades de comunicação interpessoal por meio de feedback"
    ],
    technologies: ["TypeScript", "React", "Laravel"]
  },
  {
    title: "Desenvolvedor Full Stack",
    company: "Freelancer",
    period: "02/2024 - 11/2024",
    description: [
      "Desenvolvi projetos de infraestrutura, gerenciando o tempo de forma eficaz para aumentar a satisfação dos usuários",
      "Entreguei código limpo e manutenível ao desenvolvedor em chefe, elevando a qualidade do produto",
      "Organizei aplicações com o cliente, garantindo uma boa comunicação e superando suas expectativas",
      "Projeto freelance mais recente: lokinhoskins.com.br"
    ],
    technologies: ["Next.js", "TypeScript"]
  }
];

export const education: Education[] = [
  {
    title: "Ciências da Computação",
    institution: "Centro Universitário de Brasília - UniCEUB",
    period: "01/2022 - 12/2025",
    description: [
      "Estou concluindo o curso com foco em tecnologias avançadas e aplicações práticas",
      "Desenvolvi projetos utilizando Inteligência Artificial e Machine Learning para solução de problemas complexos",
      "Implementei sistemas distribuídos com arquiteturas de microserviços utilizando Docker e Kubernetes",
      "Participei de competições de programação e hackathons, aprimorando minhas habilidades de resolução de problemas",
      "Explorei tecnologias emergentes como blockchain e computação em nuvem em projetos acadêmicos"
    ],
    websiteUrl: "https://www.uniceub.br/"
  }
];

export const skills: Skill[] = [
  {
    category: "Front-end",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Styled-components", "Tailwind CSS", "Figma", "Bootstrap"]
  },
  {
    category: "Back-end",
    items: ["Node.js", "TypeScript", "Nest.js", "Prisma ORM", "Jest", "Supertest", "Python", "PHP"]
  },
  {
    category: "Banco de Dados",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "SQL", "Supabase", "Firebase"]
  },
  {
    category: "Infraestrutura",
    items: ["APIs RESTful", "Docker", "GitHub Actions", "Nginx", "Vercel"]
  },
  {
    category: "Metodologias e Ferramentas",
    items: ["Git", "Clean Code", "Métodos Ágeis", "SCRUM", "Programação Orientada a Objetos", "Trello", "Excel", "Jira"]
  },
  {
    category: "Idiomas",
    items: ["Inglês - Intermediário"]
  }
];

export const contactInfo = {
  email: "lucasao744@gmail.com",
  phone: "(61) 98352-2246",
  location: "Brasília - DF",
  github: "lucas0302",
  linkedIn: "/in/lucas-araujo-de-oliveira"
};

export const personalInfo = {
  name: "Lucas Araújo de Oliveira",
  title: "Desenvolvedor Full Stack",
  summary:
    "Desenvolvedor Full Stack que transforma necessidades de negócio em produtos web elegantes, funcionais e escaláveis. Experiência em todo o ciclo de desenvolvimento."
};
