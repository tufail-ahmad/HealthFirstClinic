import ServiceCard from "./ServiceCard";
import styles from "./ServicesSection.module.css";

const cardData = [
  {
    image: "/images/medical-checkup.png",
    title: "General Checkup",
    description:
      "Comprehensive health check-ups, diagnosis, and personalized treatment plans for patients of all ages.",
  },
  {
    image: "/images/pediatrics.png",
    title: "Child Care (Pediatrics)",
    description:
      "Expert pediatric care for infants, toddlers, and growing children with focus on growth, nutrition, and overall wellness.",
  },
  {
    image: "/images/massage.png",
    title: "Physiotherapy & Rehabilitation",
    description:
      "Pain relief, injury recovery, mobility improvement, and post-surgery rehabilitation sessions.",
  },
  {
    image: "/images/surgery-room.png",
    title: "General & Laparoscopic Surgery",
    description:
      "Advanced surgical care including minimally invasive (laparoscopic) procedures performed by expert surgeons.",
  },
  {
    image: "/images/medical.png",
    title: "Radiology & Diagnostics",
    description:
      "High-quality diagnostic imaging including X-ray, ultrasound, and lab tests for accurate and early detection.",
  },
  {
    image: "/images/lab-technician.png",
    title: "Pathology & Laboratory Tests",
    description:
      "Complete blood tests, routine lab investigations, and accurate pathology reports with quick turnaround.",
  },
];

export default function ServicesSection() {
  return (
    <div className={styles["services-section"]}>
      {cardData.map((item, index) => {
        return (
          <ServiceCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
}
