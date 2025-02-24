import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// TypeScript interface for portfolio items
interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

// Example portfolio items
const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A fully-customized e-commerce solution designed to boost sales and engage customers.",
    image: "/images/heroImage.png",
    link: "/blog",
  },
  {
    id: "2",
    title: "Corporate Website",
    description:
      "A modern, responsive website tailored for corporate branding and online presence.",
    image: "/images/heroImage.png",
    link: "/blog",
  },
  {
    id: "3",
    title: "SaaS Dashboard",
    description:
      "A feature-rich dashboard for managing SaaS products with intuitive UI and analytics.",
    image: "/images/heroImage.png",
    link: "/blog",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-background"
      aria-label="Portfolio"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Case Studies</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our work and see how we've helped businesses excel online.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group">
              {/* Image Section */}
              <div className="relative h-48 w-full">
                <Image
                  src={`${item.image}`}
                  alt={item.title}
                  fill
                  className="rounded-t-md object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Card Header with Title */}
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              {/* Card Content with Description */}
              <CardContent className="px-4 pb-4 text-muted-foreground">
                {item.description}
              </CardContent>
              {/* Card Footer with Link */}
              <CardFooter className="p-4">
                <Link
                  href={`${item.link}`}
                  className="flex items-center text-primary font-medium hover:underline"
                >
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
