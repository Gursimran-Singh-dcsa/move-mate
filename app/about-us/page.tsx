import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Move Mate Relocations NZ and our commitment to providing reliable, professional and stress-free moving services across New Zealand.",

  openGraph: {
    title: "About Move Mate Relocations NZ",
    description:
      "Discover Move Mate Relocations NZ and our approach to professional, reliable and stress-free moving services.",
    images: [
      {
        url: `${bp}/full_logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "Move Mate Relocations NZ",
      },
    ],
  },
};
export default function AboutPage() {
  return (
    <main className="bg-slate-50 text-midnight-blue">
      {/* Hero */}
      <section className="bg-midnight-blue">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-18 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              About Move Mate
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Moving made simple.
              <span className="block text-primary">Moving made with care.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              We are a professional relocation and moving company helping
              individuals, families and businesses move with confidence across
              New Zealand.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={`${bp}/about-us.jpg`}
                alt="Move Mate Relocations team"
                width={900}
                height={650}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Your trusted moving partner
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                At Move Mate Relocations NZ, we understand that moving is more
                than simply transporting belongings from one place to another.
                It is about moving your home, your workplace, your assets and
                the things that matter to you.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                That is why we focus on providing a reliable, professional and
                carefully managed moving experience from start to finish.
                Whether it&apos;s a house relocation, office move, warehouse
                relocation or a single valuable item, our team is ready to help.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                We combine practical moving experience with a commitment to
                clear communication, careful handling and dependable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary">
              What We Stand For
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Built around trust and care
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Every move is different. Our approach is built around
              understanding your requirements and delivering a service you can
              rely on.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <div className="rounded-2xl border border-gray-100 bg-slate-50 p-6 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13c0 5-3.5 7.5-8 8.5-4.5-1-8-3.5-8-8.5V5l8-3 8 3v8Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-extrabold">Reliable Service</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We take pride in being dependable and keeping our commitments
                throughout every stage of your move.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-gray-100 bg-slate-50 p-6 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z" />
                  <path d="M9 12h6" />
                  <path d="M12 9v6" />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-extrabold">Careful Handling</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Your belongings matter. We approach every move with care,
                attention to detail and respect for your property.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-gray-100 bg-slate-50 p-6 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2z" />
                  <path d="M8 8h8" />
                  <path d="M8 12h5" />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-extrabold">
                Clear Communication
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                From the first enquiry to the final delivery, we keep
                communication clear so you always know what to expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                One team for all your moving needs
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                Our services are designed to support a wide range of relocation
                requirements, from smaller individual moves to larger
                residential, commercial and warehouse relocations.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "House Relocation",
                  "Office Relocation",
                  "Warehouse Relocation",
                  "Intercity Relocation",
                  "Single Item Movers",
                  "Furniture Removalists",
                ].map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 text-sm font-semibold"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      ✓
                    </span>
                    {service}
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white transition hover:opacity-90"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="rounded-2xl bg-midnight-blue p-7 text-white sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary">
                Our Promise
              </p>

              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Your move is in safe hands.
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                We aim to make every move straightforward, organised and as
                stress-free as possible. Our focus is simple: provide a
                professional service while treating your belongings with the
                care they deserve.
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-white">
                  Move Mate Relocations NZ
                </p>

                <p className="mt-1 text-sm text-white/50">
                  Moving New Zealand with care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-black/5 sm:p-10 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary">
            Ready to Move?
          </p>

          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
            Let&apos;s plan your next move together.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Tell us what you need and our team will help you find the right
            moving solution.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/get-a-quote"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-7 text-sm font-bold text-white transition hover:opacity-90"
            >
              Get a Quote
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-midnight-blue/10 px-7 text-sm font-bold text-midnight-blue transition hover:border-primary hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
