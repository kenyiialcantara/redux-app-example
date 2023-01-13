import { createSlice } from "@reduxjs/toolkit";

export const taskSlices = createSlice({
  name: "tasks",
  initialState: [
    {
      title: "Task 1",
      description: "task 1 description",
      completed: false,
    },
    {
      title: "Task 2",
      description: "task 2 description",
      completed: false,
    },
  ],
  reducers: {
    addTask: (state, action) => {
      console.log(state, action);
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.title === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

export const { addTask, deleteTask } = taskSlices.actions;

export default taskSlices.reducer;
