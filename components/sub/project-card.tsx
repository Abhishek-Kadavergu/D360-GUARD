import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col flex-1 min-w-0 hover:border-purple-500/50 transition-colors"
    >
      {/* Fixed aspect-ratio image container */}
      <div className="relative w-full h-[220px] overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Text area — flex-grow ensures equal card height */}
      <div className="relative p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};
