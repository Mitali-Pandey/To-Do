import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import HomePage from './components/Home/HomePage.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'
import Signup from './components/SignInUp/Signup.jsx'
import Signin from './components/SignInUp/Signin.jsx'
import Todo from './components/Todo/Todo.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
