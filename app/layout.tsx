import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abenezer Seifu's Portfolio",
  description: "A portfolio of Abenezer Seifu's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
