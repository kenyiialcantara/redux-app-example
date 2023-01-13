import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
export default function TaskLIst() {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);
  const handleDelete = (title) => {
    dispatch(deleteTask(title));
  };
  return (
    <div>
      {tasks.map((item) => (
        <div key={item.title}>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <button
            onClick={() => {
              handleDelete(item.title);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
