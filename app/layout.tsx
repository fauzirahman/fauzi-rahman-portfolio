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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fauzi Rahman | Software Engineer",
    template: "%s | Fauzi Rahman",
  },

  description:
    "Professional portfolio of Fauzi Rahman — Software Engineer specializing in backend systems, ERP integration, cloud applications, and enterprise APIs.",

  alternates: {
    canonical: "/",
  },

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fauzi Rahman - Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fauzi Rahman | Software Engineer",
    description:
      "Software Engineer specializing in backend systems, ERP integration, cloud applications, and enterprise APIs.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
