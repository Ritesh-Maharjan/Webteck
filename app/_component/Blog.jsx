import React from "react";
import HeadingTitle from "./ui/HeadingTitle";
import Link from 'next/link';



const Blog = () => {    
    return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-screen-2xl px-8 flex flex-col items-center gap-12 mx-auto">
        <div className="flex flex-col items-center gap-4">
          <HeadingTitle
            as="h2"
            className="text-center w-fit pb-1"
          >
            Our Latest Blog Post
          </HeadingTitle>
          <p className="text-[#818181] max-w-prose text-center text-2xl mb-2">
          Best premium webflow Blog Component that you can 
            <br /> use to your project and save tons of time to build the website faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-5">
            <img src="/img/blog-page/test-run-1.jpg" 
                alt="How to Craft they Winning Socials Media Strategy from Scratch" 
                height={255} 
                width={382}
                className="w-full h-[183px]"
            />
            <h3 className="text-lg md:text-xl">Why SEO Matter</h3>
            <div className=" flex flex-col gap-5">
              <blockquote className="text-normal text-[#818181]">
                “SEO, or Search Engine Optimization, involves optimizing your website to improve its visibility in search engine results, ensuring it reaches a broader audience. The goal is to rank higher organically—without relying on paid advertisements—by meeting the criteria search engines like Google use to evaluate content.
              </blockquote>

              <div className="flex items-center justify-end gap-1">
                <img 
                    src="/img/home-page/whatweoffer-arrow-right.png" 
                    height={24} 
                    width={24} 
                    alt="Left arrow" 
                />
                <Link href="/blog/test-run">
                  <p className="text-sm uppercase">Read More</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <img src="/img/blog-page/test-run-2.png" 
                alt="Why a Modern Website is Essential for Your Business in 2025" 
                height={255} 
                width={382}
                className="w-full h-[183px]"
            />
            <h3 className="text-lg md:text-xl">Why a Modern Website is Essential for Your Business in 2025</h3>
            <div className=" flex flex-col gap-5">
              <blockquote className="text-normal text-[#818181]">
                “In today’s competitive digital landscape, your website is more than just an online presence—it’s the cornerstone of your business success. A modern, well-optimized website can act as your best salesperson, working tirelessly 24/7 to attract leads, build trust, and drive conversions.
              </blockquote>

              <div className="flex items-center justify-end gap-1">
                <img 
                    src="/img/home-page/whatweoffer-arrow-right.png" 
                    height={24} 
                    width={24} 
                    alt="Left arrow" 
                />
                <Link href="/blog/test-run-2">
                  <p className="text-sm uppercase">Read More</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <img src="/img/blog-page/test-run-3.png" 
                alt="How to Craft they Winning Socials Media Strategy from Scratch" 
                className="w-full h-[183px]"
            />
            <h3 className="text-lg md:text-xl">How Vancouver WebTeck Can Turn Your Website Into Your Best Salesperson in 2025
            </h3>
            <div className=" flex flex-col gap-5">
              <blockquote className="text-normal text-[#818181]">
                “In today’s fast-paced digital world, having a modern, up-to-date website is no longer a luxury—it’s a necessity. With technology evolving rapidly and customer expectations at an all-time high.
              </blockquote>

              <div className="flex items-center justify-end gap-1">
                <img 
                    src="/img/home-page/whatweoffer-arrow-right.png" 
                    height={24} 
                    width={24} 
                    alt="Left arrow" 
                />
                <Link href="/blog/test-run-3">
                  <p className="text-sm uppercase">Read More</p>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    );
};
export default Blog;