import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
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
  );
}
