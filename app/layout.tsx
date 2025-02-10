import { Metadata } from "next";
import "./globals.css";
import { HeaderWrapper } from "@/_component/ui/HeaderWrapper";
import { Nunito_Sans } from "next/font/google";
import Footer from "./_component/ui/Footer";
import Head from "next/head";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Vancouver WebTeck",
  description:
    "Vancouver WebTeck specializes in custom web development, UI/UX design, e-commerce solutions, and responsive design, delivering high-performance, SEO-optimized websites to boost your online presence.",
  keywords: "web development, e-commerce, SEO optimization, Vancouver web design, custom websites, responsive design, website development Vancouver",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Vancouver WebTeck specializes in custom web development, e-commerce solutions, and responsive design, UI/UX design, delivering high-performance, SEO-optimized websites to boost your online presence." />
        <meta name="keywords" content="Vancouver web development, Vancouver web design, e-commerce, SEO optimization, custom websites, responsive design, website development Vancouver, Canadian web developers" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vancouver WebTeck" />
        <meta property="og:title" content="Vancouver WebTeck - Web Development Experts" />
        <meta property="og:description" content="Vancouver WebTeck specializes in custom web development, e-commerce solutions, and responsive design, delivering high-performance, SEO-optimized websites to boost your online presence." />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-site-verification" content="86UZbzNVw_i3SKQ3gHjxq2ZXYYdwVde83bbNJDB6cxc" />

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "Vancouver WebTeck",
            "url": "https://www.webteck.ca/",
            "logo": "https://www.webteck.ca/images/logo.png",
            "image": "https://www.webteck.ca/images/banner.jpg",
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
            ]
          })
        }}
      />
      </Head>
      <body className={`${nunitoSans.className} bg-black text-white antialiased`}>
        <HeaderWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
