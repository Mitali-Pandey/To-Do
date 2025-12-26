import React from "react";
import "../Navbar/Navbar.css";

import { FcTodoList } from "react-icons/fc";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";


function Navbar() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
const logout = ()=>{
  sessionStorage.clear("id");
dispatch(authActions.logout());
}
  return (
    <>
      <nav className="navbar navbar-expand-lg bg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b>
              <FcTodoList /> To-Do
            </b>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link" to="/todo">
                  To-Do
                </Link>
              </li>

              {!isLoggedIn && (
                <>
                  <li className="nav-item mx-2">
                    <Link className="nav-link btn-nav" to="/signup">
                      Sign Up
                    </Link>
                  </li>

                  <li className="nav-item mx-2">
                    <Link className="nav-link btn-nav" to="/signin">
                      Sign In
                    </Link>
                  </li>
                </>
              )}

              {isLoggedIn && (
                <>
                  <li className="nav-item mx-2" onClick = {logout}>
                    <Link className="nav-link btn-nav" to="#">
                      Log out
                    </Link>
                    
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
