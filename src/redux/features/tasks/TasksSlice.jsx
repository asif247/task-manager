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
    removeTask: (state, { payload }) => {
      state.tasks=state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target=state.tasks.find((item) => item.id == payload.id);
      target.status=payload.status;
    },
  },
});
export const { addTask,removeTask,updateStatus } = TasksSlice.actions;

export default TasksSlice.reducer;
