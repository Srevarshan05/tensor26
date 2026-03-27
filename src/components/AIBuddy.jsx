import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const idleTexts = ["👀 psst...", "🧠 wanna win this?", "hey 👀", "psst... click me!"];

export default function AIBuddy() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [step, setStep] = useState('form'); // 'form', 'loading', 'success'
  const [formData, setFormData] = useState({ name: '', email: '' });
  const containerRef = useRef(null);

  // Cycle idle texts
  useEffect(() => {
    if (isExpanded) return;
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % idleTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isExpanded]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isExpanded]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('loading');
    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        setStep('form');
        setIsExpanded(false);
        setFormData({ name: '', email: '' });
      }, 3000);
    }, 2000);
  };

  return (
    <div ref={containerRef} className="fixed bottom-10 right-0 md:bottom-20 z-[100] flex items-end">
      <AnimatePresence>
        {!isExpanded ? (
          /* Peeking State */
          <motion.div
            initial={{ x: '70%', opacity: 0 }}
            animate={{ 
              x: isHovered ? '10%' : '70%', 
              opacity: 1,
              rotate: [0, -2, 2, -2, 0],
            }}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              rotate: { repeat: Infinity, duration: 5, repeatDelay: 3 }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsExpanded(true)}
            className="glass-card-premium cursor-pointer p-4 pr-12 rounded-l-[2rem] border-r-0 shadow-2xl flex items-center gap-4 group"
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
              <span className="material-symbols-outlined text-white text-xl">smart_toy</span>
            </div>
            <div className="whitespace-nowrap overflow-hidden">
              <motion.p 
                key={textIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs md:text-sm font-black text-on-background"
              >
                {isHovered ? "👉 I've got something for you" : idleTexts[textIndex]}
              </motion.p>
            </div>
          </motion.div>
        ) : (
          /* Expanded Panel / Bottom Drawer on Mobile */
          <motion.div
            initial={{ x: '100%', opacity: 0, y: '50%' }}
            animate={{ x: 0, opacity: 1, y: 0 }}
            exit={{ x: '100%', opacity: 0 }}
            className="fixed inset-x-4 bottom-4 md:relative md:inset-auto md:right-8 md:bottom-0 md:w-[380px] glass-card-premium p-8 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-primary/20 bg-white/95"
          >
            <button 
              onClick={() => setIsExpanded(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full hover:bg-black/5 transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-xl opacity-40">close</span>
            </button>

            {step === 'form' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-white text-2xl">neurology</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>🧠 Prepare Smarter</h3>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest">Tensor 26 Insider</p>
                  </div>
                </div>

                <p className="text-on-surface-variant text-sm mb-8 font-medium italic">
                  I'll send you something actually useful 👇
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border border-black/5 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border border-black/5 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-black uppercase tracking-widest text-xs py-5 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    Get It 🚀
                  </button>
                  <p className="text-center text-[10px] text-on-surface-variant font-bold opacity-40 uppercase tracking-widest mt-4">
                    ⚡ Takes 10 seconds • No spam
                  </p>
                </form>
              </motion.div>
            )}

            {step === 'loading' && (
              <div className="py-20 flex flex-col items-center justify-center text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full mb-6"
                />
                <p className="text-lg font-black tracking-tight italic">Cooking something smart for you... 🍳</p>
              </div>
            )}

            {step === 'success' && (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-20 flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-green-500 text-4xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-black mb-2">📩 Sent!</h3>
                <p className="text-on-surface-variant font-medium">Check your inbox 😄</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
