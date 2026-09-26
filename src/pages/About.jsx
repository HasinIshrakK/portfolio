import { motion } from "framer-motion";
import SkillBar from "../components/SkillBar";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";

export default function About() {

  const [aboutInfo, setAboutInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosInstance = useAxios();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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

  if (loading) return <p className="text-center text-3xl md:text-4xl font-semibold bg-linear-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent min-h-screen items-center flex justify-center">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* About Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <div className="inline-block">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500">
              About Me
            </h2>
            <div className="h-1 w-20 bg-cyan-500 mt-1 rounded-full"></div>
          </div>

          <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
            <p>
              {aboutInfo.about[0]}<span className="text-white font-medium">{aboutInfo.about[1]}</span> {aboutInfo.about[2]}
            </p>
            <p>
              {aboutInfo.about[3]}<span className="text-cyan-400">{aboutInfo.about[4]}</span>{aboutInfo.about[5]}<span className="text-purple-400">{aboutInfo.about[6]}</span>{aboutInfo.about[7]}
            </p>
          </div>

          {/* Quick Facts or Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-cyan-400 font-bold text-2xl">{aboutInfo.projectsCount}</h4>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Projects Completed</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-purple-400 font-bold text-2xl">{aboutInfo.stack}</h4>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Primary Stack</p>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            Technical Proficiency
          </h3>

          <div className="space-y-5">
            <div className="space-y-6">
              {aboutInfo.proficiencies.filter(proficiency => proficiency.core !== true).map((p, idx) => {
                return (<div key={idx}>
                  <SkillBar skill={p.skill} level={p.level} />
                </div>)
              })}
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm text-slate-500 mb-4 font-semibold uppercase tracking-widest">Tools I Use</p>
            <div className="flex flex-wrap gap-2">
              {aboutInfo.tools.map((tool) => (
                <span key={tool} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
