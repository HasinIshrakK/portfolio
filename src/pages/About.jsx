import SkillBar from "../components/SkillBar";
import { motion } from "framer-motion";

export default function About() {
  return (<div className="bg-indigo-950">
    <motion.section className="p-10 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <h2 className="text-3xl text-center text-cyan-300 font-bold mb-6">About Me</h2>
      <p>
        I am a frontend developer passionate about building clean and responsive
        web applications. My journey started with curiosity and evolved into
        working with React, Firebase, and modern UI systems.
      </p>
      <p className="mt-4">
        I enjoy problem-solving, design, and continuous learning. Outside coding,
        I enjoy literature and creative thinking.
      </p>
    </motion.section>

    <motion.section className="max-w-3xl mx-auto p-8"
            initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
      <h2 className="text-3xl font-bold text-cyan-300 mb-6 text-center">Skills</h2>
      <SkillBar skill="HTML" level={95} />
      <SkillBar skill="CSS" level={90} />
      <SkillBar skill="JavaScript" level={85} />
      <SkillBar skill="React" level={80} />
      <SkillBar skill="Tailwind" level={80} />
      <SkillBar skill="Firebase" level={70} />
    </motion.section>
  </div>
  );
}
