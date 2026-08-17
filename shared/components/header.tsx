"use client";

import { useState } from "react";
import Image from "next/image";

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GetQuoteButton } from "./getQuoteButton";

const AboveHeader = () => {
  return (
    <div className="bg-midnight-blue text-white max-w-8xl px-6 ">
      <div className="mx-auto flex h-16  items-center justify-between px-6 text-sm ">
        {/* Left */}
        <div className="flex items-center justify-between gap-6">
          <a
            href="https://www.google.com/maps/place/10+Pa+Ariki+Road,+Te+Kauwhata+3710,+New+Zealand"
            target="_blank"
            className="hidden lg:flex items-center gap-2 hover:text-blue-300 transition-colors"
            rel="noopener noreferrer"
          >
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
            10 Pa Ariki Road,Te Kauwhata 3710
          </a>
          <span className="hidden lg:block border-l border-slate-500 h-5" />
          <span className="hidden items-center gap-2 md:flex">
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
              className=" transition-colors hover:text-blue-300 md:flex"
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
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v6h6" />
              <path d="M8 13h8" />
              <path d="M8 17h5" />
              <path d="M8 9h2" />
            </svg>{" "}
            NZBN-9429053867063
          </span>
          <span className="border-l border-slate-500 h-5" />

          <span className="hidden font-medium lg:block">Follow Us:</span>

          <a
            href="https://www.facebook.com/profile.php?id=61593218276561"
            aria-label="Facebook"
            className="transition-colors hover:text-blue-300"
          >
            <Image
              src={`${bp}/facebook.png`}
              alt="Facebook"
              width={18}
              height={18}
            />
          </a>

          <a
            href="https://www.instagram.com/movematerelocationsnz"
            aria-label="Instagram"
            className="transition-colors hover:text-blue-300"
          >
            <Image
              src={`${bp}/instagram-optimized.svg`}
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
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path: string) => pathName === path;
  return (
    <header className="top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md rounded-4xl">
      <div className="hidden sm:block">
        <AboveHeader />
      </div>
      <div className="mx-auto flex h-20 max-w-8xl items-center justify-between px-6 h-24 lg:h-40 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={`${bp}/full_logo.jpeg`}
            alt="Move Mate Relocations NZ"
            width={350}
            height={80}
            className="h-20 w-auto object-contain lg:h-20"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className={`relative py-7 text-[15px] font-semibold  transition-colors hover:text-light-blue ${isActive("/") ? "text-primary border-b-[3px]" : ""}`}
          >
            Home
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-light-blue" />
          </Link>

          <Link
            href="/about-us/"
            className={`py-7 text-[15px] font-semibold  transition-colors hover:text-light-blue ${isActive("/about-us/") ? "text-primary border-b-[3px]" : ""}`}
          >
            About Us
          </Link>

          <Link
            href="/services"
            className={`py-7 text-[15px] font-semibold transition-colors hover:text-light-blue ${isActive("/services/") ? "text-primary border-b-[3px]" : ""}`}
          >
            Services
          </Link>

          <Link
            href="/contact"
            className={`py-7 text-[15px] font-semibold  transition-colors hover:text-light-blue ${isActive("/contact/") ? "text-primary border-b-[3px]" : ""}`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-6 lg:flex">
          {/* Phone */}
          <a href="tel:+64800119001" className="flex items-center gap-3">
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
                +64-800 119 001
              </p>
              <p className="mt-1 text-xs text-slate-500">Call Us Anytime</p>
            </div>
          </a>

          {/* CTA */}
          <GetQuoteButton />
        </div>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="rounded-lg p-2 text-primary lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
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
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
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
            >
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-6 pb-6 lg:hidden">
          <div className="flex flex-col pt-2">
            {(
              [
                { href: "/", label: "Home" },
                { href: "/about-us/", label: "About Us" },
                { href: "/services/", label: "Services" },
                { href: "/contact/", label: "Contact Us" },
              ] as const
            ).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-base font-semibold transition-colors hover:bg-slate-50 hover:text-primary ${
                  isActive(href) ? "text-primary" : "text-slate-700"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-3 border-t border-slate-100 pt-4 flex flex-col gap-3 px-4">
            <a href="tel:+64800119001" className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50">
                <svg
                  width="18"
                  height="18"
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
              <div>
                <p className="text-sm font-bold text-light-blue">
                  +64-800 119 001
                </p>
                <p className="text-xs text-slate-500">Call Us Anytime</p>
              </div>
            </a>
            <GetQuoteButton />
          </div>
        </nav>
      )}
    </header>
  );
}
