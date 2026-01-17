import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-indigo-800 shadow-md sticky w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 border-4 text-2xl rounded-full bg-linear-to-br from-brand-800 to-tealpro-500 flex items-center justify-center text-white font-bold">
            H
          </div>
          <span className="text-lg text-white font-semibold font-mono">Hasin</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-indigo-700 shadow-md flex flex-col text-center py-4 space-y-4 font-medium text-white">
          <li><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/projects">Projects</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
