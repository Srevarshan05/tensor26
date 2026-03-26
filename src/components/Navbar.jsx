import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/',       label: 'Home'   },
  { to: '/about',  label: 'About'  },
  { to: '/event',  label: 'Event'  },
  { to: '/prizes', label: 'Prizes' },
  { to: '/faq',    label: 'FAQ'    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="fixed top-8 w-full z-50 px-4 pointer-events-none">
      <nav className={`mx-auto max-w-fit pointer-events-auto flex items-center border border-slate-200 px-6 py-3 rounded-full text-slate-900 text-sm font-medium transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-lg backdrop-blur-lg' : 'bg-white/70 backdrop-blur-md'
      }`}>
        <NavLink to="/" className="mr-6 flex items-center gap-2">
            <span className="font-black tracking-widest text-lg" style={{ fontFamily: "'Orbitron', sans-serif" }}>TENSOR</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8 px-4 border-l border-slate-200 ml-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className="relative overflow-hidden h-5 group"
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-300">{label}</span>
              <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-primary font-bold">
                {label}
              </span>
            </NavLink>
          ))}
        </div>

        <div className="hidden ml-8 md:flex items-center gap-3">
          <button className="border border-slate-200 hover:bg-slate-50 px-5 py-2 rounded-full text-xs font-bold transition">
            Contact
          </button>
          <a 
            href="https://unstop.com/hackathons/tensor26-srm-insitute-of-science-and-technology-1661516"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 hover:bg-black text-white px-5 py-2 rounded-full text-xs font-bold transition-all hover:shadow-[0px_0px_20px_rgba(0,0,0,0.3)] shadow-black/20"
          >
            Register
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden ml-4 p-1 text-slate-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
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
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 flex flex-col items-center gap-4">
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
              <button className="w-full border border-slate-200 py-3 rounded-2xl font-bold">
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
  );
}
