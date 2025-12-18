import { Heart, Github, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="text-2xl font-bold">
              <span className="gradient-text">PK</span>
              <span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* Built with love */}
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Designed & Built with 
            <Heart size={14} className="text-primary fill-primary animate-pulse" /> 
            by <span className="text-primary font-medium">Prabha Kumari</span>
          </p>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-xl text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-xl text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 btn-primary text-primary-foreground rounded-xl"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="relative z-10" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
