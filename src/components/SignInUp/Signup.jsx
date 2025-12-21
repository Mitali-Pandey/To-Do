import React, { useState } from "react";
import "../SignInUp/Signup.css";
import HeadingComps from "../HeadingComps";

function Signup() {
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  // const submit // 2:55


  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-50 p-5">
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
          <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
            <HeadingComps first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
