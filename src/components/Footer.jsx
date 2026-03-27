import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const footerLinks = [
  { label: 'Code of Conduct', to: '/code-of-conduct' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms and Conditions', to: '/terms' },
]

export default function Footer() {
  return (
    <footer 
      className="w-full py-16 border-t border-slate-200/50 font-sans text-sm relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #f2f2f2 0%, #e8e8e8 100%)' }}
    >
      {/* Subtle glow orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/5 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-400/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
      
      <div className="flex flex-col items-center text-center space-y-8 px-4 relative z-10">
        <div 
          className="text-2xl font-black tracking-[0.2em] text-slate-900 group cursor-default"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          TENSOR
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {footerLinks.map(({ label, to }) => (
            <a
              key={label}
              href={to}
              className="text-slate-500 hover:text-primary transition-all duration-300 hover:-translate-y-0.5 inline-block font-medium tracking-tight"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="pt-8 border-t border-slate-200/50 w-full max-w-xs mx-auto">
          <p className="text-slate-400 text-xs tracking-wider uppercase font-bold">
            © 2026 TENSOR • SRM IST Trichy
          </p>
        </div>
      </div>
    </footer>
  )
}
