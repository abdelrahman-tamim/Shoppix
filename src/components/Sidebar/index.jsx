import React, { useContext } from "react";
import styles from "./sidebar.module.css"
import myContext from "../Contexts";

const SideBar = () => {
    let {theme,settheme}=useContext(myContext)
  return(
   
    <div className={styles[theme]}>
        <ul className={styles.side}>
        <li>Home </li>
        <li>Trending</li>
        <li>Offers</li>
        <li>Sort</li>
        <li>About</li>
        </ul>
       
</div>


  )
};

export default SideBar;