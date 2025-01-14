import NavMenu from "./NavMenu/NavMenu";
import GeLogo from "./ge-logo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full max-w-screen-lg mx-auto flex justify-between items-center p-4">
        <GeLogo className="w-16 h-8 text-foreground slide-in-top" />
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
