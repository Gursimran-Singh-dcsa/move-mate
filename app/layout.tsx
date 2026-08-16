import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/shared/components/header";
import Footer from "@/shared/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://gursimran-singh-dcsa.github.io/move-mate"),

  title: {
    default: "Move Mate Relocations NZ | Professional Moving Services",
    template: "%s | Move Mate Relocations NZ",
  },

  description:
    "Move Mate Relocations NZ provides professional house, office, warehouse and intercity relocation services across New Zealand.",

  keywords: [
    "moving company New Zealand",
    "relocation services NZ",
    "house movers Auckland",
    "office relocation Auckland",
    "furniture removalists Auckland",
    "intercity movers New Zealand",
    "Move Mate Relocations",
  ],

  authors: [
    {
      name: "Move Mate Relocations NZ",
    },
  ],

  creator: "Move Mate Relocations NZ",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_NZ",
    siteName: "Move Mate Relocations NZ",
    title: "Move Mate Relocations NZ | Professional Moving Services",
    description:
      "Professional relocation and moving solutions across New Zealand. House, office, warehouse, intercity and furniture moving services.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH}/full_logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "Move Mate Relocations NZ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Move Mate Relocations NZ | Professional Moving Services",
    description:
      "Professional relocation and moving solutions across New Zealand.",
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH}/full_logo.jpeg`],
  },

  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/full_logo.jpeg`,
  },
};
const roboto = Roboto({
  variable: "--font-roboto",
});
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col  ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
