import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Code2, Linkedin } from "lucide-react";

const profiles = [
  { name: "GitHub", icon: Github, href: "#", label: "Repositories & Code", color: "from-gray-600 to-gray-800" },
  { name: "LeetCode", icon: Code2, href: "#", label: "Problem Solving", color: "from-amber-500 to-orange-500" },
  { name: "LinkedIn", icon: Linkedin, href: "#", label: "Professional Network", color: "from-blue-500 to-blue-700" },
];

const CodingProfilesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container max-w-6xl mx-auto">
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
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">Online Presence</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, type: "spring" }}
              className="glass-strong rounded-2xl p-8 text-center card-hover group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                <p.icon size={26} className="text-white" />
              </div>
              <p className="font-heading font-bold text-lg text-foreground">{p.name}</p>
              <p className="text-xs text-muted-foreground mt-2">{p.label}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
