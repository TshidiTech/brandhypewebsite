import { CheckCircle, MessageCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen gradient-hero pt-16 flex items-center justify-center px-4">
      <Card className="package-card max-w-2xl w-full">
        <CardContent className="p-8 md:p-12 text-center space-y-8">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">🎉 Awesome — Your Project Brief Has Been Received!</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Our team will reach out within 24 hours.
            </p>
          </div>

          <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 space-y-4">
            <div className="text-4xl mb-2">💰</div>
            <p className="text-xl md:text-2xl font-bold text-accent">
              Special Offer: 30% Project Discount
            </p>
            <p className="text-muted-foreground">
              Chat with us on WhatsApp within 3 days to claim your exclusive discount before it expires!
            </p>
            <Button 
              className="btn-hero w-full mt-4"
              asChild
            >
              <a href="https://wa.me/27816617013" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Claim Your 30% Discount on WhatsApp
              </a>
            </Button>
          </div>

          <div className="border-t pt-6">
            <p className="text-lg font-semibold mb-4">
              Check out our portfolio while you wait
            </p>
            <Button variant="outline" className="btn-outline-hero w-full sm:w-auto" asChild>
              <Link to="/portfolio">
                <Eye className="w-4 h-4 mr-2" />
                View Our Work
              </Link>
            </Button>
          </div>

          <div className="pt-4">
            <Link to="/" className="text-accent hover:underline">
              ← Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYouPage;
