import type { SkillCategoryKey } from "@/lib/data";
import { useLanguage } from "@/hooks/use-language";
import { Database, Server, Code, Terminal, Globe, Layers } from "lucide-react";

const getIconForCategory = (key: SkillCategoryKey) => {
  switch (key) {
    case "frontend":
      return <Code className="text-primary" size={24} />;
    case "backend":
      return <Server className="text-primary" size={24} />;
    case "database":
      return <Database className="text-primary" size={24} />;
    case "infra":
      return <Globe className="text-primary" size={24} />;
    case "tools":
      return <Terminal className="text-primary" size={24} />;
    case "languages":
      return <Layers className="text-primary" size={24} />;
    default:
      return <Code className="text-primary" size={24} />;
  }
};

interface SkillBadgeProps {
  skill: string;
}

const badgeMap: Record<string, string> = {
  // Front-end
  "HTML5": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  "CSS3": "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  "JavaScript": "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
  "React.js": "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  "Next.js": "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
  "Styled-components": "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
  "Tailwind CSS": "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  "Figma": "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
  "Bootstrap": "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",

  // Back-end
  "Node.js": "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
  "TypeScript": "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
  "Nest.js": "https://img.shields.io/badge/Nest.js-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
  "Prisma ORM": "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white",
  "Jest": "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",
  "Supertest": "https://img.shields.io/badge/Supertest-000000?style=for-the-badge&logo=node.js&logoColor=white",
  "Python": "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
  "PHP": "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",

  // Banco de Dados
  "MongoDB": "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
  "PostgreSQL": "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
  "MySQL": "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
  "SQLite": "https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white",
  "SQL": "https://img.shields.io/badge/SQL-005C84?style=for-the-badge&logo=amazon-dynamodb&logoColor=white",
  "Supabase": "https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white",
  "Firebase": "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black",

  // Infraestrutura
  "APIs RESTful": "https://img.shields.io/badge/API-005571?style=for-the-badge&logo=fastapi&logoColor=white",
  "Docker": "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white",
  "GitHub Actions": "https://img.shields.io/badge/GitHub_Actions-282a2e?style=for-the-badge&logo=githubactions&logoColor=367cfe",
  "Nginx": "https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white",
  "Vercel": "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
  "Hetzner": "https://img.shields.io/badge/Hetzner-D50C2D?style=for-the-badge&logo=hetzner&logoColor=white",
  "Prometheus":"https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white",
  "Morpheus": "https://img.shields.io/badge/Morpheus-0A2540?style=for-the-badge",

  // Metodologias e Ferramentas
  "Git": "https://img.shields.io/badge/Git-E44C30?style=for-the-badge&logo=git&logoColor=white",
  "Clean Code": "https://img.shields.io/badge/Clean_Code-3F3F3F?style=for-the-badge&logo=elasticstack&logoColor=white",
  "Métodos Ágeis": "https://img.shields.io/badge/Agile-0052CC?style=for-the-badge&logo=airtable&logoColor=white",
  "Agile": "https://img.shields.io/badge/Agile-0052CC?style=for-the-badge&logo=airtable&logoColor=white",
  "SCRUM": "https://img.shields.io/badge/Scrum-6DB33F?style=for-the-badge&logo=iter&logoColor=white",
  "Programação Orientada a Objetos": "https://img.shields.io/badge/POO-3776AB?style=for-the-badge&logo=python&logoColor=white",
  "Object-Oriented Programming": "https://img.shields.io/badge/OOP-3776AB?style=for-the-badge&logo=python&logoColor=white",
  "Trello": "https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white",
  "Excel": "https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white",
  "Jira": "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white",

  // Idiomas
  "Inglês - Intermediário": "https://img.shields.io/badge/Ingl%C3%AAs-Intermedi%C3%A1rio-blue?style=for-the-badge",
  "English - Intermediate": "https://img.shields.io/badge/English-Intermediate-blue?style=for-the-badge"
};

const getBadgeUrl = (skill: string) => {
  return (
    badgeMap[skill] ||
    `https://img.shields.io/badge/${encodeURIComponent(skill)}-333333?style=for-the-badge`
  );
};

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <div className="transition-all hover:scale-105 py-1 flex justify-center">
      <img src={getBadgeUrl(skill)} alt={skill} className="w-full max-w-[160px]" />
    </div>
  );
};

const SkillCategory = ({
  categoryKey,
  category,
  items
}: {
  categoryKey: SkillCategoryKey;
  category: string;
  items: string[];
}) => {
  const icon = getIconForCategory(categoryKey);

  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-4 bg-secondary border border-border p-3 rounded-md shadow-sm">
        {icon}
        <h3 className="text-xl font-semibold text-secondary-foreground">{category}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3">
        {items.map((item) => (
          <SkillBadge key={item} skill={item} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { content, t } = useLanguage();

  return (
    <section id="habilidades" className="section bg-accent">
      <div className="container">
        <h2 className="section-title">{t.skills.title}</h2>

        <div className="space-y-10">
          {content.skills.map((skillGroup) => (
            <SkillCategory
              key={skillGroup.key}
              categoryKey={skillGroup.key}
              category={skillGroup.category}
              items={skillGroup.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
