"use client";

import Link from "next/link";
import { triggerEvent } from "@/utils/gtm";

type TrackedLinkProps = {
  href: string;
  /** GTM dataLayer event name, e.g. "email_click" */
  eventName: string;
  /** GTM event params, e.g. { position: "blog_cta" } */
  eventData?: Record<string, string>;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

/** Link that pushes a GTM dataLayer event on click. Internal paths use next/link. */
export function TrackedLink({
  href,
  eventName,
  eventData,
  className,
  ariaLabel,
  children,
}: TrackedLinkProps) {
  const onClick = () => triggerEvent(eventName, { ...eventData });

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </a>
  );
}
