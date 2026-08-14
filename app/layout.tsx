import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fauzi Rahman | Software Engineer",
    template: "%s | Fauzi Rahman",
  },

  description:
    "Professional portfolio of Fauzi Rahman — Software Engineer specializing in backend systems, ERP integration, cloud applications, and enterprise APIs.",

  keywords: [
    "Fauzi Rahman",
    "Software Engineer",
    "Backend Engineer",
    "Full-Stack Engineer",
    "Integration Engineer",
    "ERP Integration",
    "Oracle Fusion",
    "NestJS",
    "Next.js",
    "Cloud Engineer",
  ],

  authors: [
    {
      name: "Fauzi Rahman",
    },
  ],

  creator: "Fauzi Rahman",

  openGraph: {
    title: "Fauzi Rahman | Software Engineer",
    description:
      "Software Engineer specializing in backend systems, ERP integration, cloud applications, and enterprise APIs.",
    type: "website",
    locale: "en_US",
    siteName: "Fauzi Rahman Portfolio",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}