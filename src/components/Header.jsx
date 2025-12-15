import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  const handleToggleButton = () => {
    setMenuStatus(!menuStatus);
  };

  const closeMenu = () => {
    setMenuStatus(false);
  };

  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 border-bottom px-lg-5">
        {" "}
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img className="logo" src="images/clinicLogo.png" alt="logo" />
        </Link>{" "}
        <nav
          className={
            menuStatus ? `${styles["mobile-menu"]}` : `${styles["menu-web"]}`
          }
        >
          <ul className="nav nav-pills">
            {" "}
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/about-us" className="nav-link" onClick={closeMenu}>
                About us
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/services" className="nav-link" onClick={closeMenu}>
                Services
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/our-doctors" className="nav-link" onClick={closeMenu}>
                Our Doctors
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link" onClick={closeMenu}>
                Contact us
              </Link>
            </li>{" "}
          </ul>
        </nav>{" "}
        <div className={styles.hamburger}>
          <button onClick={handleToggleButton}>
            {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </header>
    </>
  );
}
export default Header;
