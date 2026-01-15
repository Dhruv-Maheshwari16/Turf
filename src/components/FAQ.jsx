import React, { useState, memo, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ParticlesBackground from './ParticlesBackground'

// --- Extra Transparent FAQ Item ---
const FAQItem = memo(({ faq, isOpen, onClick }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative rounded-[1rem] border transition-all duration-700 overflow-hidden backdrop-blur-3xl
        ${isOpen 
            ? 'border-blue-500/30 bg-white/[0.08]' 
            : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20' 
        }`}
    >
      {/* 1. Feature Spotlight (Interactive Glow) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      {/* 2. Top-Left Reflection (Glass Edge) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

      <button
        onClick={onClick}
        className="relative z-10 flex justify-between items-center w-full text-left px-8 py-7"
      >
        <h3 className={`text-base md:text-xl font-bold tracking-tight transition-colors duration-500 
          ${isOpen ? 'text-blue-400' : 'text-white/80'}`}>
          {faq.question}
        </h3>
        
        {/* Clean Chevron Icon (No circle) */}
        <div className={`transition-transform duration-500 
          ${isOpen ? 'rotate-180 text-blue-400' : 'text-white/20 group-hover:text-white/40'}`}>
          <ChevronDown size={22} strokeWidth={2.5} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative z-10 px-8 pb-8 pt-0">
              <div className="h-[1px] w-full bg-white/5 mb-6" />
              <p className="text-gray-400 leading-relaxed text-sm md:text-lg font-light">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Bottom Edge Shine */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
})

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const containerRef = useRef(null);

  // --- Cinematic Scroll Animation Logic ---
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start end", "end start"] 
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 20 });

  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [150, 0, 0, -200]);
  const opacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2], [0.94, 1]);

  const faqs = [
    { question: 'How does Hyper work?', answer: 'Hyper connects venue owners with players. Venues list their spaces with real-time availability, and players can instantly book and pay online.' },
    { question: 'What types of venues can I book?', answer: 'We support turfs, courts (cricket, badminton, tennis), esports arenas, gaming arcades, and multi-purpose sports facilities.' },
    { question: 'Is Hyper available in my city?', answer: 'We’re focused on Tier-2 and Tier-3 cities across India. Check our platform to see if your city is listed.' },
    { question: 'Can I host tournaments on Hyper?', answer: 'Yes. Our Pro and Business plans include tournament hosting, leaderboards, and team management tools.' },
    { question: 'How do payments work?', answer: 'All payments are processed securely through our platform. We support UPI, cards, and local payment methods.' }
  ]

  return (
    <section ref={containerRef} className="relative py-32 min-h-[1000px] bg-[#050507] overflow-hidden">
      <ParticlesBackground />

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/[0.03] blur-[150px] pointer-events-none" />

      {/* Cinematic Animation Wrapper */}
      <motion.div 
        style={{ y, opacity, scale }} 
        className="relative z-10 mx-auto max-w-7xl px-6 transform-gpu"
      >
        <div className="max-w-4xl mx-auto">
          
          {/* Header with Dual-Gradient Heading */}
          <div className="text-center mb-24 px-6">
            <p className="text-[10px] tracking-[0.5em] uppercase text-blue-500 font-black mb-6 opacity-80">
                Support Center
            </p>
            
            <motion.h2 
                className="text-4xl md:text-8xl font-black tracking-tight leading-[1.1] md:leading-[0.9] bg-[length:200%_auto]"
            >
                {/* 1. Static Vertical Gradient */}
                <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent px-1">
                    Got Questions? {" "}
                </span>
                
                <br className="md:hidden" />

                {/* 2. Animated Horizontal Gradient */}
                <motion.span 
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} 
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto]"
                >
                    We Have Answers.
                </motion.span>
            </motion.h2>

            <p className="text-neutral-500 tracking-wider text-base md:text-xl max-w-2xl mx-auto font-light mt-8 leading-relaxed opacity-60">
                A high-performance toolkit designed to handle venue bookings and competitive ecosystems at scale.
            </p>
          </div>

          {/* FAQ Glass Cards */}
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={expandedIndex === i}
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}