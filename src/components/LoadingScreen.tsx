import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Simple completion sound using Web Audio API
const playCompletionSound = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a pleasant "ding" sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Pleasant frequency progression (like a soft chime)
    oscillator.frequency.setValueAtTime(587.33, audioContext.currentTime); // D5
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime + 0.1); // A5
    
    oscillator.type = 'sine';
    
    // Soft volume with fade out
    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
    
    // Clean up
    setTimeout(() => audioContext.close(), 600);
  } catch (error) {
    console.log('Audio not available:', error);
  }
};

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [isMuted, setIsMuted] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('loadingSoundMuted');
    return saved === 'true';
  });

  const messages = [
    "Initializing portfolio...",
    "Loading creative assets...",
    "Preparing awesome stuff...",
    "Almost there...",
    "Let's go! 🚀"
  ];

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    localStorage.setItem('loadingSoundMuted', String(newMuted));
  };

  useEffect(() => {
    // Check theme
    const checkTheme = () => {
      setIsDark(!document.documentElement.classList.contains('light'));
    };
    checkTheme();
    
    const timer1 = setTimeout(() => setShowAI(true), 200);
    const timer2 = setTimeout(() => setShowText(true), 800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Play completion sound if not muted
          if (!isMuted) {
            playCompletionSound();
          }
          setTimeout(onLoadComplete, 500);
          return 100;
        }
        // Update message based on progress
        const newIndex = Math.min(Math.floor(prev / 25), messages.length - 1);
        if (newIndex !== messageIndex) {
          setMessageIndex(newIndex);
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onLoadComplete, messageIndex, messages.length, isMuted]);

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden">
      {/* Mute Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute top-6 right-6 p-3 glass-card rounded-full hover:bg-primary/10 transition-all duration-300 z-20"
        title={isMuted ? "Unmute sound" : "Mute sound"}
      >
        {isMuted ? (
          <VolumeX size={20} className="text-muted-foreground" />
        ) : (
          <Volume2 size={20} className="text-primary" />
        )}
      </button>

      {/* Dark Mode Background - Gradient Blobs */}
      {isDark && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient-shift" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
      )}

      {/* Light Mode Background - Code/Developer Theme */}
      {!isDark && (
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background">
          {/* Code brackets and symbols floating */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Code Symbols */}
            <span className="absolute text-8xl text-primary/20 font-mono animate-float" style={{ top: '10%', left: '5%', animationDelay: '0s' }}>{'{'}</span>
            <span className="absolute text-7xl text-accent/20 font-mono animate-float" style={{ top: '20%', right: '10%', animationDelay: '0.5s' }}>{'}'}</span>
            <span className="absolute text-6xl text-primary/15 font-mono animate-float" style={{ top: '60%', left: '8%', animationDelay: '1s' }}>{'<'}</span>
            <span className="absolute text-6xl text-accent/15 font-mono animate-float" style={{ top: '70%', right: '15%', animationDelay: '1.5s' }}>{'>'}</span>
            <span className="absolute text-5xl text-primary/10 font-mono animate-float" style={{ top: '40%', left: '15%', animationDelay: '2s' }}>{'()'}</span>
            <span className="absolute text-5xl text-accent/10 font-mono animate-float" style={{ top: '30%', right: '25%', animationDelay: '2.5s' }}>{'[]'}</span>
            
            {/* Code Lines */}
            <div className="absolute top-[15%] left-[20%] text-muted-foreground/20 font-mono text-sm animate-float" style={{ animationDelay: '0.3s' }}>
              const dev = "Prabha";
            </div>
            <div className="absolute top-[25%] right-[20%] text-muted-foreground/20 font-mono text-sm animate-float" style={{ animationDelay: '0.8s' }}>
              return &lt;Portfolio /&gt;;
            </div>
            <div className="absolute bottom-[30%] left-[12%] text-muted-foreground/20 font-mono text-sm animate-float" style={{ animationDelay: '1.3s' }}>
              import Skills from "./me";
            </div>
            <div className="absolute bottom-[20%] right-[18%] text-muted-foreground/20 font-mono text-sm animate-float" style={{ animationDelay: '1.8s' }}>
              export default Success;
            </div>

            {/* Gradient Circles */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* AI Greeting */}
        <div className={`transition-all duration-700 ${showAI ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
          <div className="text-6xl md:text-8xl mb-4 animate-bounce">
            ✨
          </div>
          <p className="text-xl md:text-2xl font-mono text-primary animate-pulse">
            Hey there, Welcome!
          </p>
        </div>

        {/* Name with Typing Effect */}
        <div className={`transition-all duration-1000 ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h1 className="text-5xl md:text-7xl font-heading font-bold gradient-text">
            Prabha
          </h1>
          <p className="text-center text-muted-foreground font-mono mt-2 transition-all duration-300">
            {messages[messageIndex]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <div className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">{progress}%</span> complete
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
