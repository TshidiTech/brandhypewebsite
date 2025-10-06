import { Bot, User } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div
      className={`flex w-full ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[85%] sm:max-w-[80%] p-3 rounded-lg break-words chat-message ${
          message.type === 'user'
            ? 'bg-accent text-accent-foreground ml-2'
            : 'bg-muted text-muted-foreground mr-2'
        }`}
      >
        <div className="flex items-start space-x-2">
          {message.type === 'bot' && <Bot className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />}
          <div className="whitespace-pre-wrap text-sm leading-relaxed overflow-wrap-anywhere">
            {message.content}
          </div>
          {message.type === 'user' && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;