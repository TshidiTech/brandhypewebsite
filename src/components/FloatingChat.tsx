import { useState } from "react";
import { MessageCircle, X, Phone, Mail, ExternalLink, HelpCircle, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      label: "View Packages",
      href: "/packages",
      icon: ExternalLink,
      action: "navigate"
    },
    {
      label: "WhatsApp Us",
      href: "https://wa.me/27816617013",
      icon: Phone,
      action: "external"
    },
    {
      label: "Email Us",
      href: "mailto:admin@tshiditech.co.za",
      icon: Mail,
      action: "external"
    }
  ];

  const faqs = [
    {
      category: "Pricing",
      icon: DollarSign,
      items: [
        {
          q: "How does payment work?",
          a: "50% deposit to begin, balance due at launch or 45 days (whichever comes first). Extra changes are billed at R450/hr after two revision rounds."
        },
        {
          q: "What's included in all packages?",
          a: "All packages include: 50% deposit structure, two revision rounds, one-year hosting (where applicable), and 1-hour handover training."
        },
        {
          q: "Are there any add-ons available?",
          a: "Yes! Add-on pages (R1,200 each), plugins (R950+), SEO optimization (from R5,000), copywriting (from R3,000), maintenance (from R2,000/mo)."
        }
      ]
    },
    {
      category: "Timeline",
      icon: Calendar,
      items: [
        {
          q: "How long does each project take?",
          a: "One-Page: 1-2 weeks, Standard 5-Page: 3-4 weeks, E-commerce: 5-7 weeks, Webflow: 4-6 weeks, Apps: 3-8 weeks, Chatbots: 2-6 weeks."
        },
        {
          q: "Can you rush my project?",
          a: "We can discuss expedited timelines. Additional charges may apply for rush jobs to maintain quality standards."
        }
      ]
    },
    {
      category: "Services",
      icon: HelpCircle,
      items: [
        {
          q: "What's the difference between your website packages?",
          a: "One-Page (R3k): Single page with 4 sections. Standard (R12k): 5 pages with plugins and SEO. Webflow (R30k-42k): Advanced animations and CMS."
        },
        {
          q: "Do you provide hosting and maintenance?",
          a: "Yes! One-year hosting is included. Ongoing maintenance retainers available from R2,000/month for websites, R4,000/month for chatbots."
        },
        {
          q: "Can you integrate with my existing systems?",
          a: "Yes, we offer API integrations and can connect with most popular business tools. Advanced integrations may require custom development."
        }
      ]
    }
  ];

  const handleItemClick = (item: typeof menuItems[0]) => {
    if (item.action === "navigate") {
      window.location.href = item.href;
    } else {
      window.open(item.href, "_blank");
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Menu */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 animate-scale-in max-h-[80vh] overflow-hidden">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-foreground">How can we help?</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                
                <TabsContent value="contact" className="space-y-3 mt-3">
                  {menuItems.map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start h-auto p-3 hover:bg-accent/10"
                      onClick={() => handleItemClick(item)}
                    >
                      <item.icon className="w-4 h-4 mr-3 text-accent" />
                      <span className="text-sm">{item.label}</span>
                    </Button>
                  ))}
                  
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Not sure which package? We'll help you choose the perfect solution for your business.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="faq" className="mt-3 max-h-[60vh] overflow-y-auto">
                  <div className="space-y-4">
                    {faqs.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                          <category.icon className="w-4 h-4" />
                          {category.category}
                        </div>
                        {category.items.map((faq, faqIndex) => (
                          <div key={faqIndex} className="ml-6 space-y-1">
                            <p className="text-xs font-medium text-foreground">{faq.q}</p>
                            <p className="text-xs text-muted-foreground">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating Button */}
      <button
        className="floating-chat animate-float"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </>
  );
};

export default FloatingChat;