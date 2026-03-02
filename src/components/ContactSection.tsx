import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, Sparkles } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
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
            className="h-1 gradient-bg-accent rounded-full mx-auto block mb-6"
          />
          <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Let's <span className="gradient-text-accent">Connect</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-strong rounded-3xl p-10 max-w-lg mx-auto space-y-6 relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full" />

          <div className="relative">
            <label className="text-sm font-semibold text-foreground mb-2 block">Name</label>
            <input
              type="text"
              required
              className="w-full px-5 py-3 rounded-xl glass border-0 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
              placeholder="Your name"
            />
          </div>
          <div className="relative">
            <label className="text-sm font-semibold text-foreground mb-2 block">Email</label>
            <input
              type="email"
              required
              className="w-full px-5 py-3 rounded-xl glass border-0 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
              placeholder="your@email.com"
            />
          </div>
          <div className="relative">
            <label className="text-sm font-semibold text-foreground mb-2 block">Message</label>
            <textarea
              required
              rows={4}
              className="w-full px-5 py-3 rounded-xl glass border-0 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none placeholder:text-muted-foreground/50"
              placeholder="Your message..."
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-xl btn-gradient font-bold text-sm flex items-center justify-center gap-2"
          >
            {submitted ? (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                <CheckCircle size={18} /> Message Sent!
              </motion.span>
            ) : (
              <><Send size={16} /> Send Message <Sparkles size={14} /></>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
