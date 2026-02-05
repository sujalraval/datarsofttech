import OptimizedImage from "@/components/common/OptimizedImage";
import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { COLORS } from "@/constants/colors";

const partners = [
  { src: "/partners/1.png", alt: "Agile Tax" },
  { src: "/partners/2.png", alt: "Bini's" },
  { src: "/partners/3.png", alt: "Tech Innovations" },
  { src: "/partners/4.png", alt: "Innovatech" },
  { src: "/partners/5.png", alt: "Tech Solutions" },
  { src: "/partners/6.png", alt: "Tech Solutions" },
  { src: "/partners/7.png", alt: "Tech Innovations" },
  { src: "/partners/8.png", alt: "Tech Solutions" },
  { src: "/partners/9.png", alt: "Tech Innovations" },
  { src: "/partners/10.png", alt: "Tech Solutions" },
  { src: "/partners/11.png", alt: "Tech Solutions" },
  { src: "/partners/12.png", alt: "Tech Innovations" },
  { src: "/partners/13.png", alt: "Tech Solutions" },
  { src: "/partners/14.png", alt: "Tech Solutions" },
  { src: "/partners/15.png", alt: "Tech Innovations" },
  { src: "/partners/16.png", alt: "Tech Solutions" },
];

export default function TrustedPartners() {
  return (
    // Light mode background: Clean white background
    <section className="bg-white py-24 border-y border-slate-100 relative overflow-hidden">
      {/* Subtle decorative pattern for light mode texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div
        className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} relative z-10`}
      >
        {/* HEADER */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b4d8f0] border border-[#0494e2]/20 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#0494e2]"></div>
            <span
              className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}
            >
              Our Client Network
            </span>
          </div>

          <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold`}>
            Trusted by Leading Institutions
          </h2>
          <p className="mt-3 text-slate-600">
            We are proud to partner with government bodies, universities, and
            enterprises to drive digital transformation.
          </p>
        </div>

        {/* LOGOS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center h-24 md:h-28 bg-white border border-slate-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-[#0494e2]/20 hover:-translate-y-1"
              role="img"
              aria-label={partner.alt}
            >
              <OptimizedImage
                src={partner.src}
                alt={partner.alt}
                width={180}
                height={80}
                className="object-contain w-full h-full filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                showSkeleton={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
