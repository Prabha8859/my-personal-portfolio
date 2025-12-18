import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";

const roles = [
  "Full Stack Developer",
  "React Expert", 
  "UI Designer",
  "Problem Solver",
  "Code Enthusiast",
  "TypeScript Ninja",
  "API Architect",
  "Creative Coder",
  "Tech Explorer",
  "Open Source Contributor"
];

// Floating tech icons data
const floatingIcons = [
  { icon: "⚛️", delay: 0, duration: 8, x: 10, y: 20 },
  { icon: "🔷", delay: 1, duration: 10, x: 85, y: 15 },
  { icon: "🟨", delay: 2, duration: 9, x: 5, y: 60 },
  { icon: "🟢", delay: 0.5, duration: 11, x: 90, y: 70 },
  { icon: "🔶", delay: 1.5, duration: 7, x: 15, y: 80 },
  { icon: "💜", delay: 2.5, duration: 12, x: 80, y: 40 },
  { icon: "🔵", delay: 3, duration: 8, x: 3, y: 40 },
  { icon: "🟣", delay: 0.8, duration: 10, x: 92, y: 85 },
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentChar, setCurrentChar] = useState("");
  const [showKey, setShowKey] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const getTypingSpeed = () => {
      const baseSpeed = 80;
      const randomVariation = Math.random() * 60;
      return baseSpeed + randomVariation;
    };

    const getDeletingSpeed = () => 30 + Math.random() * 20;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          const char = currentRole[displayText.length];
          setCurrentChar(char);
          setShowKey(true);
          setTimeout(() => setShowKey(false), 100);
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayText.length > 0) {
          setCurrentChar("⌫");
          setShowKey(true);
          setTimeout(() => setShowKey(false), 80);
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? getDeletingSpeed() : getTypingSpeed());

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute text-3xl md:text-4xl opacity-20 pointer-events-none select-none animate-float-tech"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          {item.icon}
        </div>
      ))}
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 animate-slide-up stagger-1">
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up stagger-2 tracking-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span 
              className="gradient-text text-glow glitch-text block sm:inline cursor-pointer" 
              data-text="Prabha"
            >
              Prabha
            </span>
          </h1>

          {/* Title with typing animation */}
          <div className="relative inline-block mb-4 animate-slide-up stagger-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light h-[1.5em]">
              <span className="text-foreground font-medium">
                {displayText}
                <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse" />
              </span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          {/* Key Press Indicator */}
          <div className="h-12 flex items-center justify-center mb-4 animate-slide-up stagger-3">
            <div 
              className={`
                min-w-[40px] h-10 px-3 flex items-center justify-center
                rounded-lg border-2 border-border/50 bg-background/50 backdrop-blur-sm
                shadow-[0_4px_0_0_hsl(var(--border)/0.5),inset_0_-2px_4px_rgba(0,0,0,0.1)]
                font-mono text-lg font-semibold text-foreground
                transition-all duration-75
                ${showKey 
                  ? 'translate-y-1 shadow-[0_1px_0_0_hsl(var(--border)/0.5)] bg-primary/20 border-primary/50 text-primary scale-95' 
                  : 'translate-y-0'
                }
              `}
            >
              {currentChar === " " ? "␣" : currentChar.toUpperCase()}
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up stagger-4 text-balance">
            <TextReveal 
              text="Crafting seamless digital experiences with modern technologies. Passionate about building responsive, high-performance web applications."
              delay={0.5}
              staggerDelay={0.02}
            />
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up stagger-5">
            <MagneticButton strength={0.4}>
              <a
                href="#projects"
                className="group relative px-8 py-4 btn-primary text-primary-foreground rounded-xl overflow-hidden inline-block"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </MagneticButton>
            <MagneticButton strength={0.4}>
              <a
                href="/Prabha_CV.pdf"
                download
                className="px-8 py-4 btn-outline-glow text-foreground rounded-xl inline-block"
              >
                Get In Touch
              </a>
            </MagneticButton>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up stagger-6">
            <span className="text-xs text-muted-foreground uppercase tracking-widest mr-4">Find me on</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 glass-card rounded-2xl hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <Github size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 glass-card rounded-2xl hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <Linkedin size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:Prabha8859@gmail.com"
              className="group p-4 glass-card rounded-2xl hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <Mail size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs font-mono tracking-wider">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
