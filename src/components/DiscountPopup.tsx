import { useState, useEffect } from "react";
import { X, Gift, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface DiscountPopupProps {
  onOpenForm: () => void;
}

const DiscountPopup = ({ onOpenForm }: DiscountPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const discountCode = "1STTSHIDIAI";

  useEffect(() => {
    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenDiscountPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenDiscountPopup', 'true');
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(discountCode);
    setCopied(true);
    toast({
      title: "Code copied!",
      description: "Discount code copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleGetDiscount = () => {
    handleCopyCode();
    setTimeout(() => {
      setIsOpen(false);
      onOpenForm();
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-accent" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">
            👋 First Time Here?
          </DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-4">
          <p className="text-xl font-semibold text-accent">
            Get 30% Off Your First Project
          </p>
          <p className="text-muted-foreground mb-4">
            Use this exclusive discount code for your first project!
          </p>
          
          {/* Discount Code Display */}
          <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-4 mb-4">
            <p className="text-sm text-muted-foreground mb-2">Your Discount Code:</p>
            <div className="flex items-center justify-center gap-2">
              <code className="text-2xl font-bold text-accent tracking-wider">{discountCode}</code>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopyCode}
                className="h-8 w-8 p-0"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-accent" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Mention this code when you get in touch to receive your discount!
          </p>
          
          <div className="flex flex-col gap-3 pt-4">
            <Button className="btn-hero w-full" onClick={handleGetDiscount}>
              Copy Code & Get Started
            </Button>
            <Button 
              variant="ghost" 
              className="w-full" 
              onClick={() => setIsOpen(false)}
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountPopup;
