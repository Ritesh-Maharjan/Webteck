import React from "react";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-3rem)] max-w-screen-xl flex items-center justify-center mx-auto">
      <div>
        <h1>
          Custom Websites <br />
          Tailored for you
        </h1>
        <p>
          We specialize in creating unique, responsive websites that elevate
          your online presence and bring your vision to life. Let us help you
          stand out from the crowd.
        </p>
        <div>
          <button>Book a call</button>
          <p>
            <span>Have a question?</span>Schedule an appointment.
          </p>
        </div>
      </div>
      <div>
        <h2>PUT IMAGE HERE</h2>
      </div>
      <div className="absolute bottom-10 left-0 right-0">
        <div className="flex whitespace-nowrap gap-4 text-4xl w-full overflow-hidden">
          <h2>Crafting Beautiful Website</h2>
          <span>|</span>
          <h2>Elevating Your Online Presence</h2>
          <span>|</span>
          <h2>Crafting Beautiful Website</h2>
          <span>|</span>
          <h2>Elevating Your Online Presence</h2>
          <span>|</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
