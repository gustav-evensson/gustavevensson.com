import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import { GithubIcon, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  liveLink?: string;
  githubLink?: string;
  reversed?: boolean;
  tags: string[];
};

const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  liveLink,
  githubLink,
  reversed = false,
  tags,
}: ProjectCardProps) => {
  return (
    <BlurFade
      inView
      className={cn(
        "relative flex flex-col md:flex-row items-center gap-6 md:gap-4",
        reversed && "md:flex-row-reverse"
      )}
    >
      <div className="relative w-full md:w-2/3 aspect-video">
        <div className="w-full z-10 aspect-video relative border border-primary/70 rounded-bl-lg overflow-hidden">
          <Image src={image.src} alt={image.alt} fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
        <div className="absolute top-2 left-2 transition-all rounded-bl-lg border border-primary/70 w-full aspect-video" />
      </div>
      <div
        className={cn(
          "md:absolute z-10 right-0 top-1/2 md:-translate-y-1/2 flex flex-col items-start md:items-end gap-2 w-full md:w-1/2",
          reversed && "left-0 md:items-start"
        )}
      >
        <h5
          className={cn("text-sm font-medium font-figtree text-primary", !reversed && "text-right")}
        >
          {subtitle}
        </h5>
        <h3 className={cn("text-2xl font-medium font-figtree mb-2", !reversed && "text-right")}>
          {title}
        </h3>
        <div className="bg-muted/30 md:bg-muted/70 border border-border/80 rounded-bl-lg backdrop-blur-sm p-4 mb-2">
          <p className={cn("font-figtree mb-2", !reversed && "md:text-right")}>{description}</p>
          <div
            className={cn(
              "flex gap-x-4 gap-y-2 flex-wrap text-muted-foreground",
              !reversed && "md:justify-end"
            )}
          >
            {tags.map((tag, index) => (
              <p key={index} className="text-sm font-fira-code">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className={cn("flex gap-4", !reversed && "justify-end")}>
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              className="hover:text-primary transition-all hover:scale-110"
            >
              <SquareArrowOutUpRight />
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              className="hover:text-primary transition-all hover:scale-110"
            >
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </BlurFade>
  );
};

export default ProjectCard;
