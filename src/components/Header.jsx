import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom px-lg-5">
      {" "}
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img className="logo" src="images/clinicLogo.png" alt="logo" />
      </Link>{" "}
      <ul className="nav nav-pills">
        {" "}
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">
            Home
          </Link>
        </li>{" "}
        <li className="nav-item">
          <Link to="/about-us" className="nav-link">
            About us
          </Link>
        </li>{" "}
        <li className="nav-item">
          <Link to="/services" className="nav-link">
            Services
          </Link>
        </li>{" "}
        <li className="nav-item">
          <Link to="/our-doctors" className="nav-link">
            Our Doctors
          </Link>
        </li>{" "}
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link">
            Contact us
          </Link>
        </li>{" "}
      </ul>{" "}
      <button
        className={`${styles.hamburger} navbar-toggler collapsed`}
        type="button"
        onClick={() => setOpen(!open)}
      >
        <GiHamburgerMenu />
      </button>
    </header>
  );
}
export default Header;
