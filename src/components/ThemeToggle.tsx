import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import ThemeTransition from "./ThemeTransition";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionToLight, setTransitionToLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setTransitionToLight(!newTheme ? true : false);
    setIsTransitioning(true);
    
    // Apply theme change at the midpoint of animation
    setTimeout(() => {
      setIsDark(newTheme);
      
      if (newTheme) {
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      }
    }, 400);
    
    // End transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <>
      <ThemeTransition isTransitioning={isTransitioning} toLight={transitionToLight} />
      
      <button
        onClick={toggleTheme}
        disabled={isTransitioning}
        className={`
          relative w-16 h-8 rounded-full p-1
          bg-card/20 backdrop-blur-xl
          border border-border/20
          shadow-[inset_0_2px_10px_rgba(0,0,0,0.1),0_4px_20px_rgba(0,0,0,0.1)]
          transition-all duration-500 ease-out
          hover:border-primary/40 hover:shadow-[0_0_25px_hsl(var(--primary)/0.25)]
          ${isTransitioning ? 'scale-95 pointer-events-none' : 'scale-100'}
        `}
        aria-label="Toggle theme"
      >
        {/* Inner glass effect */}
        <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        
        {/* Toggle circle */}
        <div
          className={`
            relative w-6 h-6 rounded-full
            flex items-center justify-center
            shadow-lg
            transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${isDark 
              ? 'translate-x-0 bg-gradient-to-br from-primary via-cyan-400 to-accent shadow-[0_0_20px_hsl(var(--primary)/0.5)]' 
              : 'translate-x-8 bg-gradient-to-br from-amber-300 via-orange-400 to-rose-400 shadow-[0_0_20px_rgba(251,191,36,0.5)]'
            }
            ${isTransitioning ? 'rotate-[360deg] scale-110' : 'rotate-0 scale-100'}
          `}
        >
          <div className={`transition-all duration-300 ${isTransitioning ? 'scale-0' : 'scale-100'}`}>
            {isDark ? (
              <Moon className="w-3.5 h-3.5 text-primary-foreground" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-white" />
            )}
          </div>
        </div>

        {/* Stars for dark mode */}
        <div 
          className={`
            absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1
            transition-all duration-500
            ${isDark ? 'opacity-70 scale-100' : 'opacity-0 scale-0'}
          `}
        >
          <span className="w-1 h-1 rounded-full bg-foreground/50 animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-pulse" style={{ animationDelay: '0.3s' }} />
        </div>
        
        {/* Sun rays for light mode */}
        <div 
          className={`
            absolute left-2 top-1/2 -translate-y-1/2
            transition-all duration-500
            ${!isDark ? 'opacity-60 scale-100' : 'opacity-0 scale-0'}
          `}
        >
          <div className="w-2 h-2 bg-amber-400/40 rounded-full blur-sm animate-pulse" />
        </div>
      </button>
    </>
  );
};

export default ThemeToggle;
