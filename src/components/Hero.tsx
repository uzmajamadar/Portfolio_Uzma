import { Button } from "@/components/ui/button";
import { Download, Send, Github, Linkedin, Check } from "lucide-react";
import heroBg from "@assets/generated_images/Hero_background_workspace_image_c8b57935.png";

const highlights = [
  "AI & Machine Learning",
  "Full-Stack Development",
  "Backend APIs",
  "Generative AI",
  "Cloud Deployment",
];

const Hero = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center text-white px-4 py-20 max-w-4xl mx-auto">
        <p
          className="text-sm md:text-base font-medium uppercase tracking-widest text-white/60 mb-4 animate-in fade-in slide-in-from-top-4 duration-700"
        >
          Software Engineer
        </p>
        <h1
          className="text-4xl md:text-6xl font-bold tracking-tight animate-in fade-in slide-in-from-top-4 duration-700"
          data-testid="hero-title"
        >
          Uzma Jamadar
        </h1>
        <p
          className="mt-4 text-lg md:text-2xl text-white/80 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
          data-testid="hero-subtitle"
        >
          Building Intelligent Software with AI & Modern Web Technologies
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base text-white/70 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          {highlights.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" /> {item}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <a
            href="https://drive.google.com/file/d/1JzESpfWnSNA7-Z7pKfrPBnII6VWhIIZa/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md"
            >
              <Download className="mr-2 h-5 w-5" /> Resume
            </Button>
          </a>

          <a href="https://github.com/uzmajamadar" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 hover:bg-white/10 text-white border-white/30 backdrop-blur-md"
            >
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Button>
          </a>

          <a href="https://www.linkedin.com/in/uzma-jamadar-6a05b0236/" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 hover:bg-white/10 text-white border-white/30 backdrop-blur-md"
            >
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Button>
          </a>

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="bg-white/5 hover:bg-white/10 text-white border-white/30 backdrop-blur-md"
          >
            <Send className="mr-2 h-5 w-5" /> Contact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
