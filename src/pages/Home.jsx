import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen bg-linear-to-tr from-purple-800 via-indigo-600 to-cyan-600 flex flex-col items-center justify-center text-center text-white px-4">

      <motion.div
        className="w-40 h-40 rounded-full border-4 overflow-hidden border-white mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/md_hasin_ishrak_khan.jpg"
          className="scale-125"
        />
      </motion.div>

      <motion.h1
        className="text-5xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Md. Hasin Ishrak Khan
      </motion.h1>

      <motion.p
        className="text-xl mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        MERN Stack Developer | React Enthusiast
      </motion.p>

      <motion.button
        className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded shadow hover:bg-yellow-300 transition btn border-0 text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Download Resume
      </motion.button>

      <motion.div
        className="flex gap-6 mt-6 text-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a href="https://github.com/HasinIshrakK"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/md-hasin-ishrak-khan"><FaLinkedin /></a>
        <a href="https://www.facebook.com/muhammadhasinishrak"><FaFacebook /></a>
      </motion.div>

    </section>
  );
}
