import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "DK Techno's",
    period: "2025",
    description:
      "Worked on full-stack development and AI-powered features. Built scalable backend services and integrated machine learning models into production applications.",
    tags: ["Python", "React", "PostgreSQL", "AI"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl lg:text-5xl font-serif font-bold text-center mb-16"
          data-testid="text-experience-heading"
        >
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all"
              data-testid={`card-experience-${index}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3
                    className="text-xl font-semibold"
                    data-testid={`text-experience-role-${index}`}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="text-muted-foreground"
                    data-testid={`text-experience-company-${index}`}
                  >
                    {exp.company}
                  </p>
                </div>
                <Badge variant="secondary" className="shrink-0">
                  {exp.period}
                </Badge>
              </div>
              <p
                className="text-muted-foreground mb-4"
                data-testid={`text-experience-description-${index}`}
              >
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="outline"
                    className="text-xs"
                    data-testid={`experience-tag-${index}-${tagIndex}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
