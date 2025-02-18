import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartSlice from "./Slices/CartSlice";
import WishlistSlice from "./Slices/WishListSlice"
let store=configureStore({
    reducer:{
    cart :cartSlice,
    wishlist:WishlistSlice
    }
})



export default store