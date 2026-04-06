import { ProjectCard } from "@/components/sub/project-card";
import { USE_CASES } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="use-cases"
      className="flex flex-col items-center justify-center py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10"
    >
      <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8 sm:py-12 md:py-20 text-center">
        Use Cases
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
        {USE_CASES.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
