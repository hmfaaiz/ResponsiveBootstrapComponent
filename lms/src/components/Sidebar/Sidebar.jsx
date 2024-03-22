import React from "react";
import "./style.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar col-6 col-sm-4 col-md-3 col-lg-2 ml-0">
        <div className="header mt-3">
          <h2>LMS</h2>
        </div>
        <hr className="custom-hr " />
        <div className="menuCont">

          <ul className="list-unstyled">
            <li>My Profile</li>
            <li>Members</li>
            <li>Books</li>
            <li
              data-bs-target="#more"
              data-bs-toggle="collapse"
              aria-expanded="false"
            >
              Borrowing System
              <ul
                className="
            
                 list-unstyled collapse"
                id="more"
              >
                <li>My history</li>
                <li>List Borrowed</li>
                <li>Current Borrowed</li>
              </ul>
            </li>

            <li>Logout</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
