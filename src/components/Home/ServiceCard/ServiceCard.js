import React from "react";
import { FcServices } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./ServiceCard.css";
const ServiceCard = (props) => {
  const { _id, name, details, price, img } = props.service;
  return (
    <div className="col-md-3 col-sm-12 my-4 ">
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img
          src={img}
          style={{ height: "150px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details}</p>
          <h5>Price: {price}tk/month</h5>

          <Link className="btn btn-primary" to={`/orderConfirmation/${_id}`}>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
