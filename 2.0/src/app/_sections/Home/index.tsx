import BlurFade from "@/components/ui/blur-fade";
import { InteractiveHoverLink } from "@/components/ui/interactive-hover-button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const HomeSection = () => {
  return (
    <section className="relative min-h-screen flex items-center" id="home">
      <div className="relative w-full max-w-screen-lg mx-auto p-8 sm:p-16 flex flex-col gap-1">
        <BlurFade inView>
          <span className="font-fira-code font-normal inline-block mb-2 w-fit text-sm">
            Hi, I&apos;m
          </span>
        </BlurFade>
        <BlurFade inView delay={0.1}>
          <h1 className="text-2xl sm:text-4xl md:text-6xl w-fit font-bold font-figtree">Gustav Evensson</h1>
        </BlurFade>
        <BlurFade inView delay={0.2}>
          <h2 className="text-2xl sm:text-4xl md:text-6xl w-fit font-bold font-figtree text-muted-foreground">
            I&apos;m a Fullstack Developer
          </h2>
        </BlurFade>
        <BlurFade inView delay={0.3}>
          <p className="max-w-lg mt-3">
            I’m a software engineer specializing in designing and building tailored websites and
            applications. Currently, I use my skills to help my clients develop their dreams online
            at{" "}
            <Link href="https://geweb.se" className="hover:underline text-primary font-medium">
              GeWeb
            </Link>
            .
          </p>
        </BlurFade>
        <BlurFade inView delay={0.4}>
          <InteractiveHoverLink
            className="w-[175px] mt-4 hover:border-primary rounded-none rounded-bl-lg bg-background/30"
            href="#about"
            icon={<ArrowDown className="size-5" />}
            text="About me"
          />
        </BlurFade>
      </div>
    </section>
  );
};

export default HomeSection;
