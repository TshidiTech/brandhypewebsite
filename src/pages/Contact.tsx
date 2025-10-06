import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    projectScope: "",
    timeline: "",
    budget: "",
    currentSolution: "",
    goals: "",
    message: ""
  });

  const serviceTypes = [
    "Website Development",
    "E-commerce Store", 
    "Mobile App",
    "Chatbot & AI Solutions",
    "Business Automation",
    "Digital Marketing Tools",
    "Custom Software",
    "Multiple Services"
  ];

  const projectScopes = [
    "New project from scratch",
    "Redesign existing solution", 
    "Add features to existing project",
    "Fix/improve existing solution",
    "Not sure yet"
  ];

  const timelines = [
    "ASAP (Rush job)",
    "Within 2 weeks",
    "Within 1 month", 
    "2-3 months",
    "3+ months",
    "Flexible timeline"
  ];

  const budgets = [
    "Under R10,000",
    "R10,000 - R25,000",
    "R25,000 - R50,000", 
    "R50,000 - R100,000",
    "R100,000+",
    "Need guidance on budget"
  ];

  const currentSolutions = [
    "No existing website/solution",
    "Basic website (needs upgrade)",
    "WordPress/Wix site",
    "Custom built solution",
    "Spreadsheets/manual processes",
    "Other platform"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real implementation, you would send this to your backend
      const emailBody = `
NEW QUOTE REQUEST

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Project Information:
Service Type: ${formData.serviceType}
Project Scope: ${formData.projectScope}
Timeline: ${formData.timeline}
Budget Range: ${formData.budget}
Current Solution: ${formData.currentSolution}

Goals: ${formData.goals}
Additional Details: ${formData.message}
      `.trim();

      // Create mailto link for now
      const mailtoLink = `mailto:admin@brandhype.co.za?subject=New Quote Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 2 business hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        projectScope: "",
        timeline: "",
        budget: "",
        currentSolution: "",
        goals: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Get Your Quote</h1>
          <p className="text-xl text-muted-foreground">
            Tell us about your project and we'll provide a detailed quote within 2 hours
          </p>
        </div>
      </section>

      <div className="px-4 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="package-card">
              <CardHeader>
                <CardTitle className="text-2xl">Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+27 81 234 5678"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company Ltd"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Project Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="serviceType">What service do you need? *</Label>
                        <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent className="bg-popover border border-border">
                            {serviceTypes.map((service, index) => (
                              <SelectItem key={index} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectScope">Project scope *</Label>
                        <Select value={formData.projectScope} onValueChange={(value) => handleInputChange("projectScope", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project scope" />
                          </SelectTrigger>
                          <SelectContent className="bg-popover border border-border">
                            {projectScopes.map((scope, index) => (
                              <SelectItem key={index} value={scope}>
                                {scope}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="space-y-2">
                        <Label htmlFor="timeline">When do you need this completed? *</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent className="bg-popover border border-border">
                            {timelines.map((timeline, index) => (
                              <SelectItem key={index} value={timeline}>
                                {timeline}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget range *</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent className="bg-popover border border-border">
                            {budgets.map((budget, index) => (
                              <SelectItem key={index} value={budget}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2 mt-6">
                      <Label htmlFor="currentSolution">What's your current situation?</Label>
                      <Select value={formData.currentSolution} onValueChange={(value) => handleInputChange("currentSolution", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Describe your current solution" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border border-border">
                          {currentSolutions.map((solution, index) => (
                            <SelectItem key={index} value={solution}>
                              {solution}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 mt-6">
                      <Label htmlFor="goals">What are your main goals for this project?</Label>
                      <Textarea
                        id="goals"
                        value={formData.goals}
                        onChange={(e) => handleInputChange("goals", e.target.value)}
                        placeholder="e.g., Increase online sales, automate processes, improve customer experience..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2 mt-6">
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Any specific features, integrations, or requirements you'd like to mention..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-hero text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get My Custom Quote"}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            <Card className="package-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:admin@brandhype.co.za" 
                      className="text-accent hover:underline"
                    >
                      admin@brandhype.co.za
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a 
                      href="https://wa.me/27816617013" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      081 661 7013
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">South Africa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="package-card bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-accent mb-3">Need Immediate Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with us directly for quick answers and instant quotes.
                </p>
                <div className="space-y-3">
                  <Button className="w-full btn-hero" asChild>
                    <a href="https://wa.me/27816617013" target="_blank" rel="noopener noreferrer">
                      WhatsApp Chat
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full btn-outline-hero" asChild>
                    <a href="mailto:admin@brandhype.co.za">
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="package-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">What Happens Next?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xs">1</div>
                    <p>We review your requirements within 2 hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xs">2</div>
                    <p>We send you a detailed quote and timeline</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xs">3</div>
                    <p>We schedule a call to discuss your project</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;