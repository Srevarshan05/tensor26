import React, { useState, useEffect, useMemo } from 'react';

// --- Pure SVG Icons ---
const IconTerminal = ({ size, color }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>;
const IconCode = ({ size, color }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconBug = ({ size, color }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>;
const IconSliders = ({ size, color }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>;
const IconRocket = ({ size, color }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35(0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;

const PremiumF1Car = () => (
  <svg width="100" height="50" viewBox="0 0 130 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_15px_10px_rgba(0,0,0,0.5)]">
    <defs>
      <linearGradient id="f1Body" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#b91c1c" />
        <stop offset="20%" stopColor="#ff2a2a" />
        <stop offset="50%" stopColor="#ff4b4b" />
        <stop offset="80%" stopColor="#dc2626" />
        <stop offset="100%" stopColor="#7f1d1d" />
      </linearGradient>
      <linearGradient id="f1Shadow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(0,0,0,0.7)" />
        <stop offset="20%" stopColor="rgba(0,0,0,0)" />
        <stop offset="80%" stopColor="rgba(0,0,0,0)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0.7)" />
      </linearGradient>
      <filter id="f1Glow"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <path d="M 20 18 L 90 18 L 95 24 L 95 36 L 90 42 L 20 42 Z" fill="#171717" stroke="#3f3f46" strokeWidth="0.5"/>
    <line x1="80" y1="28" x2="95" y2="12" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
    <line x1="80" y1="32" x2="95" y2="48" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
    <line x1="30" y1="28" x2="16" y2="10" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
    <line x1="30" y1="32" x2="16" y2="50" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
    <rect x="90" y="8" width="14" height="7" rx="2" fill="#09090b" stroke="#27272a" strokeWidth="1"/>
    <rect x="90" y="45" width="14" height="7" rx="2" fill="#09090b" stroke="#27272a" strokeWidth="1"/>
    <rect x="10" y="5" width="16" height="9" rx="2" fill="#09090b" stroke="#27272a" strokeWidth="1"/>
    <rect x="10" y="46" width="16" height="9" rx="2" fill="#09090b" stroke="#27272a" strokeWidth="1"/>
    <path d="M 30 15 L 65 15 C 75 15, 80 20, 80 25 L 80 35 C 80 40, 75 45, 65 45 L 30 45 Z" fill="url(#f1Body)"/>
    <path d="M 30 15 L 65 15 C 75 15, 80 20, 80 25 L 80 35 C 80 40, 75 45, 65 45 L 30 45 Z" fill="url(#f1Shadow)"/>
    <path d="M 60 25 L 110 27 L 110 33 L 60 35 Z" fill="url(#f1Body)"/>
    <path d="M 60 25 L 110 27 L 110 33 L 60 35 Z" fill="url(#f1Shadow)"/>
    <path d="M 105 10 L 120 14 L 120 46 L 105 50 Z" fill="#171717"/>
    <path d="M 108 12 L 118 15 L 118 45 L 108 48 Z" fill="url(#f1Body)"/>
    <rect x="118" y="10" width="3" height="40" fill="#facc15" rx="1"/>
    <path d="M 15 26 L 40 26 L 40 34 L 15 34 Z" fill="url(#f1Body)"/>
    <path d="M 15 26 L 40 26 L 40 34 L 15 34 Z" fill="url(#f1Shadow)"/>
    <path d="M 4 12 L 14 12 L 14 48 L 4 48 Z" fill="#171717"/>
    <path d="M 6 14 L 12 14 L 12 46 L 6 46 Z" fill="url(#f1Body)"/>
    <rect x="4" y="10" width="10" height="2" fill="#facc15"/>
    <rect x="4" y="48" width="10" height="2" fill="#facc15"/>
    <rect x="45" y="24" width="18" height="12" rx="4" fill="#000000"/>
    <circle cx="52" cy="30" r="4" fill="#facc15" />
    <path d="M 48 24 C 58 24, 62 28, 62 30 C 62 32, 58 36, 48 36" stroke="#e2e8f0" strokeWidth="1.5" fill="none"/>
    <path d="M 16 29 L 110 29.5 L 110 30.5 L 16 31 Z" fill="rgba(255,255,255,0.4)"/>
    <circle cx="4" cy="30" r="2" fill="#ef4444" filter="url(#f1Glow)"/>
  </svg>
);

const stepsData = [
  { id: 1, step: "01", title: "Prompt Engineering", description: "Defining high-fidelity instructions to guide the AI core.", icon: IconTerminal, color: "#5227FF" },
  { id: 2, step: "02", title: "Development", description: "Autonomous generation of modular architectures and logic.", icon: IconCode, color: "#4f46e5" },
  { id: 3, step: "03", title: "Debugging", description: "Collaborative agent testing to identify edge-case failures.", icon: IconBug, color: "#7c3aed" },
  { id: 4, step: "04", title: "Fine-Tuning", description: "Optimizing output parameters for precision and speed.", icon: IconSliders, color: "#9333ea" },
  { id: 5, step: "05", title: "Deployment", description: "Shipping live production instances to the cloud.", icon: IconRocket, color: "#c026d3" }
];

const Roadmap = () => {
  const [currentPhase, setCurrentPhase] = useState(0); 
  const [targetPhase, setTargetPhase] = useState(0);
  const [isReversing, setIsReversing] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width > 0 && windowSize.width < 1024;

  // --- Dynamic Layout Math ---
  const canvasWidth = isMobile ? Math.min(windowSize.width - 20, 420) : 1400;
  const canvasHeight = isMobile ? 1500 : 900; 
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2 + (isMobile ? 0 : 50); 
  const amplitude = isMobile ? 40 : 140; // Reduced amplitude for mobile to prevent clipping
  
  const totalVerticalPath = canvasHeight - 300; // Usable vertical space
  const segmentLength = (isMobile ? totalVerticalPath : canvasWidth) / stepsData.length;
  const halfSegment = segmentLength / 2;

  const handlePhaseClick = (index) => {
    if (index === targetPhase || isSpinning) return;
    setTargetPhase(index);
    if (index < currentPhase && !isReversing) {
      setIsSpinning(true);
      setIsReversing(true);
      setTimeout(() => setIsSpinning(false), 550); 
    } else if (index > currentPhase && isReversing) {
      setIsSpinning(true);
      setIsReversing(false);
      setTimeout(() => setIsSpinning(false), 550);
    }
  };

  useEffect(() => {
    if (currentPhase !== targetPhase && !isSpinning) {
      const driveTimer = setTimeout(() => {
        setCurrentPhase(prev => prev < targetPhase ? prev + 1 : prev - 1);
      }, 750);
      return () => clearTimeout(driveTimer);
    }
  }, [currentPhase, targetPhase, isSpinning]);

  const { visualPath, motionPath } = useMemo(() => {
    let vp = "";
    let mp = "";

    if (isMobile) {
        // --- Vertical Smooth Path (Mobile) ---
        vp = `M ${centerX} 100 `;
        for (let i = 0; i < stepsData.length; i++) {
            const peakY = (i * segmentLength) + halfSegment + 100;
            const isLeft = i % 2 === 0;
            const peakX = isLeft ? centerX - amplitude : centerX + amplitude;
            const pPeakY = i === 0 ? 100 : ((i - 1) * segmentLength) + halfSegment + 100;
            const pPeakX = i === 0 ? centerX : (i-1)%2===0 ? centerX - amplitude : centerX + amplitude;

            const cpY1 = pPeakY + (peakY - pPeakY) * 0.5;
            const cpY2 = pPeakY + (peakY - pPeakY) * 0.5;
            vp += `C ${pPeakX} ${cpY1}, ${peakX} ${cpY2}, ${peakX} ${peakY} `;
            if (i === 0) mp = `M ${peakX} ${peakY} `;
            else mp += `C ${pPeakX} ${cpY1}, ${peakX} ${cpY2}, ${peakX} ${peakY} `;
        }
    } else {
        // --- Horizontal Smooth Path (PC) ---
        vp = `M 0 ${centerY} `;
        for (let i = 0; i < stepsData.length; i++) {
            const peakX = (i * segmentLength) + halfSegment;
            const isTop = i % 2 === 0;
            const peakY = isTop ? centerY - amplitude : centerY + amplitude;
            const pPeakX = i === 0 ? 0 : ((i - 1) * segmentLength) + halfSegment;
            const pPeakY = i === 0 ? centerY : (i-1)%2===0 ? centerY - amplitude : centerY + amplitude;

            const cpX1 = pPeakX + (peakX - pPeakX) * 0.5;
            const cpX2 = pPeakX + (peakX - pPeakX) * 0.5;
            vp += `C ${cpX1} ${pPeakY}, ${cpX2} ${peakY}, ${peakX} ${peakY} `;
            if (i === 0) mp = `M ${peakX} ${peakY} `;
            else mp += `C ${cpX1} ${pPeakY}, ${cpX2} ${peakY}, ${peakX} ${peakY} `;
        }
        vp += `C ${canvasWidth - 100} ${centerY}, ${canvasWidth} ${centerY}, ${canvasWidth} ${centerY}`;
    }
    
    return { visualPath: vp, motionPath: mp };
  }, [isMobile, centerX, centerY, amplitude, segmentLength, halfSegment, canvasWidth]);

  return (
    <div className="w-full bg-transparent font-sans pt-36 pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-12 text-center relative z-50">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-on-surface tracking-tight mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          Hackathon <span className="text-primary">Journey</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          The TENSOR’26 workflow is an AI-first development Hackathon. Select a checkpoint to navigate.
        </p>
      </div>

      <div className="w-full overflow-x-auto lg:overflow-x-hidden overflow-y-visible hide-scrollbar cursor-grab active:cursor-grabbing pb-24">
        <div className="relative mx-auto px-12" style={{ width: `${canvasWidth + 100}px`, height: `${canvasHeight}px` }}>
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox={`0 0 ${canvasWidth + 100} ${canvasHeight}`}>
            <defs>
              <filter id="blackGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g transform={`translate(${isMobile ? 0 : 50}, 0)`}>
              {/* Soft black outer glow */}
              <path d={visualPath} fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="18" strokeLinecap="round" />
              {/* Main glowing black line */}
              <path d={visualPath} fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" filter="url(#blackGlow)" />
              {/* Bright center highlight */}
              <path d={visualPath} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" strokeLinecap="round" />
            </g>
          </svg>

          {/* --- THE CAR (Rendered before cards to be behind them) --- */}
          <div 
            className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center pointer-events-none z-10"
            style={{ 
              offsetPath: `path('${motionPath}')`,
              WebkitOffsetPath: `path('${motionPath}')`,
              offsetDistance: `${currentPhase * 25}%`,
              offsetRotate: '0deg',
              transition: 'offset-distance 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
              marginLeft: isMobile ? '0' : '50px'
            }}
          >
            <div 
              className="transition-transform duration-[500ms] ease-in-out"
              style={{
                transform: isMobile
                  ? `rotate(${isReversing ? 270 : 90}deg)`
                  : `rotate(${isReversing ? 180 : 0}deg)`
              }}
            >
              <PremiumF1Car />
            </div>
          </div>

          {/* --- THE PHASES & CARDS --- */}
          {stepsData.map((data, i) => {
            const isTop = i % 2 === 0;
            const isLeft = i % 2 === 0;
            
            let x, y;
            if (isMobile) {
                x = isLeft ? centerX - amplitude : centerX + amplitude;
                y = (i * segmentLength) + halfSegment + 100;
            } else {
                x = (i * segmentLength) + halfSegment + 50;
                y = isTop ? centerY - amplitude : centerY + amplitude;
            }

            const isCarHere = currentPhase === i; 
            const isTarget = targetPhase === i;

            return (
              <div 
                key={data.id} 
                className="absolute z-20 flex flex-col items-center"
                style={{ left: `${x}px`, top: `${y}px`, transform: 'translate(-50%, -50%)' }}
              >
                <div 
                  className={`absolute transition-all duration-[600ms] ease-out ${
                    isMobile 
                        ? 'left-1/2 -translate-x-1/2 -translate-y-[calc(50%+100px)]' 
                        : (isTop ? 'bottom-[140px]' : 'top-[140px]')
                  } ${
                    isCarHere 
                      ? 'opacity-100 scale-100 visible z-[100] drop-shadow-[0_25px_30px_rgba(0,0,0,0.1)]' 
                      : `opacity-0 scale-75 pointer-events-none invisible z-0 ${isMobile ? '-translate-y-8' : (isTop ? 'translate-y-16' : '-translate-y-16')}`
                  }`}
                  style={{ width: 'min(85vw, 320px)' }}
                >
                  <div className="glass-morphism bg-white/60 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-white/60 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    <div className="text-6xl sm:text-8xl font-black text-primary/5 absolute -top-4 -right-4 z-0 select-none">{data.step}</div>
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center shadow-lg border border-white/40" style={{ backgroundColor: data.color }}>
                        <data.icon size={isMobile ? 24 : 32} color="#ffffff" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-on-surface mb-2 sm:mb-4 tracking-tight">{data.title}</h3>
                      <p className="text-slate-900 text-[13px] sm:text-base leading-relaxed font-black opacity-100">{data.description}</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handlePhaseClick(i)}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[6px] sm:border-[10px] border-white shadow-2xl flex items-center justify-center transition-all duration-500 z-10 focus:outline-none ${
                    isCarHere ? 'scale-0 opacity-0' : 'scale-100 opacity-100 hover:scale-110 hover:shadow-primary/30 cursor-pointer bg-slate-50'
                  }`}
                >
                  <div 
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full transition-all duration-500 flex items-center justify-center ${isTarget ? 'animate-pulse' : ''}`} 
                    style={{ 
                      backgroundColor: data.color,
                      boxShadow: isTarget ? `0 0 20px ${data.color}88, 0 0 40px ${data.color}44` : 'none'
                    }}
                  >
                     <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full shadow-inner" />
                  </div>
                </button>
              </div>
            );
          })}

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; } 
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes subtleGlow {
          0% { filter: drop-shadow(0 0 5px rgba(82, 39, 255, 0.4)); }
          50% { filter: drop-shadow(0 0 15px rgba(82, 39, 255, 0.7)); }
          100% { filter: drop-shadow(0 0 5px rgba(82, 39, 255, 0.4)); }
        }
        
        .phase-glow {
          animation: subtleGlow 2s infinite ease-in-out;
        }
      `}} />
    </div>
  );
};

export default Roadmap;
