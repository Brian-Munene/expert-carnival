import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function HeroSection() {
  return (
    // Main hero container with responsive padding
    <section className="bg-background py-8" aria-label="Hero Section">
      <div className="container mx-auto px-4 grid md:grid-cols-2 md:gap-8 items-center">
        {/* Left Section: Text Content */}
        <div>
          {/* Small title at the top */}
          <h3 className="text-sm uppercase tracking-widest text-primary">
            Bespoke Designs, Pure Code
          </h3>

          {/* Big title in the middle */}
          <h1 className="mt-2 text-4xl sm:text-3xl md:text-6xl font-bold text-foreground">
            Small Business Website Specialist
          </h1>

          {/* Introductory paragraph */}
          <p className="mt-4 md:text-lg  text-muted-foreground">
            Forget page builders and generic WordPress templates. We deliver
            entirely custom, hand-coded websites that drive superior
            performance—starting at just $175/month. Plus, explore our
            innovative AI solutions and comprehensive web management services.
            We create modern, responsive websites that help your business grow.
          </p>

          {/* Two buttons at the bottom */}
          <div className="mt-8 flex space-x-4">
            <Button variant="default" size="lg">
              Get Started
            </Button>
            <Button variant="ghost" size="lg">
              About Us
            </Button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="relative">
          {/* The image shows a sample website on desktop next to an iPhone */}
          <Image
            src="/images/heroImgWithoutBg.png"
            alt="Responsive website demo on desktop and mobile"
            width={600}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
