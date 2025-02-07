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
    "Vancouver WebTeck specializes in custom web development, e-commerce solutions, and responsive design, delivering high-performance, SEO-optimized websites to boost your online presence.",
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

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`${nunitoSans.className} bg-black text-white antialiased`}>
        <HeaderWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
