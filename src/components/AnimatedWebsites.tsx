import { ArrowUpRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { MotionSection, StaggerContainer, StaggerItem } from './ui/motion';

import smMallOfAsia from '@/assets/screenshots/sm-mall-of-asia.png';
import hiromitsuRestaurant from '@/assets/screenshots/hiromitsu-restaurant.png';
import makiSushiRolls from '@/assets/screenshots/maki-sushi-rolls.png';
import ninevehAcademy from '@/assets/screenshots/nineveh-academy.png';
import graceValderama from '@/assets/screenshots/grace-valderama-agent.png';
import papaPares from '@/assets/screenshots/papa-pares.png';
import jonutsDonuts from '@/assets/screenshots/jonuts-donuts.png';
import kamuningsHaloHalo from '@/assets/screenshots/kamunings-halo-halo.png';
import khiferOfficialVlog from '@/assets/screenshots/khifer-official-vlog.png';

const websites = [
  {
    title: 'SM Mall of Asia',
    url: 'https://sm-mall-of-asia.vercel.app/',
    category: 'Retail & Commerce',
    description: 'Luxury retail destination website with interactive store directory, immersive experience showcases, and elegant wayfinding for 342+ boutiques.',
    screenshot: smMallOfAsia,
  },
  {
    title: 'Hiromitsu Restaurant',
    url: 'https://hiromitsu-restaurant.vercel.app/',
    category: 'Food & Dining',
    description: 'Authentic Japanese restaurant site with full menu system, table reservations, delivery ordering, and a warm lantern-lit visual atmosphere.',
    screenshot: hiromitsuRestaurant,
  },
  {
    title: 'Maki Sushi Rolls',
    url: 'https://maki-sushi-rolls.vercel.app/',
    category: 'Food & Dining',
    description: 'Sushi restaurant website featuring chef\'s specials, categorized menu with bento & donburi, and an immersive ordering experience.',
    screenshot: makiSushiRolls,
  },
  {
    title: 'Nineveh Academy',
    url: 'https://nineveh-academy.vercel.app/',
    category: 'Education',
    description: 'Christ-centered educational institution site covering Preschool to Senior High School programs with enrollment system and campus gallery.',
    screenshot: ninevehAcademy,
  },
  {
    title: 'Grace Valderama Agent',
    url: 'https://grace-valderama-agent.vercel.app/',
    category: 'Real Estate',
    description: 'Professional house locator agent portfolio with property listings integration, booking system, and Messenger-based client communication.',
    screenshot: graceValderama,
  },
  {
    title: 'Papa Pares',
    url: 'https://papa-pares.vercel.app/',
    category: 'Food & Dining',
    description: 'Bold, street-food-forward restaurant site for a Filipino pares house — featuring menu highlights, customer reviews, and location info.',
    screenshot: papaPares,
  },
  {
    title: 'Jonuts Donuts',
    url: 'https://jonuts-donuts.vercel.app/',
    category: 'Food & Dining',
    description: 'Proudly Filipino donut brand site with handcrafted menu, box builder experience, and vibrant branding — 100% original recipe showcase.',
    screenshot: jonutsDonuts,
  },
  {
    title: "Ka Muning's Halo-Halo",
    url: 'https://kamunings-halo-halo.vercel.app/',
    category: 'Food & Dining',
    description: 'Warm, inviting café website for a Filipino halo-halo shop — featuring full menu, online ordering, gallery, and visit info.',
    screenshot: kamuningsHaloHalo,
  },
  {
    title: 'Khifer Official Vlog',
    url: 'https://khifer-official-vlog.vercel.app/',
    category: 'Entertainment',
    description: 'Content creator hub for a 1.6M+ subscriber YouTuber — with video showcases, social links, and subscriber engagement features.',
    screenshot: khiferOfficialVlog,
  },
];

const categoryColors: Record<string, string> = {
  'Retail & Commerce': 'bg-primary/20 text-primary',
  'Food & Dining': 'bg-secondary/20 text-secondary',
  'Education': 'bg-accent/20 text-accent-foreground',
  'Real Estate': 'bg-muted text-muted-foreground',
  'Entertainment': 'bg-destructive/20 text-destructive',
};

const AnimatedWebsites = () => {
  return (
    <section id="websites" className="relative z-10">
      <div className="section-container">
        {/* Section header */}
        <MotionSection className="mb-16">
          <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            /05 Animated Websites
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Websites Crafted
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Fully animated, production-grade websites built for real businesses. Each site is live, responsive, and designed to convert.
          </p>
        </MotionSection>

        {/* Websites grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {websites.map((site, index) => (
            <StaggerItem key={index}>
              <motion.a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-xl bg-card border border-border overflow-hidden block h-full"
                whileHover={{
                  y: -8,
                  boxShadow: '0 25px 50px -12px hsl(var(--primary) / 0.25)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Browser mockup header */}
                <div className="relative bg-muted/50 border-b border-border px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
                  </div>
                  <div className="flex-1 flex items-center gap-2 ml-3 px-3 py-1 rounded-md bg-background/60 text-xs font-mono text-muted-foreground truncate">
                    <Globe className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{site.url.replace('https://', '')}</span>
                  </div>
                </div>

                {/* Screenshot area */}
                <div className="relative h-44 bg-muted/30 overflow-hidden">
                  <img
                    src={site.screenshot}
                    alt={site.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover arrow */}
                  <motion.div
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.2 }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${categoryColors[site.category] || 'bg-muted text-muted-foreground'}`}>
                      {site.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {site.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {site.description}
                  </p>

                  {/* Visit link */}
                  <div className="mt-4 pt-3 border-t border-border flex items-center gap-2 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Visit Live Site</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowUpRight className="w-3 h-3" />
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default AnimatedWebsites;
