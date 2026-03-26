import { useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";

// 🎵 Audio
import music from "@/assets/jan.mp3.mp3";

const queryClient = new QueryClient();

const App = () => {
  const audioRef = useRef(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const playAudio = () => {
      if (hasPlayed.current) return;

      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0.4;
        audio.play().catch(() => {});
      }

      hasPlayed.current = true;

      window.removeEventListener("click", playAudio);
    };

    window.addEventListener("click", playAudio);

    return () => {
      window.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        {/* 🎵 Looping Music */}
        <audio ref={audioRef} loop preload="auto">
          <source src={music} type="audio/mpeg" />
        </audio>

        {/* 🌑 Background Overlay (optional, keeps dark aesthetic) */}
        <div className="fixed inset-0 bg-black -z-10" />

        <Toaster />
        <Sonner />
        <CustomCursor />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
