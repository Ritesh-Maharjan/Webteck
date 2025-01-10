"use client";


import React, { useState } from "react";  // Add useState
import Link from "next/link";
import InfoCard from "../../../_component/ui/InfoCard";
import ContactForm from "../../../_component/contactpage/ContactForm";
import HeadingTitle from "../../../_component/ui/HeadingTitle";
import Accordion from "../../../_component/ui/Accordion";
import Button from "../../../_component/ui/Button";

const accordionItems = [
    {
      id: "item-1",
      title: "How long does it take to build a website?",
      content: (
        <>
          <p>
            The timeline for building a website depends on the complexity and
            features required. <br />
            We will provide a detailed project timeline after understanding your
            specific requirements.
          </p>
          <ul>
            <li>Landing page - 10 days. </li>
            <li>Basic website - 21 days.</li>
            <li>Corporate website - 3 months.</li>
          </ul>
        </>
      ),
    },
    {
      id: "item-2",
      title: "What’s included in each pricing plan?",
      content: (
        <>
          <p>
            Each plan includes essential services tailored to different needs. 
            The Basic plan covers foundational support, while the Standard and 
            Premium plans offer enhanced features such as performance monitoring, 
            regular updates, and dedicated support. For detailed inclusions, 
            please refer to the plan comparison chart.
          </p>
        </>
      ),
    },
    {
      id: "item-3",
      title: "Can I change my plan later?",
      content: (
        <>
          <p>
            Yes, you can upgrade or downgrade your plan at any time to better suit 
            your needs. Simply contact us, and we’ll assist with the transition to 
            a new plan.
          </p>
        </>
      ),
    },
    {
      id: "item-4",
      title: "Are there any setup fees or hidden charges?",
      content: (
        <>
          <p>
            No, we believe in transparent pricing with no hidden fees. All costs 
            are outlined in the plan details, so you’ll know exactly what to expect.
          </p>
        </>
      ),
    },
    {
      id: "item-5",
      title: "Do you offer custom pricing for larger projects?",
      content: (
        <>
          <p>
            Absolutely. If your project requires additional support or custom 
            features, please reach out, and we’ll create a tailored plan to meet 
            your needs.
          </p>
        </>
      ),
    },
    {
      id: "item-6",
      title: "What payment methods do you accept?",
      content: (
        <>
          <p>
            We accept various payment methods, including credit cards, debit cards, 
            and direct bank transfers, for your convenience.
          </p>
        </>
      ),
    },
    {
      id: "item-7",
      title: "Is there a contract commitment?",
      content: (
        <>
          <p>
            We offer both monthly and annual options. You’re free to choose the 
            commitment level that best fits your needs, and you can cancel anytime 
            with a month’s notice.
          </p>
        </>
      ),
    },
    {
      id: "item-8",
      title: "What if I need help choosing the right plan?",
      content: (
        <>
          <p>
            We’re here to help! Feel free to reach out, and our team will assist 
            you in selecting the plan that aligns with your business goals and budget.
          </p>
        </>
      ),
    },
  ];
const UiUxPage = () => {
    const backgroundColor = true; // Example condition, replace with your actual logic
    const [activeAccordion, setActiveAccordion] = useState(null); // Define state

    return (
        <div className="bg-[url('/img/uiux-detail/uiux-bg.png')] bg-cover bg-center text-white">
            <header className="text-center py-20">
                <div className="flex flex-col text-center gap-10">
                    <h1 className="text-5xl font-bold mb-4 md:text-8xl">UI/UX design service</h1>
                    <p className="text-lg max-w-2xl mx-auto mb-4 md:text-2xl">
                        From wireframes to polished interfaces, we ensure seamless user experiences, allowing users to navigate effortlessly and enjoy the digital journey.
                    </p>
                    <button
                        className={`hidden md:flex items-center justify-center rounded-3xl border py-2 px-4 font-medium text-lg transition duration-10 ease-in-out text-center mx-auto hover:text-[#7A58FF] hover:border-[#7A58FF] gap-2`}
                    >
                        <Link href="/contact">
                            Start a Project
                        </Link>
                        <img 
                            src="/img/uiux-detail/question-answer-icon.png" 
                            alt="Question Answer Icon" 
                            className="ml-1 hover:text-[#7A58FF] hover:border-[#7A58FF]" 
                        />
                    </button>
                </div>
            </header>

            <div className="p-6 md:p-10 flex flex-col text-center gap-6 md:flex-row md:text-left md:items-center justify-between md:mx-20 lg:mx-60 md:gap-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    Our attentive approach to UI/UX design
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                    With over 10 years of experience, our professional UI/UX design service goes beyond aesthetics, focusing on user-centred processes. Every design element is crafted to engage your target audience and communicate your unique selling points effectively.
                </p>
            </div>

           {/* InfoCard Component */}
            <div className="flex justify-center items-center min-h-screen py-40">
                <div className="flex flex-col gap-8">
                    {/* Row 1 and Row 2 Combined */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        <InfoCard
                            title="Discovery Stage"
                            subtitle="We start by configuring environment setup"
                            procedures={["Configure development tools", "Establish deployment infrastructure", "Set up version control systems", "Establish Communication Channels"]}
                            ranking="01"
                            img="/img/home-page/card-1.png"
                        />
                        <InfoCard
                            title="Vision Alignment"
                            subtitle="Crafting a visually appealing and user-friendly design."
                            procedures={["Develop responsive layouts", "Wireframe Development", "Visual Design Creation", "Design user interface components"]}
                            ranking="02"
                            img="/img/home-page/card-2.png"
                        />
                        <InfoCard
                            title="Wireframes"
                            subtitle="Turning your design into a fully functional website."
                            procedures={["Perform manual UX testing", "Performance Optimization", "Quality Assurance Testing", "Back-End Function Intergration"]}
                            ranking="03"
                            img="/img/home-page/card-3.png"
                        />
                        <InfoCard
                            title="UI Design"
                            subtitle="We start by configuring environment setup"
                            procedures={["Configure development tools", "Establish deployment infrastructure", "Set up version control systems", "Establish Communication Channels"]}
                            ranking="04"
                            img="/img/home-page/card-2.png"
                        />
                        <InfoCard
                            title="Evaluation"
                            subtitle="Crafting a visually appealing and user-friendly design."
                            procedures={["Wireframe Development", "Visual Design Creation", "Develop responsive layouts", "Design user interface components"]}
                            ranking="05"
                            img="/img/home-page/card-3.png"
                        />
                        <InfoCard
                            title="Testing & Debugging"
                            subtitle="Turning your design into a fully functional website."
                            procedures={["Perform manual UX testing", "Performance Optimization", "Quality Assurance Testing", "Back-End Function Intergration"]}
                            ranking="06"
                            img="/img/home-page/card-1.png"
                        />
                    </div>
                </div>
            </div>
            <section
                className="w-full h-3"
                style={{
                    background: backgroundColor
                        ? "linear-gradient(to right, #ffffff 0%, #A1A1A1 10%, #555555 100%)"
                        : "linear-gradient(to right, #999999 0%, #A1A1A1 17%, #FFFFFF 100%)"
                }}
            ></section>

            <div className="mt-20 md:mt-20">
                <h1 className="text-center text-4xl font-bold mb-4 md:text-7xl">UI/UX design solutions</h1>
            </div>

            <div className="md:pt-10 pb-20">
                {/* Ui/Ux design */}
                <div className="flex flex-col pt-10 md:flex-row gap-20 px-6 md:gap-40 md:px-64 md:pt-20 items-center">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl font-bold mb-4 md:text-5xl">UI/UX Design</h1>
                        <p className="text-lg md:text-xl">Transform the way users interact with your brand through thoughtful wireframes and memorable interfaces. Let’s bring your idea to life and create digital experiences that set you apart from the competition</p>
                        <ul className="flex flex-col gap-2 list-disc ml-6 mt-4 text-lg md:text-xl">
                            <li>Wireframes & Pixel-Perfect Mockups</li>
                            <li>Custom illustrations</li>
                            <li>Visual Design</li>
                        </ul>
                    </div>
                    <img src="/img/uiux-detail/uiux-img-comp-1.png" alt="UI/UX design solution" className="h-200 width-200 order-last md:order-first" />
                </div>

                {/* Design Systems */}
                <div className="flex flex-col pt-10 md:flex-row gap-20 px-6 md:gap-40 md:px-64 md:pt-20 items-center">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl font-bold mb-4 md:text-5xl">Design Systems</h1>
                        <p className="text-lg md:text-xl">Develop a cohesive visual identity, establish brand-focused guidelines, and design UI elements to eliminate inconsistencies and clutter. We ensure your brand maintains integrity across all digital touchpoints with ease.</p>
                        <ul className="flex flex-col gap-2 list-disc ml-6 mt-4 text-lg md:text-xl">
                            <li>UI Kit & system development</li>
                            <li>Component Library</li>
                            <li>Component Documentation</li>
                        </ul>
                    </div>
                    <img src="/img/uiux-detail/uiux-img-comp-2.png" alt="UI/UX design solution" className="h-200 width-200 order-last md:order-last" />
                </div>

                {/* UI/UX Audits */}
                <div className="flex flex-col pt-10 md:flex-row gap-20 px-6 md:gap-40 md:px-64 md:py-20 items-center">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl font-bold mb-4 md:text-5xl">UI/UX Audits</h1>
                        <p className="text-lg md:text-xl">Receive actionable UI/UX design tips and comprehensive design audits to overcome challenges and enhance the user experience. Unlock the full potential of your digital presence with our expertise.</p>
                        <ul className="flex flex-col gap-2 list-disc ml-6 mt-4 text-lg md:text-xl">
                            <li>Design Strategy Development</li>
                            <li>Design Evaluation</li>
                            <li>Recommendations</li>
                        </ul>
                    </div>
                    <img src="/img/uiux-detail/uiux-img-comp-3.png" alt="UI/UX design solution" className="h-200 width-200 order-last md:order-first" />
                </div>
            </div>
            
            {/* Contact us section */}
            <div className="max-w-screen-2xl mx-auto px-8 grid pb-20 pt-10 md:grid-cols-6 gap-y-10">
                <div className="flex flex-col gap-6 justify-between md:col-span-3">
                    <HeadingTitle as="h1" className="w-fit">
                    Let&apos;s work together
                    </HeadingTitle>
                    <div className="flex flex-col gap-4">
                    <p className="text-[#CDCDCD] text-lg flex flex-col">
                        Phone:
                        <a className="text-white" href="tel:+17783188494">
                        +1 (778) 318 8494
                        </a>
                    </p>
                    <p className="text-[#CDCDCD] text-lg flex flex-col">
                        Email:
                        <a
                        className="text-white"
                        href="mailto:vancouver.webteck@gmail.com"
                        >
                        vancouver.webteck@gmail.com
                        </a>
                    </p>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <h2 className="font-bold text-2xl md:text-4xl text-white pb-5 md:pb-12">
                    Get a Detailed Proposal
                    </h2>
                    <ContactForm />
                </div>
            </div>

            <div>

            <section id="" className="bg-white text-black overflow-hidden relative py-24 mt-32 before:absolute before:top-0 before:left-0 before:right-0 before:h-2 before:w-full before:inline-block before:bg-gradient-to-r before:from-[#D9D9D9] before:to-[#888888] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-2 after:w-full after:inline-block after:bg-gradient-to-r after:from-[#D9D9D9] after:to-[#888888]">{/* FAQ section */}
            <div className="max-w-screen-2xl mx-auto flex flex-col gap-20 px-8">
                <div className="mb-10 flex flex-col gap-2">
                    <h3 className="font-bold text-5xl">Frequently Asked Questions</h3>
                    <p className="text-[#888888]">Some common questions and answers</p>
                </div>

                {/* Accordion Container*/}
                <div className="flex flex-col gap-2">
                    {accordionItems.map((el) => (
                    <Accordion
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        content={el.content}
                        activeAccordion={activeAccordion}
                        setActiveAccordion={setActiveAccordion}
                    />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <p className="flex flex-col gap-1 text-3xl">
                    Have more questions?
                    <span className="text-xl">
                    If you have additional questions, feel free to reach out.
                    </span>
                </p>
                <Link href="/contact">
                    <Button className="border uppercase font-bold w-fit">
                    Contact Us
                    </Button>
                </Link>
                </div>
            </div>
            </section>
            

        </div>
    );
};

export default UiUxPage;

