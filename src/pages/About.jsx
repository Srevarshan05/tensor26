import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import ShapeGrid from '../components/background/ShapeGrid';

const focusAreas = [
  { icon: 'neurology', title: 'AI-driven development', description: 'Leveraging the power of LLMs and machine learning to accelerate the coding lifecycle and architectural design.', color: 'bg-indigo-50', text: 'text-indigo-600' },
  { icon: 'psychiatry', title: 'Real-world problem solving', description: 'Applying computational intelligence to tackle tangible industrial and societal challenges with scalable software.', color: 'bg-violet-50', text: 'text-violet-600' },
  { icon: 'groups', title: 'Collaborative innovation', description: 'Fostering a synergy between diverse technical minds to pioneer breakthroughs in the AI ecosystem.', color: 'bg-sky-50', text: 'text-sky-600' },
];

const participationReasons = [
  { title: 'Hands-on AI experience', description: 'Directly implement cutting-edge models and development workflows in a competitive environment.' },
  { title: 'Build real-world projects', description: 'Transform concepts into functional prototypes that address existing market gaps.' },
  { title: 'Network with innovators', description: 'Connect with industry leaders, technical mentors, and like-minded visionary developers.' },
  { title: 'Compete at national level', description: 'Showcase your prowess on a prestigious stage and gain recognition across the country.' },
];

export default function About() {
  return (
    <main className="min-h-screen bg-surface">
      {/* ─── Hero Section with ShapeGrid ─── */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white">
        {/* ShapeGrid canvas background */}
        <div className="absolute inset-0 z-0">
          <ShapeGrid
            speed={0.5}
            squareSize={60}
            direction="diagonal"
            borderColor="#bfc4c0"
            hoverFillColor="#241334"
            shape="square"
            hoverTrailAmount={0}
          />
        </div>

        {/* Top Spacer for Navbar */}
        <div className="h-20 w-full" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <label className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-6 block opacity-60">National Level Hackathon</label>
          <h1 
            className="text-6xl md:text-8xl font-black tracking-tight text-on-background leading-tight mb-8"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            About <span className="text-primary">TENSOR</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-on-surface-variant font-medium max-w-2xl mx-auto tracking-tight">
            TENSOR’26 is a 24-hour national-level hackathon focused on AI-curated software development, bringing together visionaries to build the future.
          </p>
        </motion.div>

        {/* Smudge fade into Focus Areas */}
        <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #f8f9ff 0%, transparent 100%)' }}
        />
      </section>

      {/* ─── Focus Areas Section ─── */}
      <SectionWrapper 
        className="py-32 border-y border-slate-100 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #faf8ff 35%, #ffffff 55%, #faf5ff 75%, #f5f8ff 100%)' }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-400/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black tracking-tight text-on-background mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>Focus Areas</h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              >
                <Card className="p-10 h-full border border-primary/5 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className={`w-14 h-14 ${area.color} ${area.text} flex items-center justify-center rounded-2xl mb-8 shadow-inner`}>
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{area.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{area.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm font-medium opacity-80">{area.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Participation Section ─── */}
      <section className="py-32 bg-white px-8 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black tracking-tight text-on-background mb-12" style={{ fontFamily: "'Orbitron', sans-serif" }}>Why <span className="text-primary">Participate?</span></h2>
              <div className="space-y-8">
                {participationReasons.map((reason, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="mt-1 w-8 h-8 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <span className="material-symbols-outlined text-sm text-primary group-hover:text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold tracking-tight text-slate-900">{reason.title}</h4>
                      <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">{reason.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <div className="h-48 rounded-3xl bg-slate-100 overflow-hidden shadow-2xl">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf2g-c0JEw9hx1EIVeziTGbOis1wxQQJb89BPQ5Dn69A1My9I8uM6bWvNmUwVGH76gxpxzwl1D-sxNbj5N6v5UXFhhSbqdrV_bCGSA9P8_81FaM1N0FfnDjV8uDD2nzbUpA-nLI605lAhGyIvXekLvOfc4cKuP-ZOVef0tni-7c_dM0W43WX8ktQrErIR9Pd3iDRUC8DFnxFtpEKqWBMSwddf1OxR4he_16SSzzC-udINg93YLRrL37uaDaGoy6QWCXAXXBHxSrkU" 
                       alt="Teamwork" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="h-64 rounded-3xl bg-primary overflow-hidden shadow-2xl">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgXxw1wkVRGzXOv1BTXJ6biYEGCea9SGjRWa8FnEUREJ4yGjtqDmTXf14jgHc7FOAOw0u0jFX_WDN3u_61MOgjR1YWz-6iROjWTxHa7eW-uC3s2F942yL-td44pU_mOlK-y8FQD7OJwT0NjEFOpblL-EPP4rh_ENBUUuBxpSo-saA0D2IVQCsBdk_P8VkzcmPJXZ1QaBkvFmx-Z3nrkgaVRQJ0T6d5xqiOSh25lGojXGzcNYqX81qV1Jlp3rU9MY8_9hF9jlDLXsg" 
                       alt="Hackathon Energy" className="w-full h-full object-cover mix-blend-overlay hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-64 rounded-3xl bg-slate-200 overflow-hidden shadow-2xl">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmmJeCwaqTAgVQVWzBFh9Yey5rhZnHvVZPHaazi_trvM3L_tiXChqYlIViujiT5ca_XY7luD-G_Tm3IfowQiF25Ay2_xx1IXMHHQycKYi9PWA8dlgsyoSIRujB9AhV4YCFnKEZKOeW6ROSdO4PTpY8_sv5nftjkUm6m0kCbe3r2E-VairPp6TAcAv_pDuoITA6swyG-ZGhJrkc2SO-oHr1xX84awFPozsdghpQYEkh6aAG5p-nj7gxYiQyhj-5eoohMk6gG3jLhxU" 
                       alt="Modern Workspace" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="h-48 rounded-3xl bg-slate-50 overflow-hidden shadow-2xl">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-lw7SqBNTEhopLbiKmI6j8KYtqPj1FmTTaYxsr8QOkAtCKp7YJMLq89o5p55vLjnrDzgfh1lZIm8RovdTT-_H1O9RtUAEbfLZXv4DeJSGp2UVsZBgeXx6Om7IapA03Tp3qhd71q8XRsrQ_Y2vhorAnV8lg6LJGKu6H6gFLSZ3e9NH0J8uRnp_UQ-n2wMaahu6hK4EmDA0QRe2__pI5CWhkzUs1WmT2i48DhB_sM2G1LKlxWAVRNUcbuYx97cRHctyeMIhfOnmTCY" 
                       alt="Development Hands" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Bottom smudge smudge into footer */}
        <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)' }}
        />
      </section>
    </main>
  );
}
