import React from 'react'
import "../components/Signup.css"

function Signup() {
  return (
    <div className='signup'>
      <div className='container'>
        <div className="row"> 
          <div className="col-lg-8 column d-flex justify-content-center align-items-center"> 
            <div className='d-flex flex-column'>
              <input className='p-2 my-2' name='email' type="email" placeholder='Enter email' />
              <input className='p-2 my-2' name='username' type="username" placeholder='Enter username' />
              <input className='p-2 my-2' name='password' type="password" placeholder='Enter password' />

              <button className="btn-sign-up p-2">Sign-up</button>
            </div>
          </div>
          <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center"> 
            <h1 className='text-center sign-up-heading'>Sign <br />Up</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
