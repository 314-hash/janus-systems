import { Cpu, GitBranch, Shield, Users } from 'lucide-react';

const IdentitySection = () => {
  const bridges = [
    { icon: Cpu, label: 'Vision → Architecture' },
    { icon: GitBranch, label: 'Smart Contracts → Frontend' },
    { icon: Shield, label: 'Security → Automation' },
    { icon: Users, label: 'Community → Governance' },
  ];

  return (
    <section id="identity" className="relative z-10">
      <div className="section-container">
        <div className="max-w-4xl">
          {/* Section header */}
          <div className="mb-12">
            <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
              /01 Identity
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Founding CTO,<br />
              <span className="text-muted-foreground">Not Freelancer</span>
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I operate as a Founding CTO or Technical Co-Founder. I design systems, not demos. My work starts with understanding constraints and ends with infrastructure that scales.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've shipped production blockchain systems under regulatory uncertainty, coordinated distributed teams, and built the kind of technical foundations that survive contact with reality.
              </p>
              <div className="pt-4">
                <span className="text-sm font-mono text-secondary">
                  Systems thinking over feature shipping.
                </span>
              </div>
            </div>

            {/* Bridge diagram */}
            <div className="space-y-4">
              <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">
                I bridge:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {bridges.map((bridge, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
                  >
                    <bridge.icon className="w-5 h-5 text-primary mb-3" />
                    <span className="text-sm text-foreground font-medium">
                      {bridge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;
