import Link from "next/link";
import { navItems } from "./navbar";
import { Button } from "../button";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 sm:py-16 space-y-8">
      <section className="flex flex-col gap-6 bg-accent text-accent-foreground p-8 sm:grid sm:grid-cols-3">
        {/* Branding / Logo and CTA */}
        <div className="space-y-6">
          <Link href="/" className="text-2xl font-bold">
            Logo
          </Link>
          <p>
            We believe small businesses deserve better. Just because you’re
            small, doesn’t mean your site needs to be. Let us make you something
            amazing.
          </p>
          <Button variant="default" className="rounded-xl">
            Get Started
          </Button>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className="hover:underline transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">Contact Us</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:kkkeke@hhhh.com"
              className="hover:underline transition-colors duration-200"
            >
              kkkeke@hhhh.com
            </a>
          </p>
          {/* add social media icons here */}
        </div>
      </section>

      {/* Bottom Copyright */}
      <section className="text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} WebWeave Studio. All rights
          reserved.
        </p>
      </section>
    </footer>
  );
}
