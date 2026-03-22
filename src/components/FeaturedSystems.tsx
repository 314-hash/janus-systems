import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { MotionSection, StaggerContainer, StaggerItem } from './ui/motion';

const FeaturedSystems = () => {
  const systems = [
    { title: 'SmartAudit', url: 'https://smart-audit-two.vercel.app/', tag: 'Web3 Security', desc: 'AI-powered pre-audit scanner for Solidity/Soroban contracts' },
    { title: 'Tokenomics AI Studio', url: 'https://tokenomics-ai-studio.vercel.app/', tag: 'Web3 / AI', desc: 'AI agent that designs tokenomics & generates smart contracts' },
    { title: 'Governance AI', url: 'https://governance-ai.vercel.app/', tag: 'DAO Tools', desc: 'AI-powered DAO proposal drafting & compliance validation' },
    { title: 'Core Consensus', url: 'https://core-consensus.vercel.app/', tag: 'Decision Engine', desc: 'Consensus stacks computing trust scores for DAOs & AI' },
    { title: 'Citi Tokeneers / PERA Coin', url: 'https://citi-tokeneers.vercel.app/', tag: 'FinTech', desc: 'Gold-backed token ecosystem for PH financial inclusion' },
    { title: 'Sidra App Store', url: 'https://sidra-app-stores.vercel.app/', tag: 'Marketplace', desc: 'Shariah-aligned decentralized dApp marketplace' },
    { title: 'CannaVenDex', url: 'https://cannavendex.vercel.app/', tag: 'Compliance', desc: 'EU-compliant cannabis dispensing system' },
    { title: 'Cannaverse Connect', url: 'https://cannaverse-connect.vercel.app/', tag: 'DeFi', desc: 'Dual-token cannabis finance with governance & NFT credentials' },
    { title: 'Cognitive Flow Tracker', url: 'https://cognitive-flow-tracker.vercel.app/', tag: 'Productivity', desc: 'Real-time cognitive load analysis & focus optimization' },
    { title: 'MemePi Protocol', url: 'https://meme-pi-protocol.vercel.app/', tag: 'Protocol', desc: 'π-based deflationary meme token on Optimism L2' },
    { title: 'Falcon Rider X', url: 'https://falcon-rider-x.vercel.app/', tag: 'Tokenization', desc: 'Fractional ownership of luxury vehicles via smart contracts' },
    { title: 'Blockchain Dev Academy', url: 'https://blockchain-dev-academy.vercel.app/', tag: 'Education', desc: 'Risk-free blockchain education via testnets & Hardhat' },
    { title: 'AuditoSync', url: 'https://audito-sync.vercel.app/', tag: 'Workflow', desc: 'Real-time audit synchronization for distributed teams' },
    { title: 'Cosmic Novel', url: 'https://cosmic-novel.vercel.app/', tag: 'Gamified', desc: 'Visual novel guiding users through Web3 concepts' },
    { title: 'Age Blossom', url: 'https://age-blossom.vercel.app/', tag: 'Utility', desc: 'Precision age calculator with multi-timezone support' },
  ];

  return (
    <section id="systems" className="relative z-10">
      <div className="section-container">
        <MotionSection className="mb-10">
          <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            /03 Featured Systems
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Infrastructure Built
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl">
            {systems.length} production systems. No hackathon demos.
          </p>
        </MotionSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" staggerDelay={0.04}>
          {systems.map((system, index) => (
            <StaggerItem key={index}>
              <motion.a
                href={system.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 rounded-lg bg-card/60 border border-border hover:border-primary/40 transition-colors"
                whileHover={{ y: -2, boxShadow: '0 8px 24px -8px hsl(var(--primary) / 0.2)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-mono text-muted-foreground/40 mt-0.5 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {system.title}
                    </h3>
                    <ArrowUpRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-1">
                    {system.desc}
                  </p>
                  <span className="inline-block mt-1.5 text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                    {system.tag}
                  </span>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FeaturedSystems;
