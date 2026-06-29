import { Card } from "@/components/ui/card";
import profileImage from "@assets/generated_images/uzma id1.jpg";

const timeline = [
  { emoji: "🎓", title: "B.Tech Artificial Intelligence & Data Science" },
  { emoji: "🏢", title: "Software Engineer Intern \u2013 DK Techno's" },
  { emoji: "🏆", title: "Oracle Data Science Professional" },
  { emoji: "📜", title: "Deep Learning Specialization" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl lg:text-5xl font-serif font-bold text-center mb-16"
          data-testid="text-about-heading"
        >
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-xl w-full max-w-md aspect-square object-cover"
              data-testid="img-profile"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground" data-testid="text-bio-1">
              I'm a Software Engineer with experience building AI-powered applications, scalable backend systems, and modern web platforms. My work spans machine learning, generative AI, full-stack development, and cloud deployment.
            </p>
            <p
              className="text-lg text-muted-foreground"
              data-testid="text-bio-2"
            >
              I enjoy designing products that combine strong engineering principles with practical business value — from training deep learning models to architecting RESTful APIs and building responsive frontends.
            </p>
            <p
              className="text-lg text-muted-foreground"
              data-testid="text-bio-3"
            >
              Currently, I'm focused on integrating AI into real-world solutions that make experiences smarter, faster, and more human.
            </p>

            <div className="pt-6">
              <h3
                className="text-xl font-semibold mb-4"
                data-testid="text-achievements-heading"
              >
                Timeline
              </h3>
              <div className="space-y-3">
                {timeline.map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 hover-elevate transition-all"
                    data-testid={`card-achievement-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xl">{item.emoji}</span>
                      <span
                        className="text-sm font-medium"
                        data-testid={`text-achievement-${index}`}
                      >
                        {item.title}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
