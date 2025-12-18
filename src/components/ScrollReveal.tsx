import { ReactNode } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
}

const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up": return "translateY(50px)";
        case "down": return "translateY(-50px)";
        case "left": return "translateX(50px)";
        case "right": return "translateX(-50px)";
        case "scale": return "scale(0.9)";
        case "fade": return "none";
        default: return "translateY(50px)";
      }
    }
    return direction === "scale" ? "scale(1)" : "translate(0)";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
