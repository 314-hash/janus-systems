const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-sm text-muted-foreground">
            © 2026 Extropian Janus
          </span>
          <span className="text-xs font-mono text-muted-foreground/60">
            Building infrastructure under uncertainty
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
