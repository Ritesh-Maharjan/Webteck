import React from "react";

const Offer = () => {
  return (
    <section className="py-14 bg-white text-black">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-4">
        <h2>What we offer?</h2>

        <div>
          <p>
            WebTeck provides custom web development, e-commerce solutions, and
            maintaineance to help your business succeed online{" "}
          </p>

          <div>
            <button>Left Icon placeholder</button>
            <button>Right Icon placeholder</button>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex justify-between flex-col p-2 border-4">
            <p>Incon</p>
            <div>
              <span>01.</span>
              <h3>SEO Services</h3>
            </div>
          </div>
          <div className="flex justify-between flex-col p-2 border-4">
            <p>Incon</p>
            <div>
              <span>01.</span>
              <h3>SEO Services</h3>
            </div>
          </div>
          <div className="flex justify-between flex-col p-2 border-4">
            <p>Incon</p>
            <div>
              <span>01.</span>
              <h3>SEO Services</h3>
            </div>
          </div>
          <div className="flex justify-between flex-col p-2 border-4">
            <p>Incon</p>
            <div>
              <span>01.</span>
              <h3>SEO Services</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
