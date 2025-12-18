import { useState } from "react";
import SectionBackground from "./SectionBackground";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "⏭️" },
      { name: "TypeScript", icon: "📘" },
      { name: "JavaScript", icon: "💛" },
      { name: "Tailwind CSS", icon: "🎯" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "💚" },
      { name: "Express.js", icon: "🚀" },
      { name: "REST APIs", icon: "🔗" },
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" },
      { name: "Java", icon: "☕" },
    ],
  },
  {
    title: "Tools",
    icon: "🛠",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
      { name: "Figma", icon: "🎯" },
      { name: "Postman", icon: "📮" },
      { name: "Redux", icon: "🔄" },
    ],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <SectionBackground variant="skills" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">My Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuously learning and mastering modern web technologies
          </p>
        </ScrollReveal>

        {/* Modern Tab-based Skills Display */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-5xl mx-auto">
            {/* Category Tabs */}
            <div className="flex justify-center gap-4 mb-12">
              {skillCategories.map((category, index) => (
                <button
                  key={category.title}
                  onClick={() => setActiveCategory(index)}
                  className={`
                    group relative px-8 py-4 rounded-2xl font-medium transition-all duration-500
                    ${activeCategory === index 
                      ? 'glass-card-strong text-foreground shadow-lg scale-105' 
                      : 'glass-card text-muted-foreground hover:text-foreground hover:scale-102'
                    }
                  `}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="hidden sm:inline">{category.title}</span>
                  </span>
                  {activeCategory === index && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="glass-card-strong rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative"
                    style={{ 
                      animation: `fadeSlideIn 0.4s ease-out ${index * 0.08}s both`
                    }}
                  >
                    <div className="glass-card p-6 rounded-2xl hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 cursor-default h-full">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <div>
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </p>
                        </div>
                      </div>
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hard Skills Tags */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Full-Stack Development", "Responsive Design", "API Integration", "Database Management", "Version Control", "Agile Methodology"].map((skill, index) => (
                <span
                  key={skill}
                  className="px-5 py-2 glass-card rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
