import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
export default function TaskForm() {
  const dispatch = useDispatch();

  const [task, settask] = useState({ title: "", description: "" });

  const handleTask = (e) => {
    settask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="tasks"
        value={task.title}
        onChange={handleTask}
      />
      <textarea
        name="description"
        id=""
        placeholder="description"
        onChange={handleTask}
      ></textarea>
      <button>Save</button>
    </form>
  );
}
