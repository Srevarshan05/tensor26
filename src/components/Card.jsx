import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, boxShadow: '0 20px 40px rgba(0,83,219,0.08)' } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`bg-white rounded-xl ${className}`}
    >
      {children}
    </motion.div>
  )
}
