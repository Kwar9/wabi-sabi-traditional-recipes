import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteTitle = "WABI SABI TRADITIONAL RECIPES | Culinary Social Club";
const siteDescription = "Ghana is more than a place, it is a feeling. Join our exclusive culinary network and Lokato Food Camp.";
const heroImage = "https://res.cloudinary.com/jbbzejqi/image/upload/v1794268981/IMG_8977.jpg";
const logoImage = "https://res.cloudinary.com/jbbzejqi/image/upload/v1794304962/IMG_9021.jpg";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: "WABI SABI TRADITIONAL RECIPES",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  icons: { icon: [{ url: logoImage, type: "image/jpeg" }] },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_GH",
    siteName: "WABI SABI TRADITIONAL RECIPES",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 1000,
        alt: "Wabisabi Traditional Recipes culinary experience in Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [heroImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1E1E1E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GH">
      <body>{children}</body>
    </html>
  );
}
