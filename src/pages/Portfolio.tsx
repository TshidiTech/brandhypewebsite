import { useState } from "react";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/LeadForm";
import travelAgency from "@/assets/travel-agency.png";
import schoolAcademy from "@/assets/school-academy.png";
import invoiceGenerator from "@/assets/invoice-generator.png";
import vaMarketplace from "@/assets/va-marketplace.png";
import socialMediaCrm from "@/assets/social-media-crm.png";
import personalBrand from "@/assets/personal-brand.png";

const Portfolio = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const projectTypes = [
    {
      category: "Travel Agency Website",
      description: "Beautiful booking platform with real-time availability and payment integration",
      image: travelAgency,
      demoLink: "https://www.canva.com/design/DAG1YFzjT7E/TfYELVFp7xenKd-YF9Utfw/watch?utm_content=DAG1YFzjT7E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h097385e698",
      timeline: "4-6 weeks"
    },
    {
      category: "School Academy Website",
      description: "Modern educational platform with admissions, class schedules, and parent portal",
      image: schoolAcademy,
      demoLink: "https://www.canva.com/design/DAG1YFzjT7E/TfYELVFp7xenKd-YF9Utfw/watch?utm_content=DAG1YFzjT7E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h097385e698",
      timeline: "5-7 weeks"
    },
    {
      category: "Invoice Generator",
      description: "Professional invoicing system with customizable templates and automated calculations",
      image: invoiceGenerator,
      demoLink: "https://www.canva.com/design/DAG1YFzjT7E/TfYELVFp7xenKd-YF9Utfw/watch?utm_content=DAG1YFzjT7E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h097385e698",
      timeline: "3-4 weeks"
    },
    {
      category: "Virtual Assistant Marketplace",
      description: "Connect businesses with skilled VAs through an intuitive matching platform",
      image: vaMarketplace,
      demoLink: "https://www.canva.com/design/DAG1YFzjT7E/TfYELVFp7xenKd-YF9Utfw/watch?utm_content=DAG1YFzjT7E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h097385e698",
      timeline: "6-8 weeks"
    },
    {
      category: "Social Media Manager CRM",
      description: "All-in-one dashboard for managing clients, content scheduling, and analytics",
      image: socialMediaCrm,
      demoLink: "https://www.canva.com/design/DAG1YFzjT7E/TfYELVFp7xenKd-YF9Utfw/watch?utm_content=DAG1YFzjT7E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h097385e698",
      timeline: "7-9 weeks"
    },
    {
      category: "Personal Brand Builder App",
      description: "AI-powered LinkedIn growth studio for building professional presence and engagement",
      image: personalBrand,
      demoLink: "https://www.canva.com/design/DAG1YFzjT7E/TfYELVFp7xenKd-YF9Utfw/watch?utm_content=DAG1YFzjT7E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h097385e698",
      timeline: "5-7 weeks"
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
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground pointer-events-none">
                      {project.timeline}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.category}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Standalone View Demo Button */}
          <div className="mt-12 text-center">
            <Button 
              className="btn-hero text-lg px-8 py-6"
              asChild
            >
              <a href="https://www.canva.com/design/DAG1YFzjT7E/TfYELVFp7xenKd-YF9Utfw/watch?utm_content=DAG1YFzjT7E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h097385e698" target="_blank" rel="noopener noreferrer">
                <Eye className="w-5 h-5 mr-2" />
                View Demo
              </a>
            </Button>
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