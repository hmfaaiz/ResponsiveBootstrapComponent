import React from "react";

import "./style.css";

function Userform(props) {
  return (
    <>
      <div className="updateform ">
       
        <div className="inputTagCont col-lg-8  col-12 ">
        <div className="header">
          <h4>Update Profile</h4>
        </div>
          <div className="inputTag">
            <label>Name</label>
            <input type="text" />
          </div>

          <div className="inputTag">
            <label>Email</label>
            <input type="text" />
          </div>

          <div className="inputTag">
            <label>Password</label>
            <input type="password" />
          </div>

          <div className="inputTagBtn">
            <button className="buttonUpdate">Update</button>

            </div>
        </div>
      </div>
    </>
  );
}

export default Userform;
