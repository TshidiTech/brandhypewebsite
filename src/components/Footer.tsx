import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-4 block">
              Tshidi<span className="text-accent">Tech</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              South African web development agency delivering fast, results-driven digital solutions for growing businesses.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:admin@tshiditech.co.za" 
                className="flex items-center text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                hello@tshidi.tech
              </a>
              <a 
                href="tel:+27816617013" 
                className="flex items-center text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +27 81 661 7013
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/packages" className="hover:text-accent transition-colors">Website Development</Link></li>
              <li><Link to="/packages" className="hover:text-accent transition-colors">E-commerce Solutions</Link></li>
              <li><Link to="/packages" className="hover:text-accent transition-colors">Webflow Development</Link></li>
              <li><Link to="/packages" className="hover:text-accent transition-colors">App Prototypes</Link></li>
              <li><Link to="/packages" className="hover:text-accent transition-colors">Chatbot Development</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li>
                <a 
                  href="https://wa.me/27816617013" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center"
                >
                  <MessageCircle className="w-3 h-3 mr-1" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} TshidiTech. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
