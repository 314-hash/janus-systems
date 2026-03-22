import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-3 w-[370px] h-[500px] rounded-xl border border-border overflow-hidden bg-card shadow-2xl flex flex-col animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
            <span className="text-sm font-semibold text-foreground">AI Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/D-mO2v_871LRAW1-jMAfb"
            width="100%"
            className="flex-1"
            frameBorder="0"
            title="AI Assistant Chatbot"
          />
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default ChatbotSection;
