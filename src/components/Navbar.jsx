import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const links = [
  { to: '/',       label: 'Home'   },
  { to: '/about',  label: 'About'  },
  { to: '/event',  label: 'Event'  },
  { to: '/prizes', label: 'Prizes' },
  { to: '/faq',    label: 'FAQ'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-sm' : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 text-2xl font-black tracking-tighter text-slate-900 group"
        >
          <div className="w-10 h-10 transition-transform group-hover:scale-110">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span>TENSOR'26</span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full pb-1'
                  : 'text-slate-600 font-medium hover:text-slate-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-slate-400 after:rounded-full after:transition-all after:duration-300 pb-1'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            href="https://unstop.com/hackathons/tensor26-srm-insitute-of-science-and-technology-1661516"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-xl font-semibold hover:bg-primary-dim transition-colors duration-200 shadow-sm"
          >
            Register Now
          </motion.a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface-container transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-on-surface">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-1">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActive
                        ? 'text-primary bg-primary-container/40'
                        : 'text-slate-700 hover:bg-surface-container'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <a
                href="https://unstop.com/hackathons/tensor26-srm-insitute-of-science-and-technology-1661516"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold text-center"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
