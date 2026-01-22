import ComplianceSecuritySection from "@/component/Home/ComplianceSecuritySection";
import Hero from "@/component/Home/Hero";
import KeyFeaturesSection from "@/component/Home/KeyFeaturesSection";
import Services from "@/component/Home/Services";
import ServicesSection from "@/component/Home/ServicesSection";
import StrategyCTAWithForm from "@/component/Home/StrategyCTAWithForm";
import TrustedPartners from "@/component/Home/TrustedPartners";
import TrustSection from "@/component/Home/TrustSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedPartners />
      <Services />
      <ServicesSection />
      <TrustSection />
      <ComplianceSecuritySection />
      <StrategyCTAWithForm />
      <KeyFeaturesSection />
    </main>
  );
}
