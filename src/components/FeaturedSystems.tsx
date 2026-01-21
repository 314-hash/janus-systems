import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { MotionSection, StaggerContainer, StaggerItem } from './ui/motion';

const FeaturedSystems = () => {
  const systems = [
    {
      title: 'SmartAudit',
      url: 'https://smart-audit-two.vercel.app/',
      problem: 'Web3 teams needed a way to catch common vulnerabilities before expensive formal audits.',
      architecture: 'AI-powered pre-audit scanner checking Solidity/Soroban contracts against SWC Registry with automated vulnerability detection.',
      role: 'System architect. Built AI analysis pipeline, vulnerability pattern matching, and developer-friendly reporting.',
      outcome: 'Catches ~70% of common vulnerabilities before formal audit, reducing costs and accelerating security workflows.',
    },
    {
      title: 'Tokenomics AI Studio',
      url: 'https://tokenomics-ai-studio.vercel.app/',
      problem: 'Designing sustainable tokenomics requires deep expertise and countless iterations that most teams lack.',
      architecture: 'AI agent that designs tokenomics models and generates EVM-compatible smart contracts with visual supply/vesting/emissions modeling.',
      role: 'Full-stack architect. Built AI reasoning engine, contract generation pipeline, and interactive visualization layer.',
      outcome: 'Accelerates Web3 economic design from weeks to hours with production-ready contract outputs.',
    },
    {
      title: 'Governance AI',
      url: 'https://governance-ai.vercel.app/',
      problem: 'DAO proposals often fail due to non-compliance with complex governance rules and voting thresholds.',
      architecture: 'AI-powered drafting tool that parses governance frameworks and validates proposals against quorum/threshold requirements.',
      role: 'Protocol designer. Defined governance parsing logic, compliance validation, and proposal optimization engine.',
      outcome: 'Ensures proposal compliance before submission, reducing failed votes and governance friction.',
    },
    {
      title: 'Core Consensus',
      url: 'https://core-consensus.vercel.app/',
      problem: 'High-stakes decisions lack transparent, quantifiable trust metrics across distributed stakeholders.',
      architecture: 'Decision Intelligence Engine with customizable consensus stacks (PoW, PoS, BFT) computing trust scores for DAO governance and AI coordination.',
      role: 'System architect. Designed consensus composition framework and trust score computation algorithms.',
      outcome: 'Enables transparent, auditable decision-making for DAOs and multi-agent AI systems.',
    },
    {
      title: 'Citi Tokeneers / PERA Coin',
      url: 'https://citi-tokeneers.vercel.app/',
      problem: 'The Philippines needed a stable, gold-backed digital payment system for financial inclusion and tax collection.',
      architecture: 'Gold-backed token ecosystem with stable payments, tax integration, and compliance modules for regulated financial services.',
      role: 'Founding technical architect. Designed token mechanics, compliance layer, and financial services integration.',
      outcome: 'Deployed financial inclusion infrastructure enabling stable P2P payments with built-in regulatory hooks.',
    },
    {
      title: 'Sidra App Store',
      url: 'https://sidra-app-stores.vercel.app/',
      problem: 'The Sidra ecosystem needed a Shariah-aligned, decentralized marketplace for ethical dApp discovery.',
      architecture: 'Ethical Web3 marketplace with compliance verification, decentralized curation, and ecosystem integration for dApps like SmartAudit and BAYAN Protocol.',
      role: 'Platform architect. Built discovery mechanics, compliance framework, and ecosystem integration layer.',
      outcome: 'Operating marketplace enabling ethical dApp discovery and Shariah-compliant Web3 commerce.',
    },
    {
      title: 'CannaVenDex',
      url: 'https://cannavendex.vercel.app/',
      problem: 'Cannabis retail in regulated EU markets (NL, DE, ES) requires complex compliance, age verification, and audit trails.',
      architecture: 'Compliant dispensing system with age verification, sales logging, delivery mechanics, and multi-jurisdiction regulatory modules.',
      role: 'System designer. Architected compliance layer, verification flows, and audit infrastructure.',
      outcome: 'Production-ready dispensing system meeting EU regulatory requirements across multiple jurisdictions.',
    },
    {
      title: 'Cannaverse Connect',
      url: 'https://cannaverse-connect.vercel.app/',
      problem: 'Cannabis industry lacked blockchain-native financial infrastructure with proper governance and credentials.',
      architecture: 'Dual-token model ($CANNA/$CANNA-GOV) on BSC with staking dashboards, governance mechanics, and Soulbound NFT credentials.',
      role: 'Protocol architect. Designed tokenomics, governance system, and credential infrastructure.',
      outcome: 'Blockchain-native cannabis finance ecosystem with integrated governance and verifiable credentials.',
    },
    {
      title: 'Cognitive Flow Tracker',
      url: 'https://cognitive-flow-tracker.vercel.app/',
      problem: 'Developers and knowledge workers lack real-time visibility into cognitive load and focus optimization.',
      architecture: 'Real-time cognitive analysis computing Load Scores across chaos, errors, latency, and variability metrics.',
      role: 'Full-stack developer. Built analysis algorithms, real-time monitoring, and productivity optimization engine.',
      outcome: 'Enables data-driven focus optimization and cognitive load management for deep work.',
    },
    {
      title: 'MemePi Protocol',
      url: 'https://meme-pi-protocol.vercel.app/',
      problem: 'Meme tokens lack mathematical rigor and transparent, sustainable tokenomics.',
      architecture: 'Mathematical meme ecosystem on Optimism L2 with π-based deflationary formula, transparent contracts, and staking mechanics.',
      role: 'Protocol designer. Defined mathematical token mechanics and deflationary algorithms.',
      outcome: 'Transparent meme protocol contrasting pump-and-dump schemes with sustainable, auditable mechanics.',
    },
    {
      title: 'Falcon Rider X',
      url: 'https://falcon-rider-x.vercel.app/',
      problem: 'High-value luxury assets like supercars are inaccessible to most investors due to capital requirements.',
      architecture: 'Fractional ownership platform using smart contracts to tokenize vehicles (Lamborghini, Ferrari) for tradeable asset shares.',
      role: 'Platform architect. Built tokenization contracts, trading mechanics, and ownership verification.',
      outcome: 'Enables fractional investment in luxury vehicles with transparent, blockchain-verified ownership.',
    },
    {
      title: 'Blockchain Dev Academy',
      url: 'https://blockchain-dev-academy.vercel.app/',
      problem: 'Blockchain education often exposes learners to financial risk before they understand fundamentals.',
      architecture: 'CASP-Rep compliant educational platform (PH SEC guidelines) teaching ERC-20 fundamentals via testnets, Remix, and Hardhat.',
      role: 'Platform designer. Built curriculum structure, testnet integration, and risk-free learning environment.',
      outcome: 'Zero-risk blockchain education meeting regulatory guidelines for developer onboarding.',
    },
    {
      title: 'AuditoSync',
      url: 'https://audito-sync.vercel.app/',
      problem: 'Audit workflows across distributed teams lack synchronization and real-time collaboration.',
      architecture: 'Synchronization tool for audit workflows enabling real-time collaboration and status tracking across distributed teams.',
      role: 'System architect. Built sync infrastructure and collaborative audit management.',
      outcome: 'Streamlined audit coordination reducing communication overhead and missed findings.',
    },
    {
      title: 'Cosmic Novel',
      url: 'https://cosmic-novel.vercel.app/',
      problem: 'Blockchain concepts are abstract and intimidating for newcomers without guided, narrative learning.',
      architecture: 'Visual novel / educational journey guiding users through Web3 from airdrops to infrastructure building.',
      role: 'Experience designer. Crafted narrative arc and interactive learning mechanics.',
      outcome: 'Engaging onboarding experience making blockchain concepts accessible through storytelling.',
    },
    {
      title: 'Age Blossom',
      url: 'https://age-blossom.vercel.app/',
      problem: 'Precise age calculations across timezones are needed for compliance, verification, and personal tracking.',
      architecture: 'Futuristic age calculator with minute-level precision across multiple timezones.',
      role: 'Full-stack developer. Built calculation engine and multi-timezone handling.',
      outcome: 'Precision age verification tool for compliance and personal use cases.',
    },
  ];

  return (
    <section id="systems" className="relative z-10">
      <div className="section-container">
        {/* Section header */}
        <MotionSection className="mb-16">
          <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            /03 Featured Systems
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Infrastructure Built
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Systems designed for production. No hackathon demos. Each represents months of careful architecture and execution.
          </p>
        </MotionSection>

        {/* Systems grid */}
        <StaggerContainer className="grid gap-6 md:gap-8" staggerDelay={0.08}>
          {systems.map((system, index) => (
            <StaggerItem key={index}>
              <motion.a
                href={system.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 md:p-8 rounded-xl bg-card border border-border block cursor-pointer overflow-hidden"
                whileHover={{ 
                  borderColor: 'hsl(var(--primary) / 0.4)',
                  y: -4,
                  boxShadow: '0 20px 40px -20px hsl(var(--primary) / 0.3)'
                }}
                whileTap={{ scale: 0.995 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Number */}
                <motion.span 
                  className="absolute top-6 right-6 text-4xl md:text-6xl font-bold text-muted/20 font-mono select-none"
                  whileHover={{ color: 'hsl(var(--primary) / 0.2)', scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.span>

                {/* Content */}
                <div className="relative">
                  <div className="flex items-start gap-3 mb-6 pr-16">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {system.title}
                    </h3>
                    <motion.div
                      whileHover={{ x: 4, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-1.5">
                          Problem
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {system.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-1.5">
                          System Architecture
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {system.architecture}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-1.5">
                          Execution Role
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {system.role}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-mono text-secondary uppercase tracking-wider mb-1.5">
                          Outcome
                        </h4>
                        <p className="text-foreground text-sm font-medium leading-relaxed">
                          {system.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
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
