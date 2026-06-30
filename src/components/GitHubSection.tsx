import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, GitFork, Star, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    label: "12+ Repositories",
    description: "Across AI, full-stack, and open-source projects",
  },
  {
    icon: GitFork,
    label: "AI Projects",
    description: "LLMs, RAG pipelines, deep learning models",
  },
  {
    icon: Star,
    label: "Full-Stack Apps",
    description: "React, Next.js, Node.js, PostgreSQL",
  },
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl lg:text-5xl font-serif font-bold text-center mb-16"
          data-testid="text-github-heading"
        >
          GitHub
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover-elevate transition-all"
                  data-testid={`card-github-${index}`}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="https://github.com/uzmajamadar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                <Github className="mr-2 h-5 w-5" /> View GitHub Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
