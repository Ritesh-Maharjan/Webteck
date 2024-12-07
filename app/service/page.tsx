import { servicesData } from "./data";
import ServiceCard from "@/app/_component/ui/ServiceCard";
import Image from "next/image";

export default function ServicePage() {
  return (
    <main className="w-full">
      <section className="hero-section relative h-[400px] w-full">
        <Image 
          src="/img/service-page/service-hero-bg.png" 
          alt="Hero Image" 
          fill
					priority //might need to optimize the image for performance so i can remove this WARNING**
          className="object-cover absolute top-0 left-0 w-full h-full z-0" 
        />
        <h1 className="text-4xl font-bold text-center relative z-10">Services</h1>
      </section>
      <section className="container mx-auto p-4">
        <div className="flex flex-wrap gap-4">
          {servicesData.map(service => <ServiceCard key={service.id} service={service} />)}
        </div>
      </section>
    </main>
  );  
}
