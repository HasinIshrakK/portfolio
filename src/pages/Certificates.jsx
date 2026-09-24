import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Certificates() {
  // State to track which certificate is currently being viewed in the modal
  const [activeCert, setActiveCert] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const certificates = [
    {
      title: "MERN Stack Developer Bootcamp",
      issuer: "Udemy / Online Academy",
      date: "Aug 2025",
      skills: ["MongoDB", "Express", "React", "Node"],
      imageUrl: "https://unsplash.com", // Replace with your cert image path
      credentialUrl: "https://udemy.com" 
    },
    {
      title: "Advanced React & Next.js",
      issuer: "Frontend Masters",
      date: "Nov 2025",
      skills: ["Next.js", "SSR", "Tailwind CSS"],
      imageUrl: "https://unsplash.com", // Replace with your cert image path
      credentialUrl: "#"
    },
    {
      title: "Cloud Infrastructure Basics",
      issuer: "AWS / Coursera",
      date: "Feb 2026",
      skills: ["AWS S3", "Vercel", "Firebase"],
      imageUrl: "https://unsplash.com", // Replace with your cert image path
      credentialUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Block */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="inline-block"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mt-1 rounded-full"></div>
          <p className="text-slate-400 mt-4 text-lg max-w-xl">
            Verified credentials highlighting my continuous learning path and technical milestones.
          </p>
        </motion.div>

        {/* Certificate Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 p-5 rounded-3xl backdrop-blur-sm flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div>
                {/* Visual Certificate Preview Area */}
                <div 
                  onClick={() => setActiveCert(cert)}
                  className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/5 mb-5 cursor-pointer group/img"
                >
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 bg-slate-900/90 text-cyan-400 text-xs font-bold rounded-xl border border-cyan-500/30 tracking-wide shadow-xl">
                      Click to Expand
                    </span>
                  </div>
                </div>

                {/* Title & Metadata */}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    {cert.date}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 font-medium">
                    Verified
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Issued by {cert.issuer}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded-md text-xs border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button Kept As Is */}
              <a 
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-auto w-full text-center py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold tracking-wide text-slate-300 hover:bg-linear-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Credential
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pop-up Lightbox Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()} // Stop closing when clicking image itself
              className="relative max-w-4xl w-full bg-slate-900 border border-white/10 p-3 rounded-2xl shadow-2xl overflow-hidden cursor-default"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveCert(null)}
                className="absolute top-5 right-5 z-10 p-2 bg-slate-950/60 hover:bg-slate-950 text-slate-400 hover:text-white rounded-full transition-colors border border-white/5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Large Image View */}
              <img 
                src={activeCert.imageUrl} 
                alt={activeCert.title} 
                className="w-full h-auto rounded-xl object-contain max-h-[75vh]"
              />
              
              {/* Title Tray inside Modal */}
              <div className="p-4 mt-2">
                <h4 className="text-xl font-bold text-white">{activeCert.title}</h4>
                <p className="text-sm text-slate-400">Issued by {activeCert.issuer} • {activeCert.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
