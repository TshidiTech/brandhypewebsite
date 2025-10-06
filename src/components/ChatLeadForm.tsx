import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface LeadForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  package?: string;
}

interface ChatLeadFormProps {
  leadForm: LeadForm;
  setLeadForm: React.Dispatch<React.SetStateAction<LeadForm>>;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

const ChatLeadForm = ({ leadForm, setLeadForm, onSubmit, onCancel }: ChatLeadFormProps) => {
  return (
    <div className="bg-card border rounded-lg p-4 mx-2 my-2">
      <h4 className="font-semibold mb-3 text-accent">Get Your Quote</h4>
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <Label htmlFor="name" className="text-xs">Name *</Label>
          <Input
            id="name"
            value={leadForm.name}
            onChange={(e) => setLeadForm(prev => ({ ...prev, name: e.target.value }))}
            className="h-8 text-sm"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-xs">Email *</Label>
          <Input
            id="email"
            type="email"
            value={leadForm.email}
            onChange={(e) => setLeadForm(prev => ({ ...prev, email: e.target.value }))}
            className="h-8 text-sm"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-xs">Phone</Label>
          <Input
            id="phone"
            value={leadForm.phone}
            onChange={(e) => setLeadForm(prev => ({ ...prev, phone: e.target.value }))}
            className="h-8 text-sm"
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-xs">Project Details *</Label>
          <Textarea
            id="message"
            value={leadForm.message}
            onChange={(e) => setLeadForm(prev => ({ ...prev, message: e.target.value }))}
            className="min-h-[60px] text-sm resize-none"
            placeholder="Tell us about your project..."
            required
          />
        </div>
        <div className="flex space-x-2 pt-2">
          <Button type="submit" className="flex-1 h-8 btn-hero text-sm">
            Submit
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
            className="h-8 text-sm"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatLeadForm;