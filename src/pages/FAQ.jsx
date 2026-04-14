import { useState } from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from '../components/FAQAccordion';
import ShapeGrid from '../components/background/ShapeGrid';
import SparkleButton from '../components/SparkleButton';

const faqData = [
  { question: "Who can participate?", answer: "Students currently enrolled in any university across the country can participate." },
  { question: "What is the team size?", answer: "Teams can have up to 4 members. Individual participants are also welcome!" },
  { question: "Is it offline?", answer: "Yes, TENSOR'26 is an in-person, 24-hour hackathon held at SRM IST Tiruchirappalli." },
  { question: "How to register?", answer: "Register through the Unstop link provided on the home page." },
];

export default function FAQ() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    query: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // The Final V5 Google Sheets Web App URL
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzbfi6CDYleLvAAnfZOV2_CQzsrJn72cD--jphM5DajvUZRiZFIQqI90MdcgzQJkOAf6A/exec"; 

    try {
      // We send as JSON to match your script's JSON.parse(e.postData.contents)
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Apps Script requires no-cors for simple redirects or handled specifically
        headers: {
          'Content-Type': 'text/plain', // Using text/plain avoids CORS preflight issues with Apps Script
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          college: formData.college,
          query: formData.query
        })
      });

      // With no-cors, we can't reliably check response.ok, 
      // but if the fetch doesn't throw, it usually succeeded.
      setStatus({ type: 'success', message: 'Your query has been sent! We will reply instantly.' });
      setFormData({ name: '', email: '', college: '', query: '' });
      
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-16 relative overflow-hidden bg-[#f9f9f9]">
      {/* Background Interactive Grid Animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ShapeGrid
          speed={0.5}
          squareSize={60}
          direction="diagonal"
          borderColor="#bfc4c033"
          hoverFillColor="#0053db11"
          shape="square"
          hoverTrailAmount={20}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-12 md:mb-16"
        >
          <label className="bg-primary/10 text-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 md:mb-6 inline-block">Support Center</label>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight text-on-background leading-tight mb-4 md:mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Got <span className="text-primary">Questions?</span>
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant font-medium max-w-2xl mx-auto px-4">
            Everything you need to know about TENSOR’26. If you can't find it here, ask us directly below!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* FAQ Accordion Section - Left (3/5 width on PC) */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="lg:col-span-3 lg:sticky lg:top-32"
          >
            <div className="glass-card-premium p-6 md:p-10">
              <h2 className="text-2xl font-black mb-8 tracking-tight flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">quiz</span>
                Common Questions
              </h2>
               <FAQAccordion items={faqData} />
            </div>
          </motion.div>

          {/* Query Form Section - Right (2/5 width on PC) */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="lg:col-span-2"
          >
            <div className="glass-card-premium p-6 md:p-10 border-primary/20 bg-white/40">
              <h2 className="text-2xl font-black mb-2 tracking-tight flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">send</span>
                Ask Organizers
              </h2>
              <p className="text-on-surface-variant text-sm mb-8 font-medium italic">We will reply as instantly!</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-2">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-black/5 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-2">Email ID</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-black/5 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-2">College</label>
                    <input
                      required
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-black/5 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                      placeholder="University name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-2">Your Query</label>
                  <textarea
                    required
                    rows="4"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-black/5 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none"
                    placeholder="What would you like to ask?"
                  />
                </div>

                <div className="mt-4">
                  <SparkleButton text="SEND MESSAGE" loading={loading} />
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-xs font-bold text-center ${
                      status.type === 'success' ? 'bg-green-100 text-green-700' : 
                      status.type === 'warning' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom smear */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)' }}
      />
    </main>
  );
}
