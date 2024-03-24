import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/login";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };
    console.log("Login", userData);

    if (userData.email && userData.password) {
      dispatch(loginUser(userData))
        .then((result) => {
          navigate("/dashboard");
        })
        .catch((error) => {
          console.error("Login failed:", error);
          alert("Login failed. Please try again.");
        });
    }
  };

  return (
    <>
      <div className="signupCont container-fluid">
        <div className="signup col-lg-4  col-sm-6">
          <div className="signupHeading">
            <h4>Library Management System</h4>
          </div>

          <div className="inputTextCont">
            <div className="inputText">
              <label>Email</label>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="inputText">
              <label>Password</label>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="inputText">
              <button className="buttonSignup">Signup</button>
            </div>
            <div className="inputText">
              <button className="buttonSignin" onClick={(e) => login(e)}>
                Signin
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
