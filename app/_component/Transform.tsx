import React from "react";
import Button from "./ui/Button";

const Transform = () => {
  return (
    <section className="bg-[url('/img/home-page/home-cta-bg-3.png')] bg-cover">
      <div className="max-w-screen-2xl mx-auto px-8 py-28 flex flex-col gap-7">
        <h2 className="font-bold text-5xl">
          Ready to Transform
          <br />
          Your Online Presence?
        </h2>
        <p className="max-w-prose md:text-xl">
          Don't let your website hold you back. Contact us today for a free
          consultation and discover how we can ignite your digital success.
        </p>
        <Button className="border w-fit">Start a Project</Button>
      </div>
    </section>
  );
};

export default Transform;
