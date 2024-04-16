import { Mwp } from "@/components/MaxWidthProvider";
import SectionNumber from "@/components/SectionNumber";
import ProjectCard, { ProjectProps } from "./components/ProjectCard";

const projects: ProjectProps[] = [
  {
    name: "EHT-Kollen",
    image: {
      src: "/projects/eht-kollen.png",
      alt: "EHT-Kollen",
      width: 1655,
      height: 1000,
    },
    tags: ["Next.js", "TailwindCSS", "TypeScript", "Resend", "Contentful", "Vercel"],
    websiteLink: "https://ehtkollen.se",
  },
  {
    name: "GeWeb",
    image: {
      src: "/projects/geweb.png",
      alt: "GeWeb",
      width: 1655,
      height: 1000,
    },
    tags: ["Next.js", "TailwindCSS", "TypeScript", "Resend", "Contentful", "Vercel"],
    githubLink: "https://github.com/gustav-evensson",
    websiteLink: "https://geweb.se/",
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
    <section id="work" className="py-16 md:py-32 relative">
      <div className="absolute inset-0 vignette" />
      <Mwp className="lg:px-16">
        <div className="relative w-full mb-8 lg:mb-16">
          <SectionNumber number={"02"} />
          <h2 className="text-4xl font-medium mb-4 relative">My Work</h2>
          <p className="text-base md:text-lg lg:text-xl relative">Here is some of my work, hope you like it!</p>
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
