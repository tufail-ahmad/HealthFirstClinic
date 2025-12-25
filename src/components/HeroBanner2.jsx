import styles from "./HeroBanner2.module.css";

export default function HeroBanner2() {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.imageContainer}>
        <img src="/images/heroBannerImg2.png" alt="Banner" />
      </div>
    </div>
  );
}
