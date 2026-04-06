import { SkillText } from "@/components/sub/skill-text";

import { FEATURE_CARDS } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-12 sm:py-16 md:py-20"
    >
      <SkillText />

      <div className="relative flex flex-col items-center justify-center mt-6 sm:mt-8 md:mt-10 w-full">
        <div className="z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold text-base sm:text-lg md:text-xl lg:text-2xl px-4 py-2 border border-[#7042f88b] rounded-full bg-[#0300145e] backdrop-blur-md text-center">
          Secure AI Gateway
        </div>
      </div>

      <div className="w-full flex-col items-center justify-center mt-10 sm:mt-14 md:mt-20 z-[20]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
          {FEATURE_CARDS.map((feature, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl border border-[#7042f88b] bg-[#0300145e] backdrop-blur-md p-4 sm:p-5 md:p-6 group hover:border-purple-500 transition-colors"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
