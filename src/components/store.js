import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartSlice from "./Slices/CartSlice";
import WishlistSlice from "./Slices/WishListSlice"
import ProductsSlice from "./Slices/ProductsSlice";
import UserSlice from "./Slices/UserSlice"
let store = configureStore({
    reducer: {
        cart: cartSlice,
        wishlist: WishlistSlice,
        prouducts: ProductsSlice,
        User:UserSlice
        
    }
})



export default store