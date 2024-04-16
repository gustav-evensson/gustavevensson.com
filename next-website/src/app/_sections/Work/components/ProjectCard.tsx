import { LinkComponent } from "@/components/LinkComponent";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
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
    <div
      className={cn("flex flex-col lg:flex-row gap-x-8 max-w-5xl w-full relative", {
        "lg:flex-row-reverse lg:gap-x-6": reverse,
      })}
    >
      <div className="relative w-full mb-6 lg:mb-0">
        <div className="w-full aspect-[1655/1000] rounded-bl-lg md:rounded-bl-2xl top-2 left-2 bg-foreground/10 border border-foreground absolute" />
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="rounded-bl-lg md:rounded-bl-2xl w-full aspect-[1655/1000] object-cover relative border border-foreground"
        />
      </div>
      <div className="flex items-start gap-4 lg:flex-col justify-between">
        <div className="w-full">
          <h3 className={cn("text-2xl sm:text-3xl mb-4 w-full", {
            "lg:text-right": reverse,
          })}>{name}</h3>
          <div className={cn("items-center hidden justify-start lg:flex flex-wrap gap-2", {
            "justify-end": reverse,
          })}>
            {tags.map((tag, index) => (
              <span key={index} className="text-sm text-foreground bg-foreground/10 rounded-full py-1 px-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className={cn("items-center gap-6 hidden justify-end w-full sm:flex", {
          "lg:justify-start": !reverse,
        })}>
          {websiteLink && (
            <LinkComponent href={websiteLink} target="_blank">
              <Link2Icon className="w-6 h-6" />
              <span>Website</span>
            </LinkComponent>
          )}
          {githubLink && (
            <LinkComponent href={githubLink} target="_blank">
              <Link2Icon className="w-6 h-6" />
              <span>GitHub</span>
            </LinkComponent>
          )}
        </div>
        <div className="flex items-center justify-end gap-2 sm:hidden">
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
      <div className={cn("items-center justify-start flex lg:hidden flex-wrap gap-2")}>
        {tags.map((tag, index) => (
          <span key={index} className="text-xs sm:text-sm text-foreground bg-foreground/10 rounded-full py-1 px-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
