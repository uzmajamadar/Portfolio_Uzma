import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  "Requirement Analysis",
  "System Design",
  "Development",
  "Testing",
  "Deployment",
  "Monitoring",
];

export default function BuildProcess() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl lg:text-5xl font-serif font-bold text-center mb-16"
          data-testid="text-process-heading"
        >
          How I Build Software
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="hidden md:flex items-center justify-between gap-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-2 flex-1">
                <Card className="p-4 text-center flex-1 hover-elevate transition-all">
                  <span className="text-sm font-medium">{step}</span>
                </Card>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden space-y-3">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                  {index + 1}
                </span>
                <Card className="p-4 flex-1">
                  <span className="text-sm font-medium">{step}</span>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
