import AppointmentBtn from "./AppointmentBtn";
import styles from "./DoctorsCard.module.css";

export default function DoctorsCard({ doctor, index, variant }) {
  const isDoctor = variant === "doctor";
  const reverse = isDoctor && index % 2 !== 0;

  return (
    <div
      className={`${styles["card-wrapper"]} ${
        variant === "home" ? `${styles.home}` : `${styles.doctors}`
      } ${reverse ? `${styles.reverse}` : ""}`}
    >
      <div className={styles.imgContainer}>
        <img src={doctor.image} alt={doctor.name} />
      </div>
      <div className={styles.contentContainer}>
        <h3>{doctor.name}</h3>
        <p id={styles.consultation}>{doctor.consultation}</p>
        {isDoctor && (
          <>
            <h4>{doctor.Speciality.heading}</h4>
            <ul>
              <li>{doctor.Speciality.first}</li>
              <li>{doctor.Speciality.second}</li>
            </ul>
            <h4>{doctor.qualification.heading}</h4>
            <ul>
              <li>{doctor.qualification.first}</li>
              <li>{doctor.qualification.second}</li>
            </ul>
          </>
        )}

        <p id={styles.desc}>
          {isDoctor ? doctor.doctorDescription : doctor.homeDescription}
        </p>
        {isDoctor && (
          <>
            <h4>{doctor.timings.heading}</h4>
            <ul>
              <li>{doctor.timings.day}</li>
              <li>{doctor.timings.morning}</li>
              <li>{doctor.timings.evining}</li>
            </ul>
          </>
        )}
        <AppointmentBtn />
      </div>
    </div>
  );
}
