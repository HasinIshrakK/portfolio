import { motion } from "framer-motion";

export default function Contact() {
  return (<div className="bg-indigo-950 h-screen items-center grid space-y-4">
    <motion.section className="p-10 text-center space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.1 }}>
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p>Email: your@email.com</p>
      <p>Phone: +880XXXXXXXXX</p>
      <p>WhatsApp: +880XXXXXXXXX</p>
    </motion.section>
  </div >
  );
}
