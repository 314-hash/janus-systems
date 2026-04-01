import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '@/assets/profile.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
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
        style={{ bottom: '20%', right: '10%' }}
      />

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-primary/40 ring-4 ring-primary/10">
                <img
                  src={profileImage}
                  alt="Extropian Janus — Web3 Founding CTO"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <motion.div
                className="absolute -inset-3 rounded-full border border-dashed border-primary/15 animate-rotate-slow"
              />
            </motion.div>
          </motion.div>

          {/* Status badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="block text-foreground">Web3 Founding CTO</span>
            <span className="block text-gradient-primary mt-2">
              AI-Accelerated Blockchain Builder
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            I build production-grade blockchain systems using AI-accelerated workflows — turning complex ideas into secure, governed, and usable Web3 infrastructure.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <motion.a
              href="#systems"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px -5px hsl(var(--primary) / 0.6)' }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View Systems</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-card hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Build With Me
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.a
              href="https://github.com/314-hash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/blockchaindeveloper2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent"
            animate={{ scaleY: [1, 0.6, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
