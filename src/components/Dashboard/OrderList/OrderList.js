import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";

const OrderList = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { name, email, service, status } = props.customerInfo;

  return (
    <tr>
      {}
      <th scope="row">{name}</th>
      <td>{email}</td>
      <td>{service}</td>
      <td>{status}</td>
    </tr>
  );
};

export default OrderList;
