import Head from 'next/head';
import {
  Hero,
  Offer,
  Solutions,
  WhyUs,
  Workflow,
  Work,
  Pricing,
  Transform,
  Testimonial,
  Blog,
} from "./_component/index";
import Investment from "./_component/Investment";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Head>
        <title>Home - Vancouver WebTeck</title>
        <meta name="description" content="Your digital solutions partner for Website Development, UI/UX Design, Website Maintenance & Support, E-commerce, SEO, and more." />
        <link rel="canonical" href="https://webteck.ca/" />
      </Head>

      <Hero />
      <Solutions />
      <Workflow />
      <Offer />
      <WhyUs />
      <Investment />
      <Work />
      <Pricing />
      <Transform />
      <Testimonial />
      <Blog />
    </div>
  );
}
