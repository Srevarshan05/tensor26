import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SparkleButton from './SparkleButton';

const PEEK_PHRASES = [
  "wanna prepare smarter?",
  "got 10 seconds?",
  "quick tip before you start?",
  "Touch here to unveil!",
  "secret docs inside...",
  "win with AI? click me",
  "don't miss the dev-kit!"
];

export default function PeekingMascot() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isPeeking, setIsPeeking] = useState(false);
  const [bubbleText, setBubbleText] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [step, setStep] = useState('form'); // 'form', 'loading', 'success'
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const containerRef = useRef(null);
  
  // Production Identity awareness
  useEffect(() => {
    const submitted = localStorage.getItem('tensor26_buddy_submitted');
    if (submitted) setHasSubmitted(true);
  }, []);

  // Peek Logic
  useEffect(() => {
    if (hasSubmitted || isExpanded) return;

    const triggerPeek = () => {
      setBubbleText(PEEK_PHRASES[Math.floor(Math.random() * PEEK_PHRASES.length)]);
      setIsPeeking(true);
      
      // Show bubble slightly after peaking
      setTimeout(() => setShowBubble(true), 600);

      // Hide after 5 seconds
      setTimeout(() => {
        setShowBubble(false);
        setIsPeeking(false);
      }, 5000);
    };

    // Initial delay before first peek (Reduced for faster testing)
    const initialTimer = setTimeout(() => {
      triggerPeek();
    }, 1000);

    // Cycle peeking every 8 seconds
    const interval = setInterval(() => {
      triggerPeek();
    }, 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [hasSubmitted, isExpanded]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStep('loading');
    
    // THE ABSOLUTE FINAL MASCOT EMAIL AUTOMATION URL (PROD-READY-FINAL)
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8fsxIPoeA-9cdTsjEfeQS0lWgi_brfQQpfxuMAnbKb0rQ_7rTgfgntTMs1Xtsapov7Q/exec";

    try {
      // Trigger the 1-minute delayed email automation
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(formData)
      });

      setStep('success');
      localStorage.setItem('tensor26_buddy_submitted', 'true');
      setHasSubmitted(true);
      
      setTimeout(() => {
        setIsExpanded(false);
        setStep('form');
      }, 4000);
    } catch (error) {
      console.error("Submission failed", error);
      setStep('form');
    }
  };

  const MascotSVG = () => (
    <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
      {/* Black Robo Body */}
      <circle cx="65" cy="42" r="38" fill="#0F172A" />
      <circle cx="65" cy="42" r="38" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="3 3" />
      
      {/* Glowing Interaction Face */}
      <rect x="45" y="32" width="40" height="20" rx="10" fill="#1E293B" stroke="#3B82F6" strokeWidth="1" />
      
      {/* Glowing Eyes */}
      <motion.circle 
        cx="58" cy="42" r="3.5" fill="#60A5FA" 
        animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }} 
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.circle 
        cx="72" cy="42" r="3.5" fill="#60A5FA" 
        animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }} 
        transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
      />
      
      {/* Mechanical Hand "holding" the edge */}
      <rect x="0" y="32" width="20" height="25" rx="10" fill="#0F172A" />
      <rect x="0" y="32" width="20" height="25" rx="10" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.5" />
      <rect x="8" y="38" width="8" height="2" rx="1" fill="#3B82F6" />
      
      {/* Ambient Blue Glow */}
      <circle cx="65" cy="42" r="28" fill="#3B82F6" fillOpacity="0.08" />
    </svg>
  );

  return (
    <div ref={containerRef} className="fixed bottom-10 right-0 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-[100] flex items-center h-0 w-0 justify-end">
      {/* Backdrop for expanded state on mobile */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] md:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isExpanded ? (
          /* PEERING STATE */
          <div className="relative flex items-center">
            {/* Speech Bubble */}
            <AnimatePresence>
              {showBubble && !hasSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: -25 }}
                  exit={{ opacity: 0, scale: 0.8, x: 20 }}
                  onClick={() => setIsExpanded(true)}
                  className="absolute right-full mr-2 bg-[#0F172A] px-5 py-3 rounded-2xl shadow-2xl border border-primary/30 cursor-pointer hover:scale-105 active:scale-95 transition-transform whitespace-nowrap z-50 group"
                >
                  <p className="text-[10px] md:text-xs font-black text-white group-hover:text-primary transition-colors" style={{ fontFamily: "'Orbitron', sans-serif" }}>{bubbleText}</p>
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0F172A] rotate-45 border-r border-t border-primary/30" />
                  
                  {/* Subtle pulsing ring around bubble */}
                  <div className="absolute inset-0 rounded-2xl border border-primary/20 animate-ping pointer-events-none" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* The Mascot */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ 
                x: isPeeking ? '35%' : '100%',
                y: [0, -4, 0],
              }}
              transition={{
                x: { type: 'spring', stiffness: 100, damping: 20 },
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
              }}
              onClick={() => setIsExpanded(true)}
              className="cursor-pointer select-none group relative pr-4 md:pr-0"
            >
              <MascotSVG />
              {hasSubmitted && isPeeking && (
                <div className="absolute top-0 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center translate-x-1 -translate-y-1">
                  <span className="material-symbols-outlined text-[10px] text-white font-bold">check</span>
                </div>
              )}
            </motion.div>
          </div>
        ) : (
          /* EXPANDED MODAL (Mobile Center / Desktop Side) */
          <div className="fixed md:absolute inset-0 md:inset-auto md:right-0 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center md:block z-[101] px-4 md:px-0">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, x: 20 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0, x: 20 }}
              className="relative w-full max-w-[340px] md:w-[380px] md:mr-12 p-6 md:p-10 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] bg-white/98 backdrop-blur-3xl border border-white/40 z-[101]"
            >
              <button 
                onClick={() => setIsExpanded(false)}
                className="absolute top-5 right-5 md:top-8 md:right-8 w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-black/5 transition-all flex items-center justify-center opacity-40 hover:opacity-100 group"
              >
                <span className="material-symbols-outlined text-lg md:text-xl group-hover:rotate-90 transition-transform text-slate-800">close</span>
              </button>

              {step === 'form' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-[#0F172A] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-primary/10">
                      <span className="material-symbols-outlined text-primary text-xl md:text-3xl animate-pulse">psychology</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-black tracking-tight text-slate-900" style={{ fontFamily: "'Orbitron', sans-serif" }}>Get Ahead !</h3>
                      <p className="text-primary text-[8px] md:text-[10px] font-black uppercase tracking-widest mt-1 opacity-60">Tensor Nova</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs md:text-sm mb-6 md:mb-10 font-bold opacity-80 leading-relaxed italic">
                    something special here! enter details to unveil the mystery
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                    <div className="space-y-1.5 md:space-y-2">
                      <label className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Identity Name</label>
                      <div className="relative group">
                        <span className="material-symbols-outlined absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-primary opacity-40 text-lg md:text-xl group-focus-within:opacity-100 transition-opacity">person</span>
                        <input
                          required
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-xl md:rounded-2xl pl-12 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 text-xs md:text-sm font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary/20 focus:bg-white focus:shadow-xl transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1.5 md:space-y-2">
                      <label className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Neural Email</label>
                      <div className="relative group">
                        <span className="material-symbols-outlined absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-primary opacity-40 text-lg md:text-xl group-focus-within:opacity-100 transition-opacity">alternate_email</span>
                        <input
                          required
                          type="email"
                          placeholder="you@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-xl md:rounded-2xl pl-12 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 text-xs md:text-sm font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary/20 focus:bg-white focus:shadow-xl transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-6">
                      <SparkleButton text="UNVEIL NOW" />
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 'loading' && (
                <div className="py-16 md:py-24 flex flex-col items-center justify-center text-center text-slate-900">
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                      className="w-16 h-16 md:w-20 md:h-20 border-[3px] border-primary/10 border-t-primary rounded-full mb-6 md:mb-8"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary animate-pulse text-lg md:text-xl">auto_awesome</span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg font-black tracking-tight italic">Cooking something special...</p>
                </div>
              )}

              {step === 'success' && (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-16 md:py-24 flex flex-col items-center justify-center text-center text-slate-900 px-4"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 md:mb-8 relative">
                     <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"
                     />
                    <span className="material-symbols-outlined text-green-500 text-4xl md:text-5xl relative z-10">done_all</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-2 uppercase tracking-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>On the way</h3>
                  <p className="text-slate-500 text-sm font-medium opacity-70 leading-relaxed">
                    You continue exploring Tensor 26
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
