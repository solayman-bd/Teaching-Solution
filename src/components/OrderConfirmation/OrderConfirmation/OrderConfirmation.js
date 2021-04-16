import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import "./OrderConfirmation.css";
import confirmedOrderImg from "../../../images/orderConfirned.jpg";
import FakeServiceData from "../../../FakeServiceData/FakeServiceData";
import { UserContext } from "../../../App";
import NavigationBar from "../../Shared/Navigationbar/NavigationBar";
import Footer from "../../Shared/Footer/Footer";
import PaymentConfirmation from "../PaymentConfirmation/PaymentConfirmation";

import { useForm } from "react-hook-form";

// import ProcessPayment from "../ProcessPayment/ProcessPayment";

const OrderConfirmation = (props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handlePayment = (id) => {
    orderInfo.paymentId = id;
    console.log(orderInfo);
  };
  const [orderInfo, setOrderInfo] = useState(null);
  const onSubmit = (data) => {
    setOrderInfo(data);
  };
  const { id } = useParams();
  // console.log("Id", id);
  const serviceData = FakeServiceData;
  // console.log("service data", serviceData);

  const foundData = serviceData.filter((data) => data._id === id);
  // console.log("found data", foundData);
  const { name, price } = foundData[0];
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log("user Info", loggedInUser);
  return (
    <div
      style={{ maxWidth: "100%", width: "98%" }}
      className="order-confirmation-page mx-auto"
    >
      <NavigationBar></NavigationBar>
      <div className="confirmation-section row">
        <div className="col md-6">
          <div
            style={{ display: orderInfo ? "none" : "block" }}
            className="w-75 mx-auto bg-primary p-5"
          >
            <h2 className="text-center">Shipping Details </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label for="name" class="form-label">
                  User Name :
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  value={loggedInUser.name}
                  {...register("name")}
                />
              </div>
              <div className="mb-3">
                <label for="email" class="form-label">
                  Email address :
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  {...register("email")}
                  value={loggedInUser.email}
                />
              </div>
              <div className="mb-3">
                <label for="service" class="form-label">
                  Service Name :
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="service"
                  {...register("service")}
                  value={name}
                />
              </div>
              <div className="mb-3">
                <label for="price" class="form-label">
                  Price :
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="price"
                  value={price}
                  {...register("price")}
                />
              </div>
              <div className="mb-3">
                <label for="mobile" class="form-label">
                  Mobile :
                </label>
                <input
                  type="number"
                  class="form-control"
                  name="mobile"
                  {...register("mobile", { required: true })}
                />
                {errors.mobile && <span>This field is required</span>}
              </div>

              <input type="submit" />
            </form>
          </div>
        </div>
        <div
          style={{ display: orderInfo ? "block" : "none" }}
          className="col md-6 text-dark"
        >
          <PaymentConfirmation
            handlePayment={handlePayment}
          ></PaymentConfirmation>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OrderConfirmation;
