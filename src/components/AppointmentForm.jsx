import styles from "./AppointmentForm.module.css";

export default function AppointmentForm({ onClose }) {
  return (
    <div className={styles["modal"]}>
      <form action="" className={styles["form-box"]}>
        <button className={styles.closeBtn} onClick={onClose}>
          Close
        </button>
        <h3 className={styles.heading}>Book an Appointment</h3>
        <label htmlFor="patient">Patient Name</label>
        <br />
        <div className={styles["nameinpt-container"]}>
          <input type="text" id={styles.patient} placeholder="First Name" />
          <input type="text" id={styles.patient} placeholder="Last Name" />
        </div>
      </form>
    </div>
  );
}
