import Hero from "@/components/sections/Hero";
import SpaceTypes from "@/components/sections/SpaceTypes";
import WhySportSolutions from "@/components/sections/WhySportSolutions";
import Brands from "@/components/sections/Brands";
import Stats from "@/components/sections/Metrics";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Services from "@/components/sections/Services";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SpaceTypes />
      <WhySportSolutions />
      <Brands />
      <Stats />
      <FeaturedProducts />
      <Services />
      <ContactCTA />
    </>
  );
}
