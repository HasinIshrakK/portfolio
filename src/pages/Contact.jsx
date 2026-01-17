import { motion } from "framer-motion";

export default function Contact() {
  return (<div className="bg-indigo-950 h-screen items-center grid space-y-4">
    <motion.section className="p-10 text-center space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}>
      <h2 className="text-3xl text-cyan-300 font-bold">Contact Me</h2>
      <p>Email: hasinishrakk@gmail.com</p>
      <p>Phone: +880 1518-938360</p>
      <p>WhatsApp: +880 1518-938360</p>
    </motion.section>
  </div >
  );
}
