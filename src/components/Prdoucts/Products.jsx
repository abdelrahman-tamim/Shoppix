
import axios from "axios"
import styles from "./products.module.css"
import { useEffect, useState } from "react"
import { QueryClient,QueryClientProvider,useQuery } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import ProductCard from "../ProductCard/ProductCard"
import uuid4 from "uuid4"
import { fetchAllProducts } from "../Slices/ProductsSlice"
import { Link } from "react-router-dom"

const Products=()=>{
    
 /*  let [prodData,setprodData]=useState([])
    
const {ispending,error,data,isSuccess}=useQuery({
  queryKey:"fakestore",
  queryFn: ()=>{
      axios.get("https://fakestoreapi.com/products").then(res=>{
        setprodData(res.data)
      })
  }
}) */

  let allProducts=useSelector(state=>state.prouducts)
  let dispatch=useDispatch()
  

  useEffect(()=>{
    dispatch(fetchAllProducts()) 
  },[])
  console.log(allProducts)
  


  return(
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {allProducts.products?.map((item) => {
          return <ProductCard item={item}/>
      })}
      </div>
      
    )

  

}

export default Products