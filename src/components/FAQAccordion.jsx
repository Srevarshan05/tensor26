import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={`rounded-xl cursor-pointer transition-all duration-300 ${
                isOpen
                  ? 'bg-surface-container shadow-sm'
                  : 'bg-surface-container-low hover:bg-surface-container'
              }`}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-on-surface">{item.question}</h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="material-symbols-outlined text-primary flex-shrink-0"
                  >
                    expand_more
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4">
                        <p className="text-on-surface-variant leading-relaxed text-lg">
                          {item.answer}
                        </p>
                        {item.image && (
                          <div className="mt-4 w-full h-48 rounded-lg overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <img src={item.image} alt="" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
