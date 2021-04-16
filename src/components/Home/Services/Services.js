import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import fakeData from "../../../FakeServiceData/FakeServiceData";

const Services = () => {
  const serviceData = fakeData;
  return (
    <section className="services my-5 py-2">
      <h1 className="text-center">
        <span className="text-info">The Services</span> <br></br> We{" "}
        <span className="text-info">Provide</span>
      </h1>
      <div className="row">
        {serviceData.map((data) => (
          <ServiceCard key={data.id} service={data}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
