import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import Roadmap from '../components/Roadmap';

const schedule = [
  { time: '09:00 – 10:00', label: 'Opening', title: 'Inauguration', desc: 'Welcome, problem statement unveiling, and AI Scientist briefing.', primary: true },
  { time: '10:00 – 13:00', label: 'Sprint', title: 'Phase 1', desc: 'Autonomous AI Code Generation: Focus on architecture prompts.', accent: true },
  { time: '13:00 – 14:00', label: 'Break', title: 'Lunch Break', desc: 'Catered meal & mentor networking.', isBreak: true, icon: 'restaurant' },
  { time: '14:00 – 19:00', label: 'Co-Curation', title: 'Phase 2', desc: 'Human-AI co-curation: Debug, finetune, and optimize.', accent: true },
  { time: '19:00 – 20:30', label: 'Checkpoint', title: 'Checkpoint 1', desc: 'Jury evaluation of Git diffs and AI architecture.', checkpoint: true },
  { time: '21:30 – 04:00', label: 'Logic', title: 'Phase 3: Integration', desc: 'Frontend-backend orchestration and high-end UI/UX.' },
  { time: '04:00 – 07:00', label: 'DevOps', title: 'Phase 4: Cloud Deployment', desc: 'Live deployment to Vercel, Streamlit, or Hugging Face.' },
  { time: '08:30 – 10:00', label: 'Finale', title: 'Final Pitch', desc: '5-minute presentations followed by rapid Q&A.', dark: true },
];

export default function Event() {
  return (
    <main className="pt-24 pb-24 bg-white">
      {/* ─── Fully Responsive Animated Roadmap Hero ─── */}
      <section className="relative overflow-hidden mb-24 min-h-[700px]">
        {/* Roadmap now handles internal responsiveness for Mobile & PC */}
        <Roadmap />
        
        {/* Bottom smudge smudge into Timeline */}
        <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #f8f9ff 0%, transparent 100%)' }}
        />
      </section>

      {/* ─── Schedule Timeline Section ─── */}
      <SectionWrapper 
        className="py-32 px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #faf8ff 35%, #ffffff 55%, #faf5ff 75%, #f5f8ff 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-400/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionWrapper className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase block mb-4 opacity-60">Timeline</span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-on-surface" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Master <span className="text-primary">Schedule</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <span className="bg-white/80 backdrop-blur px-6 py-2.5 rounded-2xl text-[10px] font-black tracking-widest uppercase shadow-xl border border-primary/5">24 Hours</span>
              <span className="bg-white/80 backdrop-blur px-6 py-2.5 rounded-2xl text-[10px] font-black tracking-widest uppercase shadow-xl border border-primary/5">SRM IST TRICHY</span>
            </div>
          </SectionWrapper>

          <div className="space-y-6">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.7, ease: "circOut" }}
                className={`group flex flex-col md:flex-row rounded-[2rem] overflow-hidden shadow-sm border border-black/5 hover:shadow-2xl transition-all duration-500
                  ${item.isBreak ? 'bg-surface-container-low border-dashed opacity-70 scale-95 origin-left' : 
                    item.checkpoint ? 'bg-indigo-50 border-indigo-200 shadow-indigo-100/50' : 
                    item.dark ? 'bg-slate-900 text-white shadow-slate-900/40' : 'bg-white/90 backdrop-blur-md hover:bg-white'}
                `}
              >
                <div className={`md:w-56 p-8 flex flex-col justify-center
                  ${item.primary ? 'bg-primary text-white shadow-[inset_0_4px_12px_rgba(0,0,0,0.1)]' : 
                    item.accent ? 'bg-slate-50 group-hover:bg-primary/5' : 
                    item.checkpoint ? 'text-indigo-900' : 
                    item.dark ? 'text-white border-r border-white/10' : 'text-slate-900'}
                `}>
                  <span className="font-black text-2xl tracking-tight mb-1">{item.time}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">{item.label}</span>
                </div>
                
                <div className={`flex-1 p-8 md:p-10 flex items-center
                  ${item.accent ? 'border-l-4 border-primary/30 group-hover:border-primary transition-colors' : ''}
                `}>
                  <div className="flex items-center gap-6 w-full">
                    {item.icon && <span className="material-symbols-outlined text-primary text-4xl opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>}
                    <div>
                      <h4 className={`text-2xl font-black mb-2 tracking-tight ${item.checkpoint ? 'text-indigo-900' : ''}`}>{item.title}</h4>
                      <p className={`leading-relaxed font-medium ${item.dark ? 'opacity-70' : 'text-on-surface-variant'}`}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Competitive Flow Summary ─── */}
      <section className="py-32 bg-white px-8 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black tracking-tight text-on-background mb-8" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                The Competitive <span className="text-primary">Flow</span>
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12 font-medium">
                The TENSOR’26 workflow is designed to simulate the future of software engineering. Participants are evaluated not just on the final product, but on the sophistication of their AI orchestration process and the cleanliness of their generated systems.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-50 border border-slate-200 px-8 py-5 rounded-[2rem] flex items-center gap-4 shadow-sm group">
                  {['Start', 'Build', 'Submit', 'Evaluate', 'Pitch'].map((step, i, arr) => (
                    <div key={step} className="flex items-center gap-4 whitespace-nowrap">
                      <span className={`font-black text-sm tracking-widest uppercase ${i === 0 || i === arr.length - 1 ? 'text-primary' : 'text-slate-400 opacity-60'}`}>{step}</span>
                      {i < arr.length - 1 && <span className="material-symbols-outlined text-xs text-slate-300">arrow_forward</span>}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative group h-full"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white">
                <img 
                  className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa1qdr2pZ1SEc_V37ovMOkkhDSKsBB5twCj8JCKufQabBkmOhUNBhLU0sZeWieCCJB33sa1pd_BG4gWv5Wzikpx4-40UseojOqLw7nb4SASzTOQFMtHbs-S-577Z9VNxnlL2j45479It_llUh12WtSWK5eEDHVgMtdEakvOUDrrpOXC6hO32sOGd_JK196TaANWqz9fEKwSA3qVvWtFO131Sz8ceTMMs-vCyud_tnKz-_kNueubE_KAY5AamI7E9ybnxzv9Q40lwA" 
                  alt="Workspace"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <p className="text-white text-lg font-black italic tracking-tight">“The best way to predict the future is to generate it.”</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom smudge into footer */}
        <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)' }}
        />
      </section>
    </main>
  );
}
