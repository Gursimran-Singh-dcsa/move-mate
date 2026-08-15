"use client";
import Link from "next/link";

export const PrimaryButton = ({
  children,
  onClick,
  isLink,
  linkTo,
}: {
  children: React.ReactNode | string;
  onClick?: () => void;
  isLink?: boolean;
  linkTo?: string;
}) => {
  if (isLink) {
    return (
      <Link
        href={linkTo ?? "/"}
        className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary transition-colors duration-300"
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary transition-colors duration-300"
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  children,
  onClick,
  isLink,
  linkTo,
  noBorder,
}: {
  children: React.ReactNode | string;
  onClick?: () => void;
  isLink?: boolean;
  linkTo?: string;
  noBorder?: boolean;
}) => {
  if (isLink) {
    return (
      <Link
        href={linkTo ?? "/"}
        className="bg-gray-100 text-primary font-bold py-2 px-4 rounded border border-primary hover:bg-primary hover:text-white transition-colors duration-300"
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`flex items-center bg-gray-100 text-primary font-bold py-2 px-4 rounded border border-primary hover:bg-primary hover:text-white transition-colors duration-300 ${noBorder ? "border-none" : ""}`}
    >
      {children}
    </button>
  );
};
