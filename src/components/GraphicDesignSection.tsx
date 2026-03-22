import { motion } from 'framer-motion';
import { Sparkles, Palette } from 'lucide-react';
import { MotionSection, StaggerContainer, StaggerItem } from './ui/motion';

import basicTaxation from '@/assets/designs/basic-taxation.png';
import taxCode from '@/assets/designs/tax-code.png';
import lawsDuality from '@/assets/designs/laws-duality.png';
import goldenJudgement from '@/assets/designs/golden-judgement.png';
import midnightQuill from '@/assets/designs/midnight-quill.png';
import stopPower from '@/assets/designs/stop-power.png';

const designs = [
  {
    title: 'Basic Taxation',
    subtitle: 'Series in Taxation — Quick Quick Reviewers',
    image: basicTaxation,
    tags: ['Book Cover', 'AI Prompt Engineering', 'Legal Education'],
  },
  {
    title: 'The Tax Code',
    subtitle: 'Unmasked: Power, Secrets & Your Freedom',
    image: taxCode,
    tags: ['Book Cover', 'AI Prompt Engineering', 'Cinematic'],
  },
  {
    title: "Equilibrium: Law's Duality",
    subtitle: 'Truth & Justice vs. Corruption & Deceit',
    image: lawsDuality,
    tags: ['Book Cover', 'AI Prompt Engineering', 'Conceptual Art'],
  },
  {
    title: 'The Golden Judgement',
    subtitle: 'Commercial Law Reviewer — Volume 1',
    image: goldenJudgement,
    tags: ['Book Cover', 'AI Prompt Engineering', 'Legal'],
  },
  {
    title: 'The Midnight Quill',
    subtitle: 'A Thriller of Shadows and Secrets',
    image: midnightQuill,
    tags: ['Book Cover', 'AI Prompt Engineering', 'Fiction'],
  },
  {
    title: 'STOP',
    subtitle: 'Curiosity / Power / Success',
    image: stopPower,
    tags: ['Book Cover', 'AI Prompt Engineering', 'Bold Typography'],
  },
];

const GraphicDesignSection = () => {
  return (
    <section id="graphic-design" className="relative z-10">
      <div className="section-container">
        {/* Section header */}
        <MotionSection className="mb-16">
          <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            /05 Graphic Design & AI Prompt Engineering
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Visual Creations
          </h2>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
              <Palette className="w-3 h-3" />
              Graphic Design
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-secondary/15 text-secondary border border-secondary/20">
              <Sparkles className="w-3 h-3" />
              AI Prompt Engineer
            </span>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Book covers and visual designs crafted through expert AI prompt engineering — merging creative direction with cutting-edge generative tools.
          </p>
        </MotionSection>

        {/* Designs grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6" staggerDelay={0.1}>
          {designs.map((design, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group relative rounded-xl overflow-hidden bg-card border border-border cursor-pointer"
                whileHover={{
                  y: -8,
                  boxShadow: '0 25px 50px -12px hsl(var(--primary) / 0.3)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image */}
                <div className="relative aspect-[2/3] overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-1">
                      {design.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {design.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {design.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/20 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default GraphicDesignSection;
