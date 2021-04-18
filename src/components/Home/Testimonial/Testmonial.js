import React, { useEffect, useState } from "react";
import "./Testimonial.css";

import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    fetch(`https://secure-castle-55180.herokuapp.com/getReview`)
      .then((res) => res.json())
      .then((result) => setTestimonialData(result));
  }, []);
  return (
    <section className="testimonial-area my-5 py-2">
      <h1 className="text-center text-info my-5">Testimonial</h1>
      <div className="row">
        {testimonialData.map((data) => (
          <TestimonialCard key={data.id} info={data}></TestimonialCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
