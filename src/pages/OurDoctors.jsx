import HeroBanner2 from "../components/HeroBanner2";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import { useLocation } from "react-router-dom";
import styles from "./OurDoctors.module.css";
import { doctorsData } from "../data/doctorsData";
import DoctorsCard from "../components/DoctorsCard";
import { useEffect } from "react";

function OurDoctors() {
  const location = useLocation();

  useEffect(() => {
    // if doctor come from home page
    const id = location.state?.scrollToDoctorId;
    if (id) return;

    const el = document.getElementById(
      `doctor-${location.state.scrollToDoctorId}`
    );
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <HeroBanner2 />
      {location.pathname === "/our-doctors" && (
        <BreadcrumbHeader pageName="Our Doctors" />
      )}
      <div className={styles["main-section"]}>
        <h2>Meet Our Experienced Medical Specialists</h2>
        <p>
          Our clinic is supported by a team of highly qualified and dedicated
          doctors who are committed to providing accurate diagnosis, ethical
          treatment, and compassionate care to every patient.
        </p>
        <div className={styles["cards-container"]}>
          {doctorsData.map((doctor, index) => (
            <div id={`doctor-${doctor.id}`} key={doctor.id}>
              <DoctorsCard variant="doctor" doctor={doctor} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurDoctors;
