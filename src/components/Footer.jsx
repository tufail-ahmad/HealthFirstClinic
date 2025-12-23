import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { useState } from "react";

function Footer() {
  const [menuActive, setMenuActive] = useState("home");
  return (
    <>
      <footer className={styles.footer}>
        {" "}
        <div className={`mb-3 ${styles["left-column"]}`}>
          <div className={styles.logo}>
            <img src="/images/clinicLogo1.png" alt="logo" />
          </div>
          <p>
            Your trusted family healthcare clinic providing quality treatment,
            expreienced doctors, and patient-centred care.
          </p>
          <ul className={styles.iconList}>
            <li>
              <a href="">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <ImInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <FaSquareXTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>{" "}
        <div className={styles["middle-right-col-container"]}>
          <div className={`mb-3 ${styles["middle-column"]}`}>
            {" "}
            <h5>Quick Links</h5>{" "}
            <ul className={`nav flex-column ${styles.list}`}>
              {" "}
              <li className="nav-item">
                <Link to="#" className="nav-link p-0">
                  Make Appointment
                </Link>
              </li>{" "}
              <li
                className={`nav-item ${
                  menuActive === "about" ? styles.menuHighlight : null
                }`}
              >
                <Link
                  to="/our-doctors"
                  className="nav-link p-0"
                  onClick={() => setMenuActive("about")}
                >
                  Our Doctor Team
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link to="/services" className="nav-link p-0">
                  Department Services
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link to="/about-us" className="nav-link p-0">
                  About Our Clinic
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link p-0">
                  Contact us
                </Link>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className={`mb-3 ${styles["right-column"]}`}>
            {" "}
            <h5>Our Services</h5>{" "}
            <ul className={`nav flex-column ${styles.list}`}>
              {" "}
              <li className="nav-item">
                <Link
                  to="/services/general-consultation"
                  className="nav-link p-0"
                >
                  General Consultation
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link to="/services/child-care" className="nav-link p-0">
                  Child Care (Pediatrics)
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link
                  to="/services/physiotherapy-rehabilitation"
                  className="nav-link p-0"
                >
                  Physiotherapy & Rehabilitation
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link
                  to="/services/general-laparoscopic-surgery"
                  className="nav-link p-0"
                >
                  General & Laparoscopic Surgery
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link
                  to="/services/radiology-diagnostics"
                  className="nav-link p-0"
                >
                  Radiology & Diagnostics
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link
                  to="/services/pathology-Laboratory-tests"
                  className="nav-link p-0"
                >
                  Pathology & Laboratory Tests
                </Link>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>
      </footer>
      <div className={styles.copyWright}>
        <p>Copyright © 2025 GlobalPixekHub</p>
      </div>
    </>
  );
}

export default Footer;
