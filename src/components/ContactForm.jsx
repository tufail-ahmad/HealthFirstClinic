import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: "1",
        gap: "20px",
      }}
    >
      <div className={styles["contact-container"]}>
        <h2>Send Us a Message</h2>
        <form action="" className={styles.formContainer}>
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ flexBasis: "50%" }}>
              <label htmlFor="name">Full Name</label>
              <br />
              <input type="text" id="name" name="Name" />
            </div>
            <div style={{ flexBasis: "50%" }}>
              <label htmlFor="email">Email Address</label>
              <br />
              <input type="email" id="email" name="Email" />
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ flexBasis: "50%" }}>
              <label htmlFor="number">Phone Number</label> <br />
              <input type="number" id="number" name="Number" />
            </div>
            <div style={{ flexBasis: "50%" }}>
              <label htmlFor="subject">Subject</label> <br />
              <select name="Subject" id="subject">
                <option>Select a subject</option>
                <option value="Appointment">Appointment</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Billing">Billing</option>
                <option value="Feedback">Feedback</option>
                <option value="Emergency">Emergency</option>
              </select>
            </div>
          </div>
          <label htmlFor="message">Message</label> <br />
          <textarea
            name="Message"
            id="message"
            cols="80"
            rows="8"
            spellCheck="true"
          />
          <div className={styles.btnContainer}>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
      <div className={styles["map-container"]}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.489195789638!2d78.73420137430452!3d28.883807772627804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afecf96cebb6f%3A0x7600532380b60d4d!2sAsian%20Vivekanand%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1767541865727!5m2!1sen!2sin"></iframe>
      </div>
    </div>
  );
}
