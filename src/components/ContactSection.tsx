import { useState } from 'react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formState);
  };

  return (
    <section id="contact" className="relative z-10">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
              /06 Let's Build
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Build Real<br />
              <span className="text-gradient-primary">Web3 Infrastructure?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you need a Founding CTO who can design, ship, and sustain real Web3 systems—let's talk.
            </p>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-mono text-muted-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-mono text-muted-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-mono text-muted-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project, timeline, and what you're looking for in a technical co-founder..."
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all glow-primary w-full sm:w-auto justify-center"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Social links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Or connect via:</span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-card transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-card transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
                <a
                  href="mailto:contact@extropianjanus.io"
                  className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-card transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
