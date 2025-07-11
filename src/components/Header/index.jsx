import styles from "./header.module.css";
import logo from "./Frame.png";
import { Link, NavLink } from "react-router-dom";
import myContext from "../Contexts";
import { useContext, useState } from "react";
import basket from "./basket.png";
import wishlist from "./wishlist.png";
import login from "./log.png";
import barIcon from "./Icon.png";
import { useSelector } from "react-redux";
import add from "./add.webp";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { theme, settheme, setlanguage, language } = useContext(myContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const numberofItems = useSelector((state) => state.cart.totalquantity);

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <div className={styles.firstBar}>
        <img src={barIcon} alt="bar icon" /> Get 20% Sale with coupone code
        ZIBRA
      </div>
      <header className={styles[theme]}>
        <ul className={styles.headerul}>
          <li className={styles.shoplogo}>
            <Link to="/">
              <div className={styles.logo}>
                <img src={logo} alt="" />
                <span>Shoppix</span>
              </div>
            </Link>
          </li>
          <span className={styles.headerSpacer}></span>
          <li>
            <NavLink to="/cart">
              <div className={styles.cartdiv}>
                <img className={styles.cart} src={basket} alt="" />
                <span className={styles.cartNum}>{numberofItems}</span>
              </div>
            </NavLink>
          </li>
          <span className={styles.headerSpacer}></span>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav className={menuOpen ? styles.navMobileOpen : styles.navMobile}>
            <div className={styles.sec2}>
              <li>
                <NavLink
                  className={({ isActive }) => isActive && styles.active}
                  to="/"
                  onClick={handleNavClick}
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => isActive && styles.active}
                  to="/products"
                  onClick={handleNavClick}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => isActive && styles.active}
                  to="/contact"
                  onClick={handleNavClick}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => isActive && styles.active}
                  to="/wishlist"
                  onClick={handleNavClick}
                >
                  Wish List
                  <img className={styles.wishlistimg} src={wishlist} alt="" />
                </NavLink>
              </li>
            </div>
            <div className={styles.sec3}>
              <li>
                <button
                  onClick={() => settheme(theme == "light" ? "dark" : "light")}
                  className={styles.themeb}
                >
                  Girly
                </button>
              </li>
              <li>
                <button
                  onClick={() => setlanguage(language == "ltr" ? "rtl" : "ltr")}
                  className={styles.lang}
                >
                  {language == "ltr" ? <span>Eng</span> : <span>Ar</span>}
                </button>
              </li>
              <li>
                <NavLink to="/addproduct" onClick={handleNavClick}>
                  <img className={styles.addimg} src={add} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/signin" onClick={handleNavClick}>
                  Sign In
                  <img className={styles.wishlistimg} src={login} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" onClick={handleNavClick}>
                  Log In
                  <img className={styles.wishlistimg} src={login} alt="" />
                </NavLink>
              </li>
            </div>
          </nav>
        </ul>
      </header>
    </>
  );
};

export default Header;
