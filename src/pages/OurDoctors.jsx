import HeroBanner2 from "../components/HeroBanner2";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import { useLocation } from "react-router-dom";

function OurDoctors() {
  const location = useLocation();

  return (
    <>
      <HeroBanner2 />
      {location.pathname === "/our-doctors" && (
        <BreadcrumbHeader pageName="Our Doctors" />
      )}
    </>
  );
}

export default OurDoctors;
