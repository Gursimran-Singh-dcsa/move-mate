import { PhoneLink } from "@/shared/components/phoneLink";
import { TrackedLink } from "@/shared/components/trackedLink";

const PHONE_DISPLAY = "+64 27 855 5700";
const PHONE_HREF = "tel:+64278555700";
const EMAIL = "info@movematerelocations.co.nz";

/** End-of-article call-to-action. Every link fires a GTM event with a position tag. */
export function BlogContactCta({ slug }: { slug: string }) {
  const position = `blog_${slug}_cta`;

  return (
    <section className="mt-10 overflow-hidden rounded-2xl bg-midnight-blue p-6 text-white sm:p-10">
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        Planning a move like this? We are just a call away
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
        Whether it is a 4 bedroom house, a single item or a full office, Move
        Mate Relocations delivers on-time, damage-free moves at honest prices,
        rain or shine. Call, email or send us your details and we will get back
        to you.
      </p>

      <ul className="mt-6 space-y-3 text-sm sm:text-base">
        <li>
          <span className="font-semibold text-white/70">Mobile: </span>
          <PhoneLink
            href={PHONE_HREF}
            position={position}
            classNames="font-bold underline underline-offset-4 hover:text-white/80"
          >
            {PHONE_DISPLAY}
          </PhoneLink>
        </li>
        <li>
          <span className="font-semibold text-white/70">Email: </span>
          <TrackedLink
            href={`mailto:${EMAIL}`}
            eventName="social_media_click"
            eventData={{ platform: "email", position }}
            className="font-bold underline underline-offset-4 hover:text-white/80"
          >
            {EMAIL}
          </TrackedLink>
        </li>
      </ul>

      <div className="mt-7 flex flex-wrap gap-3">
        <TrackedLink
          href="/get-a-quote"
          eventName="quote_link_click"
          eventData={{ position }}
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          Fill the quote form
        </TrackedLink>
        <TrackedLink
          href="/contact"
          eventName="quote_link_click"
          eventData={{ position: `${position}_contact` }}
          className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
        >
          Contact us
        </TrackedLink>
      </div>
    </section>
  );
}
