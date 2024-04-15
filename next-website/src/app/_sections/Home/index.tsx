import { Link2Icon } from "@radix-ui/react-icons";
import { Mwp } from "@/components/MaxWidthProvider";
import Link from "next/link";
import { LinkComponent } from "@/components/LinkComponent";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function HomeSection() {
  return (
    <section className="min-h-screen relative flex justify-center items-center grid-bg">
      <div className="absolute inset-0 vignette"></div>
      <Mwp className="flex flex-col items-center relative justify-center my-44">
        <div className="relative">
          <div className="absolute -top-32 sm:-translate-y-0 -translate-x-1/2 sm:-translate-x-0 sm:-top-1/3 left-1/2 sm:left-[10%]">
            <span className="text-6xl sm:text-5xl lg:text-6xl xl:text-7xl animate-wave origin-bottom-right block">👋</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-muted-foreground font-bold uppercase text-center">
            hi i&apos;m{" "}
            <span className="text-foreground not-sr-only">
              <span className="transition-transform hover:-translate-y-2 inline-block">g</span>
              <span className="transition-transform hover:-translate-y-2 inline-block">u</span>
              <span className="transition-transform hover:-translate-y-2 inline-block">s</span>
              <span className="transition-transform hover:-translate-y-2 inline-block">t</span>
              <span className="transition-transform hover:-translate-y-2 inline-block">a</span>
              <span className="transition-transform hover:-translate-y-2 inline-block">v</span>
            </span>
            <span className="sr-only">gustav</span>
          </h1>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-muted-foreground font-bold uppercase text-center">
            i&apos;m a fullstack developer
          </h2>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2 mt-4">
          <LinkComponent href="https://www.linkedin.com/in/gustav-evensson-bb9547222/" target="_blank">
            <Link2Icon className="w-6 h-6" />
            <span>LinkedIn</span>
          </LinkComponent>
          <LinkComponent href="https://github.com/gustav-evensson" target="_blank">
            <Link2Icon className="w-6 h-6" />
            <span>GitHub</span>
          </LinkComponent>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-32">
          <ScrollAnimation />
        </div>
      </Mwp>
    </section>
  );
}
