import banner from "./Banner.png"
import styles from "./Homepage.module.css"
import Products from "../Prdoucts/Products"





const HomePage=()=>{
    return(
        <>
       <img src={banner} alt="Banner" className={styles.banner} />
       <div>
        <br />
        <h1 className={styles.prods}>Products</h1>
        <div className={styles.line}></div>
       </div>
       <Products/>
        </>
    )
}


export default HomePage