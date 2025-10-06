import { useState } from "react";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/LeadForm";

const Portfolio = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const projectTypes = [
    {
      category: "App Prototypes",
      description: "We built this lead generation chatbot in 3 days",
      image: "/placeholder.svg",
      demoLink: "#",
      timeline: "3-4 weeks"
    },
    {
      category: "Business Websites",
      description: "Fully responsive e-commerce store built in 5 weeks",
      image: "/placeholder.svg",
      demoLink: "#",
      timeline: "3-5 weeks"
    },
    {
      category: "Chatbot & AI Projects",
      description: "Advanced AI assistant with custom training and integrations",
      image: "/placeholder.svg",
      demoLink: "#",
      timeline: "4-6 weeks"
    },
    {
      category: "E-commerce Stores",
      description: "Premium online store with 50+ products and analytics",
      image: "/placeholder.svg",
      demoLink: "#",
      timeline: "5-7 weeks"
    },
    {
      category: "No-Code MVPs",
      description: "Fully functional app built without traditional coding",
      image: "/placeholder.svg",
      demoLink: "#",
      timeline: "6-8 weeks"
    },
    {
      category: "Webflow Sites",
      description: "Stunning Webflow site with advanced animations",
      image: "/placeholder.svg",
      demoLink: "#",
      timeline: "4-6 weeks"
    }
  ];

  const handleStartSimilar = (category: string) => {
    setSelectedService(category);
    setShowLeadForm(true);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-muted-foreground">
            Real projects, real results — see what we've built for clients like you
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="package-card hover:shadow-xl transition-all group">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      {project.timeline}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.category}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        View Demo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 btn-hero"
                      onClick={() => handleStartSimilar(project.category)}
                    >
                      Start Similar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="package-card bg-accent/5 border-accent/20">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Let's build something amazing together
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="btn-hero text-lg px-8 py-6"
                    onClick={() => setShowLeadForm(true)}
                  >
                    Start Your Project
                  </Button>
                  <Button 
                    variant="outline" 
                    className="btn-outline-hero text-lg px-8 py-6"
                    asChild
                  >
                    <a href="https://wa.me/27816617013" target="_blank" rel="noopener noreferrer">
                      Chat with Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Form Dialog */}
      <Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <LeadForm 
            onSuccess={() => setShowLeadForm(false)} 
            serviceType={selectedService}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;