import React from "react";
import HeadingTitle from "./ui/HeadingTitle";
import Image from "next/image";

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
            <Image
              src="/img/home-page/Stepupmarketing-main-logo.png"
              alt="step up marketing"
              className="h-8 w-24"
              height={32}
              width={96}
            />
            <div className="border-t flex flex-col gap-2">
              <h4 className="font-bold">Step Up Marketing</h4>
              <blockquote className="text-sm">
                “Choosing Webteck for our web development needs was the best
                decision we made. Their team’s creativity, attention to detail,
                and commitment to excellence were evident throughout the
                project. They transformed our vision into a stunning website
                that perfectly represents our brand. Highly recommend their
                exceptional services!”
              </blockquote>

              <cite className="text-lg">Solomon Pieters</cite>
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
                “Working with WebTeck was a game-changer for my online presence.
                Their talented team brought our ideas to life with a sleek and
                user-friendly website. From concept to launch, their
                professionalism and dedication to quality were unmatched. We’re
                thrilled with the results and grateful for their expertise.”
              </blockquote>

              <cite className="text-lg">Joly Liu</cite>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4>Website LOGO</h4>
            <div className="border-t flex flex-col gap-2">
              <h4>Website Name</h4>
              <blockquote className="text-sm">
                “Exceptional service from start to finish! WebTeck delivered a
                flawless website that surpassed our expectations. Their
                expertise, professionalism, and dedication to customer
                satisfaction are unmatched. We’re thrilled with the results and
                highly recommend WebTeck for anyone seeking top-notch web
                development services.”
              </blockquote>

              <cite className="text-lg">Andrew Wang</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
