import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  const [menuActive, setMenuActive] = useState("home")

  const handleToggleButton = () => {
    setMenuStatus(!menuStatus);
  };

  const closeMenu = () => {
    setMenuStatus(false);
  };

  return (
    <>
      <header className={styles.header}>
        {" "}
        <Link
          to="/"
          className={styles.logo}
        >
          <img src="images/clinicLogo1.png" alt="logo" />
        </Link>{" "}
        <nav
          className={
            menuStatus ? `${styles["mobile-menu"]}` : `${styles["menu-web"]}`
          }
        >
          <ul className="nav nav-pills">
            {" "}
            <li className={`nav-item ${menuActive === "home" ? styles.menuHighlight : null}`}>
              <Link
                to="/"
                aria-current="page"
                onClick={() => {closeMenu(); setMenuActive("home")}}
              >
                Home
              </Link>
            </li>{" "}
            <li className={`nav-item ${menuActive === "about" ? styles.menuHighlight : null}`}>
              <Link to="/about-us" onClick={() => {closeMenu(); setMenuActive("about");}}>
                About us
              </Link>
            </li>{" "}
            <li className={`nav-item ${menuActive === "services" ? styles.menuHighlight : null}`}>
              <Link to="/services" onClick={() => {closeMenu(); setMenuActive("services");}}>
                Services
              </Link>
            </li>{" "}
            <li className={`nav-item ${menuActive === "doctors" ? styles.menuHighlight : null}`}>
              <Link to="/our-doctors" onClick={() => {closeMenu(); setMenuActive("doctors");}}>
                Our Doctors
              </Link>
            </li>{" "}
            <li className={`nav-item ${menuActive === "contact" ? styles.menuHighlight : null}`}>
              <Link to="/contact-us" onClick={() => {closeMenu(); setMenuActive("contact");}}>
                Contact us
              </Link>
            </li>{" "}
          </ul>
        </nav>{" "}
        <div className={styles.hamburger}>
          <button onClick={handleToggleButton}>
            {menuStatus ? <div className={styles.cancel}><span >&times;</span></div> : <div style={{marginRight: '10px'}}><span>&#9776;</span></div>}
          </button>
        </div>

        {/* overlay */}
        {menuStatus && <div className={styles.overlay} onClick={handleToggleButton}></div>}
      </header>
    </>
  );
}
export default Header;
