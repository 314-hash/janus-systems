const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Constraint Discovery',
      description: 'Understand the boundaries. Technical, regulatory, team, timeline. Every constraint is information that shapes the solution.',
    },
    {
      number: '02',
      title: 'Architecture Mapping',
      description: 'Design the system before writing code. Identify failure modes, attack surfaces, and integration points. Document decisions.',
    },
    {
      number: '03',
      title: 'Security-First Contracts',
      description: 'Smart contracts are immutable. Build with that in mind. Formal verification where possible. Multiple audit rounds.',
    },
    {
      number: '04',
      title: 'Frontend & Automation',
      description: 'User interfaces that don\'t lie about on-chain state. Automation that fails safely. Monitoring that catches issues before users do.',
    },
    {
      number: '05',
      title: 'Governance & Incentives',
      description: 'Systems that can evolve. Clear upgrade paths. Incentive structures that align long-term participant behavior.',
    },
    {
      number: '06',
      title: 'Iteration via Usage',
      description: 'Ship to learn. Gather real usage data. Improve based on evidence, not assumptions. Repeat.',
    },
  ];

  return (
    <section id="process" className="relative z-10">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            /04 How I Build
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Systems Thinking
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Building blockchain infrastructure requires understanding how things break. This process has been refined through real production deployments.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Step number */}
              <span className="text-5xl font-bold text-muted/20 font-mono mb-4 block group-hover:text-primary/20 transition-colors">
                {step.number}
              </span>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connecting line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-border to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 p-6 rounded-xl border border-primary/20 bg-primary/5">
          <p className="text-sm text-muted-foreground text-center font-mono">
            "This person knows how things break."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
