import SectionNumber from "@/components/section-number";
import BlurFade from "@/components/ui/blur-fade";
import ContactForm from "./components/contact-form";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="relative w-full max-w-screen-lg mx-auto p-8 sm:p-16 flex flex-col gap-1">
        <BlurFade inView>
          <SectionNumber number={"03"} />
          <h2 className="text-2xl font-medium font-figtree mb-1 relative">Contact</h2>
          <p className="text-muted-foreground mb-4">Don&apos;t be a stranger. Reach out!</p>
        </BlurFade>
        <BlurFade inView>
          <ContactForm />
        </BlurFade>
      </div>
    </section>
  );
};

export default ContactSection;
