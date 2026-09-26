import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import useAxios from "../hooks/useAxios"
import SkillBar from "../components/SkillBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants2 = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  function getRandomElementsUnique(arr, count) {
    // Create a shallow copy to avoid mutating the original array
    const shuffled = [...arr];

    // Fisher-Yates Shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Return the requested number of elements
    return shuffled.slice(0, count);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const [aboutInfo, setAboutInfo] = useState([]);
  const [projects, setProjects] = useState([])
  const [certificates, setCeritificates] = useState([])
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);

  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchAboutInfo = async () => {
      try {
        const response = await axiosInstance.get(`/about-me`);
        setAboutInfo(response.data.data[0]);
      } catch (err) {
        console.error("Failed to fetch about info", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutInfo();
  }, [axiosInstance]);

  useEffect(() => {
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

  useEffect(() => {
    const fetchCeritificates = async () => {
      try {
        const response = await axiosInstance.get(`/my-certificates`);
        setCeritificates(response.data.data);
      } catch (err) {
        console.error("Failed to fetch ceritificates", err);
      } finally {
        setLoading3(false);
      }
    };

    fetchCeritificates();
  }, [axiosInstance]);

  if (loading || loading2 || loading3) return <p className="text-center text-3xl md:text-4xl font-semibold bg-linear-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent min-h-screen items-center flex justify-center">Loading...</p>;

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
                src={aboutInfo.image}
                alt={aboutInfo.name}
                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400 mb-3"
          >
            {aboutInfo.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 font-medium mb-8 max-w-md"
          >
            {aboutInfo.role} <span className="text-cyan-500">|</span> {aboutInfo.role2}
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10 w-full justify-center">
            <a
              href={aboutInfo.resumeDownload}
              className="group relative px-8 py-3 bg-white text-slate-950 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 text-center"
            >
              Download Resume
            </a>
            <Link to='/projects'>
              <button className="px-8 py-3 bg-slate-800 text-white font-semibold rounded-xl w-full border border-slate-700 hover:bg-slate-700 transition-all">
                View Projects
              </button>
            </Link>
          </motion.div>
          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-8 text-2xl text-slate-400">
            {[
              { Icon: FaGithub, href: aboutInfo.github },
              { Icon: FaLinkedin, href: aboutInfo.linkedin },
              { Icon: FaFacebook, href: aboutInfo.facebook }
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
                {aboutInfo.philosophy}
              </p>
            </div>

            {/* Tech Cloud: Interactive Pills */}
            <div className="flex flex-wrap gap-3">
              {aboutInfo.skills.map((tech, idx) => (
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

            {aboutInfo.proficiencies.filter(proficiency => proficiency.core === true).map((p, idx) => {
              return (<div key={idx}>
                <SkillBar skill={p.skill} level={p.level} />
              </div>)
            })}
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
            {projects.filter(p => p.featured === true).map((p, idx) => (
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

      {/* SECTION: FEATURED CERTIFICATES */}
      <section className="py-24 px-6 max-w-6xl mx-auto space-y-12">

        {/* Synchronized Header Visual Elements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="inline-block"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500">
            Verified Expertise
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mt-1 rounded-full"></div>
          <p className="text-slate-400 mt-4 text-lg max-w-xl">
            A verified timeline of my structural deep dives, specialized bootcamps, and engineering frameworks.
          </p>
        </motion.div>

        {/* Dynamic Grid Layout (2 Cards + 1 "See More" Route Anchor) */}
        <motion.div
          variants={containerVariants2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {getRandomElementsUnique(certificates, 2).map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 p-5 rounded-3xl backdrop-blur-sm flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div>
                {/* Visual Certificate Preview Area */}
                <a
                  href={cert.fullView}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    // onClick={() => setActiveCert(cert)}
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
                </a>

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
              {/* <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-auto w-full text-center py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold tracking-wide text-slate-300 hover:bg-linear-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Credential
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a> */}
            </motion.div>
          ))}

          {/* INTEGRATED "SEE MORE" REDIRECT GRID CARD */}
          <motion.div
            variants={fadeInUp}
            className="relative bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 p-8 rounded-3xl backdrop-blur-sm flex flex-col justify-center items-center text-center group min-h-[350px] overflow-hidden hover:border-purple-500/30 transition-all duration-500"
          >
            {/* Background Accent Glow Effect */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-500" />

            <div className="z-10 space-y-6">
              {/* Animated Glowing Icon Wrapper */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-purple-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 group-hover:scale-110 transition-all duration-500 shadow-xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">Continuous Growth</h3>
                <p className="text-slate-400 text-sm max-w-[220px] mx-auto leading-relaxed">
                  Explore my complete catalog of specialized programs, courses, and honors.
                </p>
              </div>

              <Link
                to="/certificates"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-linear-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white rounded-xl text-sm font-semibold tracking-wide text-slate-300 border border-slate-700 hover:border-transparent transition-all duration-300 shadow-md"
              >
                Explore All Credentials
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* SECTION: CALL TO ACTION */}
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
