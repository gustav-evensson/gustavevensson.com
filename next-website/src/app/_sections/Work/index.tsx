import { Mwp } from "@/components/MaxWidthProvider";
import SectionNumber from "@/components/SectionNumber";
import ProjectCard, { ProjectProps } from "./components/ProjectCard";

const projects: ProjectProps[] = [
  {
    name: "Project 1",
    image: {
      src: "/ge_logo_bg_black_512.jpg",
      alt: "Project 1",
      width: 1024,
      height: 1024,
    },
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    githubLink: "https://github.com/gustav-evensson",
    websiteLink: "https://github.com/gustav-evensson",
  },
  {
    name: "Project 1",
    image: {
      src: "/ge_logo_bg_black_512.jpg",
      alt: "Project 1",
      width: 1024,
      height: 1024,
    },
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    githubLink: "https://github.com/gustav-evensson",
    websiteLink: "https://github.com/gustav-evensson",
  },
  {
    name: "Project 1",
    image: {
      src: "/ge_logo_bg_black_512.jpg",
      alt: "Project 1",
      width: 1024,
      height: 1024,
    },
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    githubLink: "https://github.com/gustav-evensson",
    websiteLink: "https://github.com/gustav-evensson",
  },
]

export default function WorkSection() {
  return (
    <section className="py-32">
      <Mwp className="lg:px-16">
        <div className="relative w-full mb-8">
          <SectionNumber number={"02"} />
          <h2 className="text-4xl font-medium mb-4">My Work</h2>
          <p className="text-base md:text-lg lg:text-xl">Here is some of my work, hope you like it!</p>
        </div>
        <div className="flex flex-col gap-16 md:gap-32 items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} reverse={index % 2 !== 0}/>
          ))}
        </div>
      </Mwp>
    </section>
  );
}
