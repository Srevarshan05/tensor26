import { motion } from 'framer-motion'

export default function PrizeCard({ rank, emoji, title, subtitle, amount, featured = false, iconBg = 'bg-primary-container', iconColor = 'text-primary' }) {
  return (
    <motion.div
      whileHover={{ y: featured ? -10 : -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`relative bg-white rounded-xl flex flex-col justify-between items-center text-center overflow-hidden h-full
        ${featured
          ? 'border-2 border-primary/20 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,83,219,0.08)]'
          : 'p-6 sm:p-8 border border-outline-variant/10'}`}
    >
      {featured && (
        <div className="absolute top-0 right-0 bg-primary text-on-primary px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-bl-lg">
          Winner
        </div>
      )}
      <div>
        <div className={`${featured ? 'w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 ring-4 sm:ring-8 ring-primary-container/20' : 'w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6'} rounded-full ${iconBg} flex items-center justify-center mx-auto`}>
          <span className={`material-symbols-outlined ${featured ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-4xl'} ${iconColor}`}
            style={{ fontVariationSettings: "'FILL' 1" }}>
            {rank === 1 ? 'workspace_premium' : rank === 2 ? 'military_tech' : 'rewarded_ads'}
          </span>
        </div>
        <h3 className={`${featured ? 'text-2xl sm:text-3xl font-black' : 'text-xl sm:text-2xl font-bold'} mb-1 sm:mb-2`}>
          {emoji} {title}
        </h3>
        <p className="text-on-surface-variant text-[10px] sm:text-sm mb-4 sm:mb-6 opacity-60 font-medium">{subtitle}</p>
      </div>
      <div className={`${featured ? 'text-4xl sm:text-6xl text-primary' : 'text-2xl sm:text-4xl text-on-background'} font-black tracking-tighter`}>
        {amount}
      </div>
    </motion.div>
  )
}
