import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import heroBg from "@assets/generated_images/Hero_background_workspace_image_c8b57935.png";

const Hero = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-top-4 duration-700"
          data-testid="hero-title"
        >
          Uzma Jamadar
        </h1>
        <p
          className="mt-4 text-lg md:text-2xl text-white/80 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
          data-testid="hero-subtitle"
        >
          Creative Developer & Design Engineer
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md"
            data-testid="button-view-work"
          >
            View My Work
          </Button>

          <a
            href="https://drive.google.com/file/d/1JzESpfWnSNA7-Z7pKfrPBnII6VWhIIZa/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 hover:bg-white/10 text-white border-white/30 backdrop-blur-md"
              data-testid="button-download-resume"
            >
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </Button>
          </a>

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="bg-white/5 hover:bg-white/10 text-white border-white/30 backdrop-blur-md"
            data-testid="button-get-in-touch"
          >
            <Send className="mr-2 h-5 w-5" /> Get In Touch
          </Button>
        </div>
      </div>
      <div ref={projectsRef} id="projects-ref" className="absolute bottom-0" />
      <div ref={contactRef} id="contact-ref" className="absolute bottom-0" />
    </section>
  );
};

export default Hero;