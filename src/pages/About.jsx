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
          <div
            className={styles.card}
            id={styles.card1}
            style={{ background: "#43a047" }}
          >
            <div className={styles.imgContainer}>
              <img src="/images/notes-with-pen.png" alt="notes-image" />
            </div>
            <h3 style={{ color: "white" }}>Ready to Begin?</h3>
            <p style={{ color: "white" }}>
              Start your journey to better health today with our expert team.
            </p>
            <div className={styles["btn-container"]}>
              <AppointmentBtn />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["about-section2nd"]}>
        <div className={styles["content-container"]}>
          <h2>Why Choose HealthFirst Clinic?</h2>
          <ul>
            <li>✔ Experienced and qualified medical professionals</li>
            <li>✔ Patient-focused and friendly environment</li>
            <li>✔ Accurate diagnosis and personalized treatment plans</li>
            <li>✔ Modern medical equipment and hygienic facilities</li>
            <li>✔ Honest guidance and transparent consultation</li>
          </ul>
        </div>
        <div className={styles["img-container"]}>
          <img src="images/about_section_image.jpg" alt="image" />
        </div>
      </div>
      <div className={styles["about-section3rd"]}>
        <h2>Our Commitment to Patients</h2>
        <p>
          "We understand that visiting a clinic can be stressful. That’s why our
          team ensures a comfortable, respectful, and supportive experience from
          consultation to recovery. We believe in educating our patients so they
          can make informed decisions about their health." <br />
          "At HealthFirst Clinic, we don’t just treat symptoms — we care for
          people."
        </p>
      </div>
    </>
  );
}

export default About;
