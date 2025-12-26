import HeroBanner2 from "../components/HeroBanner2";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();

  return (
    <>
      <HeroBanner2 />
      {location.pathname === "/about-us" && (
        <BreadcrumbHeader pageName="About us" />
      )}
    </>
  );
}

export default About;
