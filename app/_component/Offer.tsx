import React from "react";
import HeadingTitle from "./ui/HeadingTitle";
import Image from "next/image";
import Card from "./ui/Card";

const Offer = () => {
  return (
    <section className="pt-32 pb-72 bg-white text-black px-8 overflow-hidden">
      <div className="max-w-screen-2xl px-8 mx-auto flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-4">
            <HeadingTitle as="h2" backgroundColor="black" className="w-fit">
              What we offer?
            </HeadingTitle>
            <p className="text-[#818181]">
              WebTeck provides custom web development, e-commerce solutions, and
              maintaineance to help your business succeed online
            </p>
          </div>
          <div className="flex gap-4">
            <button className="p-2 border-gray-400 border-2 rounded-full">
              <Image
                src="/img/home-page/whatweoffer-arrow-left.png"
                height={24}
                width={24}
                alt="Left arrow"
              />
            </button>
            <button className="p-2 border-gray-400 border-2 rounded-full">
              <Image
                src="/img/home-page/whatweoffer-arrow-right.png"
                height={24}
                width={24}
                alt="Right arrow"
              />
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <Card cardBackground="radial-gradient(circle, #FFB5B5 15%, #EEEEEE 70%)">
            <img src="/img/home-page/whatweoffer-1.png" className="w-14" alt="Website Development" />
            <div>
              <span className="text-sm font-bold">01.</span>
              <h3 className="font-bold text-2xl">Website Development</h3>
            </div>
          </Card>

          <Card cardBackground="radial-gradient(circle, #B5E4FF 15%, #EEEEEE 70%)">
            <img src="/img/home-page/whatweoffer-2.png" className="w-16" alt="SEO Service" />
            <div>
              <span className="text-sm font-bold">02.</span>
              <h3 className="font-bold text-2xl">SEO Service</h3>
            </div>
          </Card>

          <Card cardBackground="radial-gradient(circle, #FFE1B5 15%, #EEEEEE 70%)">
            <img src="/img/home-page/whatweoffer-3.png" className="w-10" alt="Website Development" />
            <div>
              <span className="text-sm font-bold">03.</span>
              <h3 className="font-bold text-2xl">Website Design</h3>
            </div>
          </Card>

          <Card cardBackground="radial-gradient(circle, #BFB5FF 15%, #EEEEEE 70%)">
            <img src="/img/home-page/whatweoffer-4.png" className="w-12" alt="Website Maintenance & Support" />
            <div>
              <span className="text-sm font-bold">04.</span>
              <h3 className="font-bold text-2xl">Website Maintenance & Support</h3>
            </div>
          </Card>

          <Card cardBackground="radial-gradient(circle, #FFB5E1 15%, #EEEEEE 70%)">
            <img src="/img/home-page/whatweoffer-5.png" className="w-12" alt="UI/UX Design" />
            <div>
              <span className="text-sm font-bold">05.</span>
              <h3 className="font-bold text-2xl">UI/UX Design</h3>
            </div>
          </Card>

          <Card cardBackground="radial-gradient(circle, #FFB5E1 15%, #EEEEEE 70%)">
            <img src="/img/home-page/whatweoffer-6.png" className="w-12" alt="E-Commerce" />
            <div>
              <span className="text-sm font-bold">06.</span>
              <h3 className="font-bold text-2xl">E-Commerce</h3>
            </div>
          </Card>

          <Card cardBackground="radial-gradient(circle, #FFB5E1 15%, #EEEEEE 70%)">
            <img src="/img/home-page/whatweoffer-7.png" className="w-12" alt="Website Design" />
            <div>
              <span className="text-sm font-bold">07.</span>
              <h3 className="font-bold text-2xl">Website Design</h3>
            </div>
          </Card>

          <Card cardBackground="radial-gradient(circle, #FFB5E1 15%, #EEEEEE 70%)">
            <img src="/img/home-page/whatweoffer-8.png" className="w-12" alt="Branding and Graphic Design" />
            <div>
              <span className="text-sm font-bold">08.</span>
              <h3 className="font-bold text-2xl">Branding and Graphic Design</h3>
            </div>
          </Card>

          <Card cardBackground="radial-gradient(circle, #FFB5E1 15%, #EEEEEE 70%)">
            <img src="/img/home-page/whatweoffer-9.png" className="w-12" alt="Digital Marketing" />
            <div>
              <span className="text-sm font-bold">09.</span>
              <h3 className="font-bold text-2xl">Digital Marketing</h3>
            </div>
          </Card>

          <Card cardBackground="radial-gradient(circle, #FFB5E1 15%, #EEEEEE 70%)">
            <img src="/img/home-page/whatweoffer-10.png" className="w-12" alt="Content Strategy" />
            <div>
              <span className="text-sm font-bold">10.</span>
              <h3 className="font-bold text-2xl">Content Strategy</h3>
            </div>
          </Card>

          <Card cardBackground="radial-gradient(circle, #FFB5E1 15%, #EEEEEE 70%)">
            <img src="/img/home-page/whatweoffer-11.png" className="w-12" alt="Data & Analytics" />
            <div>
              <span className="text-sm font-bold">11.</span>
              <h3 className="font-bold text-2xl">Data & Analytics</h3>
            </div>
          </Card>

          <Card cardBackground="radial-gradient(circle, #FFB5E1 15%, #EEEEEE 70%)">
            <img src="/img/home-page/whatweoffer-12.png" className="w-12" alt="Accessibility Compliance" />
            <div>
              <span className="text-sm font-bold">12.</span>
              <h3 className="font-bold text-2xl">Accessibility Compliance</h3>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Offer;
