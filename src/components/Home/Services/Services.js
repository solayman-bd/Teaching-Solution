import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch(`https://secure-castle-55180.herokuapp.com/getServices`)
      .then((res) => res.json())
      .then((result) => setServiceData(result));
  }, []);
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
