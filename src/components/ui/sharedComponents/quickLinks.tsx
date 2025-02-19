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
//Quick navigation links
export default function QuickLinks() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.link;
          return (
            <li key={item.link}>
              <Link
                href={item.link}
                className={`transition-colors duration-200 hover:underline ${
                  isActive
                    ? "font-bold text-primary border-b-2 border-primary"
                    : "text-primary"
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
