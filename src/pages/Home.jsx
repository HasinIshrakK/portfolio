import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import useAxios from "../hooks/useAxios"
import SkillBar from "../components/SkillBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const [member, setMember] = useState([]);
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axiosInstance.get(`/members/${import.meta.env.VITE_id}`);
        setMember(response.data.data);
      } catch (err) {
        console.error("Failed to fetch member", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [axiosInstance]); useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get(`/my-projects`);
        setProjects(response.data.data);
      } catch (err) {
        console.error("Failed to fetch projects", err);
      } finally {
        setLoading2(false);
      }
    };

    fetchProjects();
  }, [axiosInstance]);

  if (loading || loading2) return <p className="text-center text-3xl md:text-4xl font-semibold bg-linear-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent min-h-screen items-center flex justify-center">Loading...</p>;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="bg-[#0f172a]">
      {/* SECTION 1: HERO  */}
      <section className="relative py-6 bg-[#0f172a] flex items-center justify-center px-4 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px]" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl max-w-3xl w-full flex flex-col items-center"
        >
          {/* Profile Image with Glow */}
          <motion.div
            variants={itemVariants}
            className="relative group w-32 h-32 md:w-40 md:h-40 mb-8"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative w-full h-full rounded-full border-2 border-white/20 overflow-hidden bg-slate-800">
              <img
                src="/md_hasin_ishrak_khan.jpg"
                alt="Md. Hasin Ishrak Khan"
                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400 mb-3"
          >
            Md. Hasin Ishrak Khan
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 font-medium mb-8 max-w-md"
          >
            MERN Stack Developer <span className="text-cyan-500">|</span> React Specialist
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10 w-full justify-center">
            <a
              href="https://drive.google.com/uc?export=download&id=1ztLtqzaV6omxzSb1-TixYsq-0CDPQ_46"
              className="group relative px-8 py-3 bg-white text-slate-950 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 text-center"
            >
              Download Resume
            </a>
            <Link to='/projects'>
              <button className="px-8 py-3 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-700 transition-all">
                View Projects
              </button>
            </Link>
          </motion.div>
"https://github.com/HasinIshrakK"
          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-8 text-2xl text-slate-400">
            {[
              { Icon: FaGithub, href: `https://github.com/HasinIshrakK` },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/md-hasin-ishrak-khan" },
              { Icon: FaFacebook, href: "https://www.facebook.com/muhammadhasinishrak" }
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: EXPERTISE & TECH CLOUD */}
      <section className="py-24 px-6 border-y border-white/5 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Expertise & <span className="text-cyan-400">Philosophy</span></h2>
              <p className="text-slate-400 leading-relaxed text-lg italic border-l-4 border-cyan-500 pl-6">
                "I don't just write code; I architect digital experiences. My MERN stack journey
                is fueled by a passion for clean architecture and high-performance UI."
              </p>
            </div>

            {/* Tech Cloud: Interactive Pills */}
            <div className="flex flex-wrap gap-3">
              {["React", "Node.js", "Express", "MongoDB", "Next.js", "Tailwind", "TypeScript", "Firebase", "Redux", "Framer Motion"].map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(34, 211, 238, 0.1)", borderColor: "rgba(34, 211, 238, 0.5)" }}
                  className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-300 font-bold text-sm cursor-default transition-colors shadow-lg"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Core Proficiencies (SkillBars) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-white mb-8 tracking-widest uppercase">Core Proficiencies</h3>
            <SkillBar skill="Frontend Architecture" level={92} />
            <SkillBar skill="Backend Logic (Node/Express)" level={88} />
            <SkillBar skill="Database Management" level={80} />
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: FEATURED WORK PREVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-white">Featured <span className="text-purple-400">Projects</span></h2>
              <p className="text-slate-500 mt-3 text-lg">A handpicked selection of my most complex deployments.</p>
            </div>
            <Link to="/projects" className="group flex items-center gap-2 text-cyan-400 font-bold text-lg hover:text-white transition-all">
              Explore Portfolio <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

          {/* Displaying first 2 projects only */}
          <div className="grid md:grid-cols-2 gap-10">
            {projects.slice(0, 2).map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all shadow-2xl"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.name} />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-60" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{p.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-[10px] font-black uppercase tracking-widest bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${p.id}`}
                    className="inline-block w-full py-4 text-center bg-slate-800 text-white font-bold rounded-2xl hover:bg-white hover:text-slate-900 transition-all border border-slate-700 hover:border-white"
                  >
                    Case Study Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 text-center bg-linear-to-t from-cyan-950/20 to-transparent">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-white mb-8 tracking-tighter">Ready to Build Something <span className="text-cyan-400 italic">Legendary?</span></h2>
          <Link to="/contact" className="inline-block px-12 py-5 bg-cyan-500 text-slate-950 font-black text-xl rounded-2xl hover:bg-cyan-400 hover:scale-105 transition-all shadow-2xl shadow-cyan-500/20">
            Let's Start a Project
          </Link>
        </motion.div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section className="py-24 bg-linear-to-b from-transparent to-cyan-900/10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to bring your idea to life?</h2>
          <p className="text-slate-400 mb-10 text-lg">I'm currently available for freelance work and full-time roles.</p>
          <a href="/contact" className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-2xl transition-all shadow-xl shadow-cyan-500/20">
            Start a Conversation
          </a>
        </div>
      </section>
    </main>
  );
}
