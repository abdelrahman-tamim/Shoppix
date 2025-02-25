import { createSlice } from "@reduxjs/toolkit";

let UserSlice=createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        addUser:(state,action)=>{
        state.user=action.payload
        }
    }
})

export default UserSlice.reducer
export const {addUser}=UserSlice.actions