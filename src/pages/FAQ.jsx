import { motion } from 'framer-motion';
import FAQAccordion from '../components/FAQAccordion';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedButton from '../components/AnimatedButton';

const faqItems = [
  { 
    question: "Who can participate?", 
    answer: "UG and PG students from any discipline. We believe innovation happens at the intersection of diverse fields." 
  },
  { 
    question: "What is the team size?", 
    answer: "Maximum of 4 members per team. You can also participate individually or in teams of 2 or 3." 
  },
  { 
    question: "Is it offline?", 
    answer: "Yes, the hackathon will be conducted at SRM IST Tiruchirappalli. Experience the vibrant campus atmosphere and collaborate in person.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLpJ0i4sSrV80Fnrkt7_R2QwKWb0gG70nL4socW4vvORrJO35n3cEOq-qP20M-Qi4by5RGXiVzfVZQOwhQ22KAfo-6oQlhOgMf1LQI1v-Bs0yTtc4kT3XPNEu0yDd-vQNJ8SQAS7toCE0qQtlDsaBGJLFoiVABPVBuqbrXnNJ82hWdp1Th15oXCUGT2oHkleoS-120k35ImJzou7BZGS8SUTr2K_y9hCB20pQhSGAPTTCxi0GeB4YV94ui13h1HtVIB6L8OJHpico"
  },
  { 
    question: "How to register?", 
    answer: "Register through the Unstop portal and complete the payment. Ensure all team members are listed correctly before final submission." 
  },
  { 
    question: "Do I need prior AI knowledge?", 
    answer: "Basic knowledge is helpful, but all enthusiastic learners are welcome. We will have mentors on-site to guide you through technical hurdles." 
  },
];

export default function FAQ() {
  return (
    <main className="pt-32 pb-24 px-6 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container text-[11px] font-black tracking-widest uppercase mb-6"
          >
            Support Center
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-on-background mb-8 leading-tight"
          >
            Frequently Asked <br /> Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know about the technical journey at TENSOR’26. Can't find what you're looking for? Reach out to our organizing team.
          </motion.p>
        </header>

        {/* FAQ List */}
        <SectionWrapper className="mb-32">
          <FAQAccordion items={faqItems} />
        </SectionWrapper>

        {/* Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-primary p-12 rounded-3xl text-on-primary flex flex-col justify-end min-h-[350px] relative overflow-hidden group shadow-2xl shadow-primary/20"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>help_outline</span>
            </div>
            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-3">Still have questions?</h4>
              <p className="opacity-90 mb-8 max-w-[80%] text-lg">Our support team is available 24/7 to assist you with registration and event details.</p>
              <AnimatedButton variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-primary !bg-transparent w-fit">
                Contact Support
              </AnimatedButton>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-surface-container-high p-12 rounded-3xl flex flex-col justify-end min-h-[350px] shadow-sm border border-black/5"
          >
            <div className="mb-auto">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">inventory_2</span>
              </div>
            </div>
            <div>
              <h4 className="text-3xl font-black mb-3 text-on-surface">Resources</h4>
              <p className="text-on-surface-variant mb-8 text-lg">Download the official rulebook and problem statements to get a head start.</p>
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center text-primary font-bold hover:translate-x-2 transition-transform duration-300 w-fit">
                  <span className="material-symbols-outlined mr-3 text-2xl">description</span> 
                  Rulebook.pdf
                </a>
                <a href="#" className="flex items-center text-primary font-bold hover:translate-x-2 transition-transform duration-300 w-fit">
                  <span className="material-symbols-outlined mr-3 text-2xl">lightbulb</span> 
                  Tracks Overview
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
