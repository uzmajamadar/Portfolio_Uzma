import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient"; // Import supabase client
import { toast } from "sonner"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on form submission

    const { name, email, message } = formData;

    try {
      const { error } = await supabase.from("contact_messages").insert([
        { name, email, message },
      ]);

      if (error) {
        throw error;
      }

      toast.success("Message sent successfully!"); // Success notification
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error: any) {
      toast.error(`Error sending message: ${error.message}`); // Error notification
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/uzmajamadar" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/uzma-jamadar-6a05b0236/" },
    
  ];

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl lg:text-5xl font-serif font-bold text-center mb-16"
          data-testid="text-contact-heading"
        >
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" data-testid="label-name">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  data-testid="input-name"
                />
              </div>

              <div>
                <Label htmlFor="email" data-testid="label-email">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="message" data-testid="label-message">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                data-testid="button-submit"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl font-serif font-semibold mb-4"
                data-testid="text-direct-contact-heading"
              >
                Let's Work Together
              </h3>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-contact-description">
                I’m always eager to take on new challenges — from innovative AI products to creative web experiences. Let’s connect if you’re hiring or need a developer for your next project!
              </p>

              <div className="flex items-center gap-3 p-4 rounded-md bg-muted/50">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:jamadaruzma04@gmail.com"
                  className="text-lg hover:text-primary transition-colors"
                  data-testid="link-email"
                >
                  jamadaruzma04@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3
                className="text-xl font-semibold mb-4"
                data-testid="text-social-heading"
              >
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      onClick={() => {
                        console.log(`Navigate to ${social.label}`);
                        window.open(social.url, "_blank");
                      }}
                      data-testid={`button-social-${social.label.toLowerCase()}`}
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      {social.label}
                    </Button>
                  );
                })}
              </div>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h4 className="font-semibold mb-2" data-testid="text-newsletter-heading">
                Stay Updated
              </h4>
              <p className="text-sm text-muted-foreground mb-4" data-testid="text-newsletter-description">
                Subscribe to get updates on new projects and articles.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  data-testid="input-newsletter-email"
                />
                <Button
                  onClick={() => console.log("Newsletter subscribe")}
                  data-testid="button-newsletter-subscribe"
                >
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
