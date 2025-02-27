import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../axiosInstance";

const fetchAllProducts=createAsyncThunk("products/getall",async()=>{
  let response=await axiosInstance.get("/prouducts")
  return response.data
})

const ProductsSlice=createSlice({
    name:"products",
    initialState:{
        products:[],
        isLoading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.pending,(state)=>{
            state.error=false
            state.isLoading=true;
        })
        builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.products=action.payload
            state.isLoading=false
            state.error=null
        })
        builder.addCase(fetchAllProducts.rejected,(state)=>{
            state.error=true
        })
    }


})
export {fetchAllProducts};
export default ProductsSlice.reducer;
