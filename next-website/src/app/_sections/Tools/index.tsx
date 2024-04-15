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

const tools = [
  {
    name: "Next.js",
    image: <NextIcon />,
  },
  {
    name: "React",
    image: <ReactIcon />,
  },
  {
    name: "Typescript",
    image: <TsIcon />,
  },
  {
    name: "Tailwind CSS",
    image: <TailwindIcon />,
  },
  {
    name: "Scss",
    image: <ScssIcon />,
  },
  {
    name: "Firebase",
    image: <FirebaseIcon />,
  },
  {
    name: "MongoDB",
    image: <MongoDBIcon />,
  },
  {
    name: "Github",
    image: <GithubIcon />,
  },
  {
    name: "Figma",
    image: <FigmaIcon />,
  },
];

export default function ToolsSection() {
  return (
    <section className="py-24">
      <Mwp className="flex justify-center">
        <div className="overflow-hidden overlay-shadow">
        <div className="overflow-hidden min-w-[1000px]">
          <div className="flex items-center justify-around w-[200%] min-w-fit carousel-animation">
            {tools.map((tool) => tool.image)}
            {tools.map((tool) => tool.image)}
          </div>
        </div>
        </div>
      </Mwp>
    </section>
  );
}
