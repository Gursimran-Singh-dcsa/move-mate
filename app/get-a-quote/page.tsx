import Link from "next/link";
import type { Metadata } from "next";

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

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get a Quote
          </h1>

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

              <form
                action="YOUR_WEB3FORMS_ENDPOINT"
                method="POST"
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+64 ..."
                      className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold"
                  >
                    What are you moving?
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="House Relocation">House Relocation</option>
                    <option value="Office Relocation">Office Relocation</option>
                    <option value="Warehouse Relocation">
                      Warehouse Relocation
                    </option>
                    <option value="Intercity Relocation">
                      Intercity Relocation
                    </option>
                    <option value="Single Item Movers">
                      Single Item Movers
                    </option>
                    <option value="Furniture Removalists">
                      Furniture Removalists
                    </option>
                  </select>
                </div>

                {/* Moving From / To */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="movingFrom"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Moving From
                    </label>

                    <input
                      id="movingFrom"
                      name="movingFrom"
                      type="text"
                      placeholder="Suburb / City"
                      className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="movingTo"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Moving To
                    </label>

                    <input
                      id="movingTo"
                      name="movingTo"
                      type="text"
                      placeholder="Suburb / City"
                      className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="movingDate"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Preferred Moving Date
                  </label>

                  <input
                    id="movingDate"
                    name="movingDate"
                    type="date"
                    className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Tell us more
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your move, the items involved, access details or anything else we should know..."
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                {/* Privacy */}
                <label className="flex items-start gap-3 text-xs leading-5 text-gray-500">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-primary"
                  />

                  <span>
                    By submitting this form, you agree to our{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-semibold text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and
                    <Link
                      href="/terms-and-conditions"
                      className="font-semibold text-primary hover:underline"
                    >
                      Terms and Conditions
                    </Link>
                    .
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  Request My Quote
                </button>

                <p className="text-center text-xs text-gray-400">
                  We&apos;ll review your requirements and get back to you as
                  soon as possible.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
