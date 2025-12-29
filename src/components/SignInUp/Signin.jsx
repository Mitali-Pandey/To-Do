import React, { useState } from "react";
import "../SignInUp/Signup.css";
import HeadingComps from "../HeadingComps";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/login",
        input
      );

      // ✅ FIX: handle actual backend response safely
      const userId =
        data?.user?._id ||
        data?.others?._id ||
        data?._id ||
        data?.userId;

      if (!userId) return alert("Login failed");

      sessionStorage.setItem("id", userId);
      dispatch(authActions.login());

      navigate("/todo");
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 column col-left d-none d-lg-flex justify-content-center align-items-center">
            <HeadingComps first="Sign" second="In" />
          </div>

          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-50 p-3">
              <input
                className="p-2 my-2"
                name="email"
                type="email"
                placeholder="Enter email"
                value={input.email}
                onChange={change}
              />

              <input
                className="p-2 my-2"
                name="password"
                type="password"
                placeholder="Enter password"
                value={input.password}
                onChange={change}
              />

              <button className="btn-sign-up p-2" onClick={submit}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
