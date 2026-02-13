import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-cyan-400" />, 
      label: "Email", 
      value: "hasinishrakk@gmail.com", 
      link: "mailto:hasinishrakk@gmail.com"
    },
    {
      icon: <FaPhoneAlt className="text-purple-400" />, 
      label: "Phone", 
      value: "+880 1518-938360", 
      link: "tel:+8801518938360"
    },
    {
      icon: <FaWhatsapp className="text-green-400" />, 
      label: "WhatsApp", 
      value: "Chat on WhatsApp", 
      link: "https://wa.me/8801518938360"
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-16 text-center shadow-2xl"
      >
        <header className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            I’m currently open to new opportunities and collaborations. 
            Feel free to reach out via any of these platforms!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-slate-900/50 border border-white/5 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="text-3xl mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <h4 className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-2">
                {method.label}
              </h4>
              <p className="text-white font-medium text-sm break-all md:break-normal">
                {method.value}
              </p>
              <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FaArrowRight className="text-cyan-400 text-xs" />
              </div>
            </motion.a>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-white/5">
          <p className="text-slate-500 text-sm">
            Based in <span className="text-slate-300">Dhaka, Bangladesh</span> • Available for remote work worldwide.
          </p>
        </footer>
      </motion.section>
    </div>
  );
}
