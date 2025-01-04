import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

const Transform = () => {
  return (
    <section className="bg-[url('/img/home-page/home-cta-bg-3.png')] bg-cover">
      <div className="max-w-screen-2xl mx-auto px-8 py-28 flex flex-col gap-7">
        <h2 className="font-bold text-3xl md:text-5xl">
          Refer and Earn: 
          <br />
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl leading-tight">
          Spread the word about <br /> our Web Development Services!
        </h3>
        <p className="max-w-prose md:text-xl">
         Get $100 credit for every successful referral, and your friend gets 10% off their first project!
        </p>
        <Link href="/contact">
          <Button className="border w-fit">Start a Project</Button>
        </Link>
       
      </div>
    </section>
  );
};

export default Transform;
