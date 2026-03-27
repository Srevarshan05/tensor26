import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-2 md:gap-6 mb-12">
      {timerItems.map((item, index) => (
        <div key={item.label} className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card-premium w-[4.6rem] h-[4.6rem] md:w-24 md:h-24 flex items-center justify-center border border-white/40 shadow-xl overflow-hidden relative group"
          >
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none" />
            
            <AnimatePresence mode="popLayout">
              <motion.span
                key={item.value}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="text-3xl md:text-5xl font-black tracking-tighter text-on-background relative z-10"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {formatNumber(item.value)}
              </motion.span>
            </AnimatePresence>

            {/* Micro-sparkle on change */}
            <motion.div 
              key={`sparkle-${item.value}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 0], opacity: [0, 0.4, 0] }}
              className="absolute inset-0 bg-primary/20 blur-xl pointer-events-none"
            />
          </motion.div>
          
          <span className="text-[8px] md:text-xs font-black uppercase tracking-[0.2em] mt-3 opacity-40 text-on-surface-variant">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
