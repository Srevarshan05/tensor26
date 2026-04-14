import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import PrizeCard from '../components/PrizeCard';
import ShapeGrid from '../components/background/ShapeGrid';
import prizeImg from '../assets/Prize-img.svg';


export default function Prizes() {
  return (
    <main className="pt-32 pb-24 min-h-screen relative">
      {/* Background Interactive Grid Animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ShapeGrid
          speed={0.5}
          squareSize={60}
          direction="diagonal"
          borderColor="#bfc4c0"
          hoverFillColor="#241334"
          shape="square"
          hoverTrailAmount={20}
        />
      </div>

      {/* Ensure content is above the grid but interactive */}
      <div className="relative z-10 font-sans">
        {/* Hero Header */}
        <header className="max-w-7xl mx-auto px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-4"
          >
            <span className="label-md uppercase tracking-[0.2em] text-primary font-bold py-1 px-4 bg-primary-container/20 rounded-full text-[10px] sm:text-xs">Recognition</span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-on-background leading-tight sm:leading-none">
              Prizes & <br className="hidden sm:block" /><span className="text-on-background opacity-60 ml-2 sm:ml-0">Rewards</span>
            </h1>
          </motion.div>
        </header>

        {/* Prize Pool Highlight */}
        <SectionWrapper className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
          <div className="bg-surface-container-low rounded-2xl p-6 sm:p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 overflow-hidden relative shadow-sm border border-black/5">
            <div className="relative z-10 text-center md:text-left">
              <p className="text-[10px] sm:text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-2 sm:mb-4">Grand Stakes</p>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-on-background leading-tight">Total Prize Pool</h2>
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="relative z-10 text-center md:text-right"
            >
              <span className="text-5xl sm:text-7xl md:text-9xl font-black text-primary tracking-tighter block leading-none">₹56,000</span>
              <p className="text-on-surface-variant text-xs sm:text-base font-medium mt-3 sm:mt-4 lg:max-w-xs ml-auto opacity-70">Distributed among the finest technical architects</p>
            </motion.div>
            {/* Decorative element */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 -z-0" />
          </div>
        </SectionWrapper>

        <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SectionWrapper delay={0.3} className="h-full order-first md:order-none">
              <PrizeCard
                rank={1}
                emoji="🥇"
                title="First Prize"
                subtitle="The TENSOR’26 Championship"
                amount="₹25,000"
                featured
              />
            </SectionWrapper>
            <SectionWrapper delay={0.1} className="h-full order-none md:order-first">
              <PrizeCard
                rank={2}
                emoji="🥈"
                title="Second Prize"
                subtitle="Silver Excellence Award"
                amount="₹15,000"
                iconBg="bg-secondary-container"
                iconColor="text-on-secondary-container"
              />
            </SectionWrapper>
            <SectionWrapper delay={0.2} className="h-full order-none">
              <PrizeCard
                rank={3}
                emoji="🥉"
                title="Third Prize"
                subtitle="Bronze Distinction Award"
                amount="₹10,000"
                iconBg="bg-tertiary-container"
                iconColor="text-on-tertiary-container"
              />
            </SectionWrapper>
          </div>
        </section>

        {/* Special Awards Row */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionWrapper delay={0.4} className="bg-surface-container rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 border border-black/5">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">stars</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">⭐ Special Awards</h3>
                <p className="text-on-surface-variant text-[10px] sm:text-sm mt-0.5 sm:mt-1 font-medium opacity-60">Recognizing innovation, design, and complexity</p>
              </div>
            </div>

            {/* Mystery teaser with Hover Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center bg-white border border-dashed border-primary/30 rounded-2xl px-10 py-6 shadow-sm text-center min-w-[260px] min-h-[160px] relative overflow-hidden group cursor-pointer transition-all duration-500 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:-translate-y-4">
                <span className="text-4xl mb-3 animate-pulse">🔒</span>
                <p className="text-base font-black text-on-background tracking-tight">To Be Revealed</p>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1 opacity-70">On the Day of Hackathon</p>
                <p className="text-xs text-on-surface-variant mt-2 max-w-[200px] leading-snug">Stay tuned — something exciting awaits the best teams.</p>
              </div>

              {/* Reveal Image on hover */}
              <div className="absolute inset-0 w-full h-full p-4 flex items-center justify-center z-20">
                <img 
                  src={prizeImg} 
                  alt="Revealed Prize" 
                  className="w-full h-full object-contain opacity-0 scale-50 -translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 ease-[0.16,1,0.3,1]"
                />
              </div>
            </motion.div>
          </SectionWrapper>
        </section>
      </div>
    </main>
  );
}
