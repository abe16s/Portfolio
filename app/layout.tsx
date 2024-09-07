import type { Metadata } from "next";
import "./globals.css";
import { ubuntu } from '@/app/fonts';
import Head from "next/head";

export const metadata: Metadata = {
  title: "Abenezer Seifu's Portfolio",
  description: "A portfolio of Abenezer Seifu",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${ubuntu.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
