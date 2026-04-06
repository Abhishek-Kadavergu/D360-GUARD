"use client";

import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4 sm:px-6">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <h1 className="Welcome-text text-[12px] sm:text-[13px]">
          No blind trust. Full control.
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-xl sm:text-2xl md:text-[30px] text-white font-medium mt-[10px] text-center mb-[10px] sm:mb-[15px]"
      >
        Control Every AI Interaction.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-base sm:text-lg md:text-[20px] text-gray-200 mb-6 sm:mb-8 md:mb-10 mt-[10px] text-center mx-auto max-w-[800px] leading-relaxed"
      >
        From input to output &mdash; every request is secured, monitored, and governed.
      </motion.div>
    </div>
  );
};
