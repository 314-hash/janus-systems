import { Github, Linkedin, ExternalLink, Shield, FileCode } from 'lucide-react';
import { motion } from 'framer-motion';
import { MotionSection } from './ui/motion';
import contractAnalysis from '@/assets/contract-analysis.png';
import preAuditReport from '@/assets/pre-audit-report.png';

const BlockchainShowcase = () => {
  return (
    <section id="blockchain" className="relative z-10">
      <div className="section-container">
        <MotionSection className="mb-10">
          <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            /02 Blockchain
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Featured Project
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            MemePi Token — a π-based deflationary meme token with security audits and community governance.
          </p>
        </MotionSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LinkedIn embed + GitHub link */}
          <motion.div
            className="rounded-xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ borderColor: 'hsl(var(--primary) / 0.3)' }}
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

          {/* Audit images */}
          <div className="flex flex-col gap-6">
            <motion.div
              className="rounded-xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ borderColor: 'hsl(var(--secondary) / 0.3)' }}
            >
              <div className="p-3 border-b border-border flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-foreground">Pre-Audit Security Report</span>
              </div>
              <img
                src={preAuditReport}
                alt="MemePi Token pre-audit security report — 0 issues found"
                className="w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="rounded-xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ borderColor: 'hsl(var(--accent) / 0.3)' }}
            >
              <div className="p-3 border-b border-border flex items-center gap-2">
                <FileCode className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-foreground">Smart Contract Analysis</span>
              </div>
              <img
                src={contractAnalysis}
                alt="MemePi Token smart contract analysis"
                className="w-full object-cover max-h-[400px]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainShowcase;
