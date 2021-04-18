import React from "react";

const TestimonialCard = ({ info }) => {
  return (
    <div className="col-md-3 ">
      <div className="card row mx-auto my-2 shadow" style={{ width: "18rem" }}>
        <div className="col-12 my-2">
          <div className="row">
            <div className="col-5">
              <img
                style={{ width: "60px", borderRadius: "50%" }}
                src={info.img}
                alt=""
              />
            </div>
            <div className="col-7 text-dark">
              <p>{info.name}</p>
              <small>{info.designation}</small>
            </div>
          </div>
        </div>
        <div
          style={{ height: "150px", overflow: "hidden" }}
          className="card-body text-center col-12"
        >
          <p className="card-text">{info.remark}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
