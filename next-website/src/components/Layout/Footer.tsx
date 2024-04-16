import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mwp } from "../MaxWidthProvider";

export default function Footer() {
  return (
    <footer className="bg-background relative">
      <Mwp className="py-24 lg:px-16">
        <div className="flex items-start justify-start gap-8 flex-wrap mb-12">
        <div className="flex flex-col">
          <h5 className="mb-3 text-lg">Contact</h5>
          <a href="mailto:evenssongustav@gmail.com" className="underline transition hover:text-primary mb-1">evenssongustav@gmail.com</a>
          <a href="tel:+46724527582" className="underline transition hover:text-primary">+46 72-452 75 82</a>
        </div>
        <div>
          <h5 className="mb-3 text-lg">Socials</h5>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/gustav-evensson-bb9547222/" target="_blank" className="group">
              <LinkedInLogoIcon className="w-6 h-6 transition group-hover:text-primary"/>
            </a>
            <a href="https://github.com/gustav-evensson" target="_blank" className="group">
              <GitHubLogoIcon className="w-6 h-6 transition group-hover:text-primary" />
            </a>
          </div>
        </div>
        </div>
      <p className="text-muted-foreground">© 2024 Gustav Evensson</p>
      <p className="text-muted-foreground">Designed and developed by Gustav Evensson</p>
      </Mwp>
    </footer>
  );
}
