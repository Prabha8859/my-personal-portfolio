interface SectionBackgroundProps {
  variant: "hero" | "about" | "skills" | "projects" | "experience" | "contact";
}

const SectionBackground = ({ variant }: SectionBackgroundProps) => {
  const backgrounds = {
    hero: (
      <>
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </>
    ),
    about: (
      <>
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-500/15 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </>
    ),
    skills: (
      <>
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </>
    ),
    projects: (
      <>
        <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-emerald-500/15 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </>
    ),
    experience: (
      <>
        <div className="absolute top-0 left-1/3 w-[350px] h-[350px] bg-orange-500/12 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 -right-20 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </>
    ),
    contact: (
      <>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/15 via-fuchsia-500/10 to-pink-500/15 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute top-0 -right-20 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 -left-20 w-[250px] h-[250px] bg-rose-500/10 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </>
    ),
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {backgrounds[variant]}
    </div>
  );
};

export default SectionBackground;
