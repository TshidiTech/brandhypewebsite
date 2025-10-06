import { useState } from "react";
import { Send, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface LeadFormProps {
  onSuccess?: () => void;
  showTitle?: boolean;
  serviceType?: string;
}

const LeadForm = ({ onSuccess, showTitle = true, serviceType }: LeadFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: serviceType || "",
    goal: "",
    budget: "",
    audience: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  });

  const totalSteps = 5;

  const projectTypes = [
    { value: "website", label: "Website 🌐" },
    { value: "web-app", label: "Web App 💻" },
    { value: "mobile-app", label: "Mobile App 📱" },
    { value: "branding", label: "Branding or Rebrand 🎨" },
    { value: "marketing", label: "Digital Marketing 📈" },
    { value: "ai", label: "AI / Automation 🤖" },
    { value: "not-sure", label: "Not sure yet — need advice 💬" },
  ];

  const goals = [
    "Launch a new business or product",
    "Improve brand presence",
    "Get more leads or sales",
    "Automate part of my business",
    "Showcase my portfolio",
    "Other",
  ];

  const budgets = [
    "Under R5,000",
    "R5,000 – R15,000",
    "R15,000 – R30,000",
    "R30,000 – R50,000",
    "Above R50,000",
    "Not sure yet",
  ];

  const audiences = [
    "Small business owners",
    "Corporate clients",
    "General public",
    "Niche / industry-specific",
    "Internal company use",
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const emailBody = `
NEW PROJECT INQUIRY

Project Type: ${formData.projectType}
Goal: ${formData.goal}
Budget: ${formData.budget}
Audience: ${formData.audience}

About Project:
${formData.description}

CONTACT INFO
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
      `.trim();

      const mailtoLink = `mailto:admin@brandhype.co.za?subject=New Project Inquiry - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      navigate("/thank-you");
      onSuccess?.();
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try WhatsApp or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <Label>What would you like to build?</Label>
            <div className="grid gap-3">
              {projectTypes.map((type) => (
                <Button
                  key={type.value}
                  type="button"
                  variant={formData.projectType === type.value ? "default" : "outline"}
                  className="w-full justify-start text-left h-auto py-4"
                  onClick={() => setFormData({ ...formData, projectType: type.value })}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <Label>What’s your main goal for this project?</Label>
            <Select value={formData.goal} onValueChange={(v) => setFormData({ ...formData, goal: v })}>
              <SelectTrigger><SelectValue placeholder="Select your goal" /></SelectTrigger>
              <SelectContent className="bg-popover z-[9999]">
                {goals.map((goal) => <SelectItem key={goal} value={goal}>{goal}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <Label>What’s your estimated budget range?</Label>
            <Select value={formData.budget} onValueChange={(v) => setFormData({ ...formData, budget: v })}>
              <SelectTrigger><SelectValue placeholder="Select your budget" /></SelectTrigger>
              <SelectContent className="bg-popover z-[9999]">
                {budgets.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <Label>Who is this project for?</Label>
            <Select value={formData.audience} onValueChange={(v) => setFormData({ ...formData, audience: v })}>
              <SelectTrigger><SelectValue placeholder="Select your audience" /></SelectTrigger>
              <SelectContent className="bg-popover z-[9999]">
                {audiences.map((a) => <SelectItem key={a} value={a}>{a}</SelectItem>)}
              </SelectContent>
            </Select>

            <Label htmlFor="description">Tell us about your project</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Briefly describe what you’d like to achieve..."
              className="min-h-[120px]"
            />
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" />

            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@company.com" />

            <Label htmlFor="phone">WhatsApp Number *</Label>
            <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+27 81 234 5678" />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative z-[999]">
      <Card className="package-card w-full">
        {showTitle && (
          <CardHeader>
            <CardTitle className="text-2xl">Start Your Project</CardTitle>
            <p className="text-muted-foreground">Step {currentStep} of {totalSteps}</p>
          </CardHeader>
        )}
        <CardContent className={showTitle ? "" : "pt-6"}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderStep()}
            <div className="flex gap-3 pt-4">
              {currentStep > 1 && (
                <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
              )}
              {currentStep < totalSteps ? (
                <Button type="button" onClick={handleNext} className="flex-1 btn-hero">Next <ArrowRight className="w-4 h-4 ml-2" /></Button>
              ) : (
                <Button type="submit" disabled={isSubmitting} className="flex-1 btn-hero">
                  {isSubmitting ? "Sending..." : "Submit"} <Send className="ml-2 w-4 h-4" />
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadForm;
