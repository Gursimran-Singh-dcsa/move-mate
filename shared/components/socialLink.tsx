"use client";

import Image from "next/image";
import { socialMediaClickEvent } from "@/utils/triggers";

type SocialLinkProps = {
  href: string;
  ariaLabel: string;
  platform: string;
  iconSrc: string;
  iconAlt: string;
  width: number;
  height: number;
  className?: string;
};

export const SocialLink = ({
  href,
  ariaLabel,
  platform,
  iconSrc,
  iconAlt,
  width,
  height,
  className = "transition-opacity hover:opacity-70",
}: SocialLinkProps) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        socialMediaClickEvent(platform);
      }}
    >
      <Image src={iconSrc} alt={iconAlt} width={width} height={height} />
    </a>
  );
};

type EmailLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export const EmailLink = ({ href, className, children }: EmailLinkProps) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        socialMediaClickEvent("email");
      }}
    >
      {children}
    </a>
  );
};
