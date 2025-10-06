import { Button } from "@/components/ui/button";

interface ChatSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
  isTyping: boolean;
}

const ChatSuggestions = ({ onSuggestionClick, isTyping }: ChatSuggestionsProps) => {
  const suggestions = [
    "What are your prices?",
    "How long does it take?",
    "Tell me about websites",
    "Tell me about chatbots",
    "Tell me about apps",
    "What payment methods?",
    "How do I contact you?",
    "What services do you offer?",
  ];

  return (
    <div className="p-3 border-t bg-muted/30 max-h-48 overflow-y-auto">
      <p className="text-xs text-muted-foreground mb-2 font-medium">Choose a question:</p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => onSuggestionClick(suggestion)}
            disabled={isTyping}
            className="text-xs h-auto py-2 px-3 text-left justify-start whitespace-normal"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ChatSuggestions;