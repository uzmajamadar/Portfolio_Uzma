import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "AI & Data",
    skills: ["Scikit-learn", "LangChain", "LLMs", "RAG", "NLP"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Flask", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & Tools",
    skills: ["Git", "Vercel", "Render"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl lg:text-5xl font-serif font-bold text-center mb-16"
          data-testid="text-skills-heading"
        >
          Skills
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-lg font-semibold text-muted-foreground mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm px-4 py-1.5"
                    data-testid={`skill-${groupIndex}-${skillIndex}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
