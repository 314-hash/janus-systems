import { Shield, Clock, Scale, Network } from 'lucide-react';

const TrustSection = () => {
  const signals = [
    {
      icon: Shield,
      title: 'Builder Over Influencer',
      description: 'Code shipped, systems deployed, teams coordinated. Results over reach.',
    },
    {
      icon: Clock,
      title: 'Long-Term Systems Thinker',
      description: 'Designing for maintenance, upgrades, and the team that comes after.',
    },
    {
      icon: Scale,
      title: 'Governance & Compliance Fluent',
      description: 'Comfortable navigating legal, regulatory, and institutional requirements.',
    },
    {
      icon: Network,
      title: 'Cross-Domain Communication',
      description: 'Equally effective with founders, developers, communities, and institutions.',
    },
  ];

  return (
    <section className="relative z-10">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            /05 Working Style
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How I Operate
          </h2>
        </div>

        {/* Trust signals */}
        <div className="grid md:grid-cols-2 gap-6">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-6 rounded-xl bg-card/50 border border-border/50"
            >
              <div className="p-3 rounded-lg bg-muted">
                <signal.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {signal.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {signal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
