import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "./button";

const AboveHeader = () => {
  return (
    <div className="bg-midnight-blue text-white max-w-8xl px-6 ">
      <div className="mx-auto flex h-16  items-center justify-between px-6 text-sm ">
        {/* Left */}
        <div className="flex items-center justify-between gap-6">
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin-icon lucide-map-pin"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>{" "}
            Auckland, New Zealand
          </span>
          <span className="border-l border-slate-500 h-5" />
          <span className="hidden items-center gap-2 sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail-icon lucide-mail"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>{" "}
            <a
              href="mailto:info@movematerelocations.co.nz"
              className="hidden transition-colors hover:text-blue-300 md:flex"
            >
              info@movematerelocations.co.nz
            </a>
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clock5-icon lucide-clock-5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l2 4" />
            </svg>{" "}
            Mon - Sat: 8:00 AM - 6:00 PM
          </span>
          <span className="border-l border-slate-500 h-5" />

          <span className="hidden font-medium sm:block">Follow Us:</span>

          <a
            href="#"
            aria-label="Facebook"
            className="transition-colors hover:text-blue-300"
          >
            <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="transition-colors hover:text-blue-300"
          >
            <Image
              src="/instagram-optimized.svg"
              alt="Instagram"
              width={18}
              height={18}
              className=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md  rounded-4xl">
      <AboveHeader />
      <div className="mx-auto flex h-40  max-w-8xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/full_logo.png"
            alt="Move Mate Relocations NZ"
            width={350}
            height={80}
            className=" w-[210px] object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="relative py-7 text-[15px] font-semibold text-primary transition-colors hover:text-light-blue"
          >
            Home
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-light-blue" />
          </Link>

          <Link
            href="/about"
            className="py-7 text-[15px] font-semibold text-primary transition-colors hover:text-light-blue"
          >
            About Us
          </Link>

          <Link
            href="/services"
            className="py-7 text-[15px] font-semibold text-primary transition-colors hover:text-light-blue"
          >
            Services
          </Link>

          <Link
            href="/process"
            className="py-7 text-[15px] font-semibold text-primary transition-colors hover:text-light-blue"
          >
            Our Process
          </Link>

          <Link
            href="/testimonials"
            className="py-7 text-[15px] font-semibold text-primary transition-colors hover:text-light-blue"
          >
            Testimonials
          </Link>

          <Link
            href="/contact"
            className="py-7 text-[15px] font-semibold text-primary transition-colors hover:text-light-blue"
          >
            Contact Us
          </Link>
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-6 lg:flex">
          {/* Phone */}
          <a href="tel:+19876543210" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-light-blue">
              {/* <Phone className="h-5 w-5" /> */}
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="var(--color-primary)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0497 6C15.0264 6.19057 15.924 6.66826 16.6277 7.37194C17.3314 8.07561 17.8091 8.97326 17.9997 9.95M14.0497 2C16.0789 2.22544 17.9713 3.13417 19.4159 4.57701C20.8606 6.01984 21.7717 7.91101 21.9997 9.94M10.2266 13.8631C9.02506 12.6615 8.07627 11.3028 7.38028 9.85323C7.32041 9.72854 7.29048 9.66619 7.26748 9.5873C7.18576 9.30695 7.24446 8.96269 7.41447 8.72526C7.46231 8.65845 7.51947 8.60129 7.63378 8.48698C7.98338 8.13737 8.15819 7.96257 8.27247 7.78679C8.70347 7.1239 8.70347 6.26932 8.27247 5.60643C8.15819 5.43065 7.98338 5.25585 7.63378 4.90624L7.43891 4.71137C6.90747 4.17993 6.64174 3.91421 6.35636 3.76987C5.7888 3.4828 5.11854 3.4828 4.55098 3.76987C4.2656 3.91421 3.99987 4.17993 3.46843 4.71137L3.3108 4.86901C2.78117 5.39863 2.51636 5.66344 2.31411 6.02348C2.08969 6.42298 1.92833 7.04347 1.9297 7.5017C1.93092 7.91464 2.01103 8.19687 2.17124 8.76131C3.03221 11.7947 4.65668 14.6571 7.04466 17.045C9.43264 19.433 12.295 21.0575 15.3284 21.9185C15.8928 22.0787 16.1751 22.1588 16.588 22.16C17.0462 22.1614 17.6667 22 18.0662 21.7756C18.4263 21.5733 18.6911 21.3085 19.2207 20.7789L19.3783 20.6213C19.9098 20.0898 20.1755 19.8241 20.3198 19.5387C20.6069 18.9712 20.6069 18.3009 20.3198 17.7333C20.1755 17.448 19.9098 17.1822 19.3783 16.6508L19.1835 16.4559C18.8339 16.1063 18.6591 15.9315 18.4833 15.8172C17.8204 15.3862 16.9658 15.3862 16.3029 15.8172C16.1271 15.9315 15.9523 16.1063 15.6027 16.4559C15.4884 16.5702 15.4313 16.6274 15.3644 16.6752C15.127 16.8453 14.7828 16.904 14.5024 16.8222C14.4235 16.7992 14.3612 16.7693 14.2365 16.7094C12.7869 16.0134 11.4282 15.0646 10.2266 13.8631Z"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <div className="leading-tight">
              <p className="text-[16px] font-bold text-light-blue">
                +1-9876543210
              </p>
              <p className="mt-1 text-xs text-slate-500">Call Us Anytime</p>
            </div>
          </a>

          {/* CTA */}
          <PrimaryButton isLink linkTo="/contact">
            Get A Quote
          </PrimaryButton>
        </div>

        {/* Mobile menu */}
        <button
          type="button"
          className="rounded-lg p-2 text-primary lg:hidden"
          aria-label="Open menu"
        >
          {/* <Menu className="h-6 w-6" /> */}
        </button>
      </div>
      {/* <span className="absolute bottom-0 h-[5px] w-[32%] rounded-r-full bg-primary" /> */}
    </header>
  );
}
