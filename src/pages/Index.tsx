import GlitchBackground from '@/components/GlitchBackground';
import VignetteOverlay from '@/components/VignetteOverlay';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IdentitySection from '@/components/IdentitySection';
import ExecutionStack from '@/components/ExecutionStack';
import FeaturedSystems from '@/components/FeaturedSystems';
import AnimatedWebsites from '@/components/AnimatedWebsites';
import ProcessSection from '@/components/ProcessSection';
import TrustSection from '@/components/TrustSection';
import ContactSection from '@/components/ContactSection';
import ChatbotSection from '@/components/ChatbotSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Animated glitch background */}
      <GlitchBackground opacity={0.12} speed={80} />
      
      {/* Vignette overlay for focus */}
      <VignetteOverlay />
      
      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-[2] scanlines opacity-30" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        <HeroSection />
        <IdentitySection />
        <ExecutionStack />
        <FeaturedSystems />
        <AnimatedWebsites />
        <ProcessSection />
        <TrustSection />
        <ContactSection />
      </main>

      {/* Floating chatbot widget */}
      <ChatbotSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
