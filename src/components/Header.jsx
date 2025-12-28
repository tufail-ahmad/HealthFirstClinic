import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";

function Header() {
  const location = useLocation();
  const [menuStatus, setMenuStatus] = useState(false);
  const visitedOtherPage = useRef(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  //timer ref for mouse leave delay
  const closeTimer = useRef(null);

  // =============== RESIZE EFFECT ==============
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // 🔑 FORCE RESET
      setServicesOpen(false);
      if (!mobile) setMenuStatus(false);
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      visitedOtherPage.current = true;
    }
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (isMobile) return;

    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;

    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
    }, 50);
  };

  const handleOnClick = () => {
    if (!isMobile) return;
    setServicesOpen((prev) => !prev);
  };

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
              className={`nav-item ${styles["services-item"]}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleOnClick}
            >
              <span className={styles.servicesSpan}>
                Services{" "}
                <span
                  className={`${styles.arrow} ${
                    servicesOpen ? `${styles.rotate}` : null
                  }`}
                >
                  &#9662;
                </span>
              </span>
              {(!isMobile || menuStatus) && (
                <ul
                  className={`${styles.dropdown} ${
                    servicesOpen ? `${styles.show}` : ""
                  }`}
                >
                  <li
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    <Link to="/services/general-consultation">
                      General Consultation
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    <Link to="/services/child-care">
                      Child Care (Pediatrics)
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    <Link to="/services/physiotherapy-rehabilitation">
                      Physiotherapy & Rehabilitation
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    <Link to="/services/general-laparoscopic-surgery">
                      General & Laparoscopic Surgery
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    <Link to="/services/radiology-diagnostics">
                      Radiology & Diagnostics
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    <Link to="/services/pathology-laboratory-tests">
                      Pathology & Laboratory Tests
                    </Link>
                  </li>
                </ul>
              )}
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
