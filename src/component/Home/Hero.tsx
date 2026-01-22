import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white pt-40 pb-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* SOCIAL PROOF PILL */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-1.5 text-sm text-gray-600 shadow-sm">
          <Image
            src="/avatars.png" // optional group image
            alt="Clients"
            width={60}
            height={24}
            className="object-contain"
          />
          <span>48+ institutions & startups trust Datarsoft</span>
        </div>

        {/* HEADING */}
        <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
          Transforming visions <br />
          into conversion websites
        </h1>

        {/* SUBTEXT */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          We create digital solutions that look stunning and drive real business
          results—elevating your online presence with technology that scales.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-xl bg-black px-8 py-3 text-base font-medium text-white transition hover:bg-gray-800"
          >
            Get a project quote
          </Link>

          <Link
            href="/portfolio"
            className="rounded-xl border border-gray-300 px-8 py-3 text-base font-medium text-gray-900 transition hover:bg-gray-100"
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
