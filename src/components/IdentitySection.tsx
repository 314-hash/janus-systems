import { Cpu, GitBranch, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { MotionSection, StaggerContainer, StaggerItem } from './ui/motion';

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
          <MotionSection className="mb-12">
            <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            /01 Identity
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Founding CTO,<br />
              <span className="text-muted-foreground">Not Freelancer</span>
            </h2>
          </MotionSection>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <MotionSection delay={0.2} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I operate as a Founding CTO or Technical Co-Founder. I design systems, not demos. My work starts with understanding constraints and ends with infrastructure that scales.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've shipped production blockchain systems under regulatory uncertainty, coordinated distributed teams, and built the kind of technical foundations that survive contact with reality.
              </p>
              <motion.div 
                className="pt-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm font-mono text-secondary">
                  Systems thinking over feature shipping.
                </span>
              </motion.div>
            </MotionSection>

            {/* Bridge diagram */}
            <div className="space-y-4">
              <MotionSection delay={0.3}>
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">
                  I bridge:
                </p>
              </MotionSection>
              <StaggerContainer className="grid grid-cols-2 gap-4">
                {bridges.map((bridge, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="group p-4 rounded-lg bg-card border border-border transition-all cursor-default"
                      whileHover={{ 
                        scale: 1.05, 
                        borderColor: 'hsl(var(--primary) / 0.5)',
                        boxShadow: '0 10px 40px -10px hsl(var(--primary) / 0.3)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        <bridge.icon className="w-5 h-5 text-primary mb-3" />
                      </motion.div>
                      <span className="text-sm text-foreground font-medium">
                        {bridge.label}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;
