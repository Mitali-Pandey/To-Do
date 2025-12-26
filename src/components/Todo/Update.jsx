import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Update({ display, update, onUpdateSuccess }) {
  const [Inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  // ================= SET EXISTING DATA =================
  useEffect(() => {
    if (update) {
      setInputs({
        title: update.title,
        body: update.body,
      });
    }
  }, [update]);

  // ================= INPUT CHANGE =================
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  // ================= SUBMIT UPDATE =================
  const submit = async () => {
    if (!update || !update._id) {
      toast.error("Invalid task selected");
      return;
    }

    try {
      await axios.put(
        `http://localhost:3000/api/v2/updateTask/${update._id}`,
        Inputs
      );

      // 🔥 create updated task locally (backend not returning it)
      const updatedTask = {
        ...update,
        title: Inputs.title,
        body: Inputs.body,
      };

      console.log("TASK UPDATED:", updatedTask);

      onUpdateSuccess(updatedTask);   // ✅ NEVER undefined
      toast.success("Task updated successfully");
      display("none");
    } catch (error) {
      console.error(error);
      toast.error("Update failed");
    }
  };

  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
      <h3>Update your task</h3>

      <input
        type="text"
        className="todo-inputs m-4 w-100 p-3"
        name="title"
        value={Inputs.title}
        onChange={change}
      />

      <textarea
        className="todo-inputs w-100 p-3"
        name="body"
        value={Inputs.body}
        onChange={change}
      />

      <div>
        <button className="btn btn-dark m-4" onClick={submit}>
          UPDATE
        </button>

        <button
          className="btn btn-danger m-4 mx-3"
          onClick={() => display("none")}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Update;
