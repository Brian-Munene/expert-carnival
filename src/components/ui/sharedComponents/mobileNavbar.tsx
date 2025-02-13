"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  // Framer Motion variants for sliding animation
  const slideVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button aria-label="Toggle Menu" className="p-2 focus:outline-none">
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </DialogTrigger>
      <AnimatePresence>
        {open && (
          // Wrap the DialogContent with AnimatePresence and motion.div for animation
          <DialogContent className="sm:hidden p-0">
            {/* Provide a title for accessibility. Using VisuallyHidden hides it visually but keeps it for screen readers */}
            <DialogTitle>
              <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
            </DialogTitle>
            <motion.div
              className="fixed top-20 left-0 w-1/2 h-full bg-secondary text-secondary-foreground p-4 shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col space-y-4">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/about" onClick={() => setOpen(false)}>
                        About
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/portfolio" onClick={() => setOpen(false)}>
                        Portfolio
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/contact" onClick={() => setOpen(false)}>
                        Contact Us
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
