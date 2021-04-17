import React, { useContext } from "react";
import { UserContext } from "../../../App";
import NavigationBar from "../../Shared/Navigationbar/NavigationBar";
import "./Dashboard.css";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div style={{ maxWidth: "100%", width: "98%" }} className="dashboard">
      <NavigationBar></NavigationBar>
      <div className="row main-content">
        <div className="col-2">
          <div className="bg-primary user-access min-vh-100">
            <h2 className="p-2">Dashboard</h2>
          </div>
        </div>
        <div className="col-9">
          <div className="user-detail min-vh-100">
            <div className="user-info">
              <h3 className="text-end mx-2 p-2">
                User Name: {loggedInUser.name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
