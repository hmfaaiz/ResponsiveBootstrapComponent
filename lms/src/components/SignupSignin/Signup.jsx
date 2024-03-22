import React from "react";
import "./style.css";
const Signup = () => {
  return (
    <>
      <div className="signupCont container-fluid">
        <div className="signup col-lg-4  col-sm-6">
          <div className="signupHeading">
            <h4>Library Management System</h4>
          </div>

          <div className="inputTextCont">
            <div className="inputText">
              <label>Name</label>
              <input type="text" />
            </div>
            <div className="inputText">
              <label>Email</label>
              <input type="text" />
            </div>
            <div className="inputText">
              <label>Password</label>
              <input type="text" />
            </div>

            <div className="inputText">
            <button className="buttonSignup">Signup</button>

            </div>
            <div className="inputText">
            <button className="buttonSignin">Signin</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
