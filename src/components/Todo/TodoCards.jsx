import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

function TodoCards({title, body}) {
  return (
    <div className=" todo-card p-3">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">
          {body.split("", 77)}...
        </p>
      </div >

       <div className="d-flex justify-content-around ">
         <div className="d-flex justify-content-center align-item-center card-icon-head px-2 py-1">
           <GrDocumentUpdate className="card-icon"/>Update

        </div>
         <div className="d-flex justify-content-center align-item-center card-icon-head px-2 py-1 text-danger">
           <AiFillDelete className="card-icon del"/> Delete

        </div>
       </div>
    </div>
  );
}

export default TodoCards;
