import { Mwp } from "@/components/MaxWidthProvider";
import FigmaIcon from "@/components/tools/figma";
import FirebaseIcon from "@/components/tools/firebase";
import GithubIcon from "@/components/tools/github";
import MongoDBIcon from "@/components/tools/mongodb";
import NextIcon from "@/components/tools/next";
import ReactIcon from "@/components/tools/react";
import ScssIcon from "@/components/tools/scss";
import TailwindIcon from "@/components/tools/tailwind";
import TsIcon from "@/components/tools/ts";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

const tools = [
  {
    name: "Next.js",
    image: <NextIcon />,
    href: "https://nextjs.org/",
  },
  {
    name: "React",
    image: <ReactIcon />,
    href: "https://reactjs.org/",
  },
  {
    name: "Typescript",
    image: <TsIcon />,
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    image: <TailwindIcon />,
    href: "https://tailwindcss.com/",
  },
  {
    name: "Scss",
    image: <ScssIcon />,
    href: "https://sass-lang.com/",
  },
  {
    name: "Firebase",
    image: <FirebaseIcon />,
    href: "https://firebase.google.com/",
  },
  {
    name: "MongoDB",
    image: <MongoDBIcon />,
    href: "https://www.mongodb.com/",
  },
  {
    name: "Github",
    image: <GithubIcon />,
    href: "https://github.com/home"
  },
  {
    name: "Figma",
    image: <FigmaIcon />,
    href: "https://www.figma.com/",
  },
];

export default function ToolsSection() {
  return (
    <section className="lg:py-16 relative bg-background">
      <Mwp className="flex justify-center">
        <div className="overflow-x-hidden py-10 overlay-shadow">
        <div className="min-w-[1000px]">
          <div className="flex items-center justify-around w-[200%] min-w-fit carousel-animation hover:paused">
            {tools.map((tool) => (
              <Link key={tool.name} tabIndex={-1} href={tool.href} target="_blank" className="transition-transform block relative group overflow-visible">
                {tool.image}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-background py-1 px-2 rounded-sm opacity-0 transition-all w-max group-hover:opacity-100 group-hover:-top-9 bg-foreground text-sm">{tool.name}</span>
              </Link>
            ))}
            {tools.map((tool) => (
              <Link key={tool.name} tabIndex={-1} href={tool.href} target="_blank" className="transition-transform block relative group">
                {tool.image}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-background py-1 px-2 rounded-sm opacity-0 transition-all w-max group-hover:opacity-100 group-hover:-top-9 bg-foreground text-sm">{tool.name}</span>
              </Link>
            ))}
          </div>
        </div>
        </div>
      </Mwp>
    </section>
  );
}
