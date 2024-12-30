import React from "react";
import Button from "./ui/Button";

const Transform = () => {
  return (
    <section className="bg-[url('/img/home-page/home-cta-bg-3.png')] bg-cover">
      <div className="max-w-screen-2xl mx-auto px-8 py-28 flex flex-col gap-7">
        <h2 className="font-bold text-5xl leading-normal">
          Refer and Earn: 
          <br />
          Spread the word about our Web Development Services!
        </h2>
        <p className="max-w-prose md:text-xl">
         Get $100 credit for every successful referral, and your friend gets 10% off their first project!
        </p>
        <Button className="border w-fit">Start a Project</Button>
      </div>
    </section>
  );
};

export default Transform;
