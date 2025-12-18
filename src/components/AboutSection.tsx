import { Code2, Palette, Rocket, Users } from "lucide-react";
import SectionBackground from "./SectionBackground";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing reusable, maintainable, and scalable code",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Converting Figma mockups into pixel-perfect interfaces",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in cross-functional teams",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <SectionBackground variant="about" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <TextReveal text="Know " delay={0} staggerDelay={0.05} />
            <span className="gradient-text"><TextReveal text="Who I Am" delay={0.2} staggerDelay={0.05} /></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <TextReveal 
              text="A passionate developer dedicated to creating exceptional digital experiences"
              delay={0.4}
              staggerDelay={0.02}
            />
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <ScrollReveal delay={0.1} direction="left">
              <div className="glass-card-strong p-8 rounded-3xl hover-lift">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Hello! I'm <span className="gradient-text">Prabha Kumari</span>
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    An enthusiastic and detail-oriented Web Developer based in Noida, UP. 
                    I have a solid foundation in front-end and back-end technologies, 
                    and I'm passionate about creating seamless and engaging digital experiences.
                  </p>
                  <p>
                    Skilled in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React.js, 
                    with hands-on experience developing responsive, high-performance web applications.
                  </p>
                  <p>
                    I'm highly motivated to learn emerging frameworks and contribute to 
                    innovative projects that enhance user satisfaction and business growth.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal delay={0.2} direction="left">
              <div className="glass-card p-6 rounded-3xl hover-lift">
                <h4 className="text-lg font-semibold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg">🎓</span>
                  </div>
                  Education
                </h4>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-muted/20 border border-border/20 hover:border-primary/30 transition-colors">
                    <p className="font-medium text-foreground">B. Tech CSE</p>
                    <p className="text-sm text-muted-foreground mt-1">AKTU University, VGI Dadri</p>
                    <p className="text-xs text-primary font-mono mt-2">2021 - 2024</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-muted/20 border border-border/20 hover:border-primary/30 transition-colors">
                    <p className="font-medium text-foreground">Diploma in IT</p>
                    <p className="text-sm text-muted-foreground mt-1">Km. Mayawati Govt. Girls Polytechnic</p>
                    <p className="text-xs text-primary font-mono mt-2">2019 - 2021</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <ScrollReveal key={item.title} delay={0.1 + index * 0.1} direction="right">
                <div className="group glass-card p-6 rounded-3xl hover-lift cursor-default h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-primary" size={26} />
                  </div>
                  <h4 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
