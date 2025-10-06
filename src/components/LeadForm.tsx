import { useState } from "react";
import { Send, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField"; // ensure your InputField component exists

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
    existingAssets: [] as string[],
    description: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    website: ""
  });

  const totalSteps = 8;

  const projectTypes = [
    { value: "business-website", label: "A business website 🌐" },
    { value: "web-app", label: "A web app 💻" },
    { value: "mobile-app", label: "A mobile app 📱" },
    { value: "chatbot", label: "A chatbot or AI assistant 🤖" },
    { value: "prototype", label: "A prototype or MVP 🚀" },
    { value: "not-sure", label: "Not sure yet — need guidance 💬" }
  ];

  const stages = [
    "Just exploring ideas",
    "Have a clear concept, need a prototype",
    "Have designs, need development",
    "Already live, need improvements",
    "Ongoing support or maintenance"
  ];

  const goals = [
    "Launch a new product/startup",
    "Improve user experience or conversions",
    "Automate business processes",
    "Build internal tools",
    "Showcase my brand or portfolio",
    "Other"
  ];

  const budgets = [
    "Under R5,000",
    "R5,000 – R15,000",
    "R15,000 – R30,000",
    "R30,000 – R50,000",
    "Above R50,000",
    "Not sure yet — I'd like a recommendation"
  ];

  const timelines = [
    "ASAP (within 1–2 weeks)",
    "2–4 weeks",
    "1–2 months",
    "Flexible — depends on your schedule"
  ];

  const assets = [
    "Brand name & logo",
    "Domain name",
    "Content or copy",
    "UI/UX design",
    "Prototype or wireframes",
    "None yet — I'll need help with all"
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleAsset = (asset: string) => {
    setFormData(prev => ({
      ...prev,
      existingAssets: prev.existingAssets.includes(asset)
        ? prev.existingAssets.filter(a => a !== asset)
        : [...prev.existingAssets, asset]
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

=== EXISTING ASSETS ===
${formData.existingAssets.join(', ') || 'None'}

=== PROJECT DESCRIPTION ===
${formData.description}

=== CONTACT INFO ===
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'N/A'}
Website: ${formData.website || 'N/A'}
      `.trim();

      const mailtoLink = `mailto:admin@brandhype.co.za?subject=New Project Inquiry - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      navigate('/thank-you');
      onSuccess?.();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try WhatsApp or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium">What would you like to build?</label>
            <div className="grid gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  className={`w-full justify-start text-left py-4 rounded-lg border ${formData.projectType === type.value ? 'bg-primary text-white' : 'border-gray-300'}`}
                  onClick={() => setFormData({ ...formData, projectType: type.value })}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <label>What stage are you in right now?</label>
            <Select value={formData.stage} onValueChange={(value) => setFormData({ ...formData, stage: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select your current stage" />
              </SelectTrigger>
              <SelectContent className="bg-popover z-[150]">
                {stages.map((stage) => (
                  <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <label>What's your main goal for this project?</label>
            <Select value={formData.goal} onValueChange={(value) => setFormData({ ...formData, goal: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select your main goal" />
              </SelectTrigger>
              <SelectContent className="bg-popover z-[150]">
                {goals.map((goal) => (
                  <SelectItem key={goal} value={goal}>{goal}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <label>What's your estimated budget range?</label>
            <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select your budget range" />
              </SelectTrigger>
              <SelectContent className="bg-popover z-[150]">
                {budgets.map((budget) => (
                  <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <label>What's your ideal timeline?</label>
            <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select your timeline" />
              </SelectTrigger>
              <SelectContent className="bg-popover z-[150]">
                {timelines.map((timeline) => (
                  <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <label>Do you already have any of these?</label>
            <p className="text-sm text-muted-foreground">Select all that apply</p>
            <div className="space-y-3">
              {assets.map((asset) => (
                <div key={asset} className="flex items-center space-x-3">
                  <Checkbox
                    id={asset}
                    checked={formData.existingAssets.includes(asset)}
                    onCheckedChange={() => toggleAsset(asset)}
                  />
                  <label htmlFor={asset} className="cursor-pointer font-normal">{asset}</label>
                </div>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <label htmlFor="description">Tell us a bit about your project</label>
            <p className="text-sm text-muted-foreground">
              In a few sentences, tell us what you'd like to create or what problem you're solving.
            </p>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your project..."
              className="min-h-[120px]"
            />
          </div>
        );

      case 8:
        return (
          <div className="space-y-4">
            <InputField 
              id="name" 
              label="Full Name *" 
              value={formData.name} 
              onChange={val => setFormData({...formData, name: val})} 
              placeholder="John Doe" 
            />
            <InputField 
              id="email" 
              label="Email *" 
              type="email" 
              value={formData.email} 
              onChange={val => setFormData({...formData, email: val})} 
              placeholder="john@company.com" 
            />
            <InputField 
              id="phone" 
              label="WhatsApp Number *" 
              type="tel" 
              value={formData.phone} 
              onChange={val => setFormData({...formData, phone: val})} 
              placeholder="+27 81 234 5678" 
            />
            <InputField 
              id="company" 
              label="Company Name or Brand (Optional)" 
              value={formData.company} 
              onChange={val => setFormData({...formData, company: val})} 
              placeholder="Your company" 
            />
            <InputField 
              id="website" 
              label="Instagram/Website Link (Optional)" 
              value={formData.website} 
              onChange={val => setFormData({...formData, website: val})} 
              placeholder="https://" 
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
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
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="flex-1"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}

            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={handleNext}
                disabled={!isStepValid()}
                className="flex-1 btn-hero"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting || !isStepValid()}
                className="flex-1 btn-hero"
              >
                {isSubmitting ? "Sending..." : "Submit"}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            )}
          </div>

          <div className="flex gap-1 justify-center">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i + 1 === currentStep
                    ? "w-8 bg-primary"
                    : i + 1 < currentStep
                    ? "w-2 bg-primary/50"
                    : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;
