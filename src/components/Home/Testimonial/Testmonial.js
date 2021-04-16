import React from "react";
import "./Testimonial.css";
import profileImg from "../../../images/pp.jpg";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const testimonialData = [
  {
    id: 1,
    img: profileImg,
    name: "Rumman",
    designation: "CEO,Microsoft",
    remark:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
  },
  {
    id: 2,
    img: profileImg,
    name: "Rumman",
    designation: "CEO,Microsoft",
    remark:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
  },
  {
    id: 3,
    img: profileImg,
    name: "Rumman",
    designation: "CEO,Microsoft",
    remark:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
  },
  {
    id: 4,
    img: profileImg,
    name: "Rumman",
    designation: "CEO,Microsoft",
    remark:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
  },
];
const Testimonial = () => {
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
