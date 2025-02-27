import Header from "../Header"
import Fotter from "../Fotter"
import SideBar from "../Sidebar"
import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"


const Layout=()=>{
    return(
      
      <>
        <div className={styles.layout}>
        <Header />
      <div className={styles.mainContent}>
        <Outlet />
        </div >
        <Fotter />
        </div>
        </>
     /*    { <aside className={styles.sidebar}>
            <SideBar />
          </aside> } */
     
    )
}

export default Layout