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
    websiteLink: "https://geweb.se/",
  },
  {
    name: "Sjögren Innovation",
    image: {
      src: "/projects/sjogren-innovation.png",
      alt: "Sjögren Innovation",
      width: 1655,
      height: 1000,
    },
    tags: ["Next.js", "TailwindCSS", "TypeScript", "Resend", "Contentful", "Vercel"],
    websiteLink: "https://sjogreninnovation.se/",
  },
  {
    name: "Nested Border Radius",
    image: {
      src: "/projects/nested-border-radius.png",
      alt: "Nested Border Radius",
      width: 1655,
      height: 1000,
    },
    tags: ["React", "TailwindCSS", "Firebase", "Open Source"],
    githubLink: "https://github.com/gustav-evensson/nested-border-radius",
    websiteLink: "https://nested-border-radius.web.app/",
  },
  {
    name: "Partved",
    image: {
      src: "/projects/partved.png",
      alt: "Partved",
      width: 1655,
      height: 1000,
    },
    tags: ["Nuxt", "Scss", "Firebase", "Klarna"],
    websiteLink: "https://partved.se/",
  },
  {
    name: "GeWeb v1",
    image: {
      src: "/projects/geweb-v1.png",
      alt: "GeWeb v1",
      width: 1655,
      height: 1000,
    },
    tags: ["Nuxt", "Vue", "Scss", "Firebase"],
    websiteLink: "https://geweb-website.web.app/"
  },
  {
    name: "ColorTinter",
    image: {
      src: "/projects/colortinter.png",
      alt: "ColorTinter",
      width: 1655,
      height: 1000,
    },
    tags: ["Vue", "Scss", "Firebase", "Open Source"],
    githubLink: "https://github.com/gustav-evensson/color-tinter",
    websiteLink: "https://color-tinter.web.app/",
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
