import { motion } from "framer-motion";

export default function SkillBar({ skill, level }) {
  return (
    <div className="mb-6 group">
      {/* Label and Percentage Row */}
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-bold text-slate-200 uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
          {skill}
        </span>
        <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
          {level}%
        </span>
      </div>

      {/* Track */}
      <div className="relative w-full bg-slate-800/50 rounded-full h-2.5 overflow-hidden border border-white/5">
        {/* Progress Fill */}
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full bg-linear-to-r from-cyan-500 via-indigo-500 to-purple-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        
        {/* Glossy Overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent pointer-events-none" />
      </div>
      
      {/* Subtle Glow beneath the bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
        className="h-px bg-cyan-400/20 blur-sm mt-1 mx-2"
        style={{ width: `${level - 5}%` }}
      />
    </div>
  );
}
