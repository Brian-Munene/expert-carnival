import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" bg-primary text-primary-foreground">
      <nav className="container m-auto p-4 flex justify-between items-center">
        <div className="text-primary-foreground text-2xl">
          <Link href="/">Name Logo</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="text-white hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-white hover:underline">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
