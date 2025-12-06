import React from 'react'
import Navbar from './components/Navbar.jsx'
import HomePage from './components/HomePage.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
<Router>
  <Navbar />
  <Routes>
    <Route path='/' element={<HomePage />} />
  </Routes>
</Router>
    
    {/* <About /> */}
    {/* <HomePage /> */}
    <Footer />
    </>
  )
}

export default App
