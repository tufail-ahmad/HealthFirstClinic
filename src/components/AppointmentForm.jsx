import styles from "./AppointmentForm.module.css";

export default function AppointmentForm({ onClose }) {
  return (
    <div className={styles["modal"]}>
      <form action="" className={styles["form-box"]}>
        <button className={styles.closeBtn} onClick={onClose}>
          Close
        </button>
        <h3 className={styles.heading}>Book an Appointment</h3>
        <label htmlFor="patient" style={{ marginBottom: "-12px" }}>
          Patient Name:
        </label>
        <br />
        <input type="text" placeholder="First Name" style={{ width: "100%" }} />
        <br />
        <input type="text" placeholder="Last Name" style={{ width: "100%" }} />
        <br />
        <label>Gender:</label>
        <div className={styles["gender-container"]}>
          <input
            type="radio"
            value="male"
            name="gender"
            id="male"
            style={{ marginRight: "5px" }}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            value="female"
            name="gender"
            id="female"
            style={{ marginLeft: "5px" }}
          />
          <label htmlFor="female" style={{ marginLeft: "5px" }}>
            Female
          </label>
        </div>
        <label htmlFor="age">Age:</label>
        <br />
        <input
          type="number"
          id="age"
          placeholder="00"
          style={{ width: "100%" }}
        />{" "}
        <br />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          style={{ width: "100%" }}
          placeholder="City"
        />
        <label htmlFor="mobile">Mobile No:</label>
        <br />
        <input
          type="number"
          name="mobile no."
          id="mobile"
          placeholder="+91 0000000000"
          style={{ width: "100%" }}
        />
        <br />
        <label htmlFor="department">
          Which medical department do you want to make an appointment for?
        </label>
        <br />
        <div className={styles.servicesListContainer}>
          <input type="radio" name="" />
          <label htmlFor="">General Surgery</label>
        </div>
        <div className={styles.servicesListContainer}>
          <input type="radio" name="" />
          <label htmlFor="">Laparoscopic Surgery</label>
        </div>
        <div className={styles.servicesListContainer}>
          <input type="radio" name="" />
          <label htmlFor="">Pediatrics</label>
        </div>
        <div className={styles.servicesListContainer}>
          <input type="radio" name="" />
          <label htmlFor="">Physiotherapy</label>
        </div>
        <div className={styles.servicesListContainer}>
          <input type="radio" name="" />
          <label htmlFor="">Orthopedic</label>
        </div>
        <div className={styles.servicesListContainer}>
          <input type="radio" name="" />
          <label htmlFor="">Rehabilitation</label>
        </div>
        <div className={styles.servicesListContainer}>
          <input type="radio" name="" />
          <label htmlFor="">Radiology</label>
        </div>
        <div className={styles.servicesListContainer}>
          <input type="radio" name="" />
          <label htmlFor="">Pathology</label>
        </div>
        <div className={styles.servicesListContainer}>
          <input type="radio" name="" />
          <label htmlFor="">Diagnostic</label>
        </div>
        <div className={styles["btn-container"]}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
