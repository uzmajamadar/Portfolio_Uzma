import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ChevronDown, ChevronUp } from "lucide-react";

const certifications = [
  { title: "Oracle Data Science Professional", year: "2025" },
  { title: "Deep Learning Certification", year: "2024" },
  { title: "Data Analytics (Cisco)", year: "2023" },
];

const extraCertifications = [
  { title: "AWS Cloud Practitioner Essentials", year: "2024" },
  { title: "Google Data Analytics Certificate", year: "2024" },
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll
    ? [...certifications, ...extraCertifications]
    : certifications;

  return (
    <section id="certifications" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl lg:text-5xl font-serif font-bold text-center mb-16"
          data-testid="text-certifications-heading"
        >
          Certifications
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {visible.map((cert, index) => (
            <Card
              key={index}
              className="p-4 hover-elevate transition-all"
              data-testid={`card-certification-${index}`}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-md bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3
                    className="font-medium"
                    data-testid={`text-cert-title-${index}`}
                  >
                    {cert.title}
                  </h3>
                </div>
                <Badge variant="secondary">{cert.year}</Badge>
              </div>
            </Card>
          ))}
        </div>

        {extraCertifications.length > 0 && (
          <div className="text-center mt-6">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              data-testid="button-toggle-certifications"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="ml-2 h-4 w-4" /></>
              ) : (
                <>View All <ChevronDown className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
