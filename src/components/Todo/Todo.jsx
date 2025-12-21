import React, { useState } from "react";
import "../Todo/Todo.css";
import "../Home/HomePage.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import Update from "./Update";

function Todo() {
  const [Input, setInput] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };

  const submit = () => {
    
    if (Input.title === "" || Input.body === "") {
      toast.error("Title or Body must not be empty!");
    } else {
      setArray([...Array, Input]);
      setInput({ title: "", body: "" });
      toast.success("Your Task Is Added Successfully");
      toast.error("Your Task Is NOT saved, Signup!!");
    }
  };

  const del = (id) => {
    console.log(id);
    Array.splice(id, "1");
    setArray([...Array]);
  };

  const dis = (value)=>{
    console.log(value);
    document.getElementById("todo-update").style.display = value;
  }

  return (
    <>
      <div className="todo">
        <ToastContainer />

        <div className="todo-main container d-flex justify-content-center align-items-center flex-column">
          <div className="d-flex flex-column todo-inputs-div w-50 p-1">
            <input
              type="text"
              placeholder="TITLE"
              className="my-2 p-2 todo-inputs"
              onClick={show}
              name="title"
              value={Input.title}
              onChange={change}
            />

            <textarea
              id="textarea"
              type="text"
              placeholder="BODY"
              className="p-2 todo-inputs"
              name="body"
              value={Input.body}
              onChange={change}
            />
          </div>

          <div className="w-50 d-flex justify-content-end my-2">
            <button className="home-btn px-2 py-1" onClick={submit}>
              ADD
            </button>
          </div>
        </div>

        <div className="todo-body">
          <div className="container-fluid">
            <div className="row">
              {Array &&
                Array.map((item, index) => (
                  <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                    <TodoCards
                      title={item.title}
                      body={item.body}
                      id={index}
                      delId={del}
                      display = {dis} 
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* UPDATE SECTION */}
      <div className="todo-update" id="todo-update">
        <Update display={dis} />
      </div>
    </>
  );
}

export default Todo;
