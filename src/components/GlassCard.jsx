import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function GlassCard({ children, className = "", spotlight = true, rounded = "2rem" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative border border-white/10 bg-black/5 backdrop-blur-[2px] overflow-hidden ${className}`}
      style={{ borderRadius: rounded }}
    >
      {/* 1. The Spotlight Overlay */}
      {spotlight && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            borderRadius: rounded,
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(99, 102, 241, 0.35),
                transparent 40%
              )
            `,
          }}
        />
      )}

      {/* 2. Inner Reflection Line (Removed for uniform transparency) */}

      {/* 3. Content Area */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* 4. Glass Edge Shine (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}