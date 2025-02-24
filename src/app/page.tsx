import ServicesSection from "@/components/custom/servicesSection";
import HeroSection from "../components/custom/heroSection";
import Image from "next/image";
import Portfolio from "./portfolio/page";
import PortfolioSection from "@/components/custom/portfolioSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
    </>
  );
}
