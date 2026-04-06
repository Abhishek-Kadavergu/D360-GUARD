"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div
      id="security"
      className="flex flex-col relative items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-screen w-full h-full -z-20 px-4 sm:px-6"
    >
      <div className="w-full max-w-[600px] z-[5] mb-6 sm:mb-8 md:mb-0 md:absolute md:top-0">
        <motion.div
          variants={slideInFromTop}
          className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-medium text-center text-gray-200 leading-tight"
        >
          Security Built Into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Every Request.
          </span>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center md:translate-y-[-50px] z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11 w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px]"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
          />
        </div>

        <div className="Welcome-box px-[12px] sm:px-[15px] py-[4px] z-[20] border my-[12px] sm:my-[16px] md:my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[11px] sm:text-[12px]">Your data never leaves your control.</h1>
        </div>
      </div>

      <div className="z-[20] mt-4 sm:mt-6 md:mt-0 md:absolute md:bottom-[10px] px-4 sm:px-5">
        <div className="cursive text-base sm:text-lg md:text-[20px] font-medium text-center text-gray-300 max-w-[600px] mx-auto leading-relaxed">
          End-to-end protection with intelligent data masking, policy enforcement, and secure processing.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
