import { motion } from "framer-motion";

export default function SkillBar({ skill, level }) {
  return (
    <div className="mb-4">
      <p className="font-medium mb-1">{skill}</p>
      <div className="bg-gray-200 rounded-full h-4">
        <motion.div
          className="bg-indigo-600 h-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
