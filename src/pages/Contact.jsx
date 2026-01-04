import HeroBanner2 from "../components/HeroBanner2";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import AddressBar from "../components/AddressBar";
import { useLocation } from "react-router-dom";
import styles from "./Contact.module.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  const location = useLocation();

  return (
    <>
      <HeroBanner2 />
      {location.pathname === "/contact-us" && (
        <BreadcrumbHeader pageName="Contact us" />
      )}
      <div className={styles["main-container"]}>
        <AddressBar />
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
