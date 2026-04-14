import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import Roadmap from '../components/Roadmap';
import ShapeGridMoving from '../components/background/ShapeGridMoving';

import juryRamkumar from '../assets/jury-ramkumar-final.jpg';
import juryChidambaram from '../assets/jury-chidambaram-final.jpg';
import juryDerrick from '../assets/jury-derrick-final.jpg';
import juryAnubharathi from '../assets/jury-anubharathi-final.jpg';
import juryAnsari from '../assets/jury-ansari-cropped.jpg';
import jurySaravanan from '../assets/jury-saravanan-final.jpg';

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

const juryMembers = [
  {
    name: 'Dr. M. Saravanan',
    role: 'Principal Scientist',
    org: 'Ericsson, Bangalore',
    image: jurySaravanan,
    objectPos: '50% 10%',
  },
  {
    name: 'Ramkumar Nagarajan',
    role: 'System Architect',
    org: 'Ericsson, Bangalore',
    image: juryRamkumar,
    objectPos: '50% 10%',
  },
  {
    name: 'Chidambaram Rajan',
    role: 'CEO',
    org: 'EmedLogix',
    image: juryChidambaram,
    objectPos: '50% 10%',
  },
  {
    name: 'Derrick Alex J',
    role: 'AGM Operations & Head',
    org: 'VDart Academy',
    image: juryDerrick,
    objectPos: '50% 5%',
  },
  {
    name: 'Mohamed Ansari',
    role: 'Subject Matter Expert',
    org: 'VDart Academy',
    image: juryAnsari,
    objectPos: '50% 5%',
  },
  {
    name: 'Anubharathi P',
    role: 'Subject Matter Expert',
    org: 'VDart Academy',
    image: juryAnubharathi,
    objectPos: '50% 15%',
  },
];

export default function Event() {
  return (
    <main className="pb-24 bg-white">
      {/* ─── Fully Responsive Animated Roadmap Hero ─── */}
      <section className="relative overflow-hidden mb-24 min-h-[700px]">
        {/* ShapeGridMoving Background Animation — Event page only */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <ShapeGridMoving
            speed={0.6}
            squareSize={40}
            direction="diagonal"
            borderColor="#dedede"
            hoverFillColor="#919191"
            shape="square"
            hoverTrailAmount={2}
          />
        </div>

        {/* Roadmap now handles internal responsiveness for Mobile & PC */}
        <div className="relative z-10">
          <Roadmap />
        </div>
        
        {/* Bottom smudge into Timeline */}
        <div className="absolute bottom-0 left-0 w-full h-32 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #f8f9ff 0%, transparent 100%)' }}
        />
      </section>

      {/* ─── Schedule Timeline Section ─── */}
      <SectionWrapper 
        className="py-16 md:py-32 px-4 md:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #faf8ff 35%, #ffffff 55%, #faf5ff 75%, #f5f8ff 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-400/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionWrapper className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-20 gap-4 md:gap-8">
            <div>
              <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase block mb-4 opacity-60">Timeline</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-on-surface" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Master <span className="text-primary">Schedule</span>
              </h2>
            </div>
            <div className="flex gap-3 flex-wrap">
              <span className="bg-white/80 backdrop-blur px-4 md:px-6 py-2 rounded-2xl text-[10px] font-black tracking-widest uppercase shadow-xl border border-primary/5">24 Hours</span>
              <span className="bg-white/80 backdrop-blur px-4 md:px-6 py-2 rounded-2xl text-[10px] font-black tracking-widest uppercase shadow-xl border border-primary/5">SRM IST TRICHY</span>
            </div>
          </SectionWrapper>

          <div className="space-y-4 md:space-y-6">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.7, ease: "circOut" }}
                className={`group flex flex-col md:flex-row rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm border border-black/5 hover:shadow-2xl transition-all duration-500
                  ${item.isBreak ? 'bg-surface-container-low border-dashed opacity-70 scale-95 origin-left' : 
                    item.checkpoint ? 'bg-indigo-50 border-indigo-200 shadow-indigo-100/50' : 
                    item.dark ? 'bg-slate-900 text-white shadow-slate-900/40' : 'bg-white/90 backdrop-blur-md hover:bg-white'}
                `}
              >
                {/* Time Panel */}
                <div className={`md:w-56 px-6 py-4 md:p-8 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start border-b md:border-b-0
                  ${item.primary ? 'bg-primary text-white shadow-[inset_0_4px_12px_rgba(0,0,0,0.1)] border-primary/20' : 
                    item.accent ? 'bg-slate-50 group-hover:bg-primary/5 border-slate-100' : 
                    item.checkpoint ? 'text-indigo-900 border-indigo-100' : 
                    item.dark ? 'text-white border-white/10' : 'text-slate-900 border-slate-100'}
                `}>
                  <span className="font-black text-xl md:text-2xl tracking-tight">{item.time}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 md:mt-1">{item.label}</span>
                </div>
                
                {/* Content Panel */}
                <div className={`flex-1 px-6 py-5 md:p-10 flex items-center
                  ${item.accent ? 'border-l-0 md:border-l-4 border-t-4 md:border-t-0 border-primary/30 group-hover:border-primary transition-colors' : ''}
                `}>
                  <div className="flex items-center gap-4 md:gap-6 w-full">
                    {item.icon && <span className="material-symbols-outlined text-primary text-3xl md:text-4xl opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>}
                    <div>
                      <h4 className={`text-xl md:text-2xl font-black mb-1 md:mb-2 tracking-tight ${item.checkpoint ? 'text-indigo-900' : ''}`}>{item.title}</h4>
                      <p className={`text-sm md:text-base leading-relaxed font-medium ${item.dark ? 'opacity-70' : 'text-on-surface-variant'}`}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Jury Panel Section ─── */}
      <section className="py-16 md:py-32 bg-white px-4 md:px-8 overflow-hidden relative">
        {/* Decorative background blurs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-400/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-400/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <SectionWrapper className="text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase block mb-4 opacity-60">
                Meet the Experts
              </span>
              <h2
                className="text-4xl md:text-6xl font-black tracking-tight text-on-surface"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Jury <span className="text-primary">Panel</span>
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mt-4 md:mt-6 max-w-2xl mx-auto font-medium">
                Distinguished industry leaders and technology experts who will evaluate your innovations at TENSOR'26.
              </p>
            </motion.div>
          </SectionWrapper>

          {/* Jury Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {juryMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: "circOut" }}
                className="group flex flex-col items-center text-center"
              >
                {/* Card Container */}
                <div className="w-full bg-white/80 backdrop-blur-md rounded-[2rem] border border-black/5 p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center">
                  {/* Round Photo Frame */}
                  <div className="relative mb-6">
                    {/* Glow ring on hover */}
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/20 via-indigo-400/10 to-violet-400/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-700" />
                    
                    <div
                      className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                      style={{
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)',
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Name & Details */}
                  <h3 className="text-lg md:text-xl font-black tracking-tight text-on-surface mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-bold text-sm md:text-base mb-1">
                    {member.role}
                  </p>
                  <p className="text-on-surface-variant text-xs md:text-sm font-medium opacity-70">
                    {member.org}
                  </p>
                </div>
              </motion.div>
            ))}
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
