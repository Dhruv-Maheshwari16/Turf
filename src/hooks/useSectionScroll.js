import { useRef } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * A hook to provide unified, smooth scroll-driven animations for sections.
 * @returns {object} { ref, y, opacity, scale }
 */
export default function useSectionScroll() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
        layoutEffect: false
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 30,
        restDelta: 0.005,
        mass: 1
    });

    // Balanced transforms for a cinematic feel
    const y = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
    const opacity = useTransform(smoothProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
    const scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

    return { ref, y, opacity, scale };
}
