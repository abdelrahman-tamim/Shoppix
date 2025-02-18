import { useSelector } from "react-redux"
import styles from "./cart.module.css"
import ProductCard from "../ProductCard/ProductCard"
import uuid4 from "uuid4"

let CartPage=()=>{

    const cartItems=useSelector((state)=>state.cart.value)
    console.log(cartItems)
    const cartitemnumber=useSelector((state)=>state.cart.totalquantity)
    const carttotalprice=useSelector((state)=>state.cart.totalprice)
    

    return(
        <>

            <div className="flex justify-between items-start p-5">
         <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-6 p-5">
        {
           
            cartItems?.map((item)=>{
            console.log(cartItems)
             return <ProductCard item={item} inCartPage={true}/>
            })
        }
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-6 p-5`}>
          <h1 className={styles.price}> Items in cart: {cartitemnumber} items</h1>
          <h1 className={styles.price} >Total Price: {carttotalprice}$</h1>
          </div>
            
            </div>
        
        
        
       
        </>
    )
}

export default CartPage