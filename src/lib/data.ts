export type Language = "pt" | "en";

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

export type SkillCategoryKey = "frontend" | "backend" | "database" | "infra" | "tools" | "languages";

export interface Skill {
  key: SkillCategoryKey;
  category: string;
  items: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
}

interface Content {
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  personalInfo: PersonalInfo;
}

export const contactInfo = {
  email: "lucasao744@gmail.com",
  phone: "(61) 98352-2246",
  location: "Brasília - DF",
  github: "lucas0302",
  linkedIn: "/in/lucas-araujo-de-oliveira"
};

const name = "Lucas Araújo de Oliveira";

const pt: Content = {
  projects: [
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
      imageUrl: "/assets/lokinho-v1.gif",
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
      id: "lokinhopremios",
      title: "Lokinho Prêmios",
      description: "Plataforma de prêmios focada no público de CS2, com painel admin completo e pagamentos integrados.",
      longDescription:
        "Plataforma de prêmios voltada para o público de CS2, com vitrine de skins e sorteios para a comunidade do Lokinho. O sistema conta com um painel administrativo que permite gerenciar toda a plataforma, desde a troca de títulos até as cores do site, além de telas de análise de resultados, integração com o sistema de pagamentos do Efí Bank e diversas outras telas. Foi desenvolvido em Next.js com TypeScript e Tailwind CSS, com o back-end no próprio Next.js usando Prisma e Supabase, e a aplicação containerizada em Docker.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "Docker", "Efí Bank"],
      imageUrl: "/assets/lokinhopremios.gif",
      demoUrl: "https://www.lokinhopremios.com",
      highlights: [
        "Painel admin para gerenciar todo o sistema, de títulos às cores do site",
        "Telas de análise de resultados",
        "Integração com o sistema de pagamentos do Efí Bank",
        "Vitrine de prêmios com cards destacando cada skin de CS2 e seu valor",
        "Back-end integrado no próprio Next.js com Prisma e Supabase",
        "Aplicação containerizada com Docker"
      ]
    },
    {
      id: "ascesa",
      title: "Ascesa",
      description: "Plataforma da associação dos cooperados do Sicoob, com vantagens exclusivas em mais de 27 mil estabelecimentos.",
      longDescription:
        "A Ascesa é a associação dos cooperados do banco Sicoob e oferece vantagens exclusivas em mais de 27 mil estabelecimentos em todo o Brasil. O sistema conta com painel administrativo, perfil para os associados gerenciarem a própria conta, notícias, vitrine de produtos, convênios, chat de suporte ao vivo com Socket.io e outras telas. O front-end foi feito em Next.js e o back-end em NestJS com Prisma e PostgreSQL, tudo em TypeScript e containerizado com Docker. A plataforma também conta com um aplicativo mobile desenvolvido em Flutter.",
      technologies: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Docker", "Flutter", "Socket.io"],
      imageUrl: "/assets/ascesa.gif",
      demoUrl: "https://ascesa.com.br",
      highlights: [
        "Painel administrativo para gerenciar o conteúdo da plataforma",
        "Perfil do associado para gerenciar a própria conta",
        "Telas de notícias e vitrine de produtos",
        "Tela de convênios com vantagens em mais de 27 mil estabelecimentos",
        "Chat de suporte ao vivo em tempo real com Socket.io",
        "Aplicativo mobile desenvolvido em Flutter",
        "Back-end em NestJS com Prisma e PostgreSQL",
        "Aplicação containerizada com Docker"
      ]
    },
    {
      id: "track-plus",
      title: "Track+",
      description: "Sistema interno para controle e rastreamento da expedição de produtos alimentícios.",
      longDescription:
        "Sistema web responsivo que digitaliza o controle de expedição de produtos alimentícios, antes feito manualmente. Permite registrar cada expedição com dados do veículo (placa, condições sanitárias e temperatura), lotes de produção, produtos, quantidades, notas fiscais e clientes, e gera automaticamente os relatórios internos diários e o relatório mensal exigido pelo DIPOVA/Ministério da Agricultura, exportados em Excel. O front-end foi feito em Next.js com Tailwind CSS e o back-end em NestJS com Prisma e PostgreSQL, com autenticação JWT e controle de acesso por perfil.",
      technologies: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "JWT", "ExcelJS"],
      imageUrl: "/assets/rastreio-alimentos.png",
      highlights: [
        "Registro de expedições com veículo, condições sanitárias e temperatura (0°C a 5°C)",
        "Controle de lotes, produtos, quantidades e notas fiscais",
        "Cadastro de clientes, produtos, veículos e usuários",
        "Relatório interno diário e relatório mensal para o DIPOVA",
        "Exportação dos relatórios em Excel (.xlsx)",
        "Dashboard com indicadores e autenticação JWT com perfis de acesso"
      ]
    }
  ],
  experiences: [
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
  ],
  education: [
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
  ],
  skills: [
    {
      key: "frontend",
      category: "Front-end",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Styled-components", "Tailwind CSS", "Figma", "Bootstrap"]
    },
    {
      key: "backend",
      category: "Back-end",
      items: ["Node.js", "TypeScript", "Nest.js", "Prisma ORM", "Jest", "Supertest", "Python", "PHP"]
    },
    {
      key: "database",
      category: "Banco de Dados",
      items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "SQL", "Supabase", "Firebase"]
    },
    {
      key: "infra",
      category: "Infraestrutura",
      items: ["APIs RESTful", "Docker", "GitHub Actions", "Nginx", "Vercel", "Hetzner", "Prometheus", "Morpheus"]
    },
    {
      key: "tools",
      category: "Metodologias e Ferramentas",
      items: ["Git", "Clean Code", "Métodos Ágeis", "SCRUM", "Programação Orientada a Objetos", "Trello", "Excel", "Jira"]
    },
    {
      key: "languages",
      category: "Idiomas",
      items: ["Português - Fluente", "Inglês - Intermediário"]
    }
  ],
  personalInfo: {
    name,
    title: "Desenvolvedor Full Stack",
    summary:
      "Desenvolvedor Full Stack que transforma necessidades de negócio em produtos web elegantes, funcionais e escaláveis. Experiência em todo o ciclo de desenvolvimento."
  }
};

const en: Content = {
  projects: [
    {
      ...pt.projects[0],
      description: "Complete raffle website, covering both front-end and back-end.",
      longDescription:
        "Raffle website built for the client Lokinho with a complete architecture. The front-end was developed with React and Next.js, while the back-end uses Express, Prisma and PostgreSQL. The infrastructure includes Docker and Nginx, with integrations to external APIs such as Twitch and Mercado Pago.",
      highlights: [
        "Intuitive interface for joining raffles",
        "Admin dashboard for management",
        "Twitch integration for live events",
        "Secure payments via Mercado Pago",
        "Real-time notifications with Socket.io",
        "Redis optimization for caching"
      ]
    },
    {
      ...pt.projects[1],
      description: "Prize platform for the CS2 audience, with a full admin dashboard and integrated payments.",
      longDescription:
        "Prize platform aimed at the CS2 audience, with a skin showcase and giveaways for Lokinho's community. The system includes an admin dashboard that manages the whole platform, from changing titles to the site's colors, plus results analysis screens, integration with Efí Bank's payment system and many other screens. It was built with Next.js, TypeScript and Tailwind CSS, with the back-end inside Next.js itself using Prisma and Supabase, and the application containerized with Docker.",
      highlights: [
        "Admin dashboard to manage the whole system, from titles to site colors",
        "Results analysis screens",
        "Integration with Efí Bank's payment system",
        "Prize showcase with cards highlighting each CS2 skin and its value",
        "Back-end built into Next.js with Prisma and Supabase",
        "Application containerized with Docker"
      ]
    },
    {
      ...pt.projects[2],
      description: "Platform for the association of Sicoob bank co-op members, with exclusive perks at more than 27,000 businesses.",
      longDescription:
        "Ascesa is the association of Sicoob bank co-op members and offers exclusive perks at more than 27,000 businesses across Brazil. The system includes an admin dashboard, a profile where members manage their own account, news, a product showcase, partnerships, a live support chat with Socket.io and other screens. The front-end was built with Next.js and the back-end with NestJS, Prisma and PostgreSQL, all in TypeScript and containerized with Docker. The platform also has a mobile app built with Flutter.",
      highlights: [
        "Admin dashboard to manage the platform's content",
        "Member profile to manage their own account",
        "News and product showcase screens",
        "Partnerships screen with perks at more than 27,000 businesses",
        "Real-time live support chat with Socket.io",
        "Mobile app built with Flutter",
        "NestJS back-end with Prisma and PostgreSQL",
        "Application containerized with Docker"
      ]
    },
    {
      ...pt.projects[3],
      description: "Internal system for controlling and tracking the shipment of food products.",
      longDescription:
        "Responsive web system that digitizes the shipment control of food products, previously done by hand. It records each shipment with vehicle data (plate, sanitary conditions and temperature), production batches, products, quantities, invoices and customers, and automatically generates the daily internal reports and the monthly report required by DIPOVA/Ministry of Agriculture, exported to Excel. The front-end was built with Next.js and Tailwind CSS and the back-end with NestJS, Prisma and PostgreSQL, with JWT authentication and role-based access control.",
      highlights: [
        "Shipment records with vehicle, sanitary conditions and temperature (0°C to 5°C)",
        "Control of batches, products, quantities and invoices",
        "Management of customers, products, vehicles and users",
        "Daily internal report and monthly report for DIPOVA",
        "Report export to Excel (.xlsx)",
        "Dashboard with indicators and JWT authentication with access roles"
      ]
    }
  ],
  experiences: [
    {
      ...pt.experiences[0],
      title: "Full Stack Developer",
      company: "Capisite Digital Services",
      period: "01/2024 - Present",
      description: [
        "End-to-end development of business applications, focused on integrated management and process optimization",
        "Implementation of end-to-end solutions using modern technologies such as TypeScript, React, Node.js and Docker",
        "Infrastructure management in cloud environments, including database setup and maintenance",
        "Main project: Integrado - a complete business management app, built with full ownership of design, implementation and maintenance"
      ]
    },
    {
      ...pt.experiences[1],
      title: "Front-end Developer",
      company: "Life Tecnologia e Consultoria",
      description: [
        "Built more than 20 complete web applications, both front-end and back-end, focused on analyzing specified requirements",
        "Managed relational databases, optimizing queries to improve system speed",
        "Applied code quality best practices by writing automated tests to ensure a smooth user experience",
        "Collaborated in teams, improving interpersonal communication skills through feedback"
      ]
    },
    {
      ...pt.experiences[2],
      title: "Full Stack Developer",
      description: [
        "Developed infrastructure projects, managing time effectively to increase user satisfaction",
        "Delivered clean, maintainable code to the lead developer, raising product quality",
        "Organized applications with the client, ensuring good communication and exceeding expectations",
        "Most recent freelance project: lokinhoskins.com.br"
      ]
    }
  ],
  education: [
    {
      ...pt.education[0],
      title: "Computer Science",
      description: [
        "Finishing my degree with a focus on advanced technologies and practical applications",
        "Built projects using Artificial Intelligence and Machine Learning to solve complex problems",
        "Implemented distributed systems with microservice architectures using Docker and Kubernetes",
        "Took part in programming competitions and hackathons, sharpening my problem-solving skills",
        "Explored emerging technologies such as blockchain and cloud computing in academic projects"
      ]
    }
  ],
  skills: [
    { ...pt.skills[0] },
    { ...pt.skills[1] },
    { ...pt.skills[2], category: "Databases" },
    { ...pt.skills[3], category: "Infrastructure" },
    {
      key: "tools",
      category: "Methodologies & Tools",
      items: ["Git", "Clean Code", "Agile", "SCRUM", "Object-Oriented Programming", "Trello", "Excel", "Jira"]
    },
    {
      key: "languages",
      category: "Languages",
      items: ["Portuguese - Fluent", "English - Intermediate"]
    }
  ],
  personalInfo: {
    name,
    title: "Full Stack Developer",
    summary:
      "Full Stack Developer who turns business needs into elegant, functional and scalable web products. Experience across the entire development lifecycle."
  }
};

export const content: Record<Language, Content> = { pt, en };

export const uiText = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato"
    },
    themeToDark: "Ativar modo escuro",
    themeToLight: "Ativar modo claro",
    switchLanguage: "Switch to English",
    openMenu: "Abrir menu",
    hero: {
      contact: "Entre em contato",
      projects: "Ver projetos",
      scrollDown: "Role para baixo"
    },
    about: {
      title: "Sobre Mim",
      journey:
        "Minha jornada na programação começou com pequenos experimentos e evoluiu para o desenvolvimento de soluções corporativas completas. Gosto de traduzir necessidades de negócio em experiências digitais eficientes, mantendo o foco em código limpo e escalável.",
      githubTitle: "Meu Portfólio no GitHub",
      githubText:
        "Construí mais de 50 projetos em diferentes tecnologias e áreas de aplicação. Essa variedade mostra minha evolução constante como desenvolvedor e minha curiosidade por novos desafios.",
      featuredTitle: "Projetos Destacados",
      featured: [
        { name: "LokinhoSkins", text: "Plataforma completa de rifas com automação de pagamentos, integrações externas e painel administrativo." },
        { name: "Lokinho Prêmios", text: "Plataforma de prêmios para o público de CS2, com painel admin completo, análise de resultados e pagamentos via Efí Bank." },
        { name: "Ascesa", text: "Plataforma da associação dos cooperados do Sicoob, com painel admin, perfil do associado, notícias, vitrine, convênios e app mobile em Flutter." },
        { name: "Track+", text: "Sistema interno de rastreio da expedição de alimentos, com relatórios para o DIPOVA exportados em Excel." },
        { name: "Cadastro de Task", text: "Um aplicativo para gerenciar tarefas diárias, desenvolvido com NestJS, incluindo cadastro de usuários e autenticação JWT." }
      ],
      stats: {
        repositories: "Repositórios",
        technologies: "Tecnologias",
        years: "Anos de Código"
      }
    },
    experience: {
      title: "Experiência & Educação",
      professional: "Experiência Profissional",
      education: "Educação"
    },
    projects: {
      title: "Projetos",
      details: "Ver detalhes",
      viewCode: "Ver código no GitHub",
      viewDemo: "Ver demonstração"
    },
    projectDetail: {
      eyebrow: "Projeto",
      technologies: "Tecnologias",
      links: "Links",
      notFound: "Projeto não encontrado",
      backHome: "Voltar para a página inicial",
      back: "Voltar para projetos",
      description: "Descrição",
      highlights: "Destaques",
      viewCode: "Ver código no GitHub",
      viewOnline: "Ver projeto online"
    },
    skills: {
      title: "Habilidades"
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Vamos Conversar",
      text: "Estou sempre aberto a novas oportunidades, colaborações ou mesmo para trocar ideias sobre tecnologia.",
      sendMessage: "Enviar mensagem",
      viewProfile: "Ver perfil",
      github: "Ver meus projetos no GitHub"
    },
    footer: {
      rights: "Todos os direitos reservados."
    }
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    themeToDark: "Enable dark mode",
    themeToLight: "Enable light mode",
    switchLanguage: "Mudar para português",
    openMenu: "Open menu",
    hero: {
      contact: "Get in touch",
      projects: "View projects",
      scrollDown: "Scroll down"
    },
    about: {
      title: "About Me",
      journey:
        "My programming journey started with small experiments and grew into building complete enterprise solutions. I enjoy translating business needs into efficient digital experiences, while staying focused on clean, scalable code.",
      githubTitle: "My GitHub Portfolio",
      githubText:
        "I have built more than 50 projects across different technologies and application areas. This variety shows my constant growth as a developer and my curiosity for new challenges.",
      featuredTitle: "Featured Projects",
      featured: [
        { name: "LokinhoSkins", text: "Complete raffle platform with payment automation, external integrations and an admin dashboard." },
        { name: "Lokinho Prêmios", text: "Prize platform for the CS2 audience, with a full admin dashboard, results analysis and Efí Bank payments." },
        { name: "Ascesa", text: "Platform for Sicoob co-op members, with an admin dashboard, member profiles, news, a showcase, partnerships and a Flutter mobile app." },
        { name: "Track+", text: "Internal food shipment tracking system, with DIPOVA reports exported to Excel." },
        { name: "Task Manager", text: "An app for managing daily tasks, built with NestJS, including user registration and JWT authentication." }
      ],
      stats: {
        repositories: "Repositories",
        technologies: "Technologies",
        years: "Years of Coding"
      }
    },
    experience: {
      title: "Experience & Education",
      professional: "Professional Experience",
      education: "Education"
    },
    projects: {
      title: "Projects",
      details: "View details",
      viewCode: "View code on GitHub",
      viewDemo: "View demo"
    },
    projectDetail: {
      eyebrow: "Project",
      technologies: "Technologies",
      links: "Links",
      notFound: "Project not found",
      backHome: "Back to home page",
      back: "Back to projects",
      description: "Description",
      highlights: "Highlights",
      viewCode: "View code on GitHub",
      viewOnline: "View live project"
    },
    skills: {
      title: "Skills"
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Let's Talk",
      text: "I'm always open to new opportunities, collaborations or just to exchange ideas about technology.",
      sendMessage: "Send message",
      viewProfile: "View profile",
      github: "See my projects on GitHub"
    },
    footer: {
      rights: "All rights reserved."
    }
  }
};
