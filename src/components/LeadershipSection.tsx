import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Crown } from "lucide-react";

const roles = [
  { role: "Treasurer", org: "UiPath Community", period: "2025–2026", color: "from-violet-500 to-purple-500" },
  { role: "Treasurer", org: "Readers Park Club", period: "2025–Present", color: "from-blue-500 to-indigo-500" },
];

const LeadershipSection = () => {
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
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">Leadership</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Extra-<span className="gradient-text">Curricular</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {roles.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15, type: "spring" }}
              className="glass-strong rounded-2xl p-7 card-hover group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className="flex items-start gap-4 relative">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Crown size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-lg text-foreground">{r.role}</p>
                  <p className="text-sm text-muted-foreground mt-1">{r.org}</p>
                  <p className="text-xs text-primary mt-2 font-medium">{r.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
