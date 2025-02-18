import { useContext } from "react"
import styles from "./fotter.module.css"
import myContext from "../Contexts"
useContext
const Fotter=()=>{
    let {theme,settheme}=useContext(myContext)
    return (
        <>
          
        <footer  className={styles[theme] }> &copy; All Right Reserved To Abdelrahman Tamim </footer>
        </>
    )
}

export default Fotter