import { Mwp } from "@/components/MaxWidthProvider";
import SectionNumber from "@/components/SectionNumber";
import ContactForm from "./components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-32 relative">
      <div className="absolute inset-0 vignette" />
      <Mwp className="lg:px-16 relative">
        <div className="relative w-full mb-8">
          <SectionNumber number={"03"} />
          <h2 className="text-4xl font-medium mb-4 relative">Contact</h2>
          <p className="text-base md:text-lg lg:text-xl relative">Don&apos;t be a stranger, reach out!</p>
        </div>
        <ContactForm />
      </Mwp>
    </section>
  );
}
