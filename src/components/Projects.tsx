import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink, Github, ListChecks } from "lucide-react";
import project1 from "@assets/generated_images/Project_1_dashboard_app_2b0bdefd.jpg";
import project2 from "@assets/generated_images/Project_2_ecommerce_site_b408a076.jpg";
import project3 from "@assets/generated_images/Project_3_mobile_app_63d368c9.png";
import project4 from "@assets/generated_images/Project_4_task_manager_481fa7a0.png";
import project5 from "@assets/generated_images/Project_5_social_platform_96d33c6a.png";

const featuredProjects = [
  {
    title: "CareWatch – AI Health Monitoring System",
    description:
      "AI-powered elderly monitoring platform with real-time activity tracking, anomaly detection, and emergency alerts.",
    image: project3,
    tags: ["Python", "TensorFlow", "React", "LangChain", "FAISS", "Node.js", "FastAPI"],
    highlights: [
      "LSTM-based fall detection",
      "LangChain + FAISS RAG assistant",
      "FastAPI backend",
      "React dashboard",
      "Real-time alerts",
    ],
    liveLink:
      "https://calm-wildcat-bc5.notion.site/CAREWATCH-AI-Powered-Elderly-Behaviour-Monitoring-Dashboard-25ddc3b2cfc280ab9a6bec23ab8df203",
    githubLink: "#",
    linkLabel: "Case Study",
  },
  {
    title: "ZapFox – Workflow Automation SaaS",
    description:
      "No-code automation tool similar to Zapier, enabling users to connect apps through dynamic workflow nodes and triggers.",
    image: project1,
    tags: ["Next.js", "Node.js", "PostgreSQL", "OAuth2.0", "React Flow"],
    highlights: [
      "Drag-and-drop workflow builder",
      "OAuth integrations",
      "PostgreSQL workflow engine",
      "Real-time automation execution",
    ],
    liveLink: "https://zap-fox-ebon.vercel.app/",
    githubLink: "https://github.com/uzmajamadar/ZapFox",
    linkLabel: "Live Demo",
  },
  {
    title: "Trippy-AI Buddy",
    description:
      "Intelligent travel planning platform that uses generative AI to create personalized itineraries and suggest destinations.",
    image: project2,
    tags: ["Python", "Flask", "LangChain", "Gemini API", "SQLAlchemy"],
    highlights: [
      "Generative AI trip planning",
      "Personalized destination suggestions",
      "Budget-aware recommendations",
      "Flask + SQLAlchemy backend",
    ],
    liveLink: "https://trippy-an-ai-travel-buddy.onrender.com/",
    githubLink: "https://github.com/uzmajamadar/Trippy",
    linkLabel: "Live Demo",
  },
];

const otherProjects = [
  {
    title: "Converse AI",
    description:
      "AI-powered business automation platform with real-time chatbot, payment integration, and campaign management.",
    tags: ["Next.js", "TypeScript", "AI Chatbot", "Stripe", "Clerk", "Prisma", "Pusher"],
    githubLink: "https://github.com/uzmajamadar/Converse-AI",
  },
  {
    title: "Fake News Detection",
    description:
      "Machine learning model for detecting misleading news content using NLP, TF-IDF vectorization, and logistic regression.",
    tags: ["Python", "NLTK", "Scikit-learn", "Pandas", "Streamlit", "BERT"],
    githubLink: "https://github.com/uzmajamadar/FakeNewsDetection",
  },
  {
    title: "Fall Detection Model",
    description:
      "Deep learning-based fall detection system using SisFall and MobiAct datasets with signal preprocessing and LSTM networks.",
    tags: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib", "TensorFlow", "LSTM"],
    githubLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl lg:text-5xl font-serif font-bold text-center mb-16"
          data-testid="text-projects-heading"
        >
          Featured Projects
        </h2>

        <div className="space-y-12 max-w-7xl mx-auto">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all"
              data-testid={`card-featured-${index}`}
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative overflow-hidden aspect-video md:aspect-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-featured-${index}`}
                  />
                </div>

                <div className="md:col-span-3 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-2xl lg:text-3xl font-serif font-semibold mb-3"
                      data-testid={`text-featured-title-${index}`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-muted-foreground mb-4"
                      data-testid={`text-featured-description-${index}`}
                    >
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-2">
                        <ListChecks className="w-4 h-4" /> Highlights
                      </h4>
                      <ul className="space-y-1">
                        {project.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          data-testid={`badge-featured-${index}-${tagIndex}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.liveLink && project.liveLink !== "#" ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="default"
                          size="sm"
                          data-testid={`button-featured-live-${index}`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {project.linkLabel || "View Project"}
                        </Button>
                      </a>
                    ) : (
                      <Button variant="default" size="sm" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.linkLabel || "Case Study"}
                      </Button>
                    )}
                    {project.githubLink && project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          data-testid={`button-featured-code-${index}`}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="max-w-4xl mx-auto mt-20">
            <Accordion type="single" collapsible>
              <AccordionItem value="other-projects">
                <AccordionTrigger className="text-xl font-serif font-semibold justify-center gap-2">
                  Other Projects ({otherProjects.length})
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                    {otherProjects.map((project, index) => (
                      <Card
                        key={index}
                        className="p-5 hover-elevate transition-all"
                        data-testid={`card-other-${index}`}
                      >
                        <h4
                          className="font-semibold mb-2"
                          data-testid={`text-other-title-${index}`}
                        >
                          {project.title}
                        </h4>
                        <p
                          className="text-sm text-muted-foreground mb-3"
                          data-testid={`text-other-description-${index}`}
                        >
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className="text-xs"
                              data-testid={`badge-other-${index}-${tagIndex}`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {project.githubLink && project.githubLink !== "#" && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline" size="sm">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </a>
                        )}
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>
    </section>
  );
}
