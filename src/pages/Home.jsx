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

const quickInfo = [
  { icon: 'event', label: 'Date', value: 'April 16–17' },
  { icon: 'workspace_premium', label: 'Prize Pool', value: '₹56,000' },
  { icon: 'groups', label: 'Team Size', value: 'Max 4 Members' },
  { icon: 'map', label: 'Venue', value: 'SRM IST Trichy' },
];

const partners = [
  { name: 'IEEE Logo', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2mKDfv4DkPsg4nh0weDupqA0t8oenC3diYJSi-VvqRUFDoJ6ws54ZVJ-37SeJDzQSUL5n1uVPjYcJ1GYiD8LWkH7jhi7w4h-LaYa1haQNyBdsDMlg_Sp1t-Lz1w93gD-sjaWhChIV82dGnODWuNXBe5Z_mCM_ZxdTtrzeR6UD_aoELh_FHo8L9BOb1TfB5_cYiORB4zlVOJMlQ5xo4waHbY1_PB_wZ6feI3MoSdlflqoAF9t1_lVGZqqeQc5M0rGTC-nefy4iqgQ' },
  { name: 'SRM Logo', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEYtruQmack6gBAKm5QVsHKWBb2UikY364ovtITXwn1azzQR1yDkndXWXEh7hF3Q8CZaqmot-W7--yYS0Tfmtl3U6n-UUqDVRNPEyvENYPprVxu6al3LSpIu8AQpiIzz6gYPkEwFHwXjCVxV9ooaohxH7sSGozpjjLeYblfvFrftwMZTGHK4ffB_9KqYrCnVC7oQ8SKVQKV2NiUuDhYB9ZYC7avrXoFO2q1MQvPSW14wHB7X0sSn8JRLFN-EN1oYrcIZVWGC7MhCY' },
  { name: 'Tech Partner', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBS25SXpnRxZvGdGUGFQYwpVk9b5oLNMxCNtKw665GUTN_ZLGHUrhX3PMtZBMv50nz8k7kmanPZRQh5zWansAGGf7OCuSd7gmvqzbinmlMGTEBEyTL6SEI45rQ_aEroWohwT_L3nIbbAFnUQolCgOa28lZP0eUz1MDtEM1iHBcQTCUPv4w6_VDErDJgxXC7wwQPzh3dl8EVDx9-aAYxSwBvWtOcGpCP7mpvodbbY_f3FoQNt5_KUAw407YOz1tx18SWJB4mQp31u8' },
  { name: 'Cloud Partner', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlabEpQ5kHgin7LDF0HVif0URW8fZk2uCcaokc6mvL3JiYx40qzHzU9X5dtpcbzvQXKSjuFmb8VfRh9c1C-wVv1QOmQrvKFV2lvgbUDKdTmLLJaiW0bWx_Q1osv6Ukqwzx43XL4AQfyeJetGmFqlVfhww-ZKdYgyK-CTJ1hDDO1cqFNhJCbTox4yzu81nT_nLc0kNhBC1ZKFWk3g1mFn3y5AKo0Z88fx8dot8efWYPs3wLVYiSKKFgC6eBI_adbJk8yho0ggfc7pI' },
];

export default function Home() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  // Set medium volume when unmuted
  const toggleMute = () => {
    if (videoRef.current) {
      const next = !muted;
      videoRef.current.muted = next;
      videoRef.current.volume = 0.5;
      if (!next) videoRef.current.play();
      setMuted(next);
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
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src={tensorVideo} type="video/mp4" />
        </video>

        {/* Mute / Unmute button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-30 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full hover:bg-white/20 transition"
        >
          <span className="material-symbols-outlined text-base">
            {muted ? 'volume_off' : 'volume_up'}
          </span>
          {muted ? 'Unmute' : 'Mute'}
        </button>

        {/* Tall smooth fade into Section 2 — black→white smudge */}
        <div className="absolute bottom-0 left-0 w-full h-64 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.7) 40%, transparent 100%)' }}
        />
      </section>

      {/* ─── Section 2: Core Branding Section ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-32 overflow-hidden">
        {/* ShapeGrid canvas background */}
        <div className="absolute inset-0 z-0">
          <ShapeGrid
            speed={0.5}
            squareSize={60}
            direction="diagonal"
            borderColor="#bfc4c0"
            hoverFillColor="#241334"
            shape="square"
            hoverTrailAmount={0}
          />
        </div>

        {/* Top smudge blending from video section */}
        <div className="absolute top-0 left-0 w-full h-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #ffffff 0%, transparent 100%)' }}
        />

        {/* Bottom smudge into Info Grid */}
        <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #f8f9ff 0%, transparent 100%)' }}
        />

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
              text="TENSOR'26"
              typingSpeed={120}
              showCursor={false}
              loop={false}
              className="inline-block"
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
      </section>

      {/* ─── Info Grid Section ─── */}
      <SectionWrapper
        className="py-24 border-y border-slate-100 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #faf8ff 35%, #ffffff 55%, #faf5ff 75%, #f5f8ff 100%)' }}
      >
        {/* Top smudge */}
        <div className="absolute top-0 left-0 w-full h-20 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #f8f9ff 0%, transparent 100%)' }}
        />
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-400/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 relative z-10">
          {quickInfo.map((info, i) => (
            <Card key={i} className="p-8 border border-primary/5 bg-white/80 backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary mb-4 block text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                {info.icon}
              </span>
              <p className="text-sm uppercase tracking-wider text-on-surface-variant mb-1">{info.label}</p>
              <h3 className="text-xl font-bold text-on-surface">{info.value}</h3>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── Partners Section ─── */}
      <SectionWrapper
        className="py-32 border-t border-slate-100 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #faf8ff 35%, #ffffff 55%, #faf5ff 75%, #f5f8ff 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-400/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
        <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
          <p className="text-[10px] uppercase tracking-[0.6em] font-black text-on-surface-variant/40 mb-16">Trusted Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-40 hover:grayscale-0 transition-all duration-700">
            {partners.map((partner, i) => (
              <motion.img
                key={i}
                src={partner.src}
                alt={partner.name}
                whileHover={{ scale: 1.15 }}
                className="h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
        {/* Bottom smudge smudge into footer */}
        <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)' }}
        />
      </SectionWrapper>
    </main>
  );
}
