import { ArrowRight, Github, Linkedin, ExternalLink, Shield, FileCode } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '@/assets/profile.png';
import contractAnalysis from '@/assets/contract-analysis.png';
import preAuditReport from '@/assets/pre-audit-report.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-24 md:pt-32 overflow-hidden pb-16">
      {/* Floating ambient orbs */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '10%', left: '15%' }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{ x: [0, -60, 50, 0], y: [0, 50, -30, 0], scale: [1, 0.8, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '10%', right: '10%' }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-secondary/5 blur-3xl animate-morph"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '50%', right: '30%' }}
      />

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/50 ring-4 ring-primary/20">
                <img
                  src={profileImage}
                  alt="Extropian Janus - Web3 Founding CTO"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <motion.div
                className="absolute -inset-3 rounded-full border border-dashed border-primary/20 animate-rotate-slow"
              />
              <motion.div 
                className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Status badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 hover-glow"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary) / 0.5)' }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-secondary"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-mono text-muted-foreground">Available for Founding CTO roles</span>
          </motion.div>

          {/* Main title */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-foreground">Web3 Founding CTO</span>
            <motion.span
              className="block text-gradient-primary mt-2"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ backgroundSize: '200% 200%' }}
            >
              AI-Accelerated Blockchain Builder
            </motion.span>
            <span className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl mt-4 font-medium">Community-Driven Execution</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            I build production-grade blockchain systems using AI-accelerated workflows—turning complex ideas into secure, governed, and usable Web3 infrastructure.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <motion.a
              href="#systems"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px -5px hsl(var(--primary) / 0.6)' }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent skew-x-12"
                whileHover={{ translateX: '200%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative">View Systems</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-card hover:border-primary/50 transition-all animated-border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Build With Me
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.a
              href="https://github.com/314-hash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.85 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/blockchaindeveloper2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.3, rotate: -10 }}
              whileTap={{ scale: 0.85 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* ── Featured Blockchain Project ── */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-primary/40" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Featured Blockchain Project</span>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-primary/40" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left – LinkedIn embed + GitHub link */}
            <motion.div
              className="rounded-xl border border-border bg-card/60 backdrop-blur-md overflow-hidden"
              whileHover={{ borderColor: 'hsl(var(--primary) / 0.4)' }}
            >
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">MemePi Token — Launch Post</span>
                </div>
                <a
                  href="https://github.com/314-hash/MemePi-Token.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source Code
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex justify-center bg-background/50 p-2">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7444509235977121792"
                  height="500"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="MemePi Token LinkedIn post"
                  className="max-w-[504px] rounded-lg"
                />
              </div>
            </motion.div>

            {/* Right – Audit images */}
            <div className="flex flex-col gap-6">
              <motion.div
                className="rounded-xl border border-border bg-card/60 backdrop-blur-md overflow-hidden"
                whileHover={{ borderColor: 'hsl(var(--primary) / 0.4)' }}
              >
                <div className="p-3 border-b border-border flex items-center gap-2">
                  <Shield className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-foreground">Pre-Audit Security Report</span>
                </div>
                <img
                  src={preAuditReport}
                  alt="MemePi Token pre-audit security report showing 0 issues found"
                  className="w-full object-cover"
                />
              </motion.div>

              <motion.div
                className="rounded-xl border border-border bg-card/60 backdrop-blur-md overflow-hidden"
                whileHover={{ borderColor: 'hsl(var(--primary) / 0.4)' }}
              >
                <div className="p-3 border-b border-border flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-foreground">Smart Contract Analysis</span>
                </div>
                <img
                  src={contractAnalysis}
                  alt="MemePi Token smart contract analysis and explainer"
                  className="w-full object-cover max-h-[400px]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-mono uppercase tracking-widest animate-text-flicker">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
            animate={{ scaleY: [1, 0.6, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
