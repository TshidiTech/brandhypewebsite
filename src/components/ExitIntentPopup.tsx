import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ExitIntentPopupProps {
  onBookCall: () => void;
  onOpenForm: () => void;
}

const ExitIntentPopup = ({ onBookCall, onOpenForm }: ExitIntentPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const hasSeenExitPopup = sessionStorage.getItem('hasSeenExitPopup');
        if (!hasSeenExitPopup) {
          setIsOpen(true);
          sessionStorage.setItem('hasSeenExitPopup', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleBookCall = () => {
    setIsOpen(false);
    onBookCall();
  };

  const handleOpenForm = () => {
    setIsOpen(false);
    onOpenForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-accent" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">
            Wait — Before You Go!
          </DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">
            Get a Free Prototype Consultation
          </p>
          <p className="text-muted-foreground">
            Book a 15-minute call or fill out a quick form to see how we can bring your project to life.
          </p>
          <div className="flex flex-col gap-3 pt-4">
            <Button className="btn-hero w-full" onClick={handleBookCall}>
              Book a Call
            </Button>
            <Button variant="outline" className="w-full" onClick={handleOpenForm}>
              Fill Quick Form
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-sm" 
              onClick={() => setIsOpen(false)}
            >
              No Thanks
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
