import { useEffect, useRef, useCallback } from 'react';

interface GlitchBackgroundProps {
  opacity?: number;
  speed?: number;
}

const GLITCH_COLORS = ['#d11560', '#61dca3', '#1ca1e3', '#580363', '#5b5406'];

const GlitchBackground = ({ opacity = 0.08, speed = 120 }: GlitchBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);

  const generateGlitchFrame = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Clear with very dark background
    ctx.fillStyle = 'hsl(220, 20%, 4%)';
    ctx.fillRect(0, 0, width, height);

    // Generate random glitch rectangles
    const numRects = Math.floor(Math.random() * 8) + 3;
    
    for (let i = 0; i < numRects; i++) {
      const color = GLITCH_COLORS[Math.floor(Math.random() * GLITCH_COLORS.length)];
      const x = Math.random() * width;
      const y = Math.random() * height;
      const w = Math.random() * 200 + 20;
      const h = Math.random() * 10 + 2;
      
      ctx.fillStyle = color;
      ctx.globalAlpha = Math.random() * 0.3 + 0.1;
      ctx.fillRect(x, y, w, h);
    }

    // Add some vertical scan lines
    for (let i = 0; i < 3; i++) {
      const color = GLITCH_COLORS[Math.floor(Math.random() * GLITCH_COLORS.length)];
      const x = Math.random() * width;
      const w = Math.random() * 3 + 1;
      
      ctx.fillStyle = color;
      ctx.globalAlpha = Math.random() * 0.2 + 0.05;
      ctx.fillRect(x, 0, w, height);
    }

    // Add noise dots
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      if (Math.random() < 0.02) {
        const colorIndex = Math.floor(Math.random() * GLITCH_COLORS.length);
        const color = GLITCH_COLORS[colorIndex];
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        
        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
        data[i + 3] = Math.random() * 100 + 50;
      }
    }
    
    ctx.putImageData(imageData, 0, 0);
    ctx.globalAlpha = 1;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const animate = (timestamp: number) => {
      if (timestamp - lastUpdateRef.current > speed) {
        generateGlitchFrame(ctx, canvas.width, canvas.height);
        lastUpdateRef.current = timestamp;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [generateGlitchFrame, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity, zIndex: 0 }}
    />
  );
};

export default GlitchBackground;
