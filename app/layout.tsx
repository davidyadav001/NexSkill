import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "NexSkill - Expert Solutions & Trending Skills",
  description: "Experience our expert solutions tailored to enhance your business with top-tier design, development, and animation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-outfit">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
