import {
  Hero,
  Offer,
  Solutions,
  WhyUs,
  Workflow,
  Work,
  Pricing,
  Transform,
} from "./_component/index";
import Investment from "./_component/Investment";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <Solutions />
      <Workflow />
      <Offer />
      <WhyUs />
      <Investment />
      <Work />
      <Pricing />
      <Transform />
    </div>
  );
}
