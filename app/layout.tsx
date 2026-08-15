import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { PrimaryButton, SecondaryButton } from "@/shared/components/button";
import Image from "next/image";
import Link from "next/link";
import Header from "@/shared/components/header";
import Footer from "@/shared/components/footer";

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
