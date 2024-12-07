// The [serviceId] folder is a Next.js dynamic route feature. It allows you to create individual pages for each service dynamically. The square brackets [] tell Next.js that this is a dynamic parameter.

import { servicesData } from "../data";

export default function ServicePage({ params }: { params: { serviceId: string } }) {
  const service = servicesData.find(service => service.id === params.serviceId);
  return <div>{service?.title}</div>;
}