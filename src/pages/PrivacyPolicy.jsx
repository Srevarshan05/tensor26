import { motion } from 'framer-motion';
import ShapeGrid from '../components/background/ShapeGrid';

const policyPoints = [
    "We collect basic participant information such as name, email address, phone number, institution details, team information, and GitHub profile links during registration.",
    "Technical data including project repositories, submitted code, documentation, and deployment links may also be collected as part of the hackathon process.",
    "Collected information is used for registration verification, communication, evaluation, result publication, and showcasing projects.",
    "We do not sell or misuse participant data under any circumstances.",
    "Limited data access may be provided to jury members, faculty coordinators, and organizers strictly for evaluation and event management.",
    "Sponsors may receive limited, non-sensitive information only for engagement or collaboration purposes.",
    "All data is stored securely and accessible only to authorized personnel.",
    "Participants must ensure that sensitive information such as API keys or credentials are not exposed in public repositories.",
    "By participating, you consent to your name, institution, and project being used for promotional, academic, and reporting purposes.",
    "Third-party platforms such as GitHub, Unstop, and AI tools may be used, and their respective privacy policies apply.",
    "Participation in TENSOR’26 implies acceptance of this Privacy Policy."
];

export default function PrivacyPolicy() {
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
             <span className="material-symbols-outlined text-5xl text-primary p-4 bg-primary/5 rounded-3xl shadow-sm">security</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-on-surface-variant text-lg font-medium opacity-80">
            Learn about how we handle and protect participant data throughout TENSOR'26.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="glass-morphism rounded-[40px] p-8 md:p-12 border border-white/40 shadow-xl space-y-6"
        >
          {policyPoints.map((point, i) => (
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
            🔐 Secure • Transparent • Privacy-Focused
        </p>
      </div>
    </main>
  );
}
