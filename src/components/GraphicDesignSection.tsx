import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, BookOpen, Crown } from 'lucide-react';
import { MotionSection, StaggerContainer, StaggerItem } from './ui/motion';

import basicTaxation from '@/assets/designs/basic-taxation.png';
import taxCode from '@/assets/designs/tax-code.png';
import lawsDuality from '@/assets/designs/laws-duality.png';
import goldenJudgement from '@/assets/designs/golden-judgement.png';
import midnightQuill from '@/assets/designs/midnight-quill.png';
import stopPower from '@/assets/designs/stop-power.png';
import cryptoSisig from '@/assets/designs/crypto-sisig.png';
import cannavendex from '@/assets/designs/cannavendex.png';
import kgpFounding from '@/assets/designs/kgp-founding.png';
import tokenomicsAgent from '@/assets/designs/tokenomics-agent.png';
import bayanProtocol from '@/assets/designs/bayan-protocol.png';
import mikayShop from '@/assets/designs/mikay-shop.png';
import cannaToken from '@/assets/designs/canna-token.png';
import mergecore from '@/assets/designs/mergecore.png';
import taxCoin from '@/assets/designs/tax-coin.png';
import leadforgeAi from '@/assets/designs/leadforge-ai.png';
import outreachflow from '@/assets/designs/outreachflow.png';
import pipelinex from '@/assets/designs/pipelinex.png';
import n8nAutopilot from '@/assets/designs/n8n-autopilot.png';

type DesignCategory = 'book-cover' | 'brand-logo';

const designs = [
  {
    title: 'Basic Taxation',
    subtitle: 'Series in Taxation — Quick Quick Reviewers',
    image: basicTaxation,
    tags: ['Book Cover', 'AI Prompt Engineering', 'Legal Education'],
    category: 'book-cover' as DesignCategory,
  },
  {
    title: 'The Tax Code',
    subtitle: 'Unmasked: Power, Secrets & Your Freedom',
    image: taxCode,
    tags: ['Book Cover', 'AI Prompt Engineering', 'Cinematic'],
    category: 'book-cover' as DesignCategory,
  },
  {
    title: "Equilibrium: Law's Duality",
    subtitle: 'Truth & Justice vs. Corruption & Deceit',
    image: lawsDuality,
    tags: ['Book Cover', 'AI Prompt Engineering', 'Conceptual Art'],
    category: 'book-cover' as DesignCategory,
  },
  {
    title: 'The Golden Judgement',
    subtitle: 'Commercial Law Reviewer — Volume 1',
    image: goldenJudgement,
    tags: ['Book Cover', 'AI Prompt Engineering', 'Legal'],
    category: 'book-cover' as DesignCategory,
  },
  {
    title: 'The Midnight Quill',
    subtitle: 'A Thriller of Shadows and Secrets',
    image: midnightQuill,
    tags: ['Book Cover', 'AI Prompt Engineering', 'Fiction'],
    category: 'book-cover' as DesignCategory,
  },
  {
    title: 'STOP',
    subtitle: 'Curiosity / Power / Success',
    image: stopPower,
    tags: ['Book Cover', 'AI Prompt Engineering', 'Bold Typography'],
    category: 'book-cover' as DesignCategory,
  },
  {
    title: "Janus' Crypto Sisig",
    subtitle: 'Proof of Taste. Zero Gas Fees.',
    image: cryptoSisig,
    tags: ['Brand Logo', 'AI Prompt Engineering', 'Web3 × Food'],
    category: 'brand-logo' as DesignCategory,
  },
  {
    title: 'CannaVendex',
    subtitle: 'Cannabis Vending Intelligence Platform',
    image: cannavendex,
    tags: ['Brand Logo', 'AI Prompt Engineering', '3D Render'],
    category: 'brand-logo' as DesignCategory,
  },
  {
    title: 'KGP Founding Member',
    subtitle: 'Kom8ks.com — Philippine Heritage NFT',
    image: kgpFounding,
    tags: ['Brand Logo', 'AI Prompt Engineering', 'NFT Badge'],
    category: 'brand-logo' as DesignCategory,
  },
  {
    title: 'Tokenomics AI Agent',
    subtitle: 'Design tokenomics, generate safe contracts',
    image: tokenomicsAgent,
    tags: ['Brand Logo', 'AI Prompt Engineering', 'Web3 AI'],
    category: 'brand-logo' as DesignCategory,
  },
  {
    title: 'BAYAN Protocol',
    subtitle: 'Autonomous. Transparent. Quantum-Secure.',
    image: bayanProtocol,
    tags: ['Brand Logo', 'AI Prompt Engineering', 'Blockchain'],
    category: 'brand-logo' as DesignCategory,
  },
  {
    title: 'Mikay Shop',
    subtitle: 'E-commerce Brand Identity',
    image: mikayShop,
    tags: ['Brand Logo', 'AI Prompt Engineering', '3D Typography'],
    category: 'brand-logo' as DesignCategory,
  },
  {
    title: '$CANNA Token',
    subtitle: 'Cannabis DeFi Token Branding',
    image: cannaToken,
    tags: ['Brand Logo', 'AI Prompt Engineering', 'Crypto'],
    category: 'brand-logo' as DesignCategory,
  },
  {
    title: 'MergeCore Protocol',
    subtitle: 'Quantum-Safe State Channel Network',
    image: mergecore,
    tags: ['Brand Logo', 'AI Prompt Engineering', 'Protocol'],
    category: 'brand-logo' as DesignCategory,
  },
  {
    title: 'TAX Coin',
    subtitle: 'Blockchain-based Tax Infrastructure',
    image: taxCoin,
    tags: ['Brand Logo', 'AI Prompt Engineering', '3D Coin'],
    category: 'brand-logo' as DesignCategory,
  },
];

const GraphicDesignSection = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'book-cover' | 'brand-logo'>('all');

  const filteredDesigns = activeTab === 'all' ? designs : designs.filter(d => d.category === activeTab);

  return (
    <section id="graphic-design" className="relative z-10">
      <div className="section-container">
        {/* Section header */}
        <MotionSection className="mb-10">
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
            Book covers, brand logos, and visual designs crafted through expert AI prompt engineering — merging creative direction with cutting-edge generative tools.
          </p>
        </MotionSection>

        {/* Category tabs */}
        <div className="flex gap-2 mb-8">
          {[
            { key: 'all', label: 'All', icon: Sparkles },
            { key: 'book-cover', label: 'Book Covers', icon: BookOpen },
            { key: 'brand-logo', label: 'Brand Logos', icon: Crown },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as typeof activeTab)}
              className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${
                activeTab === key
                  ? 'bg-primary/20 text-primary border-primary/40'
                  : 'bg-card/40 text-muted-foreground border-border hover:border-primary/30 hover:text-foreground'
              }`}
            >
              <Icon className="w-3 h-3" />
              {label}
            </button>
          ))}
        </div>

        {/* Designs grid */}
        <StaggerContainer
          key={activeTab}
          className={`grid gap-5 md:gap-6 ${
            activeTab === 'brand-logo'
              ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              : 'grid-cols-2 md:grid-cols-3'
          }`}
          staggerDelay={0.08}
        >
          {filteredDesigns.map((design, index) => (
            <StaggerItem key={design.title}>
              <motion.div
                className="group relative rounded-xl overflow-hidden bg-card border border-border cursor-pointer"
                whileHover={{
                  y: -8,
                  boxShadow: '0 25px 50px -12px hsl(var(--primary) / 0.3)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={`relative overflow-hidden ${
                  design.category === 'brand-logo' ? 'aspect-square' : 'aspect-[2/3]'
                }`}>
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
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
