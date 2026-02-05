import Services from "@/components/home/sections/Services";
import ProcessSection from "@/components/home/sections/ProcessSection";
import WhyChooseUsSection from "@/components/home/sections/WhyChooseUsSection";
import FinalCTASection from "@/components/home/sections/FinalCTASection";
import TrustedPartners from "@/components/home/sections/TrustedPartners";

export default function ServicesPage() {
  return (
    <main>
      <Services />
      <TrustedPartners />
      <ProcessSection />
      <WhyChooseUsSection />
      <FinalCTASection />
    </main>
  );
}
