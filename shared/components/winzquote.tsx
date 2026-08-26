import Link from "next/link";

export const WinzQuoteSection = () => {
  return (
    <div
      className="  lg:absolute right-8 top-0 z-10 lg:max-w-[250px] min-w-[100vw] lg:min-w-[250px] relative left-0 lg:left-auto  z-99"
      aria-label="WINZ Quote Section"
    >
      <Link href="/get-a-quote" aria-label="Get a WINZ Quote link">
        {/* Main Badge */}
        <div
          className="
          relative
          overflow-hidden
          rounded-b-2xl
          border-x border-b border-white/60
          bg-white/95
          px-5 pb-7 pt-5
          text-center
          shadow-[0_12px_30px_rgba(0,0,0,0.25)]
          backdrop-blur-md
        "
          role="button"
        >
          {/* Blue top accent */}
          <div className="absolute left-0 right-0 top-0 h-1.5 bg-primary" />

          {/* Small check badge */}
          <div
            className="
            mx-auto mb-3 flex h-9 w-9 items-center justify-center
            rounded-full bg-primary
            text-lg font-bold text-white
            shadow-sm
          "
          >
            ✓
          </div>

          {/* Main text */}
          <div
            className="
            text-[17px] font-extrabold uppercase
            tracking-[0.7px] text-gray-800
          "
          >
            WINZ Quotes
          </div>

          <div
            className="
            text-[17px] font-extrabold uppercase
            tracking-[0.7px] text-primary
          "
          >
            Available
          </div>

          {/* Divider */}
          <div className="mx-auto my-3 h-px w-16 bg-gray-200" />

          <p className="text-[13px] font-semibold text-gray-600">
            Move Mate Relocations NZ
          </p>

          {/* Bottom ribbon */}
          <div className="absolute bottom-0 left-1/2 h-5 w-24 -translate-x-1/2">
            <div
              className="
              absolute left-0 top-0 h-full w-1/2
              bg-primary
              [clip-path:polygon(0_0,100%_0,75%_100%,0_65%)]
            "
            />

            <div
              className="
              absolute right-0 top-0 h-full w-1/2
              bg-primary
              [clip-path:polygon(0_0,100%_0,100%_65%,25%_100%)]
            "
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
