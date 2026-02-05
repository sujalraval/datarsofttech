import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { 
  Users, 
  GraduationCap, 
  Code, 
  Shield,
  UserCheck,
  Award,
  Brain,
  Heart
} from "lucide-react";

export default function LeadershipTeam() {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & CEO",
      bio: "20+ years in educational technology with PhD in Computer Science. Former CTO of state education board.",
      expertise: ["Strategic Vision", "Institutional Technology", "Digital Transformation"],
      image: "/team/ceo.jpg",
      icon: GraduationCap,
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      bio: "M.Tech in Software Engineering, 15+ years building scalable institutional systems. Former lead architect at major university.",
      expertise: ["System Architecture", "Cloud Solutions", "Security Implementation"],
      image: "/team/cto.jpg",
      icon: Code,
    },
    {
      name: "Amit Patel",
      role: "Head of Solutions",
      bio: "MBA in Technology Management, 12+ years in educational ERP implementation. Certified in multiple institutional frameworks.",
      expertise: ["ERP Implementation", "Process Optimization", "Client Relations"],
      image: "/team/solutions.jpg",
      icon: UserCheck,
    },
    {
      name: "Sneha Gupta",
      role: "Compliance Director",
      bio: "LLB with specialization in technology law, 10+ years in regulatory compliance for educational institutions.",
      expertise: ["Regulatory Compliance", "Data Protection", "GIGW Standards"],
      image: "/team/compliance.jpg",
      icon: Shield,
    },
    {
      name: "Vikram Singh",
      role: "Lead Developer",
      bio: "B.Tech in Computer Science, 8+ years in institutional software development. Expert in government-grade security.",
      expertise: ["Backend Development", "Database Architecture", "API Integration"],
      image: "/team/developer.jpg",
      icon: Brain,
    },
    {
      name: "Anjali Mehta",
      role: "UX Director",
      bio: "M.Des in Interaction Design, 10+ years creating user-centered interfaces for complex institutional systems.",
      expertise: ["User Experience", "Interface Design", "Accessibility"],
      image: "/team/ux.jpg",
      icon: Heart,
    }
  ];

  const advisoryBoard = [
    {
      name: "Prof. Nandita Rao",
      role: "Former VC, State University",
      expertise: "Higher Education Policy",
      icon: GraduationCap,
    },
    {
      name: "Dr. Arun Joshi",
      role: "Cybersecurity Expert",
      expertise: "Information Security",
      icon: Shield,
    },
    {
      name: "Sunita Verma",
      role: "Government Technology Advisor",
      expertise: "Public Sector Innovation",
      icon: Award,
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#0494e2]/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} relative z-10`}>
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0494e2]/30 mb-8 shadow-sm">
            <Users className="w-4 h-4 text-[#0494e2]" />
            <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}>
              Meet Our Team
            </span>
          </div>
          
          <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}>
            Leadership <span className="text-[#0494e2]">That Understands</span> Institutions
          </h2>
          
          <p className={`${TYPOGRAPHY.body.lg} text-slate-600 leading-relaxed`}>
            Our team combines deep institutional knowledge with cutting-edge technical expertise. 
            Each member brings years of experience in educational technology and a passion for 
            serving institutional needs.
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-4`}>
              Core Leadership Team
            </h3>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              The minds behind our institutional technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#0494e2]/30 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-lg"
                >
                  {/* Profile Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0494e2] to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-bold mb-1`}>
                        {member.name}
                      </h4>
                      <p className={`${TYPOGRAPHY.body.sm} text-[#0494e2] font-semibold`}>
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className={`${TYPOGRAPHY.body.sm} text-slate-600 mb-6 leading-relaxed`}>
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div>
                    <h5 className={`${TYPOGRAPHY.caption.sm} text-slate-500 font-semibold uppercase tracking-wider mb-3`}>
                      Areas of Expertise
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Advisory Board */}
        <div>
          <div className="text-center mb-16">
            <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-4`}>
              Advisory Board
            </h3>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              Guided by industry veterans and institutional leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {advisoryBoard.map((advisor, index) => {
              const Icon = advisor.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#0494e2]/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h4 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-bold mb-2`}>
                    {advisor.name}
                  </h4>
                  
                  <p className={`${TYPOGRAPHY.body.sm} text-slate-600 mb-3`}>
                    {advisor.role}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    <span className={`${TYPOGRAPHY.caption.sm} text-purple-700 font-medium`}>
                      {advisor.expertise}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Culture */}
        <div className="mt-24 bg-white border border-slate-200 rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-6`}>
              Our Approach to Team Building
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  title: "Institutional Experience",
                  description: "We hire professionals who understand the unique challenges of educational and government institutions",
                  icon: GraduationCap
                },
                {
                  title: "Continuous Learning",
                  description: "Regular training and certification programs to stay current with institutional technology trends",
                  icon: Brain
                },
                {
                  title: "Collaborative Culture",
                  description: "Cross-functional teams that work together to deliver comprehensive institutional solutions",
                  icon: Users
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-[#b4d8f0] flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[#0494e2]" />
                    </div>
                    <h4 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-bold mb-2`}>
                      {item.title}
                    </h4>
                    <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b4d8f0] border border-[#0494e2]/30">
              <Heart className="w-4 h-4 text-[#0494e2]" />
              <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2]`}>
                50+ Team Members Dedicated to Institutional Excellence
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}