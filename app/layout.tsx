import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PiwikProProvider from "@piwikpro/next-piwik-pro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PiwikProProvider
          containerId={process.env.NEXT_PUBLIC_CONTAINER_ID as string}
          containerUrl={process.env.NEXT_PUBLIC_CONTAINER_URL as string}
        >
          {children}
        </PiwikProProvider>
      </body>
    </html>
  );
}
