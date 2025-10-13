import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface DiscountPopupProps {
  onOpenForm: () => void;
}

const DiscountPopup = ({ onOpenForm }: DiscountPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

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

  const handleGetDiscount = () => {
    setIsOpen(false);
    onOpenForm();
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
          <p className="text-muted-foreground">
            Start your project inquiry now and we'll apply the discount when we send your quote.
          </p>
          <div className="flex flex-col gap-3 pt-4">
            <Button className="btn-hero w-full" onClick={handleGetDiscount}>
              Claim My Discount
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
