import useAppointment from "../store/useAppointment";
import styles from "./AppointmentBtn.module.css";

export default function AppointmentBtn() {
  const { openForm } = useAppointment();
  return (
    <button className={styles.secondaryButton} onClick={openForm}>
      Book an Appointment
    </button>
  );
}
