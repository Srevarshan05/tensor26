import { motion } from 'framer-motion';
import ShapeGrid from '../components/background/ShapeGrid';

const termsPoints = [
    "TENSOR’26 is open to undergraduate and postgraduate students participating in teams of 3–4 members.",
    "Registration is valid only after successful payment through the Unstop platform.",
    "Registration fees are non-refundable once confirmed.",
    "All participants must follow the complete 24-hour hackathon schedule and event structure.",
    "Only approved free-tier or open-source tools are allowed during the hackathon.",
    "Manual coding during Phase 1 is strictly prohibited and may lead to disqualification.",
    "Teams must follow proper GitHub workflow, including timely commits and version control practices.",
    "Use of pre-built projects, templates, or prior work is strictly not allowed.",
    "All submissions must be original and created during the hackathon.",
    "Participants retain ownership of their projects, but organizers may showcase them for academic and promotional purposes.",
    "Evaluation will be conducted by a jury panel, and all decisions will be final.",
    "Any rule violation, misconduct, or unfair practice may result in disqualification.",
    "Organizers are not responsible for technical issues, data loss, or personal belongings.",
    "Organizers reserve the right to modify event details if required due to unforeseen circumstances.",
    "Participation in the event implies full acceptance of these Terms and Conditions."
];

export default function Terms() {
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
             <span className="material-symbols-outlined text-5xl text-primary p-4 bg-primary/5 rounded-3xl shadow-sm">description</span>
          </div>
          <h1 className="text-[2.5rem] leading-tight sm:text-5xl md:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-violet-400 mx-auto rounded-full mb-8 shadow-sm"></div>
          <p className="text-slate-700 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed">
            The official legal framework and participation agreement for TENSOR'26.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="bg-white/70 backdrop-blur-3xl rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8 md:p-14 border border-white/80 shadow-2xl shadow-slate-200/50 space-y-2 sm:space-y-4"
        >
          {termsPoints.map((point, i) => (
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
            📜 Professional • Binding • Transparent
        </p>
      </div>
    </main>
  );
}
