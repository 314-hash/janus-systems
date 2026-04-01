import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";

// 👇 import the video from src/assets (Vite-safe)
import exVideo from "@/assets/ex.mp4";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="
          fixed inset-0 w-full h-full object-cover
          -z-10
          opacity-0 animate-fadeIn
          motion-reduce:hidden
        "
      >
        <source src={exVideo} type="video/mp4" />
      </video>

      {/* Overlay for contrast */}
      <div className="fixed inset-0 bg-background/60 -z-10" />

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

export default App;
