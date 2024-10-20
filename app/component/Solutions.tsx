import React from "react";

const Solutions = () => {
  return (
    <section className="my-24">
      <div className="max-w-screen-xl mx-auto before:pb-14 after:pt-14 before:border-t after:border-b flex flex-col gap-6">
        <h2>Flexible Solutions For Every Business</h2>
        <p>
          At Webteck, we work with all types of business, offering flexible,
          high quality website solutions. Our focus is on delivering websites
          that drive results and help your business grow, no matter your size or
          industry.
        </p>

        {/* CHange this to reusabole components later */}
        <div>
          <button>Book a call</button>
          <p>
            For future of knowledge <span>Discover our vision</span>
          </p>
        </div>

        <div>
          <span className="border py-3 px-6 rounded-full">
            Small Business & Startups
          </span>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
