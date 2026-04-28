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
      <section id="contacto" className="bg-[#1a1a1a] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h2 className="font-condensed font-black text-4xl lg:text-5xl uppercase text-white">
            Cotiza tu proyecto
          </h2>
          <p className="text-white/60 text-base mt-3">Un asesor comercial se pondrá en contacto contigo a la brevedad.</p>
        </div>
        <div className="max-w-4xl mx-auto px-6">
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
