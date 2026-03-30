import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import { SKILL_DATA, FEATURE_CARDS } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="relative flex flex-col items-center justify-center mt-10 w-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold text-lg md:text-xl lg:text-2xl whitespace-nowrap px-4 py-2 border border-[#7042f88b] rounded-full bg-[#0300145e] backdrop-blur-md">
          Secure AI Gateway
        </div>
        {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-[800px]">
          {SKILL_DATA.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div> */}
      </div>

      <div className="w-full flex-col items-center justify-center mt-20 z-[20]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 max-w-7xl mx-auto">
          {FEATURE_CARDS.map((feature, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl border border-[#7042f88b] bg-[#0300145e] backdrop-blur-md p-6 group hover:border-purple-500 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
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
