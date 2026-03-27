import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import ShapeGrid from '../components/background/ShapeGrid';
import abt1 from '../assets/abtimage1.svg';
import abt2 from '../assets/abtimage2.svg';
import abt3 from '../assets/abtimage3.svg';
import abt4 from '../assets/abtimage4.svg';

const focusAreas = [
  { icon: 'neurology', title: 'AI-driven development', description: 'Leveraging the power of LLMs and machine learning to accelerate the coding lifecycle and architectural design.', color: 'bg-indigo-50', text: 'text-indigo-600' },
  { icon: 'psychiatry', title: 'Real-world problem solving', description: 'Applying computational intelligence to tackle tangible industrial and societal challenges with scalable software.', color: 'bg-violet-50', text: 'text-violet-600' },
  { icon: 'groups', title: 'Collaborative innovation', description: 'Fostering a synergy between diverse technical minds to pioneer breakthroughs in the AI ecosystem.', color: 'bg-sky-50', text: 'text-sky-600' },
];

const participationReasons = [
  { title: 'Hands-on AI experience', description: 'Directly implement cutting-edge models and development workflows in a competitive environment.' },
  { title: 'Build real-world projects', description: 'Transform concepts into functional prototypes that address existing market gaps.' },
  { title: 'Network with innovators', description: 'Connect with industry leaders, technical mentors, and like-minded visionary developers.' },
  { title: 'Compete at national level', description: 'Showcase your prowess on a prestigious stage and gain recognition across the country.' },
];

export default function About() {
  return (
    <main className="min-h-screen relative">
      {/* ─── Persistent Background Grid for Hero + Focus Areas ─── */}
      <div className="fixed inset-0 z-0 overflow-hidden">
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

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center text-center px-4 overflow-hidden z-10 pt-24 pb-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <label className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-6 block opacity-60">National Level Hackathon</label>
          <h1 
            className="text-6xl md:text-8xl font-black tracking-tight text-on-background leading-tight mb-8"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            About <span className="text-primary">TENSOR</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-on-surface-variant font-medium max-w-2xl mx-auto tracking-tight">
            TENSOR’26 is a 24-hour national-level hackathon focused on AI-curated software development, bringing together visionaries to build the future.
          </p>
        </motion.div>
      </section>

      {/* ─── Focus Areas Section ─── */}
      <SectionWrapper 
        className="pt-10 pb-16 md:pt-16 md:pb-32 border-y border-slate-200/50 relative overflow-hidden z-10 px-4 md:px-8"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(232, 232, 232, 0.5) 100%)' }}
      >
        <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black tracking-tight text-on-background mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>Focus Areas</h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              >
                <div className="glass-card-premium p-10 h-full">
                  <div className={`w-14 h-14 ${area.color} ${area.text} flex items-center justify-center rounded-2xl mb-8 shadow-inner`}>
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{area.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{area.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm font-medium opacity-80">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Participation Section ─── */}
      <section className="py-16 md:py-32 bg-white px-4 md:px-8 overflow-hidden relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black tracking-tight text-on-background mb-12" style={{ fontFamily: "'Orbitron', sans-serif" }}>Why <span className="text-primary">Participate?</span></h2>
              <div className="space-y-8">
                {participationReasons.map((reason, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="mt-1 w-8 h-8 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <span className="material-symbols-outlined text-sm text-primary group-hover:text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold tracking-tight text-slate-900">{reason.title}</h4>
                      <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">{reason.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="flex justify-center items-center"
            >
              <div className="carousel-3d-wrapper">
                <div className="card-3d">
                  {/* Slide 1 */}
                  <div style={{ transform: 'translate(-50%, -50%) rotateY(0deg) translateZ(var(--distance))' }}>
                    <img src={abt1} className="w-full h-full object-cover" alt="Slide 1" />
                  </div>
                  {/* Slide 2 */}
                  <div style={{ transform: 'translate(-50%, -50%) rotateY(90deg) translateZ(var(--distance))' }}>
                    <img src={abt2} className="w-full h-full object-cover" alt="Slide 2" />
                  </div>
                  {/* Slide 3 */}
                  <div style={{ transform: 'translate(-50%, -50%) rotateY(180deg) translateZ(var(--distance))' }}>
                    <img src={abt3} className="w-full h-full object-cover" alt="Slide 3" />
                  </div>
                  {/* Slide 4 */}
                  <div style={{ transform: 'translate(-50%, -50%) rotateY(270deg) translateZ(var(--distance))' }}>
                    <img src={abt4} className="w-full h-full object-cover" alt="Slide 4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)' }}
        />
      </section>
    </main>
  );
}
