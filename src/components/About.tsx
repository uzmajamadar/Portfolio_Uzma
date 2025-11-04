import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@assets/generated_images/uzma id1.jpg";

export default function About() {
  const achievements = [
    
    { year: "2025", title: "Software Engineer Inter at DK Techno's" },
    { year: "2025", title: "Oracle Data Science Professional"},
    { year: "2024", title: "Deep Learning Certification" },
    { year: "2023", title: "Data Analytics(Cisco) Certification" },
  ];

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
              I’m a creative developer and design engineer passionate about crafting intelligent, user-focused digital experiences. With hands-on experience in AI, machine learning, and full-stack development, I love transforming ideas into products that blend logic, creativity, and real-world impact.
            </p>
            <p
              className="text-lg text-muted-foreground"
              data-testid="text-bio-2"
            >
              I’m driven by curiosity, design thinking, and the belief that technology should not just work — it should think.
            </p>
            <p
              className="text-lg text-muted-foreground"
              data-testid="text-bio-3"
            >
              Currently, I’m focused on integrating AI into real-world solutions that make experiences smarter, faster, and more human.
            </p>

            <div className="pt-6">
              <h3
                className="text-xl font-semibold mb-4"
                data-testid="text-achievements-heading"
              >
                Key Milestones
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="p-4 hover-elevate transition-all"
                    data-testid={`card-achievement-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <Badge
                        variant="secondary"
                        data-testid={`badge-year-${index}`}
                      >
                        {achievement.year}
                      </Badge>
                      <span
                        className="text-sm"
                        data-testid={`text-achievement-${index}`}
                      >
                        {achievement.title}
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
