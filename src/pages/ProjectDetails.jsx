import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="text-white text-center py-20">Project not found.</div>;

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Back Button */}
        <Link to="/projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">
            {project.name}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Details */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-cyan-400 mb-3 uppercase tracking-wider">Challenges Overcome</h3>
              <p className="text-slate-300 leading-relaxed">{project.challenges}</p>
            </section>

            <section className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-purple-400 mb-3 uppercase tracking-wider">Future Roadmap</h3>
              <p className="text-slate-300 leading-relaxed">{project.future}</p>
            </section>
          </div>

          {/* Sidebar: Tech & Links */}
          <aside className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg text-sm font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-lg"
              >
                Live Demo <FaExternalLinkAlt size={14} />
              </a>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all border border-slate-700"
              >
                View Code <FaGithub size={18} />
              </a>
            </div>
          </aside>
        </div>
      </motion.div>
    </div>
  );
}
