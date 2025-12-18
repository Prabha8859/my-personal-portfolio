import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import SectionBackground from "./SectionBackground";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "Web Developer",
    company: "Bitmax Technology",
    location: "Noida, UP",
    period: "Aug 2025 – Present",
    current: true,
    color: "from-cyan-500 to-primary",
    responsibilities: [
      "Developed and maintained responsive websites and single-page applications using React.js",
      "Integrated REST APIs and managed state using Redux/React Query",
      "Collaborated with design teams to convert Figma/UI mockups into functional web pages",
      "Ensured high performance, accessibility, and cross-browser compatibility",
      "Conducted code reviews and optimized code for maintainability",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "BM Digital Utilization",
    location: "Noida, UP",
    period: "Aug 2025 – Aug 2025",
    current: false,
    color: "from-purple-500 to-accent",
    responsibilities: [
      "Led the development of SeekForms, a job-finding platform",
      "Enhanced functionality and optimized user experience",
      "Collaborated with cross-functional teams to improve site performance",
    ],
  },
];

const ExperienceSection = () => {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <SectionBackground variant="experience" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </ScrollReveal>

        {/* Modern Split View */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-6">
              {/* Company Tabs - Left Side */}
              <div className="lg:col-span-2 space-y-3">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExp(index)}
                    className={`
                      w-full text-left p-5 rounded-2xl transition-all duration-500 group
                      ${activeExp === index 
                        ? 'glass-card-strong scale-[1.02]' 
                        : 'glass-card hover:bg-muted/20'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {exp.current && (
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          )}
                          <p className={`font-semibold transition-colors ${activeExp === index ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                            {exp.company}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground">{exp.title}</p>
                      </div>
                      <ChevronRight 
                        size={20} 
                        className={`text-muted-foreground transition-all duration-300 ${
                          activeExp === index ? 'text-primary translate-x-1' : 'opacity-0 group-hover:opacity-100'
                        }`} 
                      />
                    </div>
                    {activeExp === index && (
                      <div className={`h-1 mt-4 rounded-full bg-gradient-to-r ${exp.color}`} />
                    )}
                  </button>
                ))}
              </div>

              {/* Details - Right Side */}
              <div className="lg:col-span-3">
                <div 
                  className="glass-card-strong rounded-3xl p-8 h-full"
                  key={activeExp}
                  style={{ animation: 'fadeSlideIn 0.4s ease-out' }}
                >
                  {/* Header with gradient accent */}
                  <div className={`h-1 w-24 rounded-full bg-gradient-to-r ${experiences[activeExp].color} mb-6`} />
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${experiences[activeExp].color} flex items-center justify-center`}>
                        <Briefcase size={22} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {experiences[activeExp].title}
                        </h3>
                        <p className="text-primary font-medium">
                          {experiences[activeExp].company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2 px-3 py-1.5 glass-card rounded-full">
                        <MapPin size={14} className="text-primary" />
                        {experiences[activeExp].location}
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1.5 glass-card rounded-full font-mono">
                        <Calendar size={14} className="text-primary" />
                        {experiences[activeExp].period}
                      </span>
                      {experiences[activeExp].current && (
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-500">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          Currently Working
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-4">
                    {experiences[activeExp].responsibilities.map((resp, i) => (
                      <li 
                        key={i} 
                        className="flex gap-3 text-muted-foreground"
                        style={{ animation: `fadeSlideIn 0.3s ease-out ${i * 0.1}s both` }}
                      >
                        <span className={`text-transparent bg-gradient-to-r ${experiences[activeExp].color} bg-clip-text font-bold mt-0.5`}>
                          →
                        </span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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

export default ExperienceSection;
