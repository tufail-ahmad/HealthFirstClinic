import HeroBanner2 from "../components/HeroBanner2";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import AppointmentBtn from "../components/AppointmentBtn";
import { useLocation } from "react-router-dom";
import styles from "./About.module.css";

function About() {
  const location = useLocation();

  return (
    <>
      <HeroBanner2 />
      {location.pathname === "/about-us" && (
        <BreadcrumbHeader pageName="About us" />
      )}
      <div className={styles["about-section"]}>
        <h1>About HealthFirstClinic</h1>
        <p>
          At HealthFirstClinic, we are committed to delivering trusted,
          compassionate, and high-quality healthcare for individuals and
          families. With a team of experienced doctors and modern medical
          facilities, we ensure every patient receives personalized care and
          attention.
        </p>
        <div className={styles["card-container"]}>
          <div className={styles.card} id={styles.card1}>
            <div className={styles.imgContainer}>
              <img src="/images/our_mission.jpg" alt="our-mission" />
            </div>
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide accessible, reliable, and
              patient-focused healthcare services in a safe and comforting
              environment. We aim to improve community health by combining
              advanced medical expertise with empathy and care.
            </p>
          </div>
          <div className={styles.card} id={styles.card1}>
            <div className={styles.imgContainer}>
              <img src="/images/our_vision.jpg" alt="our-vision" />
            </div>
            <h3>Our Vision</h3>
            <p>
              Our vision is to become the most trusted healthcare center known
              for excellence in diagnosis, treatment, and preventive care. We
              continuously work to adopt new medical technologies and elevate
              our standards to serve you better.
            </p>
          </div>
          <div className={styles.card} id={styles.card1}>
            <div className={styles.imgContainer}>
              <img src="/images/notes-with-pen.jpg" alt="notes-image" />
            </div>
            <h3>Ready to Begin?</h3>
            <p>
              Start your journey to better health today with our expert team.
            </p>
            <AppointmentBtn />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
