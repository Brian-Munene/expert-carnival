"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../navigation-menu";

// Navigation type
type NavItem = {
  name: string;
  link: string;
};
// Navigation items
export const navItems: NavItem[] = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];
