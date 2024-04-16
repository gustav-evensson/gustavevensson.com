import { Mwp } from "@/components/MaxWidthProvider";
import SectionNumber from "@/components/SectionNumber";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:pt-24 md:pb-32 relative">
      <div className="absolute inset-0 vignette" />
      <Mwp className="flex flex-col items-center justify-center gap-x-16 gap-y-8 lg:flex-row lg:px-16">
        <div className="relative w-full max-w-xl">
          <SectionNumber number={"01"} />
          <h2 className="text-4xl font-medium mb-4 relative">About</h2>
          <p className="text-base md:text-lg lg:text-xl relative">
            <span className="mb-2 inline-block">
              Hello! My name is Gustav, I’m a fullstack developer with over half a decade of experience. I build amazing applications for the web using
              the latest a most popular tools.
            </span>
            <span className="mb-2 inline-block">
              I run my own web agency called <a href="https://geweb.se" target="_blank" className="underline hover:text-primary">GeWeb</a>. Check it out or hit me upp to learn more about the work I do.
            </span>
            <span className="inline-block">Check out the tools I use and some projects below!</span>
          </p>
        </div>
        <div className="aspect-square w-full relative group max-w-xl">
          <div className="w-full aspect-square bg-foreground/10 border border-foreground absolute top-2 left-2 transition-all group-hover:top-4 group-hover:left-4 rounded-bl-lg md:rounded-bl-2xl" />
          <svg
            width="512"
            height="512"
            className="size-full rounded-bl-lg md:rounded-bl-2xl border border-foreground relative"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="512" height="512" className="fill-background transition-none" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M384 266H264V294C264 302 268 306 276 306H384V322H128V306H236C244 306 248 302 248 294V266H128V218C128 202 140 190 156 190L236 190C252 190 256 200 256 200C256 200 260 190 276 190H356C372 190 384 202 384 218V266ZM144 250H248V218C248 210 244 206 236 206H156C148 206 144 210 144 218V250ZM368 250H264V218C264 210 268 206 276 206H356C364 206 368 210 368 218V250Z"
              className="fill-foreground"
            />
          </svg>
        </div>
      </Mwp>
    </section>
  );
}
