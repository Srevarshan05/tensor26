import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedButton from '../components/AnimatedButton';
import Card from '../components/Card';
import MagicButton from '../components/MagicButton';
import ShapeGrid from '../components/background/ShapeGrid';
import { useNavigate } from 'react-router-dom';
import GradientText from '../components/GradientText';
import TextType from '../components/TextType';
import CountdownTimer from '../components/CountdownTimer';
import tensorVideo from '../assets/tensor_video.mp4';
import srmLogo from '../assets/srm_trichy.svg';
import ieeeLogo from '../assets/ieee_logo.png';

const quickInfo = [
  { icon: 'event', label: 'Date', value: 'April 16–17' },
  { icon: 'workspace_premium', label: 'Prize Pool', value: '₹56,000' },
  { icon: 'groups', label: 'Team Size', value: 'Max 4 Members' },
  { icon: 'map', label: 'Venue', value: 'SRM IST Trichy' },
];

const organizers = [
  { name: 'SRM Tiruchirappalli', src: srmLogo },
  { name: 'IEEE Student Branch Trichy', src: ieeeLogo },
];

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    // Start muted to ensure video successfully plays visually, let user toggle sound
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
      videoRef.current.muted = true;
      if (videoRef.current.paused && videoRef.current.readyState >= 2) {
        videoRef.current.play().catch(e => console.error("Playback failed", e));
      }
    }

    // Sync state to the Navbar
    window.dispatchEvent(new CustomEvent('update-mute-icon', { detail: true }));

    // Listen to external remote control from Navbar
    const externalToggle = () => toggleSound();
    window.addEventListener('toggle-mute-button', externalToggle);

    // Aggressive Auto-Unlock: Unmute on very first subtle interaction (scroll/click/key)
    let hasUnlocked = false;
    const unlockAudio = () => {
      if (hasUnlocked || !videoRef.current) return;
      hasUnlocked = true;
      videoRef.current.muted = false;
      setIsMuted(false);
      window.dispatchEvent(new CustomEvent('update-mute-icon', { detail: false }));
      if (videoRef.current.paused && videoRef.current.readyState >= 2) {
        videoRef.current.play().catch(e => console.warn("Waiting for strict trusted interaction"));
      }
    };

    const interactEvents = ['pointerdown', 'keydown', 'touchstart', 'click'];
    interactEvents.forEach(evt => document.addEventListener(evt, unlockAudio, { once: true }));

    return () => {
      window.removeEventListener('toggle-mute-button', externalToggle);
      interactEvents.forEach(evt => document.removeEventListener(evt, unlockAudio));
    };
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      window.dispatchEvent(new CustomEvent('update-mute-icon', { detail: nextMuted }));
      if (!nextMuted && videoRef.current.paused && videoRef.current.readyState >= 2) {
         videoRef.current.play().catch(e => console.error("Play failed", e));
      }
    }
  };
  return (
    <main className="min-h-screen">
      {/* ─── Section 1: Cinematic Video Hero ─── */}
      <section className="h-screen w-full relative overflow-hidden bg-black flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="absolute inset-0 w-full h-full object-cover translate-z-0 pointer-events-none"
          style={{ 
            willChange: 'transform, opacity',
            transform: 'translate3d(0,0,0)',
            backfaceVisibility: 'hidden'
          }}
        >
          <source src={tensorVideo} type="video/mp4" />
        </video>

        {/* Ensure the bottom of the hero is deep black for the smudge to start from */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 50%, transparent 100%)`
          }}
        />
      </section>

      {/* ─── Section 2: Massive ShapeGrid Experience ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-[45vh] md:pt-[60vh] pb-32 overflow-hidden bg-[#fdfdfd] mt-[-1px]">
        {/* ShapeGrid - Background grid layer */}
        <div className="absolute inset-0 z-0">
          <ShapeGrid
            speed={0.7}
            squareSize={50}
            direction="diagonal"
            borderColor="#bfc4c0"
            hoverFillColor="#241334"
            shape="square"
            hoverTrailAmount={20}
          />
        </div>

        {/* Top smudge - Silk-smooth Black Hero smudging INTO the grid page professionally */}
        <div className="absolute top-[-2px] left-0 w-full h-[60vh] z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.6) 60%, transparent 100%)`
          }}
        />

        {/* Branding Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-4xl mx-auto relative z-20 px-2"
        >
          {/* Hackathon Timer April 16th April morning 9:00 */}
          <CountdownTimer targetDate="2026-04-16T09:00:00+05:30" />

          <h1
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight sm:tracking-[0.05em] text-on-background mb-8"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <TextType
              as="span"
              text="TENSOR'26"
              typingSpeed={140}
              pauseDuration={3000}
              showCursor={false}
              loop={true}
              className="inline-block outline-none"
            />
          </h1>
          <GradientText
            colors={['#5227FF', '#9ee2ff', '#5227FF']}
            animationSpeed={6}
            showBorder={false}
            className="text-2xl md:text-3xl font-black mb-2 tracking-tight"
          >
            AI-Curated Software Development
          </GradientText>
          <p className="text-lg md:text-xl text-on-surface-variant uppercase tracking-[0.2em] mb-12">
            24-Hour National Level Hackathon
          </p>

          <div className="flex flex-col items-center space-y-8">
            <MagicButton
              color="#1A1A1A"
              href="https://unstop.com/hackathons/tensor26-srm-insitute-of-science-and-technology-1661516"
            />
            <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
              <div className="glass-morphism px-8 py-4 rounded-2xl flex items-center space-x-3 shadow-xl border border-black/5 group hover:scale-105 transition-transform duration-500">
                <span className="material-symbols-outlined text-primary text-2xl group-hover:rotate-12 transition-transform">calendar_today</span>
                <span className="text-xl md:text-2xl font-black text-on-surface tracking-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>April 16–17</span>
              </div>

              <div className="glass-morphism px-8 py-4 rounded-2xl flex items-center space-x-3 shadow-xl border border-black/5 group hover:scale-105 transition-transform duration-500">
                <span className="material-symbols-outlined text-primary text-2xl group-hover:bounce transition-transform">location_on</span>
                <span className="text-xl md:text-2xl font-black text-on-surface tracking-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>SRM IST Trichy</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Integrated Info Cards ─── */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4 mt-20 md:mt-32 relative z-20">
          {quickInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="h-full"
            >
              <Card className="p-6 md:p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center h-full bg-white/95 md:bg-white/60 md:backdrop-blur-md">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-5 md:mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {info.icon}
                  </span>
                </div>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-3 font-black opacity-40">{info.label}</p>
                <h3 className="text-base md:text-xl font-black text-on-surface leading-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>{info.value}</h3>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ─── Organized By Section ─── */}
        <div className="relative z-20 py-24 border-t border-slate-100/50 w-full mt-32">
          <div className="max-w-6xl mx-auto text-center px-6">
            <p className="text-xl uppercase tracking-[0.4em] font-black text-slate-800 mb-20 opacity-100" style={{ fontFamily: "'Orbitron', sans-serif" }}>ORGANIZED BY</p>
            <div className="flex flex-wrap justify-center items-center gap-16">
              {organizers.map((org, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -15, scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
                  className="glass-morphism px-8 py-6 md:px-16 md:py-12 rounded-[25px] md:rounded-[40px] shadow-sm transition-all duration-500"
                >
                  <img
                    src={org.src}
                    alt={org.name}
                    className="h-20 md:h-40 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom smudge smudge into footer */}
        <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #e8e8e8 0%, transparent 100%)' }}
        />
      </section>
    </main>
  );
}
