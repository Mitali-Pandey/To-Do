import React from 'react'
import "../SignInUp/Signup.css"
import HeadingComps from '../HeadingComps'

function Signin() {
  return (
     <div className='signup'>
      <div className='container'>
        <div className="row"> 
          <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center"> 
            <HeadingComps first='Sign' second='In' />
          </div>
          
          <div className="col-lg-8 column d-flex justify-content-center align-items-center"> 
            <div className='d-flex flex-column w-50 p-5'>
              <input className='p-2 my-2' name='email' type="email" placeholder='Enter email ' />
              <input className='p-2 my-2' name='password' type="password" placeholder='Enter password ' />

              <button className="btn-sign-up p-2">Sign-In
                
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Signin
