import styles from "./HeroBanner.module.css";

export default function HeroBanner({ children }) {
  return <div className={styles.heroBanner}>{children}</div>;
}
