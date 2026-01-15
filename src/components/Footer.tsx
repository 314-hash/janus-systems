const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-muted-foreground">
              © 2025 Extropian Janus
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs font-mono text-muted-foreground/60">
              Building infrastructure under uncertainty
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
