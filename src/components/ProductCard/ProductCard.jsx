import { useDispatch } from "react-redux"
import styles from "./ProductCard.module.css"
import { addtocart, removefromcart,plusone,minusone} from "../Slices/CartSlice"
import { addToWishList,removeFromWishList  } from "../Slices/WishListSlice"
import { Link } from "react-router-dom"

let ProductCard=({item , inCartPage, inWishListPage})=>{
    let dispatch=useDispatch()
    return(
        
        <div key={item.id} className="h-full">
          <a  className="block h-full rounded-lg p-4 shadow-md shadow-indigo-100 border border-black flex flex-col">
            {/* Image with fixed size */}
            <Link to={`/products/${item.id}`}> 
            <div className="h-56 w-full">
              <img 
                src={item.image} 
                alt={item.title} 
                className="h-full w-full object-cover rounded-md" 
              />
            </div>
            </Link>
    
            {/* Content */}
            <div className="mt-2 flex flex-col flex-grow">
              <dl>
                <div>
                  <dt className="sr-only">Price</dt>
                  <dd className="text-sm text-gray-500">{item.price}$</dd>
                </div>
    
                <div>
                 
                  <dd className="font-medium">{item.title}</dd>
                </div>
              </dl>
    
              {/* Footer */}
              <div className="mt-auto flex items-center gap-2 text-xs">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-0">
                  <p className="text-gray-500">Rate:</p>
                  <p className="font-medium"> {item.rating.rate}</p>
                </div>
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                 <p className="text-gray-500">  Stock:</p>
                  <p className="font-medium">{item.rating.count} item</p>

                 
                </div>
              </div>
              {inCartPage?<button onClick={()=>dispatch(removefromcart(item))}className={styles.addbtn}>Remove From cart</button>
              :<button onClick={()=>dispatch(addtocart(item))} className={styles.addbtn}>Add To cart</button>}

              {inWishListPage?<button onClick={()=>dispatch(removeFromWishList(item))} className={styles.addbtn}>Remove From WishList</button>:<button onClick={()=>dispatch(addToWishList(item))} className={styles.addbtn}>Add to WishList</button>}
             
              {inCartPage && 
              <div className={styles.plusdiv}>
                <button onClick={()=>dispatch(plusone(item))} className={styles.plusbtn}>+</button>
                {item.quantity}
                <button onClick={()=>dispatch(minusone(item))} className={styles.plusbtn}>-</button>
              
                
                </div>}
              
            </div>
    
          </a>
        </div>



       
    )

}

export default ProductCard