
import styles from "./header.module.css"
import logo from "./logo.png"
import { Link, NavLink } from "react-router-dom" 
import myContext from "../Contexts"
import { useContext } from "react"
import basket from "./basket.png"
import wishlist from "./wishlist.png"

let Header=()=>{
    let {theme,settheme,setlanguage,language}=useContext(myContext)
    console.log(language);
    
    
    return(
        <div className={styles[theme]}>
        
           
        <ul>
            <li><Link to="/"> <div><img className={styles.shoplogo} src={logo} alt="" /></div> </Link></li>
            
        <li><NavLink className={ ({isActive})=>isActive&&styles.active} to="/home">Home</NavLink></li>
        <li><NavLink className={({isActive})=>isActive&&styles.active} to="/products">Products</NavLink></li>
        <li><NavLink className={({isActive})=>isActive&&styles.active} to="/contact">Contact</NavLink></li>
        <li><NavLink className={({isActive})=>isActive&&styles.active} to="/account">Account</NavLink></li>
        <li><NavLink className={({isActive})=>isActive&&styles.active} to="/wishlist">Wish List<img className={styles.wishlistimg} src={wishlist} alt="" /></NavLink> </li>
        <li><button onClick={()=>settheme(theme=="light"?"dark":"light")} className={styles.themeb}>Girly Theme</button></li>
        <li><button onClick={()=>setlanguage(language=="ltr"?"rtl":"ltr")} className={styles.lang}>Change language</button></li>
        <li><NavLink  to="/cart"> <img className={styles.cart} src={basket} alt="" /></NavLink></li>
        </ul>
        
        </div>
      
       

        
    )
}

export default Header