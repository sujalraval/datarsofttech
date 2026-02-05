import AboutCompanySection from "@/components/home/sections/AboutCompanySection";
import ProcessSection from "@/components/home/sections/ProcessSection";
import WhyChooseUsSection from "@/components/home/sections/WhyChooseUsSection";
import FinalCTASection from "@/components/home/sections/FinalCTASection";
import TrustedPartners from "@/components/home/sections/TrustedPartners";

export default function AboutPage() {
  return (
    <main>
      <AboutCompanySection />
      <TrustedPartners />
      <ProcessSection />
      <WhyChooseUsSection />
      <FinalCTASection />
    </main>
  );
}
