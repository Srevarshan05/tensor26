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
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Code of <span className="text-primary">Conduct</span>
          </h1>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-on-surface-variant text-lg font-medium opacity-80">
            Rules and guidelines to ensure a fair, respectful, and productive environment for all TENSOR'26 participants.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="glass-morphism rounded-[40px] p-8 md:p-12 border border-white/40 shadow-xl space-y-6"
        >
          {points.map((point, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 group"
            >
              <div className="mt-1.5 w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300 flex-shrink-0" />
              <p className="text-on-surface font-medium leading-relaxed tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-12 text-center text-on-surface-variant font-bold text-sm tracking-widest uppercase opacity-60">
            ⚖️ Professionalism • Respect • Integrity
        </p>
      </div>
    </main>
  );
}
