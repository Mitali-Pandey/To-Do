import React from 'react'
import "../components/HomePage.css"
function HomePage() {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className = "text-center">Finally organize your <br/> work and life... </h1>
        <p>Become focused, Organized and up-to-date <br/>
        with out To-Do app</p>
        <button class='home-btn p-2'>Make To-Do list</button>
      </div>
    </div>
  )
}

export default HomePage
