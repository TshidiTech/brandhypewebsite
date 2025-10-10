import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Bot, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import ChatMessage from "./ChatMessage";
import ChatSuggestions from "./ChatSuggestions";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const InteractiveChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      const welcomeMessage: Message = {
        id: "welcome",
        type: 'bot',
        content: "👋 Hi! I'm here to help you with any questions about our web development services. You can ask me about:\n\n• Package pricing and features\n• Project timelines\n• Payment terms\n• Our services\n• Getting started\n\nWhat would you like to know?",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Simplified FAQ - No custom answers, just info
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return "💰 **Our Pricing:**\n\n• Websites: R3,000 - R42,000\n• E-commerce: R38,000 - R55,000\n• Apps & MVPs: R28,000 - R45,000\n• Chatbots: R25,000 - R55,000\n\nAll packages include hosting, revisions, and training. View all packages on our Packages page!";
    }
    
    if (message.includes('payment') || message.includes('deposit')) {
      return "💳 **Payment Terms:**\n\nFull payment upfront. 50% deposit available for larger projects.\n\n✅ We accept: Bank transfers, cards, PayFast\n\nWe start within 24 hours of payment.";
    }
    
    if (message.includes('timeline') || message.includes('how long')) {
      return "⏰ **Typical Timelines:**\n\n• Websites: 1-6 weeks\n• E-commerce: 5-7 weeks\n• Apps: 3-8 weeks\n• Chatbots: 2-6 weeks\n\nTimelines vary by complexity. Rush delivery available!";
    }
    
    if (message.includes('contact') || message.includes('get in touch')) {
      return "📞 **Contact Us:**\n\n• Email: admin@tshiditech.co.za\n• WhatsApp: +27 81 661 7013\n• Hours: Mon-Fri 9AM-5PM (CAT)\n\nReady to start? Use our contact buttons below!";
    }
    
    if (message.includes('website') || message.includes('web development')) {
      return "🌐 **Website Services:**\n\n• Custom responsive sites\n• E-commerce stores\n• Webflow premium sites\n• SEO optimization\n• Hosting included\n\nAll mobile-optimized with SSL. Check our Portfolio for examples!";
    }
    
    if (message.includes('chatbot') || message.includes('ai')) {
      return "🤖 **Chatbot Services:**\n\n• Basic FAQ bots: R25,000\n• Advanced AI bots: R55,000\n• WhatsApp/website integration\n• Lead capture included\n\nPerfect for 24/7 customer support!";
    }
    
    if (message.includes('app') || message.includes('prototype')) {
      return "📱 **App Development:**\n\n• Clickable prototypes: R28,000\n• No-code MVPs: R45,000\n• Fast turnaround\n• Launch-ready\n\nGreat for testing ideas before full dev!";
    }
    
    // Default/greeting
    return "👋 Hi! I'm your TshidiTech assistant. I can help with:\n\n• Pricing info\n• Project timelines\n• Services we offer\n• Contact information\n\nWhat would you like to know?";
  };

  const handleSendMessage = (messageToSend: string) => {
    const message = messageToSend.trim();
    if (!message) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(message),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };


  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-md h-[80vh] sm:h-[600px] max-h-[600px] animate-scale-in flex flex-col shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between p-3 sm:p-4 border-b bg-card/95 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-sm sm:text-base">TshidiTech Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 min-h-0">
            {/* Messages Area */}
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto scroll-smooth p-3 sm:p-4 space-y-3 min-h-0 chat-container"
              style={{ 
                scrollBehavior: 'smooth',
                overflowAnchor: 'auto'
              }}
            >
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg mr-2 max-w-[85%] sm:max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-accent" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat Suggestions - Always Visible */}
            <ChatSuggestions 
              onSuggestionClick={handleSuggestionClick}
              isTyping={isTyping}
            />

            {/* Contact Options */}
            <div className="border-t p-3 bg-card/95 backdrop-blur-sm">
              <div className="flex justify-center space-x-2">
                <Button variant="ghost" size="sm" asChild className="h-8 text-xs flex-1">
                  <a href="https://wa.me/27816617013" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Phone className="w-3 h-3 mr-1" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="h-8 text-xs flex-1">
                  <a href="mailto:admin@tshiditech.co.za" className="flex items-center justify-center">
                    <Mail className="w-3 h-3 mr-1" />
                    Email
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="h-8 text-xs flex-1">
                  <a href="https://calendar.app.google/BYcjkX4hd4fnpsYJA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    Book Call
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating Button */}
      <button
        className="floating-chat animate-float"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat assistant"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </>
  );
};

export default InteractiveChatbot;