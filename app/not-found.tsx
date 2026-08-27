import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-5 py-16 text-midnight-blue sm:px-8">
      <div className="mx-auto w-full max-w-2xl text-center">
        {/* 404 */}
        <div className="relative mx-auto w-fit">
          <span className="text-[120px] font-black leading-none tracking-tighter text-midnight-blue/10 sm:text-[180px]">
            404
          </span>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-primary/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Content */}
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Looks like this move went off route.
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
          The page you&apos;re looking for may have moved, been removed, or
          simply doesn&apos;t exist. Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-7 text-sm font-bold text-white transition hover:opacity-90"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-midnight-blue/15 bg-white px-7 text-sm font-bold text-midnight-blue transition hover:border-primary hover:text-primary"
          >
            Contact Us
          </Link>
        </div>

        {/* Small brand message */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-xs font-medium text-gray-500 sm:text-sm">
            Need help with your next move?
            <span className="ml-1 font-semibold text-primary">
              We&apos;re here to help.
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
