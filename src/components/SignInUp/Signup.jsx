import React, { useState } from "react";
import "../SignInUp/Signup.css";
import HeadingComps from "../HeadingComps";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Signup() {
  const history = useNavigate();
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.location.origin}/api/v1/register`, input)
      .then((response) => {
        if (response.data.msg === "User Already Exists!!") {
          alert(response.data.msg);
        } else {
          alert(response.data.msg);
          setInput({ email: "", username: "", password: "" });
        }
      });
      history("/signin");
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-50 p-3">
              <input
                className="p-2 my-2"
                name="email"
                type="email"
                placeholder="Enter email "
                onChange={change}
                value={input.email}
              />
              <input
                className="p-2 my-2"
                name="username"
                type="username"
                placeholder="Enter username"
                onChange={change}
                value={input.username}
              />
              <input
                className="p-2 my-2"
                name="password"
                type="password"
                placeholder="Enter password "
                onChange={change}
                value={input.password}
              />

              <button className="btn-sign-up p-2" onClick={submit}>
                Sign-up
              </button>
            </div>
          </div>
          <div className=" d-none col-lg-4 column col-left d-lg-flex justify-content-center align-items-center">
            <HeadingComps first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
