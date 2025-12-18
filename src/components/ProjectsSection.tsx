import { ExternalLink, Github, ArrowUpRight, Laptop, Gamepad2 } from "lucide-react";
import SectionBackground from "./SectionBackground";
import ScrollReveal from "./ScrollReveal";
const projects = [
  {
    title: "PlayZelo - Gaming Platform",
    description: "Built a full-featured gaming platform with real-time transactions, user authentication, and interactive gaming experience. Features skill-based games with secure payments.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
    github: "#",
    live: "https://playzelo.fun/",
    featured: true,
    gradient: "from-pink-500/20 to-red-500/20",
    icon: "gaming",
  },
  {
    title: "E-Commerce Website",
    description: "Developed a full-stack e-commerce platform with user authentication, product management, and payment integration.",
    tech: ["Node.js", "React", "Express", "MongoDB"],
    github: "#",
    live: "#",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: "laptop",
  },
  {
    title: "Car Rental Website",
    description: "Built a responsive car rental site with dynamic booking, user management, and backend business logic.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "#",
    live: "https://www.solo.drive.com",
    featured: true,
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: "laptop",
  },
  {
    title: "Portfolio Website",
    description: "Created a personal portfolio showcasing projects with interactive and responsive design.",
    tech: ["Node.js", "React", "Express", "MongoDB"],
    github: "#",
    live: "#",
    featured: true,
    gradient: "from-green-500/20 to-emerald-500/20",
    icon: "laptop",
  },
  {
    title: "APNews Bihar",
    description: "Regional news portal for Bihar — built with Next.js and Tailwind CSS. Features a responsive, SEO-friendly front-end and a custom admin dashboard for creating, editing, and publishing news articles.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "#",
    live: "https://apnewsbihar.in/",
    featured: true,
    gradient: "from-blue-500/20 to-sky-500/20",
    icon: "laptop",
  },
  {
    title: "Regal Woven",
    description: "Developed during an internship at BMDU — a PHP/MySQL based textile website with product catalog and an admin panel to manage products and orders.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "#",
    live: "https://www.regalwoven.com/index.php",
    featured: true,
    gradient: "from-orange-400/20 to-amber-400/20",
    icon: "laptop",
  },
  {
    title: "Library Management System",
    description: "Designed a library management app applying object-oriented programming concepts.",
    tech: ["Core Java", "OOPs"],
    github: "#",
    live: null,
    featured: false,
    gradient: "from-orange-500/20 to-yellow-500/20",
    icon: "laptop",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <SectionBackground variant="projects" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.title} 
              delay={0.1 + index * 0.1} 
              direction={index % 2 === 0 ? "left" : "right"}
              className={index === 0 ? 'md:col-span-2' : ''}
            >
              <div
                className={`group glass-card rounded-3xl overflow-hidden hover-lift h-full ${
                  index === 0 ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {/* Gradient header */}
                <div className={`${index === 0 ? 'h-3' : 'h-2'} bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon === "gaming" ? (
                        <Gamepad2 className="w-7 h-7 text-foreground" />
                      ) : (
                        <Laptop className="w-7 h-7 text-foreground" />
                      )}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="p-3 glass-card rounded-xl text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                        aria-label="View GitHub"
                      >
                        <Github size={18} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          className="p-3 glass-card rounded-xl text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                          aria-label="View Live"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View More Button */}
        <ScrollReveal delay={0.5} className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-outline-glow text-foreground rounded-2xl"
          >
            View More on GitHub
            <Github size={18} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
