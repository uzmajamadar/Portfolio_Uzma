import { Card } from "@/components/ui/card";
import { BrainCircuit, Code2, Server, Cloud, Bot, GitBranch , BarChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: BrainCircuit,
    skills: [
      "Python", "Scikit-learn", "TensorFlow", "PyTorch",
      "Deep Learning", "Computer Vision", "NLP",
      "Large Language Models (LLMs)", "LangChain", "RAG Systems",
      
    ],
  },
  {
    title: "Data Science & Analytics",
    icon: BarChart,
    skills: [
      "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau",
      "Data Cleaning", "Exploratory Data Analysis (EDA)", "Feature Engineering",
      "Statistical Modeling", "SQL", "ETL Pipelines", "Data Visualization", "Model Evaluation"
    ],
  },
  {
    title: "Frontend Development (Fundamentals)",
    icon: Code2,
    skills: [
      "React", "Next.js", "TypeScript",
      "Tailwind CSS", "Responsive Layouts",
      "Functional UI Building",
      "Component Design", "State Management"
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      "Node.js", "Flask", "FastAPI",
      "RESTful API Development",
      "PostgreSQL", "MongoDB", "SQLAlchemy",
      "Authentication", "API Integration"
    ],
  },
  {
    title: "Cloud, DevOps & Deployment",
    icon: Cloud,
    skills: [
      "Render", "Vercel", "Netlify",
      "Docker", "CI/CD (GitHub Actions)",
      "Git & Version Control"
    ],
  },
  {
    title: "Generative AI & Automation",
    icon: Bot,
    skills: [
      "Prompt Engineering", "LangChain", "Gemini API", "OpenAI",
      "Agentic AI Systems", "RAG Pipelines",
      "Intelligent Task Automation", "AI Integration"
    ],
  },
  {
    title: "Creative & Analytical Mindset",
    icon: GitBranch,
    skills: [
      "Problem-Solving", "Research",
      "AI-driven Product Building",
      "Scalability", "Usability", "Innovation"
    ],
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
          Skills & Expertise
        </h2>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const isLast = categoryIndex === skillCategories.length - 1;
            return (
              <Card
                key={categoryIndex}
                className={`p-6 hover-elevate transition-all flex flex-col ${
                  isLast ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
                data-testid={`card-skill-category-${categoryIndex}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex-grow flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm"
                      data-testid={`skill-${categoryIndex}-${skillIndex}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}