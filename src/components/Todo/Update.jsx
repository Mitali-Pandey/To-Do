import React from 'react'

function Update({ display }) {
  return (
    <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
      <h3>Update your task</h3>

      <input type='text' className='todo-inputs m-4 w-100 p-3' />
      <textarea className='todo-inputs w-100 p-3' />

      <div>
        <button className='btn btn-dark m-4'>UPDATE</button>
        <button
          className='btn btn-danger m-4 mx-3'
          onClick={() => display("none")}       
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Update
