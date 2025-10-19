import { useEffect, useState } from "react";
import { ArrowRight, Globe, Bot, Smartphone, Eye, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import TypingAnimation from "@/components/TypingAnimation";
import LeadForm from "@/components/LeadForm";
import DiscountPopup from "@/components/DiscountPopup";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import heroProfile from "@/assets/hero-profile.jpg";

const Home = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);

  const services = [
    {
      icon: Globe,
      title: "Web & App Development",
      description: "Build responsive websites, apps & web apps that grow your brand.",
      cta: "See Samples",
      link: "/portfolio"
    },
    {
      icon: Bot,
      title: "Chatbots & AI Assistants",
      description: "Smart chatbots that talk, sell & support your users.",
      cta: "Get a Demo",
      isForm: true
    },
    {
      icon: Smartphone,
      title: "Prototypes & MVPs",
      description: "Turn your idea into a clickable demo or no-code MVP fast.",
      cta: "Start Now",
      isForm: true
    }
  ];

  useEffect(() => {
    document.querySelectorAll('.fade-in-up').forEach(el => el.classList.add('in-view'));
  }, []);

  const handleServiceCTA = (service: typeof services[0]) => {
    if (service.isForm) {
      setShowLeadForm(true);
    }
  };

  const handleBookCall = () => {
    window.open('https://calendar.app.google/BYcjkX4hd4fnpsYJA', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroProfile} 
            alt="Professional workspace" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="space-y-8 fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              We Help Businesses
              <br />
              <TypingAnimation
                texts={[
                  "Grow Online",
                  "Save Time",
                  "Increase Revenue",
                  "Stand Out"
                ]}
                className="gradient-text"
              />
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With websites, apps, and chatbots that work for you 24/7. 
              Transform your business with our productized digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="btn-hero text-lg px-8 py-6" 
                onClick={() => setShowLeadForm(true)}
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button variant="outline" className="btn-outline-hero text-lg px-8 py-6" asChild>
                <a href="https://wa.me/27816617013" target="_blank" rel="noopener noreferrer">
                  Chat with Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We help businesses grow with outcome-focused digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="package-card fade-in-up hover:shadow-xl transition-shadow" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl font-semibold text-muted-foreground">
            Trusted by startups, creators & small businesses
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Fill out a quick form or book a call — we'll take it from there
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
              onClick={handleBookCall}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Form Dialog */}
      <Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader className="sr-only">
            <DialogTitle>Start Your Project</DialogTitle>
            <DialogDescription>Fill out this quick form to start your project</DialogDescription>
          </DialogHeader>
          <LeadForm onSuccess={() => setShowLeadForm(false)} />
        </DialogContent>
      </Dialog>

      {/* Pop-ups */}
      <DiscountPopup onOpenForm={() => setShowLeadForm(true)} />
      <ExitIntentPopup 
        onBookCall={handleBookCall}
        onOpenForm={() => setShowLeadForm(true)}
      />
    </div>
  );
};

export default Home;