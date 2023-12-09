import React, { useState } from "react";
import HeadPhone from "../assets/img/headphones.svg";
import "./css/Login.scss";
import LoginFragment from "../fragment/Login";
import SignupFragment from "../fragment/Signup";

function Login() {
  let [popupModal, setPopupModal] = useState("login");

  return (
    <section id="main">
      <div className="nav-item">
        <a className="navbar-brand" href="/">
          Music
        </a>
      </div>
      <div className="main-row">
        <div className="main-row-img">
          <img className="head-phone-img" src={HeadPhone} alt="" />
        </div>
        <div className="main-row-text">
          <h1>Music for everyone</h1>
          <p>Without music, life would be a mistake</p>

          {popupModal === "login" ? <LoginFragment /> : <SignupFragment />}
          <p
            onClick={() => {
              if (popupModal === "login") {
                setPopupModal("signup");
              } else popupModal = setPopupModal("login");
            }}
          >
            {popupModal === "login" ? "signup" : "login"}
          </p>
          {/* <Link to={"/home"} className="btn"> */}
          {/* Start Listening
            </Link> */}
        </div>
      </div>
    </section>
  );
}

export default Login;
