import { Link } from "react-router-dom";
import styles from "./BreadcrumbHeader.module.css";

export default function BreadcrumbHeader({ pageName }) {
  return (
    <div className={styles.breadcrumbHeader}>
      <h2>{pageName}</h2>
      <div className={styles.linkContainer}>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>&gt;</span>
        <span>{pageName}</span>
      </div>
    </div>
  );
}
