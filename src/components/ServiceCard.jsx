import styles from "./ServiceCard.module.css";

export default function ServiceCard({ image, title, description }) {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["img-container"]}>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.btnContainer}>
        <button className={styles.readMoreBtn}>
          Read More <span>&raquo;</span>
        </button>
      </div>
    </div>
  );
}
