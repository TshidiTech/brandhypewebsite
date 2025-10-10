import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageSquare, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import LeadForm from "./LeadForm";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Packages", href: "/packages" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Tshidi<span className="text-accent">Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://wa.me/27816617013" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat
                </a>
              </Button>
              <Button 
                className="btn-hero" 
                size="sm"
                onClick={() => setShowLeadForm(true)}
              >
                <Rocket className="w-4 h-4 mr-2" />
                Start Project
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://wa.me/27816617013" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Chat
                  </a>
                </Button>
                <Button 
                  className="btn-hero" 
                  size="sm"
                  onClick={() => {
                    setIsOpen(false);
                    setShowLeadForm(true);
                  }}
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Start Project
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lead Form Dialog */}
      <Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto">
          <DialogHeader className="sr-only">
            <DialogTitle>Start Your Project</DialogTitle>
            <DialogDescription>Fill out this quick form to start your project</DialogDescription>
          </DialogHeader>
          <LeadForm onSuccess={() => setShowLeadForm(false)} />
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navigation;