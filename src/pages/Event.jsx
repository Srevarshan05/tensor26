import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';

const steps = [
  { id: '01', icon: 'terminal', title: 'Prompt Engineering', desc: 'Defining high-fidelity instructions to guide the AI core.' },
  { id: '02', icon: 'code_blocks', title: 'Development', desc: 'Autonomous generation of modular architectures and logic.' },
  { id: '03', icon: 'bug_report', title: 'Debugging', desc: 'Collaborative agent testing to identify edge-case failures.' },
  { id: '04', icon: 'settings_input_component', title: 'Fine-Tuning', desc: 'Optimizing output parameters for precision and speed.' },
  { id: '05', icon: 'rocket_launch', title: 'Deployment', desc: 'Shipping live production instances to the cloud.' },
];

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
    <main className="pt-32 pb-24 bg-surface">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase block mb-4">Architecture</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-8">How It Works</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            TENSOR’26 is an AI-first development marathon. We challenge engineers to build complex systems by orchestrating intelligence rather than manually typing syntax.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          <div className="hidden lg:block absolute top-[60%] left-0 w-full h-px bg-primary/20 -z-0" />
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="z-10"
            >
              <Card className="p-8 h-full border border-black/5 flex flex-col items-start bg-white/80 backdrop-blur-sm">
                <div className="text-primary-dim font-black text-4xl mb-6 opacity-10">{step.id}</div>
                <div className="bg-primary-container text-on-primary-container w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined">{step.icon}</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule Timeline */}
      <section className="bg-surface-container-low py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase block mb-4">Timeline</span>
              <h2 className="text-5xl font-black tracking-tighter text-on-surface">Master Schedule</h2>
            </div>
            <div className="flex gap-4">
              <span className="bg-white/80 backdrop-blur px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm border border-black/5">24 Hours</span>
              <span className="bg-white/80 backdrop-blur px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm border border-black/5">SRM IST TRICHY</span>
            </div>
          </SectionWrapper>

          <div className="space-y-4">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className={`group flex flex-col md:flex-row rounded-xl overflow-hidden shadow-sm border border-black/5 transition-colors
                  ${item.isBreak ? 'bg-surface-container-low border-dashed opacity-70' : 
                    item.checkpoint ? 'bg-tertiary-container' : 
                    item.dark ? 'bg-inverse-surface text-background' : 'bg-white hover:bg-surface-container-lowest'}
                `}
              >
                <div className={`md:w-48 p-6 flex flex-col justify-center
                  ${item.primary ? 'bg-primary-container text-on-primary-container' : 
                    item.accent ? 'bg-surface-container-highest group-hover:bg-primary/5' : 
                    item.checkpoint ? 'text-on-tertiary-container' : 
                    item.dark ? 'text-background' : 'text-on-surface'}
                `}>
                  <span className="font-black text-xl">{item.time}</span>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">{item.label}</span>
                </div>
                
                <div className={`flex-1 p-6 md:p-8 flex items-center
                  ${item.accent ? 'border-l-4 border-primary' : ''}
                `}>
                  <div className="flex items-center gap-4 w-full">
                    {item.icon && <span className="material-symbols-outlined text-outline text-3xl">{item.icon}</span>}
                    <div>
                      <h4 className={`text-2xl font-bold mb-1 ${item.checkpoint ? 'text-on-tertiary-container' : ''}`}>{item.title}</h4>
                      <p className={`leading-relaxed ${item.dark ? 'opacity-80' : 'text-on-surface-variant'}`}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Flow Summary */}
      <SectionWrapper className="max-w-7xl mx-auto px-8 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Competitive Flow</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              The TENSOR’26 workflow is designed to simulate the future of software engineering. Participants are evaluated not just on the final product, but on the sophistication of their AI orchestration process and the cleanliness of their generated systems.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-white border border-black/5 px-6 py-4 rounded-full flex items-center gap-3 shadow-sm overflow-x-auto no-scrollbar">
                {['Start', 'Build', 'Submit', 'Evaluate', 'Pitch'].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-3 whitespace-nowrap">
                    <span className={`font-bold ${i === 0 || i === arr.length - 1 ? 'text-primary' : 'text-on-surface'}`}>{step}</span>
                    {i < arr.length - 1 && <span className="material-symbols-outlined text-sm opacity-30">arrow_forward</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl group"
          >
            <img 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa1qdr2pZ1SEc_V37ovMOkkhDSKsBB5twCj8JCKufQabBkmOhUNBhLU0sZeWieCCJB33sa1pd_BG4gWv5Wzikpx4-40UseojOqLw7nb4SASzTOQFMtHbs-S-577Z9VNxnlL2j45479It_llUh12WtSWK5eEDHVgMtdEakvOUDrrpOXC6hO32sOGd_JK196TaANWqz9fEKwSA3qVvWtFO131Sz8ceTMMs-vCyud_tnKz-_kNueubE_KAY5AamI7E9ybnxzv9Q40lwA" 
              alt="Workspace"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white text-lg font-medium italic opacity-90">“The best way to predict the future is to generate it.”</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  );
}
