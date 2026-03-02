import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// Importing relevant icons
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaFigma
} from "react-icons/fa";
import { SiC, SiMysql, SiGit, SiCanva } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
}

interface SkillCategory {
  label: string;
  skills: Skill[];
  color: string;
  glowColor: string;
  borderColor: string;
}

const categories: SkillCategory[] = [
  {
    label: "Programming",
    color: "text-violet-500 dark:text-violet-400",
    glowColor: "rgba(139, 92, 246, 0.08)",
    borderColor: "rgba(139, 92, 246, 0.2)",
    skills: [
      { name: "Java", icon: <FaJava />, color: "#007396" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "C", icon: <SiC />, color: "#A8B9CC" },
    ],
  },
  {
    label: "Web Development",
    color: "text-cyan-500 dark:text-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.08)",
    borderColor: "rgba(34, 211, 238, 0.2)",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    ],
  },
  {
    label: "Database",
    color: "text-emerald-500 dark:text-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.08)",
    borderColor: "rgba(52, 211, 153, 0.2)",
    skills: [{ name: "MySQL", icon: <SiMysql />, color: "#4479A1" }],
  },
  {
    label: "Tools",
    color: "text-orange-500 dark:text-orange-400",
    glowColor: "rgba(251, 146, 60, 0.08)",
    borderColor: "rgba(251, 146, 60, 0.2)",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#4078c0" },
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
      { name: "Canva", icon: <SiCanva />, color: "#00C4CC" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-foreground">
            Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-violet-500 to-cyan-500">Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and the creative tools I wield to build premium digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div
                className="absolute inset-0 rounded-[2rem] blur-3xl transition-opacity duration-700 opacity-0 group-hover:opacity-100 -z-10 dark:opacity-0 pointer-events-none"
                style={{ backgroundColor: cat.glowColor }}
              />
              <div
                className="bg-secondary/5 dark:bg-secondary/10 border transition-all duration-700 rounded-[2rem] p-10 backdrop-blur-md h-full shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] dark:shadow-none"
                style={{ borderColor: cat.borderColor } as any}
              >
                <h3 className={`text-2xl font-bold mb-10 flex items-center gap-3 ${cat.color}`}>
                  <span className="w-1.5 h-8 bg-current rounded-full" />
                  {cat.label}
                </h3>

                <div className="flex flex-wrap gap-8">
                  {cat.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex flex-col items-center gap-3 cursor-default"
                    >
                      <div
                        className="text-5xl md:text-6xl transition-all duration-500 relative"
                        style={{ '--skill-color': skill.color } as any}
                      >
                        <div className="text-[var(--skill-color)] opacity-60 dark:opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_var(--skill-color)]">
                          {skill.icon}
                        </div>
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.1em] uppercase opacity-30 group-hover:opacity-100 transition-all duration-500 text-foreground">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;