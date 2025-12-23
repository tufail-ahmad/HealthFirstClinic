import HeroBanner from "../components/HeroBanner";
import styles from "./Home.module.css";

function Home() {
  return (
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
            <button className={styles.secondaryButton}>
              Book an Appointment
            </button>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <img src="/images/d1.png" alt="doctor" />
        </div>
      </div>
    </HeroBanner>
  );
}

export default Home;
