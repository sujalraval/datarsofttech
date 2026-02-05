import ComplianceSecuritySection from "@/components/home/sections/ComplianceSecuritySection";
import Hero from "@/components/home/sections/Hero";
import KeyFeaturesSection from "@/components/home/sections/KeyFeaturesSection";
import Services from "@/components/home/sections/Services";
import EnhancedServicesPreview from "@/components/home/sections/EnhancedServicesPreview";
import StrategyCTAWithForm from "@/components/home/sections/StrategyCTAWithForm";
import TrustedPartners from "@/components/home/sections/TrustedPartners";
import TrustSection from "@/components/home/sections/TrustSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedPartners />
      <Services />
      <EnhancedServicesPreview />
      <TrustSection />
      <ComplianceSecuritySection />
      <StrategyCTAWithForm />
      <KeyFeaturesSection />
    </main>
  );
}
