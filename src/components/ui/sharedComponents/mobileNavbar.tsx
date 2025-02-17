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
import { navItems } from "./navbar";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  // Framer Motion variants for sliding animation
  const slideVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0 },
    exit: { y: "-100%" },
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
          <DialogContent className="sm:hidden flex justify-center fixed  w-5/6 m-auto h-1/2 top-64">
            {/* Title for accessibility. Using VisuallyHidden hides it visually but keeps it for screen readers */}
            <DialogTitle>
              <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
            </DialogTitle>
            <motion.div
              className="flex justify-center bg-secondary text-secondary-foreground p-4 w-full h-full shadow-lg "
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
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
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
