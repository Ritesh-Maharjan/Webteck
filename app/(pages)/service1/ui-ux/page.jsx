"use client";

import React, { useState } from "react";  
import Link from "next/link";
import InfoCard from "../../../_component/ui/InfoCard";
import ContactForm from "../../../_component/contactpage/ContactForm";
import HeadingTitle from "../../../_component/ui/HeadingTitle";
import Accordion from "../../../_component/ui/Accordion";
import Button from "../../../_component/ui/Button";
import { Transform } from "@/_component";

const accordionItems = [
    {
      id: "item-1",
      title: "What is UI/UX design, and why is it important?",
      content: (
        <>
          <p>
          UI (User Interface) design focuses on the look and feel of your product, while UX (User Experience) design is about how users interact with it. <br></br>Together, they ensure your product is both visually appealing and easy to use, which is critical for user satisfaction and business success.
          </p>
        </>
      ),
    },
    {
      id: "item-2",
      title: "How long does the UI/UX design process take?",
      content: (
        <>
          <p>
          The timeline varies depending on the scope of the project. For most projects, the design process can take anywhere from 4 to 8 weeks. We provide a detailed timeline after reviewing your specific needs and goals.
          </p>
        </>
      ),
    },
    {
      id: "item-3",
      title: " What is your approach to user research?",
      content: (
        <>
          <p>
          We begin every project with thorough user research, including surveys, interviews, and competitive analysis. This helps us understand your target audience and their needs, ensuring that our design solutions are aligned with user expectations and business goals.
          </p>
        </>
      ),
    },
    {
      id: "item-4",
      title: "Will I be involved in the design process?",
      content: (
        <>
          <p>
          Absolutely! We value collaboration and ensure that your feedback is integrated at every stage. From initial wireframes to final prototypes, we keep you involved and informed throughout the process.
          </p>
        </>
      ),
    },
    {
      id: "item-5",
      title: "Can you redesign an existing website or app?",
      content: (
        <>
          <p>
          Yes, we can help redesign your current website or app to improve user experience, update the visual design, or better align with your business objectives. We assess the current design and suggest improvements based on user needs and modern design trends.
          </p>
        </>
      ),
    },
    {
      id: "item-6",
      title: "How do you ensure the design is user-friendly?",
      content: (
        <>
          <p>
          We follow a user-centered design approach, conducting usability testing and collecting feedback throughout the design process. This allows us to identify any potential issues early on and ensure a smooth and intuitive user experience.
          </p>
        </>
      ),
    },
    {
      id: "item-7",
      title: "Do you provide prototyping and user testing?",
      content: (
        <>
          <p>
          Yes, we create interactive prototypes that simulate the final product, allowing you and real users to test the interface. We gather feedback, make adjustments, and refine the design to ensure it meets both your needs and user expectations.
          </p>
        </>
      ),
    },
    {
      id: "item-8",
      title: "What tools do you use for UI/UX design?",
      content: (
        <>
          <p>
          We use industry-standard tools like Figma, Sketch, and Adobe XD for design and prototyping. These tools allow for seamless collaboration and provide a clear visual representation of the final product.
          </p>
        </>
      ),
    },
    {
        id: "item-9",
        title: "How much does UI/UX design cost?",
        content: (
          <>
            <p>
            The cost varies depending on the complexity of the project. After an initial consultation to understand your needs, we provide a customized quote that reflects the scope and timeline of the work.
            </p>
          </>
        ),
      },
      {
        id: "item-10",
        title: "What happens after the design is complete?",
        content: (
          <>
            <p>
            After the design phase, we can work with your development team or provide ongoing support to ensure the design is implemented correctly. We also offer maintenance services to help refine and update the design as your product evolves.
            </p>
          </>
        ),
      },
  ];
const UiUxPage = () => {
    const backgroundColor = true; 
    const [activeAccordion, setActiveAccordion] = useState(null); 

    return (
      <div>
        <div className=" relative bg-[url('/img/uiux-detail/uiux-bg.png')] bg-cover bg-center text-white">
            <header className="text-center pb-20 pt-60">
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
        </div>
        {/* InfoCard Component */}
        <div className="flex justify-center items-center min-h-screen pt-40 pb-20">
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
            className="w-full h-2"
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
            
        <div id="" className="bg-white text-black overflow-hidden relative py-24 mt-32 before:absolute before:top-0 before:left-0 before:right-0 before:h-2 before:w-full before:inline-block before:bg-gradient-to-r before:from-[#D9D9D9] before:to-[#888888] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-2 after:w-full after:inline-block after:bg-gradient-to-r after:from-[#D9D9D9] after:to-[#888888]">
            
            {/* FAQ section */}
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

            <div className="max-w-screen-2xl mx-auto px-8 pt-12 flex flex-col gap-5">
                <p className="flex flex-col gap-1 text-3xl">
                    Have more questions?
                    <span className="text-xl">
                    If you have additional questions, feel free to reach out.
                    </span>
                </p>
                <Link href="/contact">
                    <Button className="border uppercase font-bold w-fit transition duration-10 ease-in-out border-[#CDCDCD] text-black hover:text-[#7A58FF] hover:border-[#7A58FF]">
                    Contact Us
                    </Button>
                </Link>
            </div>
        </div>
        <div>
            <Transform />
        </div>
        

    
      </div>
    );
};

export default UiUxPage;

