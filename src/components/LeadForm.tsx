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
    stage: "",
    goal: "",
    budget: "",
    timeline: "",
    audience: "",
    platform: "",
    existingAssets: [] as string[],
    description: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
  });

  const totalSteps = 9;

  const projectTypes = [
    { value: "business-website", label: "A business website 🌐" },
    { value: "web-app", label: "A web app 💻" },
    { value: "mobile-app", label: "A mobile app 📱" },
    { value: "chatbot", label: "A chatbot or AI assistant 🤖" },
    { value: "prototype", label: "A prototype or MVP 🚀" },
    { value: "not-sure", label: "Not sure yet — need guidance 💬" },
  ];

  const budgets = [
    "Under R5,000",
    "R5,000 – R15,000",
    "R15,000 – R30,000",
    "R30,000 – R50,000",
    "Above R50,000",
    "Not sure yet — I'd like a recommendation",
  ];

  const timelines = [
    "ASAP (within 1–2 weeks)",
    "2–4 weeks",
    "1–2 months",
    "Flexible — depends on your schedule",
  ];

  const stages = [
    "Just exploring ideas",
    "Have a clear concept, need a prototype",
    "Have designs, need development",
    "Already live, need improvements",
    "Ongoing support or maintenance",
  ];

  const audiences = [
    "General public / customers",
    "Business clients or partners",
    "Internal company users",
    "Community / learners / youth",
    "Other",
  ];

  const platforms = [
    "Web only",
    "Mobile only (Android/iOS)",
    "Both web and mobile",
    "Not sure yet",
  ];

  const assets = [
    "Brand name & logo",
    "Domain name",
    "Content or copy",
    "UI/UX design",
    "Prototype or wireframes",
    "None yet — I’ll need help with all",
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep((s) => s + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const toggleAsset = (asset: string) => {
    setFormData((prev) => ({
      ...prev,
      existingAssets: prev.existingAssets.includes(asset)
        ? prev.existingAssets.filter((a) => a !== asset)
        : [...prev.existingAssets, asset],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
NEW PROJECT INQUIRY

=== PROJECT DETAILS ===
Project Type: ${formData.projectType}
Current Stage: ${formData.stage}
Main Goal: ${formData.goal}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}
Audience: ${formData.audience}
Platform: ${formData.platform}

=== EXISTING ASSETS ===
${formData.existingAssets.join(", ") || "None"}

=== PROJECT DESCRIPTION ===
${formData.description}

=== CONTACT INFO ===
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || "N/A"}
Website: ${formData.website || "N/A"}
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
          <div className="space-y-4 pointer-events-auto">
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
          <div className="space-y-4 pointer-events-auto">
            <Label>What stage are you in right now?</Label>
            <Select value={formData.stage} onValueChange={(v) => setFormData({ ...formData, stage: v })}>
              <SelectTrigger><SelectValue placeholder="Select your current stage" /></SelectTrigger>
              <SelectContent className="z-[200] pointer-events-auto">
                {stages.map((stage) => <SelectItem key={stage} value={stage}>{stage}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 pointer-events-auto">
            <Label>What’s your main goal?</Label>
            <Textarea
              placeholder="E.g. I want to launch an app for my tutoring business"
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-4 pointer-events-auto">
            <Label>What's your estimated budget range?</Label>
            <Select value={formData.budget} onValueChange={(v) => setFormData({ ...formData, budget: v })}>
              <SelectTrigger><SelectValue placeholder="Select budget range" /></SelectTrigger>
              <SelectContent className="z-[200] pointer-events-auto">
                {budgets.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4 pointer-events-auto">
            <Label>What's your ideal timeline?</Label>
            <Select value={formData.timeline} onValueChange={(v) => setFormData({ ...formData, timeline: v })}>
              <SelectTrigger><SelectValue placeholder="Select timeline" /></SelectTrigger>
              <SelectContent className="z-[200] pointer-events-auto">
                {timelines.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4 pointer-events-auto">
            <Label>Who’s your main audience?</Label>
            <Select value={formData.audience} onValueChange={(v) => setFormData({ ...formData, audience: v })}>
              <SelectTrigger><SelectValue placeholder="Select audience type" /></SelectTrigger>
              <SelectContent className="z-[200] pointer-events-auto">
                {audiences.map((a) => <SelectItem key={a} value={a}>{a}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4 pointer-events-auto">
            <Label>Which platforms should it run on?</Label>
            <Select value={formData.platform} onValueChange={(v) => setFormData({ ...formData, platform: v })}>
              <SelectTrigger><SelectValue placeholder="Select platform" /></SelectTrigger>
              <SelectContent className="z-[200] pointer-events-auto">
                {platforms.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        );

      case 8:
        return (
          <div className="space-y-4 pointer-events-auto">
            <Label>Do you already have any of these?</Label>
            <div className="space-y-3">
              {assets.map((asset) => (
                <div key={asset} className="flex items-center space-x-3">
                  <Checkbox
                    id={asset}
                    checked={formData.existingAssets.includes(asset)}
                    onCheckedChange={() => toggleAsset(asset)}
                  />
                  <Label htmlFor={asset} className="cursor-pointer">{asset}</Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-4 pointer-events-auto">
            <Label>Tell us about your project</Label>
            <Textarea
              placeholder="Briefly describe what you’d like to achieve..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <div className="space-y-3 pt-2">
              <Input placeholder="Full Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <Input placeholder="Email *" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <Input placeholder="WhatsApp Number *" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              <Input placeholder="Company / Brand (optional)" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              <Input placeholder="Instagram / Website (optional)" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
            </div>
          </div>
        );
    }
  };

  return (
    <Card className="package-card w-full pointer-events-auto relative z-[100]">
      {showTitle && (
        <CardHeader>
          <CardTitle className="text-2xl">Start Your Project</CardTitle>
          <p className="text-muted-foreground">Step {currentStep} of {totalSteps}</p>
        </CardHeader>
      )}
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6 pointer-events-auto">
          {renderStep()}
          <div className="flex gap-3 pt-4">
            {currentStep > 1 && (
              <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button type="button" onClick={handleNext} className="flex-1 btn-hero">
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button type="submit" className="flex-1 btn-hero" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"} <Send className="ml-2 w-4 h-4" />
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;
