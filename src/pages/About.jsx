import { motion } from "framer-motion";
// Assuming SkillBar is a component you've built; I've styled the container below
import SkillBar from "../components/SkillBar"; 

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              About Me
            </h2>
            <div className="h-1 w-20 bg-cyan-500 mt-1 rounded-full"></div>
          </div>
          
          <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
            <p>
              I am a <span className="text-white font-medium">MERN Stack Developer</span> passionate about building scalable, 
              responsive, and user-centric web applications. My journey began with curiosity 
              and has grown into hands-on experience with modern cloud infrastructures and UI systems.
            </p>
            <p>
              I specialize in bridging the gap between <span className="text-cyan-400">clean code</span> and 
              <span className="text-purple-400"> creative design</span>. Beyond the terminal, I draw 
              inspiration from literature and creative thinking, which helps me approach complex 
              architectural problems with a unique perspective.
            </p>
          </div>

          {/* Quick Facts or Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-cyan-400 font-bold text-2xl">10+</h4>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Projects Completed</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-purple-400 font-bold text-2xl">MERN</h4>
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
            {/* If your SkillBar doesn't handle the labels/styling well, 
                you can wrap them or pass specific classes to them */}
            <div className="space-y-6">
              <SkillBar skill="JavaScript (ES6+)" level={85} />
              <SkillBar skill="React & Next.js" level={80} />
              <SkillBar skill="Node & Express" level={75} />
              <SkillBar skill="Tailwind CSS" level={90} />
              <SkillBar skill="MongoDB & Firebase" level={70} />
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm text-slate-500 mb-4 font-semibold uppercase tracking-widest">Tools I Use</p>
            <div className="flex flex-wrap gap-2">
              {['Git', 'Vercel', 'Postman', 'Figma', 'VS Code'].map((tool) => (
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
