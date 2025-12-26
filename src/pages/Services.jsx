import HeroBanner2 from "../components/HeroBanner2";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import { useLocation } from "react-router-dom";

function Services() {
  const location = useLocation();

  return (
    <>
      <HeroBanner2 />
      {location.pathname === "/services" && (
        <BreadcrumbHeader pageName="Services" />
      )}
    </>
  );
}

export default Services;
