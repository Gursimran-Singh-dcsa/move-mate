import Image from "next/image";
import Link from "next/link";

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const Footer = () => {
  return (
    <div className="text-midnight-blue bg-white">
      {/* Header */}
      <div className="px-5 sm:px-8 lg:px-12 pt-8 pb-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <h2 className="text-primary font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
              Planning to Relocate?
            </h2>
            <div className="mt-3 h-1 w-16 bg-primary rounded-full" />
          </div>
          <div className="flex flex-col xs:flex-row sm:flex-row gap-3">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-md"
            >
              Get a Quote
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary transition-all "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Logo */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-start">
              <Image
                src={`${bp}/full_logo.jpeg`}
                alt="Move Mate Relocations NZ"
                width={400}
                height={400}
                loading="lazy"
                className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] h-auto object-contain"
              />
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h3 className="font-extrabold text-lg sm:text-xl text-primary mb-5">
                Services We Offer
              </h3>

              <ul className="space-y-3.5">
                {[
                  "House Relocation",
                  "Office Relocation",
                  "Warehouse Relocation",
                  "Intercity Relocation",
                  "Single Item Movers",
                  "Furniture Removalists",
                ].map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 text-sm sm:text-base font-medium"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      ✓
                    </span>

                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2">
              <h3 className="font-extrabold text-lg sm:text-xl text-primary mb-5">
                Contact Us
              </h3>

              <div className="space-y-4 text-sm sm:text-base font-medium">
                {/* Email */}
                <a
                  href="mailto:contact@movematerelocations.co.nz"
                  className="flex items-start gap-3 hover:text-primary transition-colors"
                >
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
                    className="shrink-0 mt-0.5"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>

                  <span className="break-all sm:break-normal">
                    contact@movematerelocations.co.nz
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+64123456789"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
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
                    className="shrink-0"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>

                  <span>+64 123 456 789</span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3">
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
                    className="shrink-0 mt-0.5"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>

                  <span>123 Main Street, Auckland, New Zealand</span>
                </div>

                {/* Timing */}
                <div className="flex items-center gap-3">
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
                    className="shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l2 4" />
                  </svg>

                  <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
                </div>

                {/* Social */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href="#"
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
                    href="#"
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

                {/* Legal */}
                <div className="pt-3 border-t border-gray-100 text-xs sm:text-sm text-gray-600">
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>

                  <span className="mx-2">|</span>

                  <span>TRADE123456789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-midnight-blue text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 text-center">
          <p className="text-xs sm:text-sm md:text-base text-white/90">
            © {new Date().getFullYear()} Move Mate Relocations NZ. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
