import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';

const focusAreas = [
  { icon: 'neurology', title: 'AI-driven development', description: 'Leveraging the power of LLMs and machine learning to accelerate the coding lifecycle and architectural design.', color: 'bg-primary-container', text: 'text-on-primary-container' },
  { icon: 'psychiatry', title: 'Real-world problem solving', description: 'Applying computational intelligence to tackle tangible industrial and societal challenges with scalable software.', color: 'bg-tertiary-container', text: 'text-on-tertiary-container' },
  { icon: 'groups', title: 'Collaborative innovation', description: 'Fostering a synergy between diverse technical minds to pioneer breakthroughs in the AI ecosystem.', color: 'bg-secondary-container', text: 'text-on-secondary-container' },
];

const participationReasons = [
  { title: 'Hands-on AI experience', description: 'Directly implement cutting-edge models and development workflows in a competitive environment.' },
  { title: 'Build real-world projects', description: 'Transform concepts into functional prototypes that address existing market gaps.' },
  { title: 'Network with innovators', description: 'Connect with industry leaders, technical mentors, and like-minded visionary developers.' },
  { title: 'Compete at national level', description: 'Showcase your prowess on a prestigious stage and gain recognition across the country.' },
];

export default function About() {
  return (
    <main className="pt-32 bg-surface min-h-screen">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8"
          >
            <label className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">National Level Hackathon</label>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-background leading-tight mb-8">
              About <span className="text-primary">TENSOR’26</span>
            </h1>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:col-span-6"
          >
            <p className="text-2xl leading-relaxed text-on-surface-variant font-medium">
              TENSOR’26 is a national-level hackathon focused on AI-curated software development. It brings together students to build innovative solutions using modern AI tools and frameworks.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="md:col-start-8 md:col-span-5 relative"
          >
            <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden relative group">
              <img 
                alt="AI Tech" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCln1vMgZrwWD5RhOZAs4_GrzTsgUsS1wcwq7W98gjWh28SAVuBDmsocKPynUFNdVQE40Vui4hl6oWghg3HLmiZKIng93eUzEWIjUPnCz2W0j6-UC8x8fuF8pHXRe56jnOXDmJXFHisTJvg4KNJRL9Jax5pgogIa7vSU2pJ_oXkhaOk3HWq8rwZinX52Hvm9HlgFe6B62UAuWGCtaYrBhDGRDlOYrZBVi25XI8xBJgLsWMFYrJT5ZYghCrqNXmaTsCJw4kmvfPycgs" 
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-surface-container-low py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-on-background">Focus Areas</h2>
            <div className="w-16 h-1 bg-primary mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Card className="p-10 h-full border border-black/5">
                  <div className={`w-14 h-14 ${area.color} ${area.text} flex items-center justify-center rounded-xl mb-6`}>
                    <span className="material-symbols-outlined text-3xl">{area.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{area.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Participation Reasons */}
      <section className="py-28 bg-surface px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <SectionWrapper delay={0.2}>
              <h2 className="text-4xl font-extrabold tracking-tight text-on-background mb-8">Why Participate?</h2>
              <div className="space-y-6">
                {participationReasons.map((reason, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <span className="material-symbols-outlined text-[12px] group-hover:text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{reason.title}</h4>
                      <p className="text-on-surface-variant text-sm mt-1">{reason.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionWrapper>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <div className="h-48 rounded-xl bg-surface-container-high overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf2g-c0JEw9hx1EIVeziTGbOis1wxQQJb89BPQ5Dn69A1My9I8uM6bWvNmUwVGH76gxpxzwl1D-sxNbj5N6v5UXFhhSbqdrV_bCGSA9P8_81FaM1N0FfnDjV8uDD2nzbUpA-nLI605lAhGyIvXekLvOfc4cKuP-ZOVef0tni-7c_dM0W43WX8ktQrErIR9Pd3iDRUC8DFnxFtpEKqWBMSwddf1OxR4he_16SSzzC-udINg93YLRrL37uaDaGoy6QWCXAXXBHxSrkU" 
                       alt="Teamwork" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="h-64 rounded-xl bg-primary overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgXxw1wkVRGzXOv1BTXJ6biYEGCea9SGjRWa8FnEUREJ4yGjtqDmTXf14jgHc7FOAOw0u0jFX_WDN3u_61MOgjR1YWz-6iROjWTxHa7eW-uC3s2F942yL-td44pU_mOlK-y8FQD7OJwT0NjEFOpblL-EPP4rh_ENBUUuBxpSo-saA0D2IVQCsBdk_P8VkzcmPJXZ1QaBkvFmx-Z3nrkgaVRQJ0T6d5xqiOSh25lGojXGzcNYqX81qV1Jlp3rU9MY8_9hF9jlDLXsg" 
                       alt="Hackathon Energy" className="w-full h-full object-cover mix-blend-overlay" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-64 rounded-xl bg-surface-container-highest overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmmJeCwaqTAgVQVWzBFh9Yey5rhZnHvVZPHaazi_trvM3L_tiXChqYlIViujiT5ca_XY7luD-G_Tm3IfowQiF25Ay2_xx1IXMHHQycKYi9PWA8dlgsyoSIRujB9AhV4YCFnKEZKOeW6ROSdO4PTpY8_sv5nftjkUm6m0kCbe3r2E-VairPp6TAcAv_pDuoITA6swyG-ZGhJrkc2SO-oHr1xX84awFPozsdghpQYEkh6aAG5p-nj7gxYiQyhj-5eoohMk6gG3jLhxU" 
                       alt="Modern Workspace" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
                <div className="h-48 rounded-xl bg-surface-container-low overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-lw7SqBNTEhopLbiKmI6j8KYtqPj1FmTTaYxsr8QOkAtCKp7YJMLq89o5p55vLjnrDzgfh1lZIm8RovdTT-_H1O9RtUAEbfLZXv4DeJSGp2UVsZBgeXx6Om7IapA03Tp3qhd71q8XRsrQ_Y2vhorAnV8lg6LJGKu6H6gFLSZ3e9NH0J8uRnp_UQ-n2wMaahu6hK4EmDA0QRe2__pI5CWhkzUs1WmT2i48DhB_sM2G1LKlxWAVRNUcbuYx97cRHctyeMIhfOnmTCY" 
                       alt="Development Hands" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
