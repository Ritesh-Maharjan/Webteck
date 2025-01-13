import { servicesData } from "./data";
import ServiceCard from "../_component/servicepage/ServiceCard";
import Image from "next/image";
import TextSlider, { defaultTexts } from "../_component/ui/TextSlider";
import Investment from "../_component/Investment";
import HeadingTitle from "../_component/ui/HeadingTitle";

export default function ServicePage() {
  return (
    //THIS IS THE SERVICE PAGE MAIN
    <main className="w-full">
      <section className="hero-section relative w-full z-0 mx-auto">
        <Image
          src="/img/service-page/service-hero-bg.png"
          alt="Hero Image"
          fill
          priority //might need to optimize the image for performance so i can remove this WARNING**
          className="object-cover absolute top-0 left-0 w-full h-full z-0"
        />
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col md:flex-row md:items-center justify-center min-h-[calc(100vh-3rem-155px)] max-w-screen-2xl mx-auto px-4">
            <div className="flex flex-col gap-4 text-center max-w-2xl">
              <h3 className="text-2xl font-bold text-left relative z-10 text-[#D9D9D9]">
                Services
              </h3>
              <HeadingTitle as="h1" className="text-left relative">
                We cultivate trust alongside building websites.
              </HeadingTitle>
            </div>
            <div className="mt-4 w-[418px]">
								<p className="text-2xl text-[#DBDBDB] text-left relative z-10 max-w-full sm:w-[300px]">
								Our extensive knowledge in design and technology brings forth
								leading brands and digital journeys.
								</p>
            </div>
          </div>
          <div className="relative z-10">
            <TextSlider texts={defaultTexts} />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mt-4 gradient-borders">
        <div className="flex flex-col gap-4 md:gap-20">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={servicesData.indexOf(service)}
            />
          ))}
        </div>
      </section>
      <Investment />
    </main>
  );
}
