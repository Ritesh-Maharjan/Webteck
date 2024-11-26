import { Hero, Offer, Solutions, WhyUs, Workflow } from "./_component/index";
import Investment from "./_component/Investment";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Solutions />
      <Investment />
      <Workflow />
      <Offer />
      <WhyUs />
    </div>
  );
}
