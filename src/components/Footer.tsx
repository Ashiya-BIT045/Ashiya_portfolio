import { Github, Linkedin, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="py-12 border-t border-border/50 relative">
    <div className="container max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground card-hover">
          <Github size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground card-hover">
          <Linkedin size={18} />
        </a>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm text-muted-foreground flex items-center gap-1.5"
      >
        Designed & Built with <Heart size={14} className="text-accent fill-accent" /> by{" "}
        <span className="gradient-text font-bold">Asha</span>
      </motion.p>
    </div>
  </footer>
);

export default Footer;
