import SectionNumber from "@/components/section-number";
import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section id="about" className="max-w-screen-md lg:max-w-screen-lg mx-auto">
      <div className="relative w-full max-w-screen-lg mx-auto p-8 sm:p-16 flex flex-col gap-1">
        <BlurFade inView>
          <SectionNumber number={"01"} />
          <h2 className="text-2xl font-medium font-figtree mb-1 relative">About me</h2>
        </BlurFade>
        <div className="flex gap-8 items-center lg:items-start lg:flex-row flex-col">
          <div className="w-full">
            <BlurFade inView delay={0.1} className="w-full text-sm sm:text-base">
              <p className="mb-2">
                Hello! My name is Gustav Evensson, and I am a fullstack developer with a passion for
                crafting exceptional web experiences. My journey into web development began in high
                school in 2019, where I first explored the basics and quickly became captivated by
                the limitless possibilities of coding.
              </p>
              <p className="mb-2">
                Driven by this passion, I pursued my dream of becoming a professional developer.
                After several years of dedicated learning and hands-on experience with various
                projects, I now run my own web development agency{" "}
                <Link
                  href="https://www.geweb.se"
                  className="text-primary font-medium hover:underline"
                >
                  GeWeb
                </Link>
                . For over a year, I have specialized in crafting tailored web applications and
                websites designed to meet the unique needs of my clients
              </p>
              <p>Down below you can see some of the technologies I have worked with.</p>
            </BlurFade>
          </div>
          <BlurFade
            inView
            delay={0.2}
            className="aspect-square w-full relative group max-w-md lg:max-w-none"
          >
            <div className="w-full aspect-square border border-primary/70 absolute top-2 left-2 transition-all rounded-bl-lg" />
            <div className="w-full overflow-hidden aspect-auto border border-primary/70 rounded-bl-lg relative">
              <Image
                src="/gustav-evensson.jpeg"
                alt="About"
                width={512}
                height={512}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-all duration-300" />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
