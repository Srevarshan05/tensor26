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
  const navigate = useNavigate();
  const videoRef = useRef(null);
  useEffect(() => {
    // Attempt to play with sound on first interaction
    const handleFirstClick = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 0.5;
        videoRef.current.play().catch(e => console.log("Audio play blocked", e));
      }
      document.removeEventListener('click', handleFirstClick);
    };
    document.addEventListener('click', handleFirstClick);
    return () => document.removeEventListener('click', handleFirstClick);
  }, []);

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
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src={tensorVideo} type="video/mp4" />
        </video>

        {/* Ensure the bottom of the hero is deep black for the smudge to start from */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      </section>

      {/* ─── Section 2: Massive ShapeGrid Experience ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-[60vh] pb-32 overflow-hidden bg-[#fdfdfd]">
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
        <div className="absolute top-0 left-0 w-full h-[60vh] z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.3) 55%, rgba(0,1,0,0.1) 80%, transparent 100%)' }}
        />

        {/* ─── Branding Block ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto relative z-20"
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[0.05em] text-on-background mb-8"
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
            <div className="flex flex-wrap justify-center items-center gap-6 text-on-surface font-semibold tracking-tight">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary">calendar_today</span>
                <span>April 16–17</span>
              </div>
              <div className="w-px h-4 bg-slate-300 hidden md:block" />
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>SRM IST Tiruchirappalli</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Integrated Info Cards ─── */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-32 relative z-20">
          {quickInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card className="p-8 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <span className="material-symbols-outlined text-primary mb-4 block text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {info.icon}
                </span>
                <p className="text-sm uppercase tracking-wider text-on-surface-variant mb-1 font-black opacity-60">{info.label}</p>
                <h3 className="text-xl font-black text-on-surface" style={{ fontFamily: "'Orbitron', sans-serif" }}>{info.value}</h3>
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
                        className="glass-morphism px-16 py-12 rounded-[40px] shadow-sm transition-all duration-500"
                    >
                        <img
                            src={org.src}
                            alt={org.name}
                            className="h-32 md:h-40 w-auto object-contain"
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
