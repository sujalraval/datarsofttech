import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { 
  Award, 
  Trophy, 
  BadgeCheck, 
  FileCheck,
  Star,
  Crown,
  Medal,
  Target
} from "lucide-react";

export default function AchievementsRecognition() {
  const certifications = [
    {
      title: "GIGW 3.0 Compliance Certified",
      issuer: "Ministry of Electronics & IT",
      year: "2023",
      description: "Certified for compliance with Government of India website guidelines",
      icon: BadgeCheck,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "ISO 27001:2013 Certified",
      issuer: "International Standards Organization",
      year: "2022",
      description: "Information security management system certification",
      icon: FileCheck,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Startup India Recognized",
      issuer: "Government of India",
      year: "2021",
      description: "Recognized as innovative technology startup",
      icon: Star,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "MSME Certified",
      issuer: "Ministry of Micro, Small & Medium Enterprises",
      year: "2020",
      description: "Certified as micro, small and medium enterprise",
      icon: Award,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const awards = [
    {
      title: "Best Educational Technology Provider",
      issuer: "National EdTech Awards",
      year: "2023",
      category: "Institutional Solutions",
      icon: Trophy,
      highlight: true
    },
    {
      title: "Innovation Excellence Award",
      issuer: "Government Technology Summit",
      year: "2022",
      category: "Public Sector Innovation",
      icon: Crown,
      highlight: true
    },
    {
      title: "Top 50 EdTech Companies",
      issuer: "Education Technology Review",
      year: "2023",
      category: "Institutional ERP",
      icon: Medal,
      highlight: false
    },
    {
      title: "Customer Satisfaction Excellence",
      issuer: "Industry Association",
      year: "2022",
      category: "Client Services",
      icon: Target,
      highlight: false
    }
  ];

  const partnerships = [
    {
      name: "Ministry of Education",
      type: "Government Partnership",
      description: "Approved vendor for educational technology solutions",
      logo: "/partnerships/moe.png"
    },
    {
      name: "State Education Boards",
      type: "Multiple States",
      description: "Authorized provider for state-level educational institutions",
      logo: "/partnerships/state.png"
    },
    {
      name: "University Grants Commission",
      type: "Research Partnership",
      description: "Collaboration on institutional research projects",
      logo: "/partnerships/ugc.png"
    },
    {
      name: "NITI Aayog",
      type: "Policy Advisory",
      description: "Contributing to educational technology policy development",
      logo: "/partnerships/niti.png"
    }
  ];

  return (
    <section className="relative bg-white py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#0494e2]/15 to-purple-500/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} relative z-10`}>
        {/* Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b4d8f0] border border-[#0494e2]/30 mb-8">
            <Award className="w-4 h-4 text-[#0494e2]" />
            <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}>
              Recognition & Excellence
            </span>
          </div>
          
          <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}>
            Honored by <span className="text-[#0494e2]">Industry Leaders</span> and <span className="text-purple-600">Institutions</span>
          </h2>
          
          <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-3xl mx-auto leading-relaxed`}>
            Our commitment to excellence in institutional technology has been recognized 
            through industry certifications, prestigious awards, and strategic partnerships 
            with leading educational organizations.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-4`}>
              Industry Certifications
            </h3>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              Validating our commitment to security, compliance, and quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#0494e2]/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl pointer-events-none`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <div className={`${TYPOGRAPHY.caption.sm} font-bold text-slate-500 uppercase tracking-wider`}>
                          {cert.year}
                        </div>
                      </div>
                    </div>
                    
                    <h4 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-bold mb-2`}>
                      {cert.title}
                    </h4>
                    
                    <div className={`${TYPOGRAPHY.body.sm} text-[#0494e2] font-semibold mb-3`}>
                      {cert.issuer}
                    </div>
                    
                    <p className={`${TYPOGRAPHY.body.sm} text-slate-600 leading-relaxed`}>
                      {cert.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-4`}>
              Industry Recognition
            </h3>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              Awards and recognition from industry leaders and educational organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <div 
                  key={index}
                  className={`relative rounded-2xl p-8 transition-all duration-300 ${
                    award.highlight 
                      ? 'bg-gradient-to-br from-[#0494e2] to-cyan-500 text-white border border-[#0494e2]/30 shadow-lg' 
                      : 'bg-white border border-slate-200 hover:border-purple-300 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      award.highlight 
                        ? 'bg-white/20' 
                        : 'bg-gradient-to-br from-purple-500 to-pink-500'
                    }`}>
                      <Icon className={`w-7 h-7 ${award.highlight ? 'text-white' : 'text-white'}`} />
                    </div>
                    <div className={`text-right ${award.highlight ? 'text-white/80' : 'text-slate-500'}`}>
                      <div className={`${TYPOGRAPHY.caption.sm} font-bold uppercase tracking-wider`}>
                        {award.year}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className={`${TYPOGRAPHY.heading.sm} font-bold mb-2 ${
                    award.highlight ? 'text-white' : 'text-slate-900'
                  }`}>
                    {award.title}
                  </h4>
                  
                  <div className={`${TYPOGRAPHY.body.sm} font-semibold mb-3 ${
                    award.highlight ? 'text-white/90' : 'text-purple-600'
                  }`}>
                    {award.category}
                  </div>
                  
                  <div className={`${TYPOGRAPHY.body.sm} ${
                    award.highlight ? 'text-white/80' : 'text-slate-600'
                  } leading-relaxed`}>
                    {award.issuer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div>
          <div className="text-center mb-16">
            <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-4`}>
              Strategic Partnerships
            </h3>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              Collaborating with leading educational and government organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-[#0494e2]/30 transition-colors group"
              >
                <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#b4d8f0] transition-colors">
                  <div className="w-8 h-8 bg-slate-300 rounded"></div>
                </div>
                
                <h4 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-bold mb-2`}>
                  {partner.name}
                </h4>
                
                <div className={`${TYPOGRAPHY.caption.sm} text-[#0494e2] font-semibold mb-3`}>
                  {partner.type}
                </div>
                
                <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>
                  {partner.description}
                </p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}