// import React from 'react';

import { createSlice } from "@reduxjs/toolkit";

const TasksSlice = createSlice({
  name: "TasksSlice",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length == 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElment = state.tasks.at(-1);
        state.tasks.push({ id: lastElment.id + 1, ...payload });
      }
      
    },
    removeTask:(state,{payload})=>{
        state.tasks.filter(item=>item.id !==payload)
    }
  },
});
export const { addTask } = TasksSlice.actions;

export default TasksSlice.reducer;
