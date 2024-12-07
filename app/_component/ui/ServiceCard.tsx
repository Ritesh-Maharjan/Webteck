import React from "react";
//used for display the service card in the service page main page
const ServiceCard = ({ service }: { service: any }) => {
	return <div>{service.title}</div>;
};

export default ServiceCard;