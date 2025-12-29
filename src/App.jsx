import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store/index.js";

import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./components/Home/HomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import Signup from "./components/SignInUp/Signup.jsx";
import Signin from "./components/SignInUp/Signin.jsx";
import Todo from "./components/Todo/Todo.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = sessionStorage.getItem("id");

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(authActions.login());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <Router>
      <Navbar />

      <Routes>
        {/*  HOME — ALWAYS HOME */}
        <Route path="/" element={<HomePage />} />

        {/* ℹ ABOUT */}
        <Route path="/about" element={<About />} />

        {/*  SIGN UP */}
        <Route
          path="/signup"
          element={
            isLoggedIn ? <Navigate to="/todo" replace /> : <Signup />
          }
        />

        {/*  SIGN IN */}
        <Route
          path="/signin"
          element={
            isLoggedIn ? <Navigate to="/todo" replace /> : <Signin />
          }
        />

        {/*  TODO (PROTECTED) */}
        <Route
          path="/todo"
          element={
            isLoggedIn ? (
              <Todo />
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
