import Head from "next/head";
import { servicesData } from "./data";
import ServiceCard from "../../_component/servicepage/ServiceCard";
import Image from "next/image";
import TextSlider, { defaultTexts } from "../../_component/ui/TextSlider";
import Investment from "../../_component/Investment";
import HeadingTitle from "../../_component/ui/HeadingTitle";

// Define and export the Service interface
export interface Service {
  id: string;
  title: string;
  fullDescription: string;
  features: string[];
  image: string;
  bgImage?: string;
  heading?: string;
  subheading?: string;
  solutionImage1?: string;
  solutionImage1Title?: string;
  solutionImage1Desc?: string;
  bulletPoints1?: string[];
  solutionImage2?: string;
  solutionImage2Title?: string;
  solutionImage2Desc?: string;
  bulletPoints2?: string[];
  solutionImage3?: string;
  solutionImage3Title?: string;
  solutionImage3Desc?: string;
  bulletPoints3?: string[];
  workflowArr?: Workflow[];
}

interface Workflow {
  title: string;
  subtitle: string;
  procedures: string[];
  ranking: string;
  img: string;
}

export default function ServicePage() {
  return (
    <>
      {/* SEO: Canonical Tag */}
      <Head>
        <title>Our Services - Vancouver WebTeck</title>
        <meta name="description" content="Vancouver WebTeck offers Web Development, UI/UX Design Services, and Website Maintenance & Support. We build high-performance websites, enhance user experiences, and ensure seamless maintenance for your digital presence."
        />
        <link rel="canonical" href="https://webteck.ca/service" />
      </Head>

      <main className="w-full">
        {/* Hero Section */}
        <section className="hero-section relative w-full z-0">
          <div className="relative w-full h-[calc(100vh-3rem-155px)]">
            <Image
              src="/img/service-page/service-hero-bg.png"
              alt="Hero Image"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between h-full absolute inset-0">
            <div className="flex flex-col md:flex-row md:items-center justify-center h-full max-w-screen-2xl mx-auto px-4">
              <div className="flex flex-col gap-4 text-center max-w-2xl">
                <h3 className="text-xl font-bold text-left text-[#D9D9D9]">
                  Services
                </h3>
                <HeadingTitle as="h1" className="text-left">
                  We cultivate trust alongside building websites.
                </HeadingTitle>
              </div>
              <div className="mt-4 w-full sm:w-[300px] md:w-[418px]">
                <p className="text-2xl text-[#DBDBDB] text-left max-w-full">
                  Our extensive knowledge in design and technology brings forth leading brands and digital journeys.
                </p>
              </div>
            </div>
            <div className="relative z-10">
              <TextSlider texts={defaultTexts} />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="flex flex-col items-center mt-4 before:h-2 before:w-full before:inline-block before:bg-gradient-to-r before:from-[#D9D9D9] before:to-[#888888] mb-20 before:mb-24 after:mt-24">
          <div className="flex flex-col gap-4 md:gap-20">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        <Investment />
      </main>
    </>
  );
}
