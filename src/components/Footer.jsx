import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const footerLinks = [
  { label: 'IEEE Student Branch', to: '#' },
  { label: 'SRM IST Trichy', to: '#' },
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms', to: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full py-12 border-t border-slate-200/80 font-sans text-sm">
      <div className="flex flex-col items-center text-center space-y-6 px-4">
        <div className="flex items-center gap-2 text-xl font-black tracking-tighter text-slate-900 opacity-80 hover:opacity-100 transition-all group">
          <div className="w-8 h-8 group-hover:scale-110 transition-transform">
            <img src={logo} alt="" className="w-full h-full object-contain" />
          </div>
          <span>TENSOR</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {footerLinks.map(({ label, to }) => (
            <a
              key={label}
              href={to}
              className="text-slate-500 hover:text-blue-600 transition-all duration-300 hover:-translate-y-0.5 inline-block"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="text-slate-500 mt-2">
          © 2026 TENSOR. SRM IST Trichy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
