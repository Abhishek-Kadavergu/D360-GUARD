import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Cta } from "@/components/main/cta";
import { PoweredBy } from "@/components/main/powered-by";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10 sm:gap-14 md:gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <PoweredBy />
        <Cta />
      </div>
    </main>
  );
}
