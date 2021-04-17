import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import NavigationBar from "../../Shared/Navigationbar/NavigationBar";
import "./Dashboard.css";

import OrderList from "../OrderList/OrderList";
import SideBar from "../SideBar/SideBar";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [customerInfo, setCustomerInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/dashboard", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setCustomerInfo(data));
  }, []);

  return (
    <div style={{ maxWidth: "100%", width: "98%" }} className="dashboard">
      <NavigationBar></NavigationBar>
      <div className="row main-content">
        <SideBar></SideBar>
        <div className="col-9">
          <div className="user-detail min-vh-100">
            <div className="user-info">
              <h3 className="text-end mx-2 p-2">
                User Name: {loggedInUser.name}
              </h3>
            </div>

            <div className="details-information">
              <table className="table w-75 mx-auto">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Service</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {customerInfo &&
                    customerInfo.map((data) => (
                      <OrderList key={data._id} customerInfo={data}></OrderList>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
