const VignetteOverlay = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        background: `
          radial-gradient(
            ellipse at center,
            transparent 0%,
            transparent 30%,
            hsl(220 20% 4% / 0.4) 60%,
            hsl(220 20% 4% / 0.8) 80%,
            hsl(220 20% 4%) 100%
          )
        `
      }}
    />
  );
};

export default VignetteOverlay;
