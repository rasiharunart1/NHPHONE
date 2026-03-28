import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NH PHONE - Premium Second iPhone Marketplace",
  description: "Trusted, Elegant, High Quality Premium Second iPhones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
      </head>
      <body
        className={clsx(
          inter.variable,
          "min-h-screen bg-background text-on-surface font-body selection:bg-secondary/30 antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
