import { Code, Terminal, Braces, Database, Hash, GitBranch } from "lucide-react";

const FloatingOrbs = () => {
  const codeIcons = [
    { Icon: Code, x: "5%", y: "25%", size: "w-6 h-6", delay: "0s" },
    { Icon: Terminal, x: "92%", y: "18%", size: "w-8 h-8", delay: "1s" },
    { Icon: Braces, x: "8%", y: "75%", size: "w-7 h-7", delay: "2s" },
    { Icon: Database, x: "88%", y: "70%", size: "w-6 h-6", delay: "0.5s" },
    { Icon: Hash, x: "50%", y: "8%", size: "w-5 h-5", delay: "1.5s" },
    { Icon: GitBranch, x: "95%", y: "45%", size: "w-7 h-7", delay: "0.8s" },
    { Icon: Code, x: "3%", y: "50%", size: "w-5 h-5", delay: "2.5s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Floating Code Icons */}
      {codeIcons.map((item, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-10 hover:opacity-20 transition-opacity"
          style={{
            left: item.x,
            top: item.y,
            animationDelay: item.delay,
            animationDuration: `${4 + index}s`,
          }}
        >
          <item.Icon className={`${item.size} text-primary/50`} />
        </div>
      ))}

      {/* Large floating orbs with smooth animations */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(174 72% 56% / 0.4) 0%, transparent 70%)',
          top: '10%',
          left: '5%',
          animation: 'orb-float-1 20s ease-in-out infinite',
          filter: 'blur(60px)',
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(280 70% 60% / 0.4) 0%, transparent 70%)',
          top: '50%',
          right: '0%',
          animation: 'orb-float-2 25s ease-in-out infinite',
          filter: 'blur(80px)',
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(200 80% 50% / 0.4) 0%, transparent 70%)',
          bottom: '10%',
          left: '30%',
          animation: 'orb-float-3 18s ease-in-out infinite',
          filter: 'blur(50px)',
        }}
      />
      <div 
        className="absolute w-[350px] h-[350px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(320 65% 55% / 0.3) 0%, transparent 70%)',
          top: '30%',
          left: '60%',
          animation: 'orb-float-4 22s ease-in-out infinite',
          filter: 'blur(70px)',
        }}
      />

      {/* Animated lines/curves like React Bits */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(174 72% 56%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(174 72% 56%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(280 70% 60%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(280 70% 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(280 70% 60%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(200 80% 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <path
          d="M-100,300 Q200,100 500,400 T1100,200 T1700,500"
          fill="none"
          stroke="url(#line-gradient-1)"
          strokeWidth="2"
          className="animate-wave-path"
        />
        <path
          d="M-100,600 Q300,400 600,700 T1200,400 T1800,700"
          fill="none"
          stroke="url(#line-gradient-2)"
          strokeWidth="1.5"
          className="animate-wave-path-2"
        />
      </svg>
    </div>
  );
};

export default FloatingOrbs;
