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
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Enterprise AI Security Platform
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
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
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          D360 Guard acts as a secure intelligence layer between your organization and external AI systems &mdash; automatically protecting sensitive data, enforcing policies, and ensuring compliance.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-4"
        >
          <a
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            href="#projects"
          >
            Request Demo
          </a>
          <a
            className="py-2 px-6 text-center text-white cursor-pointer rounded-lg border border-purple-500 hover:bg-purple-500/20 transition-all max-w-[200px]"
            href="#skills"
          >
            See How It Works
          </a>
        </motion.div>
        
        <motion.p
          variants={slideInFromLeft(1.2)}
          className="text-sm text-gray-500 mt-4"
        >
          Built for security-first enterprises
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
