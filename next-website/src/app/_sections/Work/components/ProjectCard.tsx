import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export type ProjectProps = {
  name: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  githubLink?: string;
  websiteLink?: string;
  tags: string[];
  reverse?: boolean;
};

export default function ProjectCard({ name, image, githubLink, websiteLink, tags, reverse }: ProjectProps) {
  return (
    <div className={cn("group max-w-5xl w-full", {
      "self-start": !reverse,
      "self-end": reverse,
    })}>
      <div className="relative mb-6">
        <div className="w-full aspect-video rounded-bl-2xl top-2 left-2 bg-foreground/10 border border-foreground absolute -z-[1]" />
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="rounded-bl-2xl w-full aspect-video object-cover"
        />
      </div>
      <div className={cn("flex flex-row items-center justify-between mb-6", {
        "md:flex-row-reverse": reverse,
      })}>
        <h3 className="text-3xl">{name}</h3>
        <div className="flex items-center gap-2">
          {websiteLink && (
            <Button asChild variant={"ghost"} size={"icon"}>
              <Link href={websiteLink} target="_blank">
                <ExternalLinkIcon className="size-6" />
              </Link>
            </Button>
          )}
          {githubLink && (
            <Button asChild variant={"ghost"} size={"icon"}>
              <Link href={githubLink} target="_blank">
                <GitHubLogoIcon className="size-6" />
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className={cn("flex items-center justify-start flex-wrap gap-2", {
        "lg:justify-end": reverse,
      })}>
        {tags.map((tag, index) => (
          <span key={index} className="text-sm font-bold bg-foreground text-background rounded-full py-1 px-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
