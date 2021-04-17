import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./OrderConfirmation.css";

import FakeServiceData from "../../../FakeServiceData/FakeServiceData";
import { UserContext } from "../../../App";
import NavigationBar from "../../Shared/Navigationbar/NavigationBar";
import Footer from "../../Shared/Footer/Footer";
import PaymentConfirmation from "../PaymentConfirmation/PaymentConfirmation";

import { useForm } from "react-hook-form";

// import ProcessPayment from "../ProcessPayment/ProcessPayment";

const OrderConfirmation = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handlePayment = (id) => {
    if (id) {
      orderInfo.paymentId = id;
      orderInfo.status = "pending";
      console.log("i am from id");
      fetch(`http://localhost:5000/addOrder`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("info recorded");
          history.push("/dashboard");
        });
    }
  };
  const [orderInfo, setOrderInfo] = useState(null);
  const onSubmit = (data) => {
    setOrderInfo(data);
  };
  const { id } = useParams();

  const serviceData = FakeServiceData;
  // console.log("service data", serviceData);

  const foundData = serviceData.filter((data) => data._id === id);
  // console.log("found data", foundData);
  const { name, price } = foundData[0];
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log("user Info", loggedInUser);
  return (
    <div
      style={{ maxWidth: "100%", width: "98%", backgroundColor: "#F6F7F8" }}
      className="order-confirmation-page mx-auto"
    >
      <NavigationBar></NavigationBar>

      <div
        style={{
          display: orderInfo ? "none" : "block",
          backgroundColor: "#FFFFFF",
        }}
        className="w-50 p-5 mx-auto shadow"
      >
        <h2 className="text-center">Admission Confirmation </h2>
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
              placeholder="01722222222"
              {...register("mobile", { required: true })}
            />
            {errors.mobile && <span>This field is required</span>}
          </div>

          <input className="btn btn-primary" type="submit" />
        </form>
      </div>

      <div
        style={{
          display: orderInfo ? "block" : "none",
          backgroundColor: "#FFFFFF",
        }}
        className="w-50 p-5 mx-auto my-5 shadow"
      >
        <h2 className="text-center my-3 p-4 text-primary">
          Please Complete Your Payment{" "}
        </h2>
        <PaymentConfirmation
          handlePayment={handlePayment}
        ></PaymentConfirmation>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default OrderConfirmation;
