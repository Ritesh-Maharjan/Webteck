import React from "react";
import HeadingTitle from "./ui/HeadingTitle";

const Testimonial = () => {
  return (
    <section className="py-28 bg-white text-black">
      <div className="max-w-screen-2xl px-8 flex flex-col items-center gap-12 mx-auto">
        <div className="flex flex-col items-center gap-4">
          <HeadingTitle
            as="h2"
            backgroundColor="white"
            className="text-center w-fit"
          >
            What Our Clients Say
          </HeadingTitle>
          <p className="text-[#818181] max-w-prose text-center text-2xl">
            Empowering businesses of all sizes,
            <br /> from startups to established enterprises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-5">
            <h4>Website LOGO</h4>
            <div className="border-t flex flex-col gap-2">
              <h4>Website Name</h4>
              <blockquote className="text-sm">
                “I am incredibly impressed with the expertise and
                professionalism of WebTeck. They not only delivered a visually
                stunning website but also ensured it functioned flawlessly.
                Their attention to detail and commitment to customer
                satisfaction made the entire process seamless. Highly recommend
                WebTeck for any website needs!”
              </blockquote>

              <cite className="text-lg">Jackson Li</cite>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4>Website LOGO</h4>
            <div className="border-t flex flex-col gap-2">
              <h4>Website Name</h4>
              <blockquote className="text-sm">
                “I am incredibly impressed with the expertise and
                professionalism of WebTeck. They not only delivered a visually
                stunning website but also ensured it functioned flawlessly.
                Their attention to detail and commitment to customer
                satisfaction made the entire process seamless. Highly recommend
                WebTeck for any website needs!”
              </blockquote>

              <cite className="text-lg">Jackson Li</cite>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4>Website LOGO</h4>
            <div className="border-t flex flex-col gap-2">
              <h4>Website Name</h4>
              <blockquote className="text-sm">
                “I am incredibly impressed with the expertise and
                professionalism of WebTeck. They not only delivered a visually
                stunning website but also ensured it functioned flawlessly.
                Their attention to detail and commitment to customer
                satisfaction made the entire process seamless. Highly recommend
                WebTeck for any website needs!”
              </blockquote>

              <cite className="text-lg">Jackson Li</cite>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4>Website LOGO</h4>
            <div className="border-t flex flex-col gap-2">
              <h4>Website Name</h4>
              <blockquote className="text-sm">
                “I am incredibly impressed with the expertise and
                professionalism of WebTeck. They not only delivered a visually
                stunning website but also ensured it functioned flawlessly.
                Their attention to detail and commitment to customer
                satisfaction made the entire process seamless. Highly recommend
                WebTeck for any website needs!”
              </blockquote>

              <cite className="text-lg">Jackson Li</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
