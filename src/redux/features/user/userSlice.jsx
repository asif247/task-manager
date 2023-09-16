import { createSlice } from "@reduxjs/toolkit";


const userSlice =createSlice({
    name:'userSlice',
    initialState:{
        name:"asif",
        email:"asif@gmail.com",
        userTasks:[]
    },
    reducers:{}
})


export default userSlice.reducer