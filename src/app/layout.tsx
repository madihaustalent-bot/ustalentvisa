import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@/components/site/analytics";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://ustalentvisa.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "US Talent Visa — AI-Powered Talent Visa & Green Card Platform",
    template: "%s · US Talent Visa",
  },
  description:
    "The unified AI + expert platform for O-1A, EB-1A, EB-2 NIW, and 15+ visa pathways. Eligibility in 5 minutes, AI-drafted petitions, expert-vetted opportunities, and full attorney support — all in one place.",
  keywords: [
    "EB-1A visa",
    "EB-2 NIW",
    "O-1A visa",
    "talent visa",
    "green card",
    "DIY petition",
    "immigration AI",
    "self-petition",
    "I-140",
    "extraordinary ability",
  ],
  authors: [{ name: "US Talent Visa" }],
  creator: "US Talent Visa",
  publisher: "US Talent Visa",
  applicationName: "US Talent Visa",
  category: "Legal Services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "US Talent Visa — AI-Powered Talent Visa & Green Card Platform",
    description:
      "Eligibility in 5 minutes, AI-drafted petitions, expert-vetted opportunities, and full attorney support — all in one place. 15+ visa pathways including EB-1A, EB-2 NIW, O-1A, EB-5, L-1A, and H-1B.",
    url: SITE_URL,
    siteName: "US Talent Visa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "US Talent Visa — AI-Powered Talent Visa Platform",
    description:
      "Eligibility in 5 minutes, AI-drafted petitions, expert-vetted opportunities, and full attorney support — all in one place.",
    creator: "@ustalentvisa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F0" },
    { media: "(prefers-color-scheme: dark)", color: "#0E2A24" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interSans.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
