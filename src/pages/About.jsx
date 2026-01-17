import SkillBar from "../components/SkillBar";
import { motion } from "framer-motion";

export default function About() {
  return (<div className="bg-indigo-950">
    <motion.section className="p-10 max-w-4xl text-center mx-auto"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <h2 className="text-3xl text-cyan-300 font-bold mb-6">About Me</h2>
      <p>
        I am a MERN stack developer passionate about building scalable, responsive, and user-centric web applications. My journey began with curiosity and has grown into hands-on experience with MongoDB, Express, React, Node.js, Firebase, and modern UI systems.
      </p>
      <p className="mt-4">
        I enjoy solving real-world problems, crafting clean interfaces, and continuously improving my skills. Beyond coding, I enjoy literature and creative thinking, which help shape my approach to problem-solving.
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
