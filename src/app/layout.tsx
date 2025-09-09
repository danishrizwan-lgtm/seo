import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SEO Demo Website",
    template: "%s | SEO Demo",
  },
  description: "This is a dummy project to test SEO and Open Graph tags.",
  openGraph: {
    type: "website",
    url: "https://seo-tau-bice.vercel.app/",
    title: "SEO Demo Website",
    description: "Dummy SEO testing site",
    siteName: "SEO Demo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Demo OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Demo Website",
    description: "Testing SEO with Next.js",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
