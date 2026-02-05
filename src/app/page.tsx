import Hero from "@/components/home/sections/Hero";
import TrustedPartners from "@/components/home/sections/TrustedPartners";
import Services from "@/components/home/sections/Services";
import EnhancedServicesPreview from "@/components/home/sections/EnhancedServicesPreview";
import ProcessSection from "@/components/home/sections/ProcessSection";
import WhyChooseUsSection from "@/components/home/sections/WhyChooseUsSection";
import FinalCTASection from "@/components/home/sections/FinalCTASection";
import GIGWComplianceSection from "@/components/home/sections/GIGWComplianceSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedPartners />
      <Services />
      <EnhancedServicesPreview />
      <GIGWComplianceSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <FinalCTASection />
    </main>
  );
}
