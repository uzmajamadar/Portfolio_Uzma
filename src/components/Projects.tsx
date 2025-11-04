import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@assets/generated_images/Project_1_dashboard_app_2b0bdefd.jpg";
import project2 from "@assets/generated_images/Project_2_ecommerce_site_b408a076.jpg";
import project3 from "@assets/generated_images/Project_3_mobile_app_63d368c9.png";
import project4 from "@assets/generated_images/Project_4_task_manager_481fa7a0.png";
import project5 from "@assets/generated_images/Project_5_social_platform_96d33c6a.png";
import project6 from "@assets/generated_images/Project_6_portfolio_site_8c1d58e4.png";

const projects = [

  {
    title: "ZapFox – Workflow Automation SaaS",
    description: "No-code automation tool similar to Zapier, enabling users to connect apps like Google Drive, Slack, and Notion through dynamic workflow nodes and triggers.",
    image: project1,
    tags: ["Next.js", "Node.js", "PostgreSQL", "OAuth2.0", "React Flow"],
    liveLink: "https://zap-fox-ebon.vercel.app/",
    githubLink: "https://github.com/uzmajamadar/ZapFox",
    featured: true,
  },
  {
    title: "Trippy-AI Buddy ",
    description: "Intelligent travel planning platform that uses generative AI to create personalized itineraries, suggest destinations, and recommend stays based on user preferences and budget.",
    image: project2,
    tags: ["Python", "Flask", "LangChain", "Gemini API", "SQLAlchemy"],
    liveLink: "https://trippy-an-ai-travel-buddy.onrender.com/",
    githubLink: "https://github.com/uzmajamadar/Trippy",
    featured: true,
  },
  {
    title: "CareWatch – AI Health Monitoring System",
    description:
      "AI-powered elderly care platform featuring real-time activity monitoring, anomaly detection, fall prediction, and smart health analytics with emergency alerts.",
    image: project3,
    tags: ["Python", "TensorFlow", "React", "LangChain", "FAISS","Node.js","FastApi"],
    liveLink: "https://calm-wildcat-bc5.notion.site/CAREWATCH-AI-Powered-Elderly-Behaviour-Monitoring-Dashboard-25ddc3b2cfc280ab9a6bec23ab8df203",
    githubLink: "#",
    featured: false,
  },
  
  // ... existing code ...
  {
    title: "Converse AI",
    description: "AI-powered business automation platform with real-time chatbot, payment integration, and campaign management.",
    image: project4,
    tags: ["Next.js", "TypeScript", "AI Chatbot", "Stripe", "Clerk", "Prisma", "Pusher"],
    githubLink: "https://github.com/uzmajamadar/Converse-AI",
    featured: false,
  },
  {
    title: "Fake News Detection",
    description:
      "Machine learning model for detecting misleading news content using NLP, TF-IDF vectorization, and logistic regression for text classification.",
    image: project5,
    tags: ["Python", "NLTK", "Scikit-learn", "Pandas", "Streamlit", "BERT"],
    githubLink: "https://github.com/uzmajamadar/FakeNewsDetection",
    featured: false,
  },
// ... existing code ...
  {
    title: "Fall Detection Model",
    description:
      "Deep learning-based fall detection system using SisFall and MobiAct datasets with signal preprocessing, feature extraction, and synthetic data augmentation.",
    image:  project6,
    tags: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib","tensorflow","LSTM"],
    featured: false,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover-elevate transition-all ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              data-testid={`card-project-${index}`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-project-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 space-y-4">
                <h3
                  className="text-2xl lg:text-3xl font-serif font-semibold"
                  data-testid={`text-project-title-${index}`}
                >
                  {project.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  data-testid={`text-project-description-${index}`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      data-testid={`badge-tag-${index}-${tagIndex}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="default"
                        size="sm"
                        data-testid={`button-view-project-${index}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </a>
                  )}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      data-testid={`button-github-${index}`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
