// import React from 'react';

import { configureStore } from "@reduxjs/toolkit";
import TasksSlice from "./features/tasks/TasksSlice";

const store = configureStore ({
    reducer:{
        tasks: TasksSlice
    }
}) 

export default store;