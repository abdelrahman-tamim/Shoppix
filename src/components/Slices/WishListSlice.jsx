import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

let WishListSlice=createSlice({
    name:"wishlist",
    initialState:{
        value:[],

    },
    reducers:{
    addToWishList:(state,action)=>{
        let itemExists= state.value.find((item)=>(item.id==action.payload.id))
       if(!itemExists){
            state.value.push(action.payload)
        }
      
       

        },
    removeFromWishList:(state,action)=>{
        state.value=state.value.filter((item)=>(item.id!=action.payload.id))
    }
    }
})


export default WishListSlice.reducer
export const {addToWishList,removeFromWishList} = WishListSlice.actions