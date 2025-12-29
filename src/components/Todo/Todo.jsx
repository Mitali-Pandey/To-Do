import React, { useEffect, useState } from "react";
import "../Todo/Todo.css";
import "../Home/HomePage.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import Update from "./Update";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Todo() {
  const userId = sessionStorage.getItem("id");
  if (!userId) {
    return <Navigate to="/signin" replace />;
  }

  const [Input, setInput] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);
  const [toUpdateArray, setToUpdateArray] = useState(null);

  //  FETCH TASKS 
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v2/getTask/${userId}`
      );
      console.log("FETCHED TASKS:", response.data.list);
      setArray(response.data.list || []);
    };
    fetch();
  }, [userId]);

  // INPUT 
  const show = () => {
    const el = document.getElementById("textarea");
    if (el) el.style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };

  //  ADD TASK 
  const submit = async () => {
    if (Input.title === "" || Input.body === "") {
      toast.error("Title or Body must not be empty!");
      return;
    }

    const response = await axios.post(
      "http://localhost:3000/api/v2/addTask",
      {
        title: Input.title,
        body: Input.body,
        id: userId,
      }
    );

    console.log("TASK ADDED:", response.data.list);

    setArray((prev) => [response.data.list, ...prev]);
    setInput({ title: "", body: "" });
    toast.success("Your Task Is Added Successfully");
  };

  //  DELETE 
  const del = async (taskId) => {
    await axios.put(
      `http://localhost:3000/api/v2/deleteTask/${taskId}`,
      { id: userId }
    );

    setArray((prev) => prev.filter((item) => item._id !== taskId));
    toast.success("Task deleted successfully");
  };

  //  UPDATE 
  const dis = (value) => {
    const el = document.getElementById("todo-update");
    if (el) el.style.display = value;
  };

  const update = (index) => {
    setToUpdateArray(Array[index]);
    dis("block");
  };

  //  UI UPDATE AFTER SUCCESSFUL UPDATE
  const onUpdateSuccess = (updatedTask) => {
    setArray((prev) =>
      prev.map((item) =>
        item._id === updatedTask._id ? updatedTask : item
      )
    );
  };

  return (
    <>
      <div className="todo">
        <ToastContainer />

        {/* ADD SECTION */}
        <div className="todo-main container d-flex justify-content-center align-items-center flex-column">
          <div className="d-flex flex-column todo-inputs-div w-lg-50 w-100 p-1">
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
              placeholder="BODY"
              className="p-2 todo-inputs"
              name="body"
              value={Input.body}
              onChange={change}
            />
          </div>

          <div className="w-lg-50 w-100 d-flex justify-content-end my-2">
            <button
              type="button"
              className="home-btn px-2 py-1"
              onClick={submit}
            >
              ADD
            </button>
          </div>
        </div>

        {/* TASK LIST */}
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row">
              {Array.map((item, index) => (
                <div className="col-lg-3 col-11 mx-lg-5 mx-3 my-2" key={item._id}>
                  <TodoCards
                    title={item.title}
                    body={item.body}
                    id={item._id}
                    delId={del}
                    display={dis}
                    updateId={index}
                    toBeUpdate={update}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* UPDATE SECTION */}
      <div className="todo-update" id="todo-update">
        <Update
          display={dis}
          update={toUpdateArray}
          onUpdateSuccess={onUpdateSuccess}
        />
      </div>
    </>
  );
}

export default Todo;
