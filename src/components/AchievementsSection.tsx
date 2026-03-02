import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Trophy, X, FileText, Linkedin, ChevronRight } from "lucide-react";

// Assets
import nxtech_photo from "@/assets/nxtech_photo.jpeg";
import nxtech_certificate from "@/assets/nxtech_certificate.jpeg";

const achievements = [
  {
    id: "expo",
    title: "1st Place – Project Expo",
    event: "NXTECH 2K25",
    date: "FEB 2025",
    accent: "rgba(249, 115, 22, 0.15)", // Subtle Orange
    eventPhoto: nxtech_photo,
    certificateImage: nxtech_certificate,
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7403259474125516800/",
    description: "Won 1st place for building an AI + IoT solution focused on sustainable urban farming.",
  },
  {
    id: "paper",
    title: "1st Place – Paper Presentation",
    event: "TECHNOFETE ’23",
    date: "OCT 2023",
    accent: "rgba(168, 85, 247, 0.15)", // Subtle Purple
    eventPhoto: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    certificateImage: "https://images.unsplash.com/photo-1621243804936-775306a8f2e3?auto=format&fit=crop&q=80&w=800",
    description: "Awarded best paper for research on Neural Network Optimizations among 50+ entries.",
  },
  {
    id: "articulate",
    title: "3rd Place – Articulate'25",
    event: "TECHNICAL EVENT",
    date: "JAN 2025",
    accent: "rgba(236, 72, 153, 0.15)", // Subtle Pink
    eventPhoto: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
    certificateImage: "https://images.unsplash.com/photo-1589330694653-96b34691763e?auto=format&fit=crop&q=80&w=800",
    description: "Secured 3rd place in a high-stakes technical debate and presentation competition.",
  }
];

const AchievementsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedId, setSelectedId] = useState(null);
  const selected = achievements.find((a) => a.id === selectedId);

  return (
    <section id="achievements" className="py-24 relative bg-white overflow-hidden">
      
      {/* Background Decor: Clean Grid & Floating Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-100/40 blur-[100px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-100/40 blur-[100px] rounded-full" 
        />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-2">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Achievements</h2>
        </div>

        {/* 3-Column Grid */}
        <motion.div 
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((a) => (
            <motion.div
              key={a.id}
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Animated Glow Behind Card */}
              <div 
                className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                style={{ backgroundColor: a.accent }}
              />

              {/* Main White Card */}
              <div className="relative bg-white rounded-[2.5rem] p-4 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100/50 flex flex-col h-full">
                
                {/* Image Area */}
                <div className="relative h-44 rounded-[2rem] overflow-hidden mb-6">
                  <img src={a.eventPhoto} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" alt="" />
                  <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-xl shadow-sm">
                    <Trophy size={16} className="text-orange-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 pb-4 flex flex-col flex-grow items-center text-center">
                  <span className="text-[9px] font-black text-slate-400 tracking-widest uppercase mb-1">{a.event}</span>
                  <h3 className="text-lg font-black text-slate-900 mb-6 leading-tight h-12 flex items-center">{a.title}</h3>
                  
                  {/* Footer Actions */}
                  <div className="w-full space-y-2 mt-auto">
                    <button
                      onClick={() => setSelectedId(a.id)}
                      className="w-full py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
                    >
                      View Details <ChevronRight size={14} />
                    </button>
                    
                    {a.linkedinUrl && (
                      <a
                        href={a.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 text-slate-400 hover:text-[#0077B5] rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                      >
                        <Linkedin size={14} /> LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Modal (Syncs with your Screenshot style) */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedId(null)} className="absolute inset-0 bg-white/80 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
              <div className="p-4 border-b border-slate-50 flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-4">Certificate Details</span>
                <button onClick={() => setSelectedId(null)} className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-full transition-all"><X size={20}/></button>
              </div>
              <div className="p-8 max-h-[70vh] overflow-y-auto">
                <img src={selected.certificateImage} className="w-full rounded-2xl shadow-sm mb-6 border border-slate-50" alt="" />
                <h4 className="text-2xl font-black text-slate-900 mb-2">{selected.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{selected.description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AchievementsSection;