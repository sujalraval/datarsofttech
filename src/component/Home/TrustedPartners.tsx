import Image from "next/image";

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
    <section className="bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* TITLE */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#4a91a9]">
            Our Happy Clients
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Trusted by Leading Companies
          </h2>
        </div>

        {/* LOGOS */}
        <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
