import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

export const navItems = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];
export default function Navbar() {
  return (
    <nav className=" container m-auto flex p-8 sm:p-16 justify-between items-center">
      <div className=" text-2xl">
        <Link href="/">Name Logo</Link>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex space-x-4 text-xl">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.link} className="hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
}
