import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  return (<div className="bg-indigo-950 h-screen">
    <section className="p-8 max-w-7xl mx-auto">
      <motion.h2 className="text-4xl font-bold text-cyan-300 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        Projects</motion.h2>
      <motion.div className="grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        {projects.map(p => (
          <motion.div
            key={p.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <img src={p.image} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-purple-700 font-bold mb-2">{p.name}</h3>
              <Link
                to={`/projects/${p.id}`}
                className="btn btn-outline hover:bg-cyan-500 hover:text-white hover:border-0 text-cyan-600 font-semibold"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  </div>
  );
}
