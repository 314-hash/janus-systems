import { ArrowUpRight } from 'lucide-react';

const FeaturedSystems = () => {
  const systems = [
    {
      title: 'City-Token Economic System',
      problem: 'Municipalities needed localized digital economies that work across existing infrastructure without replacing it.',
      architecture: 'Interoperable token layer with bridge contracts, multi-sig governance, and compliance modules for regulated environments.',
      role: 'Founding technical architect. Designed token mechanics, led smart contract development, coordinated security audits.',
      outcome: 'Deployed system enabling localized P2P value transfer with built-in governance and regulatory hooks.',
    },
    {
      title: 'AI-Driven Web3 Operations Agent',
      problem: 'Manual monitoring and response to on-chain events created operational bottlenecks and missed opportunities.',
      architecture: 'Event-driven agent system with LLM reasoning, on-chain action execution, and human-in-the-loop safeguards.',
      role: 'System architect and lead developer. Built agent framework, monitoring infrastructure, and safety constraints.',
      outcome: 'Reduced operational response time from hours to seconds while maintaining security controls.',
    },
    {
      title: 'Governance-Aware DeFi Protocol',
      problem: 'DeFi protocols lacked integrated governance that could adapt execution parameters based on community signals.',
      architecture: 'Modular governance layer with time-locked proposals, execution guards, and reputation-weighted voting.',
      role: 'Protocol designer. Defined governance mechanics, implemented core contracts, designed upgrade paths.',
      outcome: 'Working protocol with active governance participation and zero security incidents post-launch.',
    },
  ];

  return (
    <section id="systems" className="relative z-10">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            /03 Featured Systems
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Infrastructure Built
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Systems designed for production. No hackathon demos. Each represents months of careful architecture and execution.
          </p>
        </div>

        {/* Systems list */}
        <div className="space-y-8">
          {systems.map((system, index) => (
            <article
              key={index}
              className="group relative p-8 md:p-10 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Number */}
              <span className="absolute top-8 right-8 text-6xl md:text-8xl font-bold text-muted/30 font-mono select-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 pr-20 group-hover:text-primary transition-colors">
                  {system.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-2">
                        Problem
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {system.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-2">
                        System Architecture
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {system.architecture}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-2">
                        Execution Role
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {system.role}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-secondary uppercase tracking-wider mb-2">
                        Outcome
                      </h4>
                      <p className="text-foreground font-medium leading-relaxed">
                        {system.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6 text-primary" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSystems;
