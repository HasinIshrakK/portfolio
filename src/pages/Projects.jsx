import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] py-20 px-6 overflow-hidden relative">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-900/5 blur-[120px] pointer-events-none" />

      <section className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-white to-slate-500 mb-4">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-300 hover:border-cyan-500/50"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                {/* Tech Badges */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {p.tags?.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-widest bg-black/60 backdrop-blur-md text-cyan-400 px-2 py-1 rounded border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {p.name}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-6">
                  {p.description || "A comprehensive MERN stack solution built for modern web performance."}
                </p>
                
                <Link
                  to={`/projects/${p.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white bg-slate-800 hover:bg-cyan-600 px-5 py-2.5 rounded-xl transition-all duration-300 w-full justify-center border border-slate-700 hover:border-cyan-400 shadow-lg"
                >
                  View Case Study
                  <svg xmlns="http://www.w3.org" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
