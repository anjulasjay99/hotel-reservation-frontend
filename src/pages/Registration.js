/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { React, useState } from "react";
import "./css/registration.css";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

function Registration() {
  const navigate = useNavigate();
  const [fullName, setfullName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [telNo, settelNo] = useState("");
  const [country, setcountry] = useState("");
  const [Nic, setNic] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");

  function Register(e) {
    e.preventDefault();
    const newUser = {
      fullName,
      userName,
      email,
      telNo,
      country,
      Nic,
      Password,
      Address,
    };
    axios
      .post("http://localhost:8070/user/save", newUser)
      .then(() => {
        alert("User Registered");
        setfullName("");
        setuserName("");
        setemail("");
        settelNo("");
        setcountry("");
        setNic("");
        setPassword("");
        setAddress("");
      })
      .catch((err) => {
        alert(err);
      });
      const loginType = 1;
      ReactSession.set("loginType" , loginType);
      navigate("/login");
      
  }

  return (
    <div className="signup-form">
      <form onSubmit={Register}>
        <h2>Register</h2>
        <p className="hint-text">{`Create your account. It's free and only takes a minute.`}</p>

        <div className="form-group">
          <div className="row">
            <div className="col-xs-6">
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  setfullName(e.target.value);
                }}
                className="form-control"
                name="first_name"
                placeholder="Full Name"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            type="userName"
            className="form-control"
            value={userName}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
            name="userName"
            placeholder="userName"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            name="email"
            placeholder="Email"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="mobile"
            className="form-control"
            value={telNo}
            onChange={(e) => {
              settelNo(e.target.value);
            }}
            name="MobileNo"
            placeholder="MobileNo"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            placeholder="Password"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="country"
            className="form-control"
            value={country}
            onChange={(e) => {
              setcountry(e.target.value);
            }}
            name="country"
            placeholder="country"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="Nic"
            className="form-control"
            value={Nic}
            onChange={(e) => {
              setNic(e.target.value);
            }}
            name="Nic"
            placeholder="Nic"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="Address"
            className="form-control"
            value={Address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            name="Address"
            placeholder="Address"
            required="required"
          />
        </div>
        <div className="form-group">
          <label htmlFor="tag" className="checkbox-inline">
            <input id="tag" className="checkbox" type="checkbox" required="required" /> I accept the{" "}
            <a href="/#" onClick={(e) => e.preventDefault()}>
              Terms of Use
            </a>{" "}
            &amp;{" "}
            <a href="/#" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </a>
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success btn-lg btn-block">
            Register Now
          </button>
        </div>
      </form>
      {/* <div className="text-center">Already have an account? <a href="#" >Sign in</a></div> */}
    </div>
  );
}

export default Registration;
