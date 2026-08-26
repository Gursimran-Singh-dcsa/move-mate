"use client";

import { phoneNumberClickEvent } from "@/utils/triggers";

interface PhoneLinkProps {
  href: string;
  position: string;
  children: React.ReactNode;
  classNames?: string;
}

export const PhoneLink = ({
  href,
  position,
  children,
  classNames,
  ...rest
}: PhoneLinkProps) => {
  return (
    <a
      href={href}
      className={classNames}
      onClick={() => {
        phoneNumberClickEvent(position);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          phoneNumberClickEvent(position);
        }
      }}
      rel="noopener noreferrer"
      aria-label={`Call us at ${href.replace("tel:", "")}`}
      {...rest}
    >
      {children}
    </a>
  );
};
