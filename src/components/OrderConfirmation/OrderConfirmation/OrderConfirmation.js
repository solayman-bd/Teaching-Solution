import React, { useContext } from "react";
import { useParams } from "react-router";
import "./OrderConfirmation.css";
import confirmedOrderImg from "../../../images/orderConfirned.jpg";
import FakeServiceData from "../../../FakeServiceData/FakeServiceData";
import { UserContext } from "../../../App";
import NavigationBar from "../../Shared/Navigationbar/NavigationBar";
import Footer from "../../Shared/Footer/Footer";
import PaymentConfirmation from "../PaymentConfirmation/PaymentConfirmation";

// import ProcessPayment from "../ProcessPayment/ProcessPayment";

const OrderConfirmation = (props) => {
  const { id } = useParams();
  console.log("Id", id);
  const serviceData = FakeServiceData;
  console.log("service data", serviceData);

  const foundData = serviceData.filter((data) => data._id === id);
  console.log("found data", foundData);
  const { name, price } = foundData[0];
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log("user Info", loggedInUser);
  return (
    <div
      style={{ maxWidth: "100%", width: "98%" }}
      className="order-confirmation-page mx-auto"
    >
      <NavigationBar></NavigationBar>
      <div className="confirmation-section row">
        <div className="col md-6">
          <div className="w-75 mx-auto">
            <img
              src={confirmedOrderImg}
              style={{ width: "100%" }}
              className="img-thumbnail"
              alt=""
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: "white" }}
          className="col md-6 text-dark"
        >
          <h1> Name: {loggedInUser.name}</h1>
          <h2>Email: {loggedInUser.email}</h2>
          <img style={{ height: "60px" }} src={loggedInUser.imgUrl} alt="" />
          <h2>Your Orders</h2>
          <p>Service Name: {name}</p>
          <p>Service Price : {price}</p>
          {/* <ProcessPayment></ProcessPayment> */}
          <PaymentConfirmation></PaymentConfirmation>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OrderConfirmation;
