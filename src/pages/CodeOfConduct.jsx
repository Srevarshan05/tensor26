import { motion } from 'framer-motion';
import ShapeGrid from '../components/background/ShapeGrid';

const points = [
  "All participants must maintain professionalism, respect, and integrity throughout the event.",
  "Respectful communication with participants, mentors, judges, and organizers is mandatory.",
  "Harassment, discrimination, or abusive behavior of any kind will not be tolerated.",
  "Plagiarism, copying code, or using external pre-built solutions is strictly prohibited.",
  "All work must be original and completed during the hackathon.",
  "GitHub commit history must clearly reflect individual and team contributions.",
  "Participants must follow all technical guidelines, including proper AI usage and documentation.",
  "Misuse of datasets, unethical practices, or exposure of sensitive information is strictly prohibited.",
  "Participants must adhere to SRM IST campus rules during the event.",
  "Presence at the venue is mandatory unless permitted otherwise by organizers.",
  "Use of alcohol, drugs, or any prohibited substances is strictly forbidden.",
  "Violations may result in warnings, score penalties, disqualification, or institutional reporting.",
  "Participants are encouraged to report any misconduct to organizers or faculty coordinators.",
  "Participation implies agreement to follow this Code of Conduct."
];

export default function CodeOfConduct() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-white">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <ShapeGrid
          speed={0.5}
          squareSize={60}
          direction="diagonal"
          borderColor="#bfc4c0"
          hoverFillColor="#241334"
          shape="square"
          hoverTrailAmount={10}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
             <span className="material-symbols-outlined text-5xl text-primary p-4 bg-primary/5 rounded-3xl shadow-sm">gavel</span>
          </div>
          <h1 className="text-[2.5rem] leading-tight sm:text-5xl md:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Code of <span className="text-primary">Conduct</span>
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-violet-400 mx-auto rounded-full mb-8 shadow-sm"></div>
          <p className="text-slate-700 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed">
            Rules and guidelines to ensure a fair, respectful, and productive environment for all TENSOR'26 participants.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="bg-white/70 backdrop-blur-3xl rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8 md:p-14 border border-white/80 shadow-2xl shadow-slate-200/50 space-y-2 sm:space-y-4"
        >
          {points.map((point, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.04 }}
              className="flex items-start gap-4 sm:gap-6 group hover:bg-white/60 p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] transition-all duration-300 border border-transparent hover:border-white/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="mt-2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all duration-300 flex-shrink-0 shadow-sm" />
              <p className="text-slate-800 text-[15px] sm:text-lg md:text-xl font-bold leading-relaxed tracking-tight group-hover:text-slate-950 transition-colors">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-16 text-center text-slate-500 font-extrabold text-sm sm:text-base tracking-[0.2em] uppercase">
            ⚖️ Professionalism • Respect • Integrity
        </p>
      </div>
    </main>
  );
}
