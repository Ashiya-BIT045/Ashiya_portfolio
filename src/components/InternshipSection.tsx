import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Briefcase, ArrowRight, X, Image as ImageIcon, Terminal, Trophy, Cpu } from "lucide-react";
import appinCertificate from "@/assets/Appin_certificate.png";

const InternshipSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showCertificate, setShowCertificate] = useState(false);
  const [activeExperience, setActiveExperience] = useState("infynd");

  // Prevent background scroll when modal is active
  useEffect(() => {
    document.body.style.overflow = showCertificate ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [showCertificate]);

  const experiences = {
    appin: {
      company: "Appin Technologies",
      role: "Full Stack Java Intern",
      date: "June 2025",
      accent: "from-orange-500 to-amber-500",
      glow: "rgba(245, 158, 11, 0.3)",
      tasks: [
        "Built web application using Java, ReactJS, MySQL",
        "Implemented REST APIs & authentication",
        "Deployed via GitHub",
      ],
      skills: ["Java", "React", "MySQL", "API"],
      projects: [
        { name: "Student Management System", desc: "Developed a comprehensive backend using Spring Boot." },
        { name: "Portfolio Canvas", desc: "Designed a dynamic portfolio with smooth animations." },
      ],
      hasCertificate: true
    },
    infynd: {
      company: "Infynd",
      role: "AI Engineer Intern",
      date: "Present",
      accent: "from-blue-600 to-indigo-500",
      glow: "rgba(37, 99, 235, 0.3)",
      tasks: [
        "Selected via Infynd Hackathon winner program",
        "Working on LLM integration and AI workflows",
        "Developing scalable AI-driven solutions",
        "Earning a performance-based stipend of ₹5,000",
      ],
      skills: ["Python", "AI/ML", "LLMs", "NLP"],
      projects: [
        { name: "Hackathon Project", desc: "Won the recruitment challenge with an innovative AI solution." },
        { name: "Core AI Module", desc: "Optimizing model inference for production use." },
      ],
      hasCertificate: false
    }
  };

  const current = experiences[activeExperience];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/50" ref={ref}>
      <div className="container max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="h-1.5 w-12 bg-accent rounded-full mx-auto mb-4" />
          <p className="text-[11px] uppercase tracking-[0.4em] text-accent font-black mb-2">Professional Path</p>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-orange-600">Internship</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT SIDE: Selection Cards */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
            {Object.entries(experiences).map(([key, exp]) => (
              <motion.div
                key={key}
                onClick={() => setActiveExperience(key)}
                className={`min-w-[280px] lg:min-w-full group cursor-pointer p-6 rounded-[2rem] border-2 transition-all duration-500 relative overflow-hidden ${activeExperience === key
                    ? `bg-white dark:bg-slate-900 border-accent shadow-2xl`
                    : "bg-white/60 dark:bg-white/5 border-transparent hover:border-accent/30"
                  }`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex items-center gap-5 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-6 ${activeExperience === key ? `bg-gradient-to-br ${exp.accent} text-white shadow-lg` : "bg-slate-200 dark:bg-white/10 text-slate-500"
                    }`}>
                    {key === 'infynd' ? <Cpu size={28} /> : <Briefcase size={28} />}
                  </div>
                  <div className="text-left">
                    <h3 className={`font-black text-lg leading-tight ${activeExperience === key ? "text-slate-900 dark:text-white" : "text-slate-500"}`}>{exp.company}</h3>
                    <p className="text-accent text-[10px] uppercase tracking-widest font-extrabold mt-1">{exp.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE: Detail Panel */}
          <div className="lg:col-span-8 min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExperience}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden"
                style={{ boxShadow: `0 20px 60px -15px ${current.glow}` }}
              >
                {/* Visual Glow Ornament */}
                <div className={`absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br ${current.accent} opacity-10 rounded-full blur-[100px]`} />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-10">
                    <div>
                      <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">{current.company}</h3>
                      <div className="flex items-center gap-3">
                        <span className={`px-4 py-1.5 bg-gradient-to-r ${current.accent} text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-md`}>
                          {current.date}
                        </span>
                      </div>
                    </div>
                    {current.hasCertificate && (
                      <button
                        onClick={() => setShowCertificate(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
                      >
                        <ImageIcon size={16} /> Certificate
                      </button>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-3">
                        <Terminal size={18} />
                        <span>Key Responsibilities</span>
                      </h4>
                      <ul className="space-y-4">
                        {current.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-4 text-sm font-bold text-slate-700 dark:text-slate-200 leading-relaxed">
                            <ArrowRight size={16} className="text-accent mt-0.5 shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects Area */}
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-3">
                        <Trophy size={18} />
                        <span>Featured Projects</span>
                      </h4>
                      <div className="space-y-4">
                        {current.projects.map((proj, i) => (
                          <div key={i} className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-accent/50 transition-colors">
                            <h5 className="text-sm font-black text-slate-900 dark:text-white mb-2">{proj.name}</h5>
                            <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{proj.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2.5">
                    {current.skills.map(skill => (
                      <span key={skill} className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-xl text-[11px] text-slate-600 dark:text-slate-300 font-bold border border-transparent hover:border-accent/20 transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* MEDIUM-SIZE SCROLLABLE CERTIFICATE MODAL */}
      <AnimatePresence>
        {showCertificate && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCertificate(false)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl z-[101] flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-white/5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
                <div className="flex items-center gap-3 pl-2">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <ImageIcon size={18} className="text-accent" />
                  </div>
                  <div>
                    <span className="block text-[12px] font-black uppercase tracking-widest text-slate-900 dark:text-white">
                      Completion Certificate
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">Appin Technologies • 2025</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowCertificate(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-red-500 hover:text-white transition-all shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[65vh] p-6 scrollbar-thin scrollbar-thumb-accent">
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-inner">
                  <img
                    src={appinCertificate}
                    alt="Certificate View"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="py-10 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-white/5 rounded-full border border-slate-100 dark:border-white/5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      Official Verified Document
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InternshipSection;