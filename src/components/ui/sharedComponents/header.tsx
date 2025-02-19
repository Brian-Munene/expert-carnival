import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import MainMenu from "./mainMenu";
import MobileNavbar from "./mobileNavbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 sm:p-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Name Logo
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6">
          <MainMenu />
          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex items-center gap-4">
          <ModeToggle />
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}
