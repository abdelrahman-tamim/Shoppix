
import styles from "./header.module.css"
import logo from "./Frame.png"
import { Link, NavLink } from "react-router-dom" 
import myContext from "../Contexts"
import { useContext } from "react"
import basket from "./basket.png"
import wishlist from "./wishlist.png"
import login from "./log.png"
import barIcon from "./Icon.png"
import { useSelector } from "react-redux"

let Header=()=>{
    let {theme,settheme,setlanguage,language}=useContext(myContext)
    console.log(language);
    const numberofItems=useSelector((state)=>state.cart.totalquantity)
    console.log(numberofItems)
    
    
    return(
        <>
        
        <div className={styles.firstBar}><img src={barIcon}/> Get 20% Sale with coupone code ZIBRA </div>
        <div className={styles[theme]}>
        <ul className={styles.headerul}>
         <li className={styles.shoplogo}><Link to="/"> <div className={styles.logo}><img src={logo} alt="" /><span>Shoppix</span></div> </Link></li>
        <div className={styles.sec2}>
        <li><NavLink className={({isActive})=>isActive&&styles.active} to="/">home</NavLink></li>
        <li><NavLink className={({isActive})=>isActive&&styles.active} to="/products">Products</NavLink></li>
        <li><NavLink className={({isActive})=>isActive&&styles.active} to="/contact">Contact</NavLink></li>
        <li><NavLink className={({isActive})=>isActive&&styles.active} to="/wishlist">Wish List<img className={styles.wishlistimg} src={wishlist} alt="" /></NavLink> </li>
        </div>
        <div className={styles.sec3}>
        <li><button onClick={()=>settheme(theme=="light"?"dark":"light")} className={styles.themeb}>Girly</button></li>
        <li><button onClick={()=>setlanguage(language=="ltr"?"rtl":"ltr")} className={styles.lang}>{language=="ltr"?<span>Eng</span>:<span>Ar</span>}</button></li>
        <li><NavLink  to="/cart"><div className={styles.cartdiv}> <img className={styles.cart} src={basket} alt="" /><span className={styles.cartNum}>{numberofItems}</span></div></NavLink></li>
        <li><NavLink  to="/signin">Sign In<img className={styles.wishlistimg} src={login} alt="" /></NavLink> </li>
        <li><NavLink  to="/login">Log In<img className={styles.wishlistimg} src={login} alt="" /></NavLink> </li>
        {/* <li><NavLink className={ ({isActive})=>isActive&&styles.active}  to="/addproduct">Add Product</NavLink> </li> */}
        </div>
        </ul>
        
        </div>
        </>
      
       

        
    )
}

export default Header