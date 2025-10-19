import { useState } from "react";
import { Check, ArrowRight, Mail, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import LeadForm from "@/components/LeadForm";

const Packages = () => {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const packages = [
    {
      name: "One-Page Starter",
      category: "Website",
      popular: false,
      description: "Perfect for small businesses just getting started online",
      timeline: "1–2 weeks",
      impact: "Turn casual visitors into loyal customers with a single page that clearly communicates your brand and services",
      deliverables: [
        "Custom single-page design",
        "Responsive mobile layout",
        "Up to 4 content sections (Hero, About, Services, Contact)",
        "1 contact form with email notification",
        "SSL certificate + 12-month hosting",
        "Two structured revision rounds",
        "Basic handover training (1 hr live or recorded video)"
      ],
      problems: [
        "No online presence hurting your credibility",
        "Missing out on customers who search online", 
        "Need a professional look without breaking the bank"
      ]
    },
    {
      name: "Standard 5-Page with Plugins",
      category: "Website",
      popular: true,
      description: "Complete business website with essential pages and functionality",
      timeline: "3–4 weeks",
      impact: "Convert visitors into leads with strategically placed forms and automated tools",
      deliverables: [
        "Up to 5 fully designed pages (Home, About, Services, Blog, Contact)",
        "Basic SEO setup (meta tags, alt text)",
        "1 blog template",
        "Image optimisation (up to 20 images)",
        "Up to 3 plugins included",
        "Two structured revision rounds",
        "One-year hosting/subscription fees",
        "Basic handover training (1 hr live or recorded video)"
      ],
      problems: [
        "Limited lead capture capabilities",
        "Inefficient content presentation",
        "Basic websites that don't convert visitors"
      ]
    },
    {
      name: "E-commerce Basic",
      category: "E-commerce",
      popular: false,
      description: "Start selling online with a professional store",
      timeline: "5–7 weeks",
      impact: "Sell online 24/7 with a secure, easy-to-use store that converts visitors into buyers",
      deliverables: [
        "Shopify/WooCommerce setup",
        "Up to 20 products uploaded",
        "Secure payment gateway (PayFast/Stripe)",
        "Cart & checkout customisation",
        "Email notifications for orders",
        "Two structured revision rounds",
        "One-year hosting/subscription fees",
        "Basic handover training (1 hr live or recorded video)"
      ],
      problems: [
        "Missing out on online sales opportunities",
        "Manual sales processes taking too much time",
        "Limited reach beyond local markets"
      ]
    },
    {
      name: "E-commerce Premium", 
      category: "E-commerce",
      popular: false,
      description: "Advanced online store with premium features",
      timeline: "5–7 weeks",
      impact: "Grow your customer base beyond local markets with a professional e-commerce platform",
      deliverables: [
        "Premium Shopify/WooCommerce setup",
        "Up to 50 products uploaded",
        "Advanced payment gateway integration",
        "Custom cart & checkout experience",
        "Automated email marketing setup",
        "Customer accounts & wishlists",
        "Advanced analytics & reporting",
        "Two structured revision rounds",
        "One-year hosting/subscription fees",
        "Basic handover training (1 hr live or recorded video)"
      ],
      problems: [
        "Need advanced e-commerce features",
        "Want to scale online sales significantly", 
        "Require detailed sales analytics and automation"
      ]
    },
    {
      name: "Webflow Premium",
      category: "Website",
      popular: false,
      description: "Custom Webflow site with advanced animations",
      timeline: "4–6 weeks",
      impact: "Create an immersive, modern website that stands out and engages your audience",
      deliverables: [
        "Custom Webflow build with CMS",
        "Up to 7 pages", 
        "Animations & interactions",
        "SEO best practices",
        "Custom interactions and animations",
        "Two structured revision rounds",
        "One-year hosting/subscription fees",
        "Basic handover training (1 hr live or recorded video)"
      ],
      problems: [
        "Need a visually stunning website",
        "Want advanced animations and interactions",
        "Require modern, engaging user experience"
      ]
    },
    {
      name: "Webflow Enterprise", 
      category: "Website",
      popular: false,
      description: "Premium Webflow site with custom integrations",
      timeline: "4–6 weeks", 
      impact: "Fully scalable for future products, apps, or services—your website evolves with your business",
      deliverables: [
        "Premium Webflow design",
        "Custom integrations",
        "Advanced CMS setup",
        "Multi-language support",
        "Premium animations & interactions", 
        "Advanced SEO optimization",
        "Two structured revision rounds",
        "One-year hosting/subscription fees", 
        "Basic handover training (1 hr live or recorded video)"
      ],
      problems: [
        "Need enterprise-level web presence",
        "Require custom integrations",
        "Want premium brand experience that scales"
      ]
    },
    {
      name: "Clickable Prototype",
      category: "App",
      popular: false,
      description: "Interactive prototype for your app idea",
      timeline: "3–4 weeks",
      impact: "Visualize your app idea before development—avoid costly mistakes",
      deliverables: [
        "User flow mapping (up to 10 screens)",
        "High-fidelity UI mock-ups",
        "Interactive Figma prototype", 
        "Design system & colour palette",
        "Two structured revision rounds",
        "Basic handover training (1 hr live or recorded video)"
      ],
      problems: [
        "Have an app idea but need to validate it",
        "Need something to show investors",
        "Want to test user experience before development"
      ]
    },
    {
      name: "No-Code MVP",
      category: "App",
      popular: false,
      description: "Fully functional app built with no-code tools",
      timeline: "6–8 weeks",
      impact: "Launch your app faster without heavy development costs",
      deliverables: [
        "Up to 2 user roles (e.g. Admin & User)",
        "Core CRUD functionality (Create, Read, Update, Delete)",
        "Up to 15 database tables/collections",
        "API integrations (max 2)",
        "Two structured revision rounds",
        "Basic handover training (1 hr live or recorded video)"
      ],
      problems: [
        "Need to launch quickly without huge costs",
        "Want to test market before full development",
        "Limited budget for custom development"
      ]
    },
    {
      name: "Basic FAQ / Lead Capture",
      category: "Chatbot",
      popular: false,
      description: "Simple chatbot to answer common questions and capture leads",
      timeline: "2–3 weeks", 
      impact: "Answer customer questions instantly—reduce wait time and increase satisfaction",
      deliverables: [
        "Setup on WhatsApp, Messenger, or website",
        "Up to 30 scripted Q&A flows", 
        "Lead capture to email or Google Sheet",
        "12-month ManyChat/Tidio subscription",
        "Two structured revision rounds",
        "Basic handover training (1 hr live or recorded video)"
      ],
      problems: [
        "Spending too much time answering same questions",
        "Customers need help outside business hours",
        "Missing lead capture opportunities"
      ]
    },
    {
      name: "Advanced AI Bot",
      category: "Chatbot",
      popular: false, 
      description: "Intelligent AI bot with custom training and integrations",
      timeline: "4–6 weeks",
      impact: "Deliver personalized conversations that drive sales, engagement, and customer loyalty",
      deliverables: [
        "Custom natural-language bot using OpenAI or Botpress",
        "Up to 50 intents",
        "Database/API integration (1 system)",
        "Training dataset setup",
        "Two structured revision rounds",
        "Basic handover training (1 hr live or recorded video)"
      ],
      problems: [
        "Need sophisticated customer service automation", 
        "Want personalized customer interactions at scale",
        "Require integration with existing systems"
      ]
    }
  ];

  const categories = ["All", "Website", "E-commerce", "App", "Chatbot"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPackages = selectedCategory === "All" 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Choose Your Package</h1>
          <p className="text-xl text-muted-foreground">
            Productized solutions designed to solve specific business problems
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "btn-hero" : "btn-outline-hero"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`package-card relative ${pkg.popular ? 'ring-2 ring-accent' : ''}`}
                onMouseEnter={() => setHoveredPackage(index)}
                onMouseLeave={() => setHoveredPackage(null)}
              >
                <CardHeader>
                  <div>
                    <Badge 
                      variant={pkg.popular ? "default" : "secondary"}
                      className={pkg.popular ? "bg-accent text-accent-foreground" : ""}
                    >
                      {pkg.category}
                    </Badge>
                    {pkg.popular && (
                      <Badge className="ml-2 bg-accent text-accent-foreground">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Impact Statement - shown on hover */}
                  {hoveredPackage === index && (
                    <div className="p-4 bg-accent/10 rounded-lg border border-accent/20 animate-fade-in">
                      <h4 className="font-semibold text-accent mb-2">Impact:</h4>
                      <p className="text-sm">{pkg.impact}</p>
                    </div>
                  )}

                  {/* Problems Solved */}
                  <div>
                    <h4 className="font-semibold mb-3">Problems We Solve:</h4>
                    <ul className="space-y-2">
                      {pkg.problems.map((problem, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold mb-3">What You Get:</h4>
                    <ul className="space-y-2">
                      {pkg.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Timeline */}
                  <div>
                    <h4 className="font-semibold mb-2">Timeline:</h4>
                    <p className="text-sm text-accent font-medium">{pkg.timeline}</p>
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
              <a 
                href="https://www.canva.com/design/DAG1YFzjT7E/TfYELVFp7xenKd-YF9Utfw/watch?utm_content=DAG1YFzjT7E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h097385e698" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Demo
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Form Dialog */}
      <Dialog open={isLeadFormOpen} onOpenChange={setIsLeadFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Start Your {selectedPackage} Project</DialogTitle>
          </DialogHeader>
          <LeadForm 
            showTitle={false}
            serviceType={selectedPackage}
            onSuccess={() => setIsLeadFormOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Packages;