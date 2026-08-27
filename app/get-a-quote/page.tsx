import Link from "next/link";
import type { Metadata } from "next";
import { QuoteForm } from "@/shared/components/getAQuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a personalised moving and relocation quote from Move Mate Relocations NZ. Tell us about your move and our team will get back to you.",

  openGraph: {
    title: "Get a Moving Quote | Move Mate Relocations NZ",
    description:
      "Get a personalised quote for your house, office, warehouse, intercity or furniture move across New Zealand.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/full_logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "Get a Quote from Move Mate Relocations NZ",
      },
    ],
  },
};

export default function GetAQuotePage() {
  return (
    <main className="bg-slate-50 text-midnight-blue">
      {/* Header */}
      <section className="bg-midnight-blue">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center sm:px-8 sm:py-18">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Move Mate Relocations NZ
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get a Quote
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Planning a move? Tell us a little about what you need and our team
            will get back to you with a tailored quote for your relocation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Intro */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary">
                Let&apos;s get moving
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                A smoother move starts here.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Whether you&apos;re moving a home, office, warehouse or just a
                single item, we can help you plan the right moving solution.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Share a few details about your move and our team will review
                your requirements and contact you to discuss the next steps.
              </p>

              <div className="mt-7 space-y-3 text-sm font-medium">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </span>
                  Professional relocation solutions
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </span>
                  Flexible moving options
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </span>
                  Friendly and reliable service
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-500">
                  Prefer to speak with us directly?
                </p>

                <Link
                  href="/contact"
                  className="mt-2 inline-flex font-bold text-primary hover:underline"
                >
                  Contact our team →
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8 lg:p-10">
              <div className="mb-7">
                <h2 className="text-xl font-extrabold sm:text-2xl">
                  Tell us about your move
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Fill in the details below and we&apos;ll be in touch.
                </p>
              </div>

              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
