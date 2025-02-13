import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ModeToggle";
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
        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/portfolio">Portfolio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop ModeToggle */}
        <div className="hidden sm:block">
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
