import Hero from "@/components/sections/Hero";
import SpaceTypes from "@/components/sections/SpaceTypes";
import WhySportSolutions from "@/components/sections/WhySportSolutions";
import Brands from "@/components/sections/Brands";
import HomeCTA from "@/components/sections/HomeCTA";
import ZohoForm from "@/components/ZohoForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SpaceTypes />
      <WhySportSolutions />
      <Brands />
      <HomeCTA />
      <section id="contacto" className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ZohoForm
            src="https://forms.zohopublic.com/SportSolutions2025/form/FormularioGeneral/formperma/HUZg-O-8C31vPjux7xvDXNp4XjgVvP-bLTjq6Acu-O4"
            label="Formulario General"
            height="804px"
          />
        </div>
      </section>
    </>
  );
}
