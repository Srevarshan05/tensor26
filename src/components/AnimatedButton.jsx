import { motion } from 'framer-motion'

export default function AnimatedButton({ children, onClick, href, target = "_blank", variant = 'primary', className = '' }) {
  const base = 'font-semibold transition-all duration-200 cursor-pointer inline-flex items-center justify-center'
  const variants = {
    primary: 'bg-primary text-on-primary hover:bg-primary-dim rounded-full px-10 py-4 text-lg shadow-[0_20px_40px_rgba(0,83,219,0.15)]',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-on-primary rounded-full px-8 py-3',
    ghost: 'text-primary hover:bg-primary-container rounded-xl px-6 py-2',
  }

  const styles = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : ""}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className={styles}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      className={styles}
    >
      {children}
    </motion.button>
  )
}
