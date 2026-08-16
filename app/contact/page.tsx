import Link from "next/link";
import { GetACallback } from "@/shared/components/getACallback";
import Image from "next/image";
import { Metadata } from "next";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Move Mate Relocations NZ for professional moving and relocation services. Call, email or request a callback from our team.",

  openGraph: {
    title: "Contact Move Mate Relocations NZ",
    description:
      "Contact our team for reliable house, office, warehouse and relocation services across New Zealand.",
    images: [
      {
        url: `${bp}/full_logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "Contact Move Mate Relocations NZ",
      },
    ],
  },
};
export default function ContactPage() {
  return (
    <main className="bg-slate-50 text-midnight-blue">
      {/* Hero */}
      <section className="bg-midnight-blue">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center sm:px-8 sm:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Move Mate Relocations NZ
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get in Touch
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Planning a move or have a question? Our team is here to help. Get in
            touch with us and let&apos;s make your next move simple.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-6xl">
          {/* Contact Details + Map */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
            {/* Contact Details */}
            <div className="lg:col-span-2 ">
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary">
                  Contact Us
                </p>

                <h2 className="mt-2 text-2xl font-extrabold">
                  We&apos;re here to help
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Whether you&apos;re planning a house move, relocating your
                  office, or simply need help with a single item, our team is
                  ready to assist.
                </p>

                <div className="mt-7 space-y-5">
                  {/* Email */}
                  <a
                    href="mailto:contact@movematerelocations.co.nz"
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Email
                      </p>

                      <p className="mt-1 break-all text-sm font-bold text-midnight-blue group-hover:text-primary sm:text-base">
                        contact@movematerelocations.co.nz
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+64800119001"
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Phone
                      </p>

                      <p className="mt-1 text-base font-bold text-midnight-blue group-hover:text-primary">
                        +64 800 119 001
                      </p>
                    </div>
                  </a>

                  {/* Opening Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l2 4" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Opening Hours
                      </p>

                      <p className="mt-1 text-sm font-bold">Everyday</p>

                      <p className="text-sm text-gray-500">8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    <a
                      href="https://www.facebook.com/profile.php?id=61593218276561"
                      aria-label="Facebook"
                      className="transition-opacity hover:opacity-70"
                    >
                      <Image
                        src={`${bp}/facebook.png`}
                        alt="Facebook"
                        width={20}
                        height={20}
                      />
                    </a>

                    <a
                      href="https://www.instagram.com/movematerelocationsnz"
                      aria-label="Instagram"
                      className="transition-opacity hover:opacity-70"
                    >
                      <Image
                        src={`${bp}/instagram-optimized.svg`}
                        alt="Instagram"
                        width={20}
                        height={20}
                      />
                    </a>

                    <a
                      href="#"
                      aria-label="WhatsApp"
                      className="transition-opacity hover:opacity-70"
                    >
                      <Image
                        src={`${bp}/whatsapp.svg`}
                        alt="WhatsApp"
                        width={20}
                        height={20}
                      />
                    </a>

                    <span className="hidden sm:block h-5 w-px bg-gray-300" />

                    <span className="text-primary text-sm italic">
                      Moving New Zealand with care.
                    </span>
                  </div>
                  <div>
                    <a
                      href="/privacy-policy"
                      className="text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a
                      href="/terms-and-conditions"
                      className="text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                      Terms and Conditions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="lg:col-span-3">
              <div className="h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <div className="relative h-[350px] sm:h-[450px] lg:h-full lg:min-h-[610px]">
                  <iframe
                    title="Move Mate Relocations NZ Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5340.441612102931!2d175.14847598623027!3d-37.41641924498663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d4456a1b379fd%3A0x4ea83c543c9a2659!2s10%20Pa%20Ariki%20Road%2C%20Te%20Kauwhata%203710%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1786871868284!5m2!1sen!2sin"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
          <GetACallback />

          {/* Address */}
          <section className="mt-8">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] md:items-center">
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                        Our Location
                      </p>

                      <h2 className="mt-1 text-xl font-extrabold sm:text-2xl">
                        Visit Us
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                        10 Pa Ariki Road,Te Kauwhata 3710
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 px-6 py-5 md:border-l md:border-t-0 sm:px-8">
                  <Link
                    href="https://www.google.com/maps/dir//10+Pa+Ariki+Road,+Te+Kauwhata+3710,+New+Zealand/@-37.4164192,175.148476,16.25z/data=!4m18!1m8!3m7!1s0x6d6d4456a1b379fd:0x4ea83c543c9a2659!2s10+Pa+Ariki+Road,+Te+Kauwhata+3710,+New+Zealand!3b1!8m2!3d-37.4158242!4d175.1532926!16s%2Fg%2F11sv2vtq_t!4m8!1m0!1m5!1m1!1s0x6d6d4456a1b379fd:0x4ea83c543c9a2659!2m2!1d175.1532926!2d-37.4158242!3e0?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                  >
                    Get Directions
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
