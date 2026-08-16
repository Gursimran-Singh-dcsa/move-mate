
import PrivacyPolicyComponent from "@/shared/components/privacy-policy-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for Move Mate Relocations NZ and learn how we collect, use and protect your personal information.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Privacy Policy | Move Mate Relocations NZ",
    description:
      "Learn how Move Mate Relocations NZ collects, uses and protects your personal information.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/full_logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "Move Mate Relocations NZ Privacy Policy",
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyComponent />;
}
