const ChatbotSection = () => {
  return (
    <section id="chatbot" className="relative z-10">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
              /07 AI Assistant
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Chat With My <span className="text-gradient-primary">AI Assistant</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about my work, availability, or technical expertise? My AI assistant can help.
            </p>
          </div>

          {/* Chatbot iframe */}
          <div className="rounded-xl border border-border overflow-hidden bg-card/50 backdrop-blur-sm">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/D-mO2v_871LRAW1-jMAfb"
              width="100%"
              style={{ height: '700px', minHeight: '700px' }}
              frameBorder="0"
              title="AI Assistant Chatbot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
