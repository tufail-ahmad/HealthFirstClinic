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
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            value="male"
            name="gender"
            id="male"
            style={{ marginLeft: "5px" }}
          />
          <label htmlFor="female" style={{ marginLeft: "5px" }}>
            Female
          </label>
          <input
            type="radio"
            value="female"
            name="gender"
            id="female"
            style={{ marginLeft: "5px" }}
          />
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
        <label htmlFor="text">Message:</label>
        <br />
        <textarea
          name="message"
          id="text"
          spellCheck="true"
          wrap="soft"
          rows={6}
          cols={60}
          placeholder="Enter your message"
          className={styles.textarea}
        ></textarea>
      </form>
    </div>
  );
}
