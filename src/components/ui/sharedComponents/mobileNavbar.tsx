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
import { navItems } from "./navbar";
import { Button } from "../button";

export default function MobileNavbar() {
  // State to manage the open/close status of the mobile menu
  const [open, setOpen] = useState(false);
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
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link href={item.link} onClick={() => setOpen(false)}>
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      )}
    </Sheet>
  );
}
