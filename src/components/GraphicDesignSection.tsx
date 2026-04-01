import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, BookOpen, Crown, Zap } from 'lucide-react';
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

type DesignCategory = 'book-cover' | 'brand-logo' | 'saas';

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
  {
    title: 'LeadForge AI',
    subtitle: 'AI-Powered Lead Generation Agent',
    image: leadforgeAi,
    tags: ['SaaS', 'Lead Gen', 'AI Agent'],
    category: 'saas' as DesignCategory,
  },
  {
    title: 'OutreachFlow',
    subtitle: 'Email Outreach Automation Platform',
    image: outreachflow,
    tags: ['SaaS', 'n8n', 'Email Automation'],
    category: 'saas' as DesignCategory,
  },
  {
    title: 'PipelineX',
    subtitle: 'AI Sales Pipeline Orchestrator',
    image: pipelinex,
    tags: ['SaaS', 'AI Agent', 'Sales'],
    category: 'saas' as DesignCategory,
  },
  {
    title: 'n8n Autopilot',
    subtitle: 'Workflow Automation Intelligence',
    image: n8nAutopilot,
    tags: ['SaaS', 'n8n', 'Automation'],
    category: 'saas' as DesignCategory,
  },
];

const GraphicDesignSection = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'book-cover' | 'brand-logo' | 'saas'>('all');

  const filteredDesigns = activeTab === 'all' ? designs : designs.filter(d => d.category === activeTab);

  return (
    <section id="graphic-design" className="relative z-10">
      <div className="section-container">
        {/* Section header */}
        <MotionSection className="mb-10">
          <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            /06 Graphic Design & AI Prompt Engineering
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
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { key: 'all', label: 'All', icon: Sparkles },
            { key: 'book-cover', label: 'Book Covers', icon: BookOpen },
            { key: 'brand-logo', label: 'Brand Logos', icon: Crown },
            { key: 'saas', label: 'SaaS & Automation', icon: Zap },
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
            activeTab === 'brand-logo' || activeTab === 'saas'
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
                  design.category === 'brand-logo' || design.category === 'saas' ? 'aspect-square' : 'aspect-[2/3]'
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

        {/* LinkedIn Automation Post */}
        {activeTab === 'all' || activeTab === 'saas' ? (
          <motion.div
            className="mt-12 max-w-xl mx-auto rounded-xl border border-border bg-card/60 backdrop-blur-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ borderColor: 'hsl(var(--primary) / 0.4)' }}
          >
            <div className="p-4 border-b border-border flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span className="text-sm font-semibold text-foreground">AI Automation — LinkedIn Post</span>
            </div>
            <div className="flex justify-center bg-background/50 p-2">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7444972166678405120?compact=1"
                height="399"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="AI Automation LinkedIn post"
                className="max-w-[504px] rounded-lg"
              />
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default GraphicDesignSection;
