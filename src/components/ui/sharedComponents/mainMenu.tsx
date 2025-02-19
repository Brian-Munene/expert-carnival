"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../navigation-menu";
import { navItems } from "./navItems";

export default function MainMenu() {
  // Get the current pathname from Next.js
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex space-x-4">
        {navItems.map((item) => {
          // Determine if the current item is active
          const isActive = pathname === item.link;

          return (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.link}
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
  );
}
