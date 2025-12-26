import HeroBanner2 from "../../components/HeroBanner2";
import BreadcrumbHeader from "../../components/BreadcrumbHeader";
import { useLocation } from "react-router-dom";

export default function PhysiotherapyRehabilitation() {
  const location = useLocation();

  return (
    <>
      <HeroBanner2 />
      {location.pathname === "/services/physiotherapy-rehabilitation" && (
        <BreadcrumbHeader pageName="Physiotherapy Rehabilitation" />
      )}
    </>
  );
}
