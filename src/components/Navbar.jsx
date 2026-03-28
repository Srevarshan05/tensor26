import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/',       label: 'Home'   },
  { to: '/about',  label: 'About'  },
  { to: '/event',  label: 'Event'  },
  { to: '/prizes', label: 'Prizes' },
  { to: '/faq',    label: 'FAQ'    },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [isMuted, setIsMuted]         = useState(true);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handleSync = (e) => setIsMuted(e.detail);
    window.addEventListener('update-mute-icon', handleSync);
    return () => window.removeEventListener('update-mute-icon', handleSync);
  }, []);

  const toggleGlobalSound = () => {
    setIsMuted(!isMuted);
    window.dispatchEvent(new Event('toggle-mute-button'));
  };

  // Close contact popup on route change
  useEffect(() => { setContactOpen(false); }, [location.pathname]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setContactOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isDarkText = !isHome || scrolled;

  return (
    <>
      {/* ─── Contact Popup Overlay ─── */}
      <AnimatePresence>
        {contactOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[90] bg-black/30 backdrop-blur-sm"
              onClick={() => setContactOpen(false)}
            />

            {/* Glass Card */}
            <motion.div
              key="contact-card"
              initial={{ opacity: 0, scale: 0.88, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: -20 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
            >
              <div
                className="pointer-events-auto relative w-[90vw] max-w-sm rounded-3xl border border-white/40 shadow-2xl overflow-hidden bg-white/90"
                style={{
                  backdropFilter: 'blur(28px) saturate(1.8)',
                  WebkitBackdropFilter: 'blur(28px) saturate(1.8)',
                }}
              >
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-violet-400 to-fuchsia-400 rounded-t-3xl" />

                {/* Close button */}
                <button
                  onClick={() => setContactOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition text-slate-700 font-bold text-sm"
                  aria-label="Close"
                >
                  ✕
                </button>

                <div className="px-8 pt-8 pb-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      contact_support
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-1">Get in Touch</h2>
                  <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-6">Event Coordinator</p>

                  {/* Phone */}
                  <a
                    href="tel:+916381275583"
                    className="flex items-center gap-4 group mb-4 p-3 -mx-3 rounded-2xl hover:bg-slate-100/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-primary/30 group-hover:bg-primary/5 transition">
                      <span className="material-symbols-outlined text-xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    </div>
                    <span className="text-lg font-black text-slate-900 group-hover:text-primary transition tracking-tight">
                      +91 63812 75583
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:ieeestudentchapter@ist.srmtrichy.edu.in"
                    className="flex items-center gap-4 group p-3 -mx-3 rounded-2xl hover:bg-slate-100/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-primary/30 group-hover:bg-primary/5 transition">
                      <span className="material-symbols-outlined text-xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                    </div>
                    <span className="text-sm font-bold text-slate-800 group-hover:text-primary transition break-all leading-snug">
                      ieeestudentchapter@ist.srmtrichy.edu.in
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─── Navbar ─── */}
      <div className="fixed top-8 w-full z-50 px-4 pointer-events-none">
        <nav className={`mx-auto max-w-fit pointer-events-auto flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 glass-morphism ${
          isDarkText 
            ? 'shadow-lg text-slate-900 border-white/30' 
            : 'text-white border-white/20 bg-white/10 backdrop-blur-2xl'
        }`}>
          <NavLink to="/" className="mr-6 flex items-center gap-2">
              <span className={`font-black tracking-widest text-lg transition-colors duration-300 ${isDarkText ? 'text-slate-900' : 'text-white text-glass-glow'}`} style={{ fontFamily: "'Orbitron', sans-serif" }}>TENSOR</span>
          </NavLink>
          <div className={`h-4 w-[1px] mr-6 transition-colors duration-300 ${isDarkText ? 'bg-slate-300' : 'bg-white/20'}`} />
          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isDarkText 
                      ? `hover:text-primary ${isActive ? 'text-primary font-bold' : 'text-slate-600'}`
                      : `hover:text-white ${isActive ? 'text-white font-bold' : 'text-white/70'}`
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            
            {/* Global Mute Toggle (Desktop) */}
            <button 
              onClick={toggleGlobalSound}
              className={`flex items-center justify-center p-1 rounded-full transition-all duration-300 hover:scale-110 ${
                isDarkText ? 'text-slate-600 hover:text-primary bg-slate-100 hover:bg-slate-200' : 'text-white/80 hover:text-white bg-white/10 hover:bg-white/20'
              }`}
              title="Toggle Background Sound"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isMuted ? 'volume_off' : 'volume_up'}
              </span>
            </button>
          </div>

          <div className="hidden ml-8 md:flex items-center gap-3">
            <button
              onClick={() => setContactOpen(true)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                isDarkText 
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-transparent shadow-sm' 
                  : 'bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-sm'
              }`}
            >
              Contact
            </button>
            <a 
              href="https://unstop.com/hackathons/tensor26-srm-insitute-of-science-and-technology-1661516"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all shadow-xl ${
                isDarkText
                  ? 'bg-slate-900 hover:bg-black text-white shadow-black/20'
                  : 'bg-white hover:bg-slate-100 text-slate-900 shadow-white/10'
              }`}
            >
              Register
            </a>
          </div>
          {/* Mobile Sound & Toggle */}
          <div className="md:hidden ml-4 flex items-center gap-3">
            <button 
              onClick={toggleGlobalSound}
              className={`flex items-center justify-center p-1.5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
                isDarkText ? 'text-slate-600 hover:text-primary bg-slate-100/50 hover:bg-slate-200' : 'text-white/80 hover:text-white bg-white/10 hover:bg-white/20'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {isMuted ? 'volume_off' : 'volume_up'}
              </span>
            </button>
            <button 
              className={`p-1 transition-colors ${isDarkText ? 'text-slate-600' : 'text-white/90'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="md:hidden absolute top-20 left-0 w-full px-4 pointer-events-auto"
            >
              <div className="glass-morphism rounded-3xl border border-white/30 shadow-2xl p-6 flex flex-col items-center gap-4">
                {links.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-bold text-slate-800 hover:text-primary transition-colors"
                  >
                    {label}
                  </NavLink>
                ))}
                <div className="w-full h-px bg-slate-100 my-2" />
                <button
                  onClick={() => { setMobileOpen(false); setContactOpen(true); }}
                  className="w-full bg-slate-100 hover:bg-slate-200 transition-colors duration-300 text-slate-800 py-3 rounded-2xl font-bold shadow-sm"
                >
                  Contact
                </button>
                <a 
                  href="https://unstop.com/hackathons/tensor26-srm-insitute-of-science-and-technology-1661516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 text-white py-3 rounded-2xl font-bold text-center"
                >
                  Register
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
