import { useEffect, useState } from "react";

interface ThemeTransitionProps {
  isTransitioning: boolean;
  toLight: boolean;
}

const ThemeTransition = ({ isTransitioning, toLight }: ThemeTransitionProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  if (!show) return null;

  // Light mode: sweep comes from top-right
  // Dark mode: sweep comes from bottom-left (opposite)
  const position = toLight 
    ? { top: "-150vmax", right: "-150vmax" }
    : { bottom: "-150vmax", left: "-150vmax" };

  const secondaryPosition = toLight
    ? { top: "-125vmax", right: "-125vmax" }
    : { bottom: "-125vmax", left: "-125vmax" };

  const glowPosition = toLight
    ? { top: "-50vmax", right: "-50vmax" }
    : { bottom: "-50vmax", left: "-50vmax" };

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Main sweep circle */}
      <div
        className="absolute"
        style={{
          width: "300vmax",
          height: "300vmax",
          borderRadius: "50%",
          background: toLight 
            ? "radial-gradient(circle, hsl(210 40% 98%) 0%, hsl(220 14% 96%) 40%, hsl(210 40% 98%) 100%)" 
            : "radial-gradient(circle, hsl(222 47% 11%) 0%, hsl(222 47% 6%) 40%, hsl(222 47% 11%) 100%)",
          ...position,
          transformOrigin: "center center",
          transform: isTransitioning ? "scale(1)" : "scale(0)",
          transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
      
      {/* Secondary softer wave */}
      <div
        className="absolute"
        style={{
          width: "250vmax",
          height: "250vmax",
          borderRadius: "50%",
          background: toLight 
            ? "radial-gradient(circle, hsl(210 40% 100% / 0.6) 0%, transparent 70%)" 
            : "radial-gradient(circle, hsl(222 47% 8% / 0.6) 0%, transparent 70%)",
          ...secondaryPosition,
          transformOrigin: "center center",
          transform: isTransitioning ? "scale(1)" : "scale(0)",
          transition: "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.05s",
        }}
      />

      {/* Glow accent */}
      <div
        className="absolute blur-3xl"
        style={{
          width: "80vmax",
          height: "80vmax",
          borderRadius: "50%",
          background: toLight 
            ? "radial-gradient(circle, hsl(40 100% 70% / 0.3) 0%, transparent 70%)" 
            : "radial-gradient(circle, hsl(174 72% 56% / 0.2) 0%, transparent 70%)",
          ...glowPosition,
          transformOrigin: "center center",
          transform: isTransitioning ? "scale(1)" : "scale(0)",
          transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
        }}
      />
    </div>
  );
};

export default ThemeTransition;
