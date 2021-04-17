import React, { useContext, useEffect, useState } from "react";
import { BsListCheck, BsCommand } from "react-icons/bs";
import { FaCommentAlt, FaPlusCircle } from "react-icons/fa";
import { UserContext } from "../../../App";
const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
  return (
    <div className="col-2">
      <div className="bg-primary user-access min-vh-100">
        <h2 className="p-2 text-center mt-3">Dashboard</h2>
        <div className="access-list text-center">
          <h3 className="my-2 access-item">
            {" "}
            <BsListCheck className="icon" /> Order List
          </h3>
          <h3 className="my-2 access-item">
            {" "}
            <FaCommentAlt className="icon"></FaCommentAlt>Review
          </h3>
          <h3 className="my-2 access-item">
            <FaPlusCircle className="icon" />
            Add service
          </h3>
          <h3 className="my-2 access-item">
            {" "}
            <FaPlusCircle className="icon" />
            Make Admin{" "}
          </h3>
          <h3 className="my-2 access-item">
            {" "}
            <BsCommand className="icon" />
            Manage Services
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
