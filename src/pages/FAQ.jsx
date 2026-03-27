import { motion } from 'framer-motion';
import FAQAccordion from '../components/FAQAccordion';
import ShapeGrid from '../components/background/ShapeGrid';

const faqData = [
  { question: "Who can participate?", answer: "Students currently enrolled in any university across the country can participate." },
  { question: "What is the team size?", answer: "Teams can have up to 4 members. Individual participants are also welcome!" },
  { question: "Is it offline?", answer: "Yes, TENSOR'26 is an in-person, 24-hour hackathon held at SRM IST Tiruchirappalli." },
  { question: "How to register?", answer: "Register through the Unstop link provided on the home page." },
];

export default function FAQ() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Interactive Grid Animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ShapeGrid
          speed={0.5}
          squareSize={60}
          direction="diagonal"
          borderColor="#bfc4c0"
          hoverFillColor="#241334"
          shape="square"
          hoverTrailAmount={20}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-20"
        >
          <label className="bg-primary/10 text-primary px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">Support Center</label>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-on-background leading-tight mb-8" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-medium max-w-2xl mx-auto">
            Everything you need to know about the technical journey at TENSOR’26. Can't find what you're looking for? Reach out to our organizing team.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="glass-card-premium p-8 md:p-12 mb-20"
        >
           <FAQAccordion items={faqData} />
        </motion.div>
      </div>

      {/* Bottom smear */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)' }}
      />
    </main>
  );
}
