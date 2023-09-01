// import React from 'react';

import { createSlice } from "@reduxjs/toolkit";

const TasksSlice =createSlice ({
    name:'TasksSlice',
    initialState:{
       tasks:[]
    },
    reducers:{}
})

export default TasksSlice.reducer;