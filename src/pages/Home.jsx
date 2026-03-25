import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedButton from '../components/AnimatedButton';
import Card from '../components/Card';
import DotGridBackground from '../components/background/DotGridBackground';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

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

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="absolute inset-0 -z-10 bg-surface">
          <DotGridBackground 
            dotSize={4}
            gap={18}
            baseColor="#dad5e1"
            activeColor="#5227FF"
            proximity={120}
            speedTrigger={100}
            shockRadius={250}
            shockStrength={5}
            maxSpeed={5000}
            resistance={750}
            returnDuration={1.5}
            opacity={0.4}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto z-10"
        >
          <div className="mb-8 flex justify-center">
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-24 h-24 bg-white rounded-2xl shadow-xl shadow-primary/5 flex items-center justify-center relative overflow-hidden group p-4 border border-outline-variant/10"
            >
              <img src={logo} alt="TENSOR'26 Logo" className="w-full h-full object-contain" />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-on-background mb-4">
            TENSOR’26
          </h1>
          <p className="text-xl md:text-2xl font-medium text-primary mb-2 tracking-tight">
            AI-Curated Software Development
          </p>
          <p className="text-lg md:text-xl text-on-surface-variant uppercase tracking-[0.2em] mb-12">
            24-Hour National Level Hackathon
          </p>

          <div className="flex flex-col items-center space-y-8">
            <AnimatedButton href="https://unstop.com/hackathons/tensor26-srm-insitute-of-science-and-technology-1661516">
              Register Now
            </AnimatedButton>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-on-surface font-semibold tracking-tight">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary">calendar_today</span>
                <span>April 16–17</span>
              </div>
              <span className="hidden md:block text-outline-variant">|</span>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>SRM IST Tiruchirappalli</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
        >
          <span className="text-xs uppercase tracking-widest text-on-surface-variant">Explore the Experience</span>
          <span className="material-symbols-outlined animate-bounce">keyboard_double_arrow_down</span>
        </motion.div>
      </section>

      {/* Quick Info Grid */}
      <SectionWrapper className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickInfo.map((info, i) => (
              <Card key={i} className="p-8">
                <span className="material-symbols-outlined text-primary mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {info.icon}
                </span>
                <p className="text-sm uppercase tracking-wider text-on-surface-variant mb-1">{info.label}</p>
                <h3 className="text-xl font-bold text-on-surface">{info.value}</h3>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* About Preview */}
      <SectionWrapper className="py-32 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container rounded-full text-xs font-bold tracking-widest uppercase mb-8">
            The Mission
          </span>
          <p className="text-2xl md:text-3xl font-body leading-relaxed text-on-background tracking-tight">
            TENSOR’26 is a 24-hour national-level hackathon where ideas evolve into real-world AI solutions through structured development.
          </p>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {partners.map((partner, i) => (
              <motion.img 
                key={i}
                whileHover={{ scale: 1.05 }}
                src={partner.src} 
                alt={partner.name} 
                className="max-h-12 w-auto mx-auto object-contain"
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
