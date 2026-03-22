import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useSpring(cursorX, { damping: 25, stiffness: 200 });
  const trailY = useSpring(cursorY, { damping: 25, stiffness: 200 });
  const glowX = useSpring(cursorX, { damping: 40, stiffness: 90 });
  const glowY = useSpring(cursorY, { damping: 40, stiffness: 90 });

  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return;

    const onMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');
      setIsPointer(!!isInteractive);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="rounded-full bg-foreground"
          animate={{
            width: isClicking ? 6 : isPointer ? 4 : 8,
            height: isClicking ? 6 : isPointer ? 4 : 8,
            x: isClicking ? -3 : isPointer ? -2 : -4,
            y: isClicking ? -3 : isPointer ? -2 : -4,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: trailX, y: trailY }}
      >
        <motion.div
          className="rounded-full border border-primary/60"
          animate={{
            width: isClicking ? 24 : isPointer ? 48 : 32,
            height: isClicking ? 24 : isPointer ? 48 : 32,
            x: isClicking ? -12 : isPointer ? -24 : -16,
            y: isClicking ? -12 : isPointer ? -24 : -16,
            borderColor: isPointer
              ? 'hsl(var(--primary) / 0.8)'
              : 'hsl(var(--primary) / 0.4)',
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Glow trail */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{ x: glowX, y: glowY }}
      >
        <div
          className="w-40 h-40 -ml-20 -mt-20 rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)), transparent 70%)',
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
