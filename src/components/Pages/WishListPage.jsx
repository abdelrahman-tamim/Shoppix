import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

let WishListPage=()=>{
    let wishListItems=useSelector((state)=>state.wishlist.value)
    return(
        <>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {
            wishListItems?.map(item=>{
                return <ProductCard item={item} inWishListPage={true}/>
            })
        }
        </div>
        </>

    )
    

    

}

export default WishListPage;