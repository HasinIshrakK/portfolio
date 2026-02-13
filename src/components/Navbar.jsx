import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0f172a]/80 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:rotate-6 transition-transform">
            H
          </div>
          <span className="text-xl text-white font-bold tracking-tighter">
            Hasin<span className="text-cyan-400">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors hover:text-cyan-400 ${
                  location.pathname === link.path ? "text-cyan-400" : "text-slate-300"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Subtle CTA in Nav */}
          <li>
            <Link to="/contact" className="px-5 py-2 bg-white text-slate-900 text-xs font-bold rounded-full hover:bg-cyan-400 transition-all">
              HIRE ME
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#0f172a] flex flex-col items-center justify-center gap-8 md:hidden overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-3xl font-bold text-white hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
