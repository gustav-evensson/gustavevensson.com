import { Mwp } from "@/components/MaxWidthProvider";
import SectionNumber from "@/components/SectionNumber";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 pb-32">
      <Mwp className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:px-16">
        <div className="relative w-full max-w-xl">
          <SectionNumber number={"01"} />
          <h2 className="text-4xl font-medium mb-4">About</h2>
          <p className="text-base md:text-lg lg:text-xl">
            <span className="mb-2 inline-block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus nec nisl lacinia tincidunt. Nullam auctor, nisl eu sollicitudin
              tristique, purus erat lacinia libero, nec tincidunt nulla turpis nec libero. Nullam auctor, nisl eu sollicitudin tristique, purus erat
              lacinia libero, nec tincidunt nulla turpis nec libero.
            </span>
            <span className="inline-block">
              Nullam auctor, nisl eu sollicitudin tristique, purus erat lacinia libero, nec tincidunt nulla turpis nec libero. Nullam auctor, nisl eu
              sollicitudin tristique, purus erat lacinia libero, nec tincidunt nulla turpis nec libero.
            </span>
          </p>
        </div>
        <div className="aspect-square w-full relative group max-w-lg">
          <div className="w-full aspect-square bg-foreground/10 border border-foreground absolute -z-[1] top-2 left-2 transition-all group-hover:top-4 group-hover:left-4 rounded-bl-2xl" />
          <Image src="/ge_logo_bg_black_512.jpg" alt="Profile picture" width={1024} height={10024} objectFit="cover" className="rounded-bl-2xl"/>
        </div>
      </Mwp>
    </section>
  );
}
