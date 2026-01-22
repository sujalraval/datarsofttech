import Link from "next/link";

const services = [
  {
    title: "Web & Application Development",
    items: ["Website Development", "Mobile Applications", "Online Services"],
  },
  {
    title: "Education Management Systems",
    items: [
      "SIS & LMS",
      "Online Admission Portal",
      "Placement Management",
      "Hostel & Library Systems",
    ],
  },
  {
    title: "Enterprise & Office Solutions",
    items: [
      "Office Management & HRMS",
      "Faculty Management",
      "Recruitment Portal",
      "Startup Management System",
    ],
  },
  {
    title: "Research & Academic Platforms",
    items: [
      "Research Journals",
      "Conference Management",
      "Institutional Repository",
      "Publications & Reports",
    ],
  },
  {
    title: "Specialized & Custom Solutions",
    items: [
      "Chemical & Lab Management",
      "Community Buildup Platforms",
      "Custom Software Solutions",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#4a91a9]">
            Our Solutions
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Products & Services
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            We offer a range of proven products and services designed to meet
            your needs. Each solution is fully customizable to align with your
            organization’s specific goals.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-[#f8fafc] p-6 transition hover:shadow-lg"
            >
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              <ul className="space-y-2 text-sm text-gray-600">
                {service.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              <Link
                href="/products-services"
                className="mt-6 inline-block text-sm font-medium text-[#0593e2]"
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
