import GlitchBackground from '@/components/GlitchBackground';
import VignetteOverlay from '@/components/VignetteOverlay';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IdentitySection from '@/components/IdentitySection';
import BlockchainShowcase from '@/components/BlockchainShowcase';
import ExecutionStack from '@/components/ExecutionStack';
import FeaturedSystems from '@/components/FeaturedSystems';
import AnimatedWebsites from '@/components/AnimatedWebsites';
import GraphicDesignSection from '@/components/GraphicDesignSection';
import ProcessSection from '@/components/ProcessSection';
import TrustSection from '@/components/TrustSection';
import ContactSection from '@/components/ContactSection';
import ChatbotSection from '@/components/ChatbotSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <GlitchBackground opacity={0.08} speed={120} />
      <VignetteOverlay />

      <Navigation />

      <main>
        <HeroSection />
        <IdentitySection />
        <BlockchainShowcase />
        <ExecutionStack />
        <FeaturedSystems />
        <AnimatedWebsites />
        <GraphicDesignSection />
        <ProcessSection />
        <TrustSection />
        <ContactSection />
      </main>

      <ChatbotSection />
      <Footer />
    </div>
  );
};

export default Index;
