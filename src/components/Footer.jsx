import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f172a] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Brand & Status */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white tracking-tighter mb-2">
            Hasin<span className="text-cyan-400">.</span>
          </h3>
          <p className="text-slate-500 text-sm flex items-center justify-center md:justify-start gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new opportunities
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="text-slate-500 text-xs uppercase tracking-widest font-medium order-3 md:order-2">
          © {new Date().getFullYear()} Md. Hasin Ishrak Khan 
          <span className="mx-2 text-slate-700">|</span> 
          Built with <span className="text-cyan-500 hover:text-white transition-colors cursor-default">React & Tailwind</span>
        </div>

        {/* Right Side: Socials & Top Button */}
        <div className="flex items-center gap-6 order-2 md:order-3">
          <div className="flex gap-4 text-xl text-slate-400">
            <a href="https://github.com/HasinIshrakK" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/md-hasin-ishrak-khan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin /></a>
            <a href="https://www.facebook.com/muhammadhasinishrak" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaFacebook /></a>
          </div>
          
          <motion.button
            whileHover={{ y: -3 }}
            onClick={scrollToTop}
            className="p-3 bg-slate-800 rounded-xl border border-white/10 text-cyan-400 hover:bg-slate-700 transition-all"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={14} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
