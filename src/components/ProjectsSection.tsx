import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  tech: string[];
  description: string;
  image: string;
  github: string;
  live: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "Automated Student Data Filtering",
    tech: ["Google Apps Script", "Google Sheets"],
    description:
      "Real-time button-driven filtering system generating department-wise, concession, and waiting-list reports. Automated repetitive reporting.",
    image: "/projects/student-data.png",
    github: "https://github.com",
    live: "https://google.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Non-Invasive PCOS Prediction",
    tech: ["Gradient Boosting", "Flask", "React", "Node.js"],
    description:
      "Web-based PCOS prediction system with doctor booking, community support, automated email triggers, full ML integration.",
    image: "/projects/pcos-prediction.png",
    github: "https://github.com",
    live: "https://google.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "React CRUD Application",
    tech: ["React", "JavaScript", "Bootstrap", "CSS"],
    description:
      "Responsive CRUD application with modular components and real-time UI updates.",
    image: "/projects/react-crud.png",
    github: "https://github.com",
    live: "https://google.com",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Accident Detection AI",
    tech: ["YOLO", "Django", "OpenCV", "WhatsApp API"],
    description:
      "AI-powered real-time accident detection system with automated WhatsApp ambulance alerts.",
    image: "/projects/accident-detection.png",
    github: "https://github.com",
    live: "https://google.com",
    color: "from-orange-500 to-red-500",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="glass-strong rounded-3xl overflow-hidden card-hover group h-full flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden">
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-background/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
            title="View Code"
          >
            <Github size={20} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
            title="Live Demo"
          >
            <ExternalLink size={20} />
          </a>
        </motion.div>

        {/* Small badge for tech count */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`px-2 py-0.5 rounded-lg bg-background/60 backdrop-blur-sm text-[9px] font-bold uppercase tracking-widest border border-white/5`}>
            {project.tech.length} Tech
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-[13px] text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 text-[10px] rounded-md glass border border-white/5 text-primary font-semibold tracking-wide">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Dynamic Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={inView ? { width: 60 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 gradient-bg rounded-full mx-auto block mb-6"
          />
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
