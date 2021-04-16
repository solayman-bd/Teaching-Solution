import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51Ie1RRGHr4odbP2lkG25yrIYzXIPn9WsJUZO3QYp24VMxf1koKj37L5rh6rtPBtFcvtMcf1Wqn8chKsUXwhj7H5500o8TD7MuP"
);

const PaymentConfirmation = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm handlePayment={handlePayment}></CheckoutForm>
    </Elements>
  );
};

export default PaymentConfirmation;
