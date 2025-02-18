import Header from "../Header"
import Fotter from "../Fotter"
import SideBar from "../Sidebar"
import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"


const Layout=()=>{
    return(
        <>
        <Header />
        <div className={styles.layout}>
        <div className={styles.mainContent}>
          <aside className={styles.sidebar}>
            <SideBar />
          </aside>
          <main className={styles.outlet}>
            <Outlet />
          </main>
        </div>
        <Fotter />
        </div>
     
        </>
     
    )
}

export default Layout