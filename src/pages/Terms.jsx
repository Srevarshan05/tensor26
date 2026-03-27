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
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-on-surface-variant text-lg font-medium opacity-80">
            The official legal framework and participation agreement for TENSOR'26.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="glass-morphism rounded-[40px] p-8 md:p-12 border border-white/40 shadow-xl space-y-6"
        >
          {termsPoints.map((point, i) => (
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
            📜 Professional • Binding • Transparent
        </p>
      </div>
    </main>
  );
}
