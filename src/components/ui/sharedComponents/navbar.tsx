import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

export default function Navbar() {
  return (
    <nav className="flex p-6 justify-between items-center">
      <div className=" text-2xl">
        <Link href="/">Name Logo</Link>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex space-x-4 text-xl">
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:underline">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
}
