import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";

function Header() {
  const location = useLocation();
  const [menuStatus, setMenuStatus] = useState(false);
  const [open, setOpen] = useState(false);
  const visitedOtherPage = useRef(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 50);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      visitedOtherPage.current = true;
    }
  }, [location.pathname]);

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
        <Link to="/" className={styles.logo}>
          <img src="/images/clinicLogo.png" alt="logo" />
        </Link>{" "}
        <nav
          className={
            menuStatus ? `${styles["mobile-menu"]}` : `${styles["menu-web"]}`
          }
        >
          <ul className="nav nav-pills gap-2">
            {" "}
            <li
              className={`nav-item ${
                location.pathname === "/" && visitedOtherPage.current
                  ? styles.menuHighlight
                  : null
              }`}
            >
              <Link
                to="/"
                aria-current="page"
                onClick={() => {
                  closeMenu();
                }}
              >
                Home
              </Link>
            </li>{" "}
            <li
              className={`nav-item ${
                location.pathname === "/about-us" ? styles.menuHighlight : null
              }`}
            >
              <Link
                to="/about-us"
                onClick={() => {
                  closeMenu();
                }}
              >
                About us
              </Link>
            </li>{" "}
            <li
              className={`nav-item ${styles["services-item"]} ${
                location.pathname === "/services" ? styles.menuHighlight : null
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/services"
                onClick={() => {
                  closeMenu();
                }}
              >
                Services <span className={styles.arrow}>&#9662;</span>
              </Link>
              <ul
                className={`${styles.dropdown} ${
                  open ? `${styles.show}` : null
                }`}
              >
                <li>
                  <Link to="/services/general-consultation">
                    General Consultation
                  </Link>
                </li>
              </ul>
            </li>{" "}
            <li
              className={`nav-item ${
                location.pathname === "/our-doctors"
                  ? styles.menuHighlight
                  : null
              }`}
            >
              <Link
                to="/our-doctors"
                onClick={() => {
                  closeMenu();
                }}
              >
                Our Doctors
              </Link>
            </li>{" "}
            <li
              className={`nav-item ${
                location.pathname === "/contact-us"
                  ? styles.menuHighlight
                  : null
              }`}
            >
              <Link
                to="/contact-us"
                onClick={() => {
                  closeMenu();
                }}
              >
                Contact us
              </Link>
            </li>{" "}
          </ul>
        </nav>{" "}
        <div className={styles.hamburger}>
          <button onClick={handleToggleButton}>
            {menuStatus ? (
              <div className={styles.cancel}>
                <span>&times;</span>
              </div>
            ) : (
              <div style={{ marginRight: "10px" }}>
                <span>&#9776;</span>
              </div>
            )}
          </button>
        </div>
        {/* overlay */}
        {menuStatus && (
          <div className={styles.overlay} onClick={handleToggleButton}></div>
        )}
      </header>
    </>
  );
}
export default Header;
