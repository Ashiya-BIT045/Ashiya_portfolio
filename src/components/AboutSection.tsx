import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, School, Target } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    level: "Bachelor of Technology",
    major: "Information Technology",
    institution: "Dr Mahalingam College of Engineering and Technology, Pollachi",
    period: "June, 2023 — June, 2027",
    result: "CGPA: 8.8 (upto 5th sem)",
    color: "from-blue-500/20 to-indigo-500/20",
    iconBg: "bg-blue-500"
  },
  {
    icon: School,
    level: "HSC",
    institution: "Mariammal Girls Higher Secondary School, Pollachi",
    period: "May, 2022 — May, 2023",
    result: "Percentage: 89.6%",
    color: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-purple-500"
  },
  {
    icon: BookOpen,
    level: "SSLC",
    institution: "Mariammal Girls Higher Secondary School, Pollachi",
    period: "May, 2020 — May, 2021",
    result: "Status: Pass",
    color: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500"
  }
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={inView ? { width: 60 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 gradient-bg rounded-full mx-auto block mb-6"
          />
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">About Me</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Driven by <span className="gradient-text">Curiosity</span>,
            <br />Built with <span className="gradient-text-accent">Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - Education Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <Target size={20} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold">Education Journey</h3>
            </motion.div>

            <div className="space-y-4 relative">
              {/* Connector line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent lg:block hidden" />

              {education.map((edu, i) => (
                <motion.div
                  key={edu.level}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="relative pl-0 lg:pl-14 group"
                >
                  {/* Point on timeline */}
                  <div className={`absolute left-4 lg:left-4 top-6 w-4 h-4 rounded-full ${edu.iconBg} border-4 border-background z-10 hidden lg:block group-hover:scale-125 transition-transform duration-300`} />
                  
                  <div className={`glass-strong rounded-2xl p-5 border border-white/10 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br ${edu.color}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl ${edu.iconBg} flex-shrink-0 flex items-center justify-center shadow-lg`}>
                        <edu.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">{edu.level}</h4>
                        {edu.major && <p className="text-primary text-xs font-semibold mb-1">{edu.major}</p>}
                        <p className="text-muted-foreground text-[11px] leading-tight mb-2">{edu.institution}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[10px] bg-background/50 px-2 py-0.5 rounded-full text-muted-foreground font-medium">{edu.period}</span>
                          <span className="text-xs font-bold gradient-text">{edu.result}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - My Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-3 h-full"
          >
            <div className="glass-strong rounded-3xl p-8 md:p-10 space-y-8 relative overflow-hidden h-full flex flex-col justify-center">
              {/* Decorative blob */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic mb-8 border-l-4 border-primary pl-6">
                  "I turn complex problems into elegant, user-centric digital experiences."
                </p>

                <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
                  <p>
                    Currently pursuing <span className="text-foreground font-semibold">Information Technology</span>, I’ve cultivated a deep interest in building 
                    intelligent systems. My technical path is defined by a dual focus: crafting responsive, high-performance 
                    <span className="gradient-text font-bold"> Web Applications</span> and exploring the predictive power of 
                    <span className="gradient-text-accent font-bold"> Machine Learning</span>.
                  </p>
                  <p>
                    I believe that great software isn't just about code—it's about creating 
                    <span className="italic"> meaningful impact </span>. Whether I'm architecting a full-stack solution or fine-tuning 
                    an ML model, my goal is always to deliver value through seamless usability and innovative problem-solving.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-8">
                  {["Next.js", "React", "Python", "Node.js", "Deep Learning", "UI/UX"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-xs md:text-sm rounded-xl glass border border-white/5 text-foreground font-medium hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
