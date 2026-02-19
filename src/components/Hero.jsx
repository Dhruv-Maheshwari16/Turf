import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();

  // Scroll animations for the text content (as per user snippet)
  // Moving from y=0 to y=120 and opacity 1 to 0 between 200px and 500px scroll
  const yText = useTransform(scrollY, [200, 500], [0, 120]);
  const opacityText = useTransform(scrollY, [200, 500], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden font-sans">

      {/* 1. Content Layer */}
      {/* Centered logic for consistent behavior */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center text-center pointer-events-none">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="flex flex-col items-center transform-gpu will-change-transform"
        >
          {/* Main Title - Restored user typography and sizing */}
          <h1 className="relative text-[15vw] md:text-[180px] lg:text-[220px] font-black tracking-tighter leading-[0.8] select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-500 drop-shadow-2xl px-1.5 pt-1">
            HYPER
          </h1>

          {/* Subtitle - Restored user snippet content */}
          <p className="mt-8 text-xl md:text-3xl text-gray-300 max-w-2xl mx-auto font-light tracking-wide leading-relaxed opacity-70">
             Discover, book, and  <br className="hidden md:block" />
            <span className="text-indigo-400 font-semibold"> play</span>  at arenas near you.
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;

