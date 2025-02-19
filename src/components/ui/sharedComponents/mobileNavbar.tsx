"use client";
import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import { HiMenu, HiX } from "react-icons/hi";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { navItems } from "./navItems";
import { Button } from "../button";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
  // State to manage the open/close status of the mobile menu
  const [open, setOpen] = useState(false);
  //Get the current pathname from Next.js
  const pathname = usePathname();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* SheetTrigger: Button to toggle mobile menu */}
      <SheetTrigger asChild>
        <Button aria-label="Toggle Menu" className="p-2" variant="secondary">
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </Button>
      </SheetTrigger>
      {/* Conditionally render SheetContent when open is true */}
      {open && (
        // SheetContent for the mobile menu. Adjusted for mobile view only (hidden on sm+ screens).
        <SheetContent className="sm:hidden flex justify-center items-start py-20">
          {/* Title for accessibility. Using VisuallyHidden hides it visually but keeps it for screen readers */}
          <SheetHeader>
            <SheetTitle>
              <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
            </SheetTitle>
          </SheetHeader>
          {/* Navigation menu listing */}
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col space-y-4">
              {navItems.map((item) => {
                // Determine if the current item is active
                const isActive = pathname === item.link;
                return (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.link}
                        onClick={() => setOpen(false)}
                        className={`transition-colors duration-200 py-2 px-4 rounded-md hover:underline focus:underline hover:underline-offset-4 ${
                          isActive
                            ? "font-bold bg-accent text-accent-foreground border-b-2 "
                            : "text-primary"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      )}
    </Sheet>
  );
}
