import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import PrizeCard from '../components/PrizeCard';

const smallAwards = [
  { amount: '₹2,000', label: 'Track Winner', icon: 'stars' },
  { amount: '₹2,000', label: 'Social Impact', icon: 'stars' },
  { amount: '₹2,000', label: 'Best Design', icon: 'stars' },
];

export default function Prizes() {
  return (
    <main className="pt-32 pb-24 bg-surface min-h-screen">
      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-4"
        >
          <span className="label-md uppercase tracking-[0.2em] text-primary font-bold py-1 px-4 bg-primary-container/20 rounded-full text-xs">Recognition</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-background leading-none">
            Prizes & <br /><span className="text-outline-variant opacity-20">Rewards</span>
          </h1>
        </motion.div>
      </header>

      {/* Prize Pool Highlight */}
      <SectionWrapper className="max-w-7xl mx-auto px-8 mb-16">
        <div className="bg-surface-container-low rounded-2xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden relative shadow-sm border border-black/5">
          <div className="relative z-10 text-center md:text-left">
            <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">Grand Stakes</p>
            <h2 className="text-5xl md:text-7xl font-black text-on-background leading-tight">Total Prize Pool</h2>
          </div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="relative z-10 text-center md:text-right"
          >
            <span className="text-7xl md:text-9xl font-black text-primary tracking-tighter shadow-primary/10">₹56,000</span>
            <p className="text-on-surface-variant font-medium mt-4 lg:max-w-xs ml-auto">Distributed among the finest technical architects</p>
          </motion.div>
          {/* Decorative element */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 -z-0" />
        </div>
      </SectionWrapper>

      {/* Main Prizes Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SectionWrapper delay={0.1} className="h-full">
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
          <SectionWrapper delay={0.3} className="h-full">
            <PrizeCard 
              rank={1} 
              emoji="🥇" 
              title="First Prize" 
              subtitle="The TENSOR’26 Championship" 
              amount="₹25,000" 
              featured 
            />
          </SectionWrapper>
          <SectionWrapper delay={0.2} className="h-full">
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
      <section className="max-w-7xl mx-auto px-8">
        <SectionWrapper delay={0.4} className="bg-surface-container rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-black/5">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">stars</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">⭐ Special Awards</h3>
              <p className="text-on-surface-variant text-sm mt-1">Recognizing innovation, design, and complexity</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {smallAwards.map((award, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white px-8 py-4 rounded-xl border border-black/5 shadow-sm text-center min-w-[140px]"
              >
                <span className="text-2xl font-black text-on-background block mb-1">{award.amount}</span>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter opacity-80">{award.label}</span>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Bottom Visual section */}
      <SectionWrapper className="max-w-7xl mx-auto px-8 mt-32">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="h-96 rounded-2xl overflow-hidden relative shadow-2xl group"
        >
          <img 
            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArzsavLLtAIK8PZ9ZVso9acoJOeMHW6-3ycq-dFWQ2u7br4DDBTOHr5BdQGfEnxGp7QxIvlUYZmdJ7PwR40enADZm42KYxkY3rA_OukRPIHHXLQnd6eGwvxGYxu_bkoKSvALtTajCmHcJ7Y8B4SIH2f4Wl7-RVSyb2mOn46DjiiFZvryO5W-Wjs62FQp-MCKe3-QyTJajgZqasvj-fzV94-frOCzxs9i1vGSUn2j8A-jsvB82jbTGeAHUmJZAPIvxsZLI7Qw7OkWw" 
            alt="Futuristic Lab"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-1000" />
          <div className="absolute bottom-10 left-10 max-w-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-white/60 text-xs font-black uppercase tracking-[0.4em] mb-4">Build the Future</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">Innovation is its own reward, but we believe in honoring excellence.</h2>
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}
