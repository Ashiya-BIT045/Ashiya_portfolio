import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, X, Eye, FileText, Calendar } from "lucide-react";

// Replace these with your actual image paths
// import java_cert from "@/assets/java_cert.jpg";

interface Cert {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  color: string;
}

const certs: Cert[] = [
  { 
    title: "Java Programming", 
    issuer: "NPTEL Elite", 
    date: "2024",
    description: "Successfully completed the 'Programming in Java' course with an Elite Gold medal score of 72%. Covered OOPS, Multi-threading, and Exception Handling.",
    image: "https://images.unsplash.com/photo-1621243804936-775306a8f2e3?auto=format&fit=crop&q=80&w=800", 
    color: "from-violet-500 to-indigo-500" 
  },
  { 
    title: "Environmental Impact", 
    issuer: "NPTEL Elite", 
    date: "2023",
    description: "Specialized study in EIA methodologies, sustainability frameworks, and environmental regulation standards.",
    image: "https://images.unsplash.com/photo-1589330694653-96b34691763e?auto=format&fit=crop&q=80&w=800", 
    color: "from-emerald-500 to-teal-500" 
  },
  { 
    title: "Industry 4.0 & IIoT", 
    issuer: "NPTEL Elite", 
    date: "2024",
    description: "Explored the integration of IoT in manufacturing, smart sensors, and data-driven industrial automation.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800", 
    color: "from-blue-500 to-cyan-500" 
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<Cert | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "unset";
  }, [selected]);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950" ref={ref}>
      
      {/* Theme Background: Gradients & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:30px_30px] opacity-40" />
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-purple-200/40 dark:bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] bg-orange-100/40 dark:bg-orange-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="h-1.5 w-10 bg-orange-500 rounded-full mx-auto mb-4" />
          <p className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-600 dark:text-orange-500 mb-2">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Certifications</h2>
        </motion.div>

        {/* 3-Column Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-xl border border-slate-100 dark:border-white/5 flex flex-col items-center text-center"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <Award size={24} className="text-white" />
              </div>

              <div className="flex-grow">
                <span className="text-[10px] font-black text-orange-600 dark:text-orange-400 tracking-widest uppercase mb-2 block">{c.issuer}</span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight mb-3">{c.title}</h3>
                <div className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <Calendar size={12} /> {c.date}
                </div>
              </div>

              <button
                onClick={() => setSelected(c)}
                className="mt-8 w-full py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-95"
              >
                <Eye size={14} /> View Details
              </button>
            </motion.div>
          ))}
        </div>

        {/* Medium-Sized Detail Modal */}
        <AnimatePresence>
          {selected && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-white/50 dark:bg-slate-900/50 backdrop-blur">
                   <div className="flex items-center gap-3">
                     <FileText size={18} className="text-orange-500" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Credential Details</span>
                   </div>
                   <button onClick={() => setSelected(null)} className="p-2 hover:bg-red-50 dark:hover:bg-red-500/10 text-slate-400 hover:text-red-500 rounded-full transition-all">
                     <X size={20} />
                   </button>
                </div>

                {/* Scrollable Preview Area */}
                <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                  <div className="rounded-[2rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-inner mb-8">
                    <img src={selected.image} className="w-full h-auto object-contain" alt={selected.title} />
                  </div>

                  <div className="text-center md:text-left">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{selected.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {selected.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificationsSection;