import { ProjectCard } from "@/components/sub/project-card";
import { USE_CASES } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="use-cases"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Use Cases
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
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
