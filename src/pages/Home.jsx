import AppointmentBtn from "../components/AppointmentBtn";
import HeroBanner from "../components/HeroBanner";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <HeroBanner>
        <div className={styles.bannerContainer}>
          <div className={styles.leftColumn}>
            <h1 className={styles.mainHeading}>Your Health is Our Priority</h1>
            <p>
              Advanced medical care with modern technology, experienced doctors,
              and compassionate support for you and your family.
            </p>
            <div className={styles["button-container"]}>
              <button className={styles.primaryButton}>Contact Us</button>
              <AppointmentBtn />
            </div>
          </div>
          <div className={styles.rightColumn}>
            <img src="/images/d1.png" alt="doctor" />
          </div>
        </div>
      </HeroBanner>
      <div className={styles["about-section"]}>
        <div className={styles.imgContainer}>
          <img src="/images/hmchigh.jpg" alt="image" />
        </div>
        <div className={styles.contentContainer}>
          <h2>About HealthFirstClinic</h2>
          <p>
            HealthFirstClinic is dedicated to delivering high-quality,
            patient-centered medical care with compassion and excellence. Our
            clinic is supported by a team of highly experienced and qualified
            doctors who are committed to understanding each patient’s unique
            health needs. Equipped with modern medical technology and
            well-maintained facilities, we provide accurate diagnosis, effective
            treatment, and reliable healthcare solutions in a safe and
            comfortable environment.
          </p>
          <p>
            From routine health check-ups and preventive care to advanced
            medical consultations, we focus on holistic treatment that
            prioritizes long-term well-being. We believe in building trust
            through transparency, ethical medical practices, and clear
            communication, ensuring that every patient feels informed and
            confident about their care journey.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
