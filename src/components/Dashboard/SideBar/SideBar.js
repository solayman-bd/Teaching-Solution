import React, { useContext, useEffect, useState } from "react";
import { BsListCheck, BsCommand } from "react-icons/bs";
import { FaCommentAlt, FaPlusCircle } from "react-icons/fa";
import { UserContext } from "../../../App";
const SideBar = ({
  handleAddService,
  handleMakeAdmin,
  handleManageServices,
  handleReview,
  handleOrderList,
}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("https://secure-castle-55180.herokuapp.com/isAdmin", {
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
        <h3 className="p-2 text-center mt-3">Dashboard</h3>
        <div className="access-list text-center">
          <h3
            onClick={() => handleOrderList(true)}
            className="my-2 access-item"
          >
            {" "}
            <BsListCheck className="icon" /> Order List
          </h3>
          <h3 onClick={() => handleReview(true)} className="my-2 access-item">
            {" "}
            <FaCommentAlt className="icon"></FaCommentAlt>Review
          </h3>
          {isAdmin && (
            <div>
              <h3
                onClick={() => handleAddService(true)}
                className="my-2 access-item"
              >
                <FaPlusCircle className="icon" />
                Add service
              </h3>
              <h3
                onClick={() => handleMakeAdmin(true)}
                className="my-2 access-item"
              >
                {" "}
                <FaPlusCircle className="icon" />
                Make Admin{" "}
              </h3>
              <h3
                onClick={() => handleManageServices(true)}
                className="my-2 access-item"
              >
                {" "}
                <BsCommand className="icon" />
                Manage Services
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
