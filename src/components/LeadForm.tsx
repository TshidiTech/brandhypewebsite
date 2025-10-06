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
}

const LeadForm = ({ onSuccess, showTitle = true }: LeadFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;

  const [formData, setFormData] = useState({
    projectType: "",
    stage: "",
    goal: "",
    budget: "",
    timeline: "",
    existingAssets: [] as string[],
    description: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    website: ""
  });

  const projectTypes = [
    { value: "business-website", label: "Business Website 🌐" },
    { value: "web-app", label: "Web App 💻" },
    { value: "mobile-app", label: "Mobile App 📱" },
    { value: "chatbot", label: "Chatbot 🤖" },
    { value: "prototype", label: "Prototype/MVP 🚀" },
    { value: "not-sure", label: "Not sure, need guidance 💬" }
  ];

  const stages = [
    "Just exploring ideas",
    "Have a clear concept, need a prototype",
    "Have designs, need development",
    "Already live, need improvements",
    "Ongoing support/maintenance"
  ];

  const goals = [
    "Launch a new product/startup",
    "Improve UX/conversions",
    "Automate business processes",
    "Build internal tools",
    "Showcase brand/portfolio",
    "Other"
  ];

  const budgets = [
    "Under R5,000",
    "R5,000 – R15,000",
    "R15,000 – R30,000",
    "R30,000 – R50,000",
    "Above R50,000",
    "Not sure, need recommendation"
  ];

  const timelines = [
    "ASAP (1–2 weeks)",
    "2–4 weeks",
    "1–2 months",
    "Flexible / depends on schedule"
  ];

  const assets = [
    "Brand name & logo",
    "Domain name",
    "Content or copy",
    "UI/UX design",
    "Prototype or wireframes",
    "None yet, need help with all"
  ];

  const handleNext = () => currentStep < totalSteps && setCurrentStep(prev => prev + 1);
  const handleBack = () => currentStep > 1 && setCurrentStep(prev => prev - 1);

  const toggleAsset = (asset: string) => {
    setFormData(prev => ({
      ...prev,
      existingAssets: prev.existingAssets.includes(asset)
        ? prev.existingAssets.filter(a => a !== asset)
        : [...prev.existingAssets, asset]
    }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return !!formData.projectType;
      case 2: return !!formData.stage;
      case 3: return !!formData.goal;
      case 4: return !!formData.budget;
      case 5: return !!formData.timeline;
      case 6: return formData.existingAssets.length > 0;
      case 7: return formData.description.trim().length > 10;
      case 8: return !!formData.name && !!formData.email && !!formData.phone;
      default: return true;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const emailBody = `
New project inquiry:

Project Type: ${formData.projectType}
Stage: ${formData.stage}
Goal: ${formData.goal}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Existing Assets: ${formData.existingAssets.join(", ") || "None"}
Description: ${formData.description}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || "N/A"}
Website: ${formData.website || "N/A"}
      `.trim();

      const mailto = `mailto:admin@brandhype.co.za?subject=New Project Inquiry - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailto;
      navigate("/thank-you");
      onSuccess?.();
    } catch {
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" });
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
              {projectTypes.map(pt => (
                <button
                  key={pt.value}
                  type="button"
                  className={`w-full text-left py-4 px-4 rounded-lg border ${formData.projectType === pt.value ? 'bg-primary text-white' : 'border-gray-300'}`}
                  onClick={() => setFormData(prev => ({ ...prev, projectType: pt.value }))}
                >
                  {pt.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <Select value={formData.stage} onValueChange={val => setFormData(prev => ({ ...prev, stage: val }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select your stage" />
            </SelectTrigger>
            <SelectContent>
              {stages.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        );

      case 3:
        return (
          <Select value={formData.goal} onValueChange={val => setFormData(prev => ({ ...prev, goal: val }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select your main goal" />
            </SelectTrigger>
            <SelectContent>
              {goals.map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
            </SelectContent>
          </Select>
        );

      case 4:
        return (
          <Select value={formData.budget} onValueChange={val => setFormData(prev => ({ ...prev, budget: val }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select your budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgets.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
            </SelectContent>
          </Select>
        );

      case 5:
        return (
          <Select value={formData.timeline} onValueChange={val => setFormData(prev => ({ ...prev, timeline: val }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select your timeline" />
            </SelectTrigger>
            <SelectContent>
              {timelines.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        );

      case 6:
        return (
          <div className="space-y-3">
            {assets.map(a => (
              <div key={a} className="flex items-center gap-2">
                <Checkbox id={a} checked={formData.existingAssets.includes(a)} onCheckedChange={() => toggleAsset(a)} />
                <Label htmlFor={a}>{a}</Label>
              </div>
            ))}
          </div>
        );

      case 7:
        return (
          <Textarea
            value={formData.description}
            onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Describe your project..."
            className="min-h-[120px]"
          />
        );

      case 8:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" value={formData.name} onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))} placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" value={formData.email} onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))} placeholder="john@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">WhatsApp Number *</Label>
              <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))} placeholder="+27 81 234 5678" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company (Optional)</Label>
              <Input id="company" value={formData.company} onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))} placeholder="Your company" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website/Instagram (Optional)</Label>
              <Input id="website" value={formData.website} onChange={e => setFormData(prev => ({ ...prev, website: e.target.value }))} placeholder="https://" />
            </div>
          </div>
        );

      default: return null;
    }
  };

  return (
    <Card className="w-full">
      {showTitle && (
        <CardHeader>
          <CardTitle>Start Your Project</CardTitle>
          <p>Step {currentStep} of {totalSteps}</p>
        </CardHeader>
      )}
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {renderStep()}
          <div className="flex gap-3">
            {currentStep > 1 && (
              <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                <ArrowLeft className="mr-2 w-4 h-4"/>Back
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button type="button" onClick={handleNext} disabled={!isStepValid()} className="flex-1">
                Next<ArrowRight className="ml-2 w-4 h-4"/>
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting || !isStepValid()} className="flex-1">
                {isSubmitting ? "Sending..." : "Submit"}<Send className="ml-2 w-4 h-4"/>
              </Button>
            )}
          </div>
          <div className="flex gap-1 justify-center pt-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all ${i + 1 === currentStep ? 'w-8 bg-primary' : i + 1 < currentStep ? 'w-2 bg-primary/50' : 'w-2 bg-muted'}`} />
            ))}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;
