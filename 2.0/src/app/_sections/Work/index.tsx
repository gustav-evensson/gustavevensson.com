import SectionNumber from "@/components/section-number"
import BlurFade from "@/components/ui/blur-fade"
import { projects } from "@/lib/projects"
import ProjectCard from "./components/project-card"

const WorkSection = () => {
  return (
    <section id="work">
      <div className="relative w-full max-w-screen-lg mx-auto p-8 sm:p-16 flex flex-col gap-1">
        <BlurFade inView>
          <SectionNumber number={"02"} />
          <h2 className="text-2xl font-medium font-figtree mb-1 relative">My work</h2>
          <p className="text-muted-foreground mb-4">
            A collection of my featured projects.
          </p>
        </BlurFade>
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <ProjectCard {...project} key={index} reversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection