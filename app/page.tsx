import Header from "./component/Header";
import Hero from "./component/Hero";
import Offer from "./component/Offer";
import Solutions from "./component/Solutions";
import WhyUs from "./component/WhyUs";
import Workflow from "./component/Workflow";

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
