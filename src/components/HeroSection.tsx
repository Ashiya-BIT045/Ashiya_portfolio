import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Eye, Mail, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = ["AI Enthusiast ✨", "Backend Developer 🚀", "Machine Learning Explorer 🤖"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 30 : 70
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative section-padding pt-28 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[10%] w-20 h-20 border border-primary/20 rounded-xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-[8%] w-14 h-14 border border-accent/30 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[5%] w-3 h-3 rounded-full gradient-bg opacity-40"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[25%] right-[8%] w-4 h-4 rounded-full gradient-bg-accent opacity-40"
      />

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="relative group"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden relative z-10 p-1 gradient-bg">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img src={profileImg} alt="Asha" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full gradient-bg animate-pulse-ring opacity-30" />
            <div className="absolute inset-0 rounded-full gradient-bg animate-pulse-ring opacity-20" style={{ animationDelay: "0.5s" }} />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-primary"
          >
            <Sparkles size={14} className="text-accent" />
            Open to opportunities
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-4"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Asha</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide">
              Aspiring Software Engineer
            </p>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="h-10 flex items-center justify-center"
          >
            <span className="font-heading text-xl md:text-2xl font-semibold gradient-text-accent">
              {displayText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              className="ml-1 w-0.5 h-7 gradient-bg inline-block rounded"
            />
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="max-w-2xl text-muted-foreground leading-relaxed text-sm md:text-base"
          >
            Aspiring software engineer with a strong IT foundation and hands-on experience
            building and deploying intelligent applications. Passionate about AI-driven systems
            and scalable web development.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#" className="btn-gradient inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm">
              <Download size={16} /> Download Resume
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 glass rounded-xl font-semibold text-sm card-hover">
              <Eye size={16} /> View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 glass rounded-xl font-semibold text-sm card-hover">
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="flex items-center gap-8 md:gap-12 mt-4"
          >
            {[
              { value: "4+", label: "Projects" },
              { value: "8.7", label: "CGPA" },
              { value: "6+", label: "Awards" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
              <ArrowDown size={16} className="text-primary animate-scroll-indicator" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
