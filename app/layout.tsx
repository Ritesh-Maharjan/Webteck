import { Metadata } from "next";
import "./globals.css";
import { HeaderWrapper } from "@/_component/ui/HeaderWrapper";
import { Nunito_Sans } from "next/font/google";
import Footer from "./_component/ui/Footer";
import Script from "next/script"; // Import Script for analytics and structured data
import Breadcrumbs from "@/_component/Breadcrumbs";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["400", "700"],
});

// Use metadata for SEO
export const metadata: Metadata = {
  title: "Vancouver WebTeck",
  description:
    "Vancouver WebTeck specializes in custom web development, UI/UX design, e-commerce solutions, and responsive design, delivering high-performance, SEO-optimized websites to boost your online presence.",
  keywords: [
    "web development",
    "e-commerce",
    "SEO optimization",
    "Vancouver web design",
    "custom websites",
    "responsive design",
    "website development Vancouver",
  ],
  icons: {
    icon: "/favicon.ico", // Default favicon
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Vancouver WebTeck - Web Development Experts",
    description:
      "Vancouver WebTeck specializes in custom web development, e-commerce solutions, and responsive design, delivering high-performance, SEO-optimized websites to boost your online presence.",
    images: "/og-image.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "86UZbzNVw_i3SKQ3gHjxq2ZXYYdwVde83bbNJDB6cxc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Meta viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon and other icons */}
        <link rel="icon" href="/public/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${nunitoSans.className} bg-black text-white antialiased`}>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-G5JRS8E1WS"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G5JRS8E1WS');
            `,
          }}
        />

        {/* Structured Data (ld+json) */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Vancouver WebTeck",
              "url": "https://www.webteck.ca/",
              "logo": "https://www.webteck.ca/favicon.ico",
              "image": "https://www.webteck.ca/public/img/home-page/hero-bg.png",
              "description":
                "Vancouver WebTeck specializes in custom web development, UI/UX design, e-commerce solutions, and responsive design, delivering high-performance, SEO-optimized websites to boost your online presence.",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1717 West 13th Ave",
                "addressLocality": "Vancouver",
                "addressRegion": "BC",
                "postalCode": "V6J 2H2",
                "addressCountry": "Canada",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 49.26023197709924,
                "longitude": -123.14410923144554,
              },
              "hasMap": "https://maps.app.goo.gl/ynqJJ2dCFUnyn9G89",
              "openingHours": ["Mo-Fr 09:00-17:00"],
              "telephone": "+1-778-318-8494",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61558333001499",
                "https://www.instagram.com/webteck.ca/",
                "https://www.linkedin.com/company/vancouver-webteck/",
              ],
            }),
          }}
        />
        <Breadcrumbs />
        <HeaderWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
