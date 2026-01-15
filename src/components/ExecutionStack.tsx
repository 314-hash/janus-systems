import { Code2, Cpu, Globe, Users2 } from 'lucide-react';

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
          border: 'group-hover:border-primary/50',
          glow: 'group-hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)]',
        };
      case 'accent':
        return {
          icon: 'text-accent',
          border: 'group-hover:border-accent/50',
          glow: 'group-hover:shadow-[0_0_30px_-10px_hsl(var(--accent)/0.3)]',
        };
      case 'secondary':
        return {
          icon: 'text-secondary',
          border: 'group-hover:border-secondary/50',
          glow: 'group-hover:shadow-[0_0_30px_-10px_hsl(var(--secondary)/0.3)]',
        };
      default:
        return {
          icon: 'text-primary',
          border: 'group-hover:border-primary/50',
          glow: '',
        };
    }
  };

  return (
    <section id="stack" className="relative z-10">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            /02 Execution Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Technical Pillars
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => {
            const colors = getColorClasses(pillar.color);
            return (
              <div
                key={index}
                className={`group p-6 md:p-8 rounded-xl bg-card border border-border transition-all duration-300 ${colors.border} ${colors.glow}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-muted ${colors.icon}`}>
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground pt-2">
                    {pillar.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {pillar.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExecutionStack;
