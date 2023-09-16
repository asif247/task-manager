// import React from 'react';

import { configureStore } from "@reduxjs/toolkit";
import TasksSlice from "./features/tasks/TasksSlice";
import userSlice from './features/user/userSlice';

const store = configureStore ({
    reducer:{
        tasks: TasksSlice,
        userSlice:userSlice
    }
}) 

export default store;