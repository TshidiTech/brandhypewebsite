import { ArrowRight, Users, Award, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import aboutProfile from "@/assets/about-profile.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that grow your business, not just pretty designs."
    },
    {
      icon: Zap,
      title: "Fast Delivery", 
      description: "Structured processes and clear timelines ensure your project launches on schedule."
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We work as an extension of your team, understanding your goals and challenges."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Every project receives meticulous attention to detail and follows industry best practices."
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "3-8", label: "Week Average Timeline" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24hr", label: "Response Time" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 px-4 gradient-hero relative">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            We Turn Ideas Into 
            <span className="gradient-text block">Digital Reality</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            TshidiTech is a South African web development agency specializing in fast, 
            results-driven digital solutions for growing businesses.
          </p>
          <Button className="btn-hero" asChild>
            <a href="/packages">
              View Our Packages
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="package-card">
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-32 md:flex-shrink-0 mx-auto md:mx-0">
                  <img 
                    src={aboutProfile} 
                    alt="TshidiTech team" 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-8">Our Story</h2>
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      TshidiTech was founded with a simple mission: make professional web development 
                      accessible to South African businesses of all sizes. We saw too many great 
                      businesses struggling with outdated websites or being priced out by traditional agencies.
                    </p>
                    <p>
                      That's why we created our productized service model—transparent pricing, 
                      clear deliverables, and predictable timelines. No more endless scope creep 
                      or surprise bills. Just honest, quality work that helps your business grow online.
                    </p>
                    <p>
                      Today, we've helped over 100 businesses establish their digital presence, 
                      from small local shops to growing enterprises. Whether you need a simple 
                      website or a complex e-commerce platform, we have the experience and 
                      systems to deliver results.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide every project we take on and every client relationship we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="package-card text-center">
                <CardContent className="p-8">
                  <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground">
              A proven process that ensures quality results and happy clients.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We start by understanding your business, goals, and requirements. Clear scope definition prevents surprises later."
              },
              {
                step: "02", 
                title: "Design & Development",
                description: "Our team creates your solution following best practices for performance, SEO, and user experience."
              },
              {
                step: "03",
                title: "Review & Refine", 
                description: "Two structured revision rounds ensure the final product meets your expectations and requirements."
              },
              {
                step: "04",
                title: "Launch & Training",
                description: "We handle the launch and provide comprehensive training so you can confidently manage your new digital asset."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your business needs. 
            We typically respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero" asChild>
              <a href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button className="btn-outline-hero" asChild>
              <a href="/packages">View Packages</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;