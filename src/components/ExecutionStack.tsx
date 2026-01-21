import { Code2, Cpu, Globe, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { MotionSection, StaggerContainer, StaggerItem } from './ui/motion';

const ExecutionStack = () => {
  const pillars = [
    {
      icon: Code2,
      title: 'Blockchain Engineering',
      color: 'primary',
      items: [
        'Solidity (ERC-20, 721, 1155, 2612, governance extensions)',
        'Secure smart contract design',
        'Tokenomics & DAO mechanics',
        'Modular & interoperable chains',
      ],
    },
    {
      icon: Cpu,
      title: 'AI-Accelerated Development',
      color: 'accent',
      items: [
        'AI-assisted contract design',
        'Automated audits & tests',
        'AI agents for trading, monitoring, governance',
        'Ops automation pipelines',
      ],
    },
    {
      icon: Globe,
      title: 'Full-Stack Web3',
      color: 'secondary',
      items: [
        'React / Next.js DApps',
        'Wallets, signing, UX safety',
        'On-chain + off-chain orchestration',
        'Infra-grade APIs',
      ],
    },
    {
      icon: Users2,
      title: 'Community-Driven Systems',
      color: 'primary',
      items: [
        'DAO tooling',
        'Cooperative governance',
        'Reputation-based incentives',
        'Contributor execution loops',
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          icon: 'text-primary',
          hoverBorder: 'hsl(var(--primary) / 0.5)',
          hoverShadow: '0 20px 40px -15px hsl(var(--primary) / 0.3)',
        };
      case 'accent':
        return {
          icon: 'text-accent',
          hoverBorder: 'hsl(var(--accent) / 0.5)',
          hoverShadow: '0 20px 40px -15px hsl(var(--accent) / 0.3)',
        };
      case 'secondary':
        return {
          icon: 'text-secondary',
          hoverBorder: 'hsl(var(--secondary) / 0.5)',
          hoverShadow: '0 20px 40px -15px hsl(var(--secondary) / 0.3)',
        };
      default:
        return {
          icon: 'text-primary',
          hoverBorder: 'hsl(var(--primary) / 0.5)',
          hoverShadow: '0 20px 40px -15px hsl(var(--primary) / 0.3)',
        };
    }
  };

  return (
    <section id="stack" className="relative z-10">
      <div className="section-container">
        {/* Section header */}
        <MotionSection className="mb-16">
          <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            /02 Execution Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Technical Pillars
          </h2>
        </MotionSection>

        {/* Pillars grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {pillars.map((pillar, index) => {
            const colors = getColorClasses(pillar.color);
            return (
              <StaggerItem key={index}>
                <motion.div
                  className="group p-6 md:p-8 rounded-xl bg-card border border-border h-full"
                  whileHover={{ 
                    borderColor: colors.hoverBorder,
                    y: -8,
                    boxShadow: colors.hoverShadow
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className={`p-3 rounded-lg bg-muted ${colors.icon}`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <pillar.icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground pt-2 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {pillar.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-1 h-1 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ExecutionStack;
