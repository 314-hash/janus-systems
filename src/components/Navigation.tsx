import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#identity', label: 'Identity' },
    { href: '#blockchain', label: 'Blockchain' },
    { href: '#systems', label: 'Systems' },
    { href: '#websites', label: 'Websites' },
    { href: '#graphic-design', label: 'Designs' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a 
            href="#" 
            className="font-mono text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            EXTROPIAN.JANUS
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Let's Build
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
