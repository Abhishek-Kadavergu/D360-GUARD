"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-5 sm:px-8 md:px-12 lg:px-20 mt-24 sm:mt-28 md:mt-36 lg:mt-40 w-full z-[20] gap-8 md:gap-4"
    >
      <div className="h-full w-full flex flex-col gap-4 sm:gap-5 justify-center m-auto text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[12px] sm:text-[13px]">
            Enterprise AI Security Platform
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto mx-auto md:mx-0"
        >
          <span>
            Adopt AI.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Without Exposing
            </span>{" "}
            Your Data.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-3 sm:my-4 md:my-5 max-w-[600px] mx-auto md:mx-0 leading-relaxed"
        >
          D360 Guard acts as a secure intelligence layer between your organization and external AI systems &mdash; automatically protecting sensitive data, enforcing policies, and ensuring compliance.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-center md:items-start mt-2 sm:mt-3 md:mt-4 justify-center md:justify-start"
        >
          <a
            className="py-2.5 sm:py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg text-sm sm:text-base w-full sm:w-auto max-w-[200px]"
            href="/contact-us"
          >
            Request Demo
          </a>
          <a
            className="py-2.5 sm:py-2 px-6 text-center text-white cursor-pointer rounded-lg border border-purple-500 hover:bg-purple-500/20 transition-all text-sm sm:text-base w-full sm:w-auto max-w-[200px]"
            href="#features"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(1.2)}
          className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4"
        >
          Built for security-first enterprises
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center max-w-[280px] sm:max-w-[350px] md:max-w-none"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};
