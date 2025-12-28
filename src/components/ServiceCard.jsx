import { Link } from "react-router-dom";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ image, title, description, link }) {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["img-container"]}>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.btnContainer}>
        <Link to={link} className={styles.readMoreBtn}>
          Read More <span>&raquo;</span>
        </Link>
      </div>
    </div>
  );
}
