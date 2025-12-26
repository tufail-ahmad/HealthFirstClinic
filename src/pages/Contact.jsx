import HeroBanner2 from "../components/HeroBanner2";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();

  return (
    <>
      <HeroBanner2 />
      {location.pathname === "/contact-us" && (
        <BreadcrumbHeader pageName="Contact us" />
      )}
    </>
  );
}

export default Contact;
