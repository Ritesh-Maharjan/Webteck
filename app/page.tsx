import {Header, Hero, Offer, Solutions, WhyUs, Workflow} from "./_component/index";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />
      <Solutions />
      <Workflow />
      <Offer />
      <WhyUs />
    </div>
  );
}
