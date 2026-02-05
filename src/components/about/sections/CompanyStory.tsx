import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { COLORS } from "@/constants/colors";
import { 
  Building2, 
  Target, 
  Lightbulb, 
  Trophy,
  Calendar,
  MapPin,
  Users,
  Code
} from "lucide-react";

export default function CompanyStory() {
  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started with vision to digitize institutional operations",
      icon: Calendar,
    },
    {
      year: "2016",
      title: "First Major ERP Project",
      description: "Delivered comprehensive solution for state university",
      icon: Building2,
    },
    {
      year: "2018",
      title: "Government Partnership",
      description: "Became certified vendor for government institutions",
      icon: Trophy,
    },
    {
      year: "2020",
      title: "National Expansion",
      description: "Serving 30+ institutions across multiple states",
      icon: MapPin,
    },
    {
      year: "2022",
      title: "Innovation Hub",
      description: "Launched R&D center for emerging technologies",
      icon: Lightbulb,
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as top institutional technology provider",
      icon: Target,
    },
  ];

  const coreValues = [
    {
      title: "Institutional Focus",
      description: "Every solution is built with educational and government needs at its core",
      icon: Building2,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quality First",
      description: "Rigorous testing and quality assurance for every deliverable",
      icon: Trophy,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Continuous Innovation",
      description: "Staying ahead with emerging technologies and best practices",
      icon: Lightbulb,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Long-term Partnership",
      description: "Building relationships that extend beyond project completion",
      icon: Users,
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <section className="relative bg-white py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0494e2]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} relative z-10`}>
        {/* Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b4d8f0] border border-[#0494e2]/30 mb-8">
            <Code className="w-4 h-4 text-[#0494e2]" />
            <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}>
              Our Journey
            </span>
          </div>
          
          <h1 className={`${TYPOGRAPHY.display.xl} text-slate-900 font-bold mb-8 leading-tight`}>
            Building the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0494e2] to-cyan-600">
              Institutional Technology
            </span>
          </h1>
          
          <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-3xl mx-auto leading-relaxed`}>
            From our humble beginnings to becoming a trusted partner for educational institutions 
            across the nation, our story is one of dedication, innovation, and unwavering commitment 
            to institutional excellence.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
          {/* Left: Company Story */}
          <div>
            <h2 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-6`}>
              Our Foundation
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className={`${TYPOGRAPHY.body.md} text-slate-600 leading-relaxed`}>
                Founded in 2014 by a team of technology professionals with deep experience in 
                educational institutions, we recognized a critical gap in the market. Institutions 
                needed technology solutions that truly understood their unique workflows, compliance 
                requirements, and operational challenges.
              </p>
              
              <p className={`${TYPOGRAPHY.body.md} text-slate-600 leading-relaxed`}>
                What started as a small team serving local universities has grown into a national 
                provider of institutional ERP solutions, serving over 48 institutions and delivering 
                more than 150 successful projects. Our focus has never wavered - building technology 
                that empowers educational and government organizations to achieve their missions.
              </p>
              
              <p className={`${TYPOGRAPHY.body.md} text-slate-600 leading-relaxed`}>
                Today, we continue to innovate while maintaining our core values of quality, 
                partnership, and institutional expertise that have defined our journey from the beginning.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Years of Experience" },
                { value: "150+", label: "Projects Delivered" },
                { value: "48+", label: "Institutions Served" },
                { value: "99%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className={`${TYPOGRAPHY.heading.lg} font-bold text-[#0494e2] mb-1`}>
                    {stat.value}
                  </div>
                  <div className={`${TYPOGRAPHY.caption.sm} text-slate-600 font-medium`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#0494e2]/5 to-cyan-500/5 border border-[#0494e2]/20 rounded-2xl p-8">
              <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 font-bold mb-4 flex items-center gap-3`}>
                <Target className="w-6 h-6 text-[#0494e2]" />
                Our Mission
              </h3>
              <p className={`${TYPOGRAPHY.body.md} text-slate-600 leading-relaxed`}>
                To empower educational institutions and government organizations with 
                cutting-edge technology solutions that streamline operations, enhance 
                decision-making, and support their core mission of education and public service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-200 rounded-2xl p-8">
              <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 font-bold mb-4 flex items-center gap-3`}>
                <Lightbulb className="w-6 h-6 text-purple-500" />
                Our Vision
              </h3>
              <p className={`${TYPOGRAPHY.body.md} text-slate-600 leading-relaxed`}>
                To be the leading technology partner for institutions nationwide, 
                recognized for our deep institutional expertise, innovative solutions, 
                and commitment to long-term partnerships that drive meaningful digital transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              What Guides Us
            </h2>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              Our core values shape every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#0494e2]/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl pointer-events-none`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-bold mb-3`}>
                      {value.title}
                    </h3>
                    
                    <p className={`${TYPOGRAPHY.body.sm} text-slate-600 leading-relaxed`}>
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Our Journey Through Time
            </h2>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              Key milestones that shaped our growth and evolution as institutional technology leaders.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#0494e2]/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={index} 
                    className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0494e2] border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Content Card */}
                    <div className={`w-5/12 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="inline-flex items-center gap-2 mb-3">
                          <Icon className="w-5 h-5 text-[#0494e2]" />
                          <span className={`${TYPOGRAPHY.caption.sm} font-bold text-[#0494e2]`}>
                            {milestone.year}
                          </span>
                        </div>
                        
                        <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-bold mb-2`}>
                          {milestone.title}
                        </h3>
                        
                        <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Empty space for alignment */}
                    <div className="w-2/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}