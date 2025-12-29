import ServiceCard from "./ServiceCard";
import styles from "./ServicesSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cardData = [
  {
    image: "/images/medical-checkup.png",
    title: "General Checkup",
    description:
      "Comprehensive health check-ups, diagnosis, and personalized treatment plans for patients of all ages.",
    link: "/services/general-consultation",
  },
  {
    image: "/images/pediatrics.png",
    title: "Child Care (Pediatrics)",
    description:
      "Expert pediatric care for infants, toddlers, and growing children with focus on growth, nutrition, and overall wellness.",
    link: "/services/child-care",
  },
  {
    image: "/images/massage.png",
    title: "Physiotherapy & Rehabilitation",
    description:
      "Pain relief, injury recovery, mobility improvement, and post-surgery rehabilitation sessions.",
    link: "/services/physiotherapy-rehabilitation",
  },
  {
    image: "/images/surgery-room.png",
    title: "General & Laparoscopic Surgery",
    description:
      "Advanced surgical care including minimally invasive (laparoscopic) procedures performed by expert surgeons.",
    link: "/services/general-laparoscopic-surgery",
  },
  {
    image: "/images/medical.png",
    title: "Radiology & Diagnostics",
    description:
      "High-quality diagnostic imaging including X-ray, ultrasound, and lab tests for accurate and early detection.",
    link: "/services/radiology-diagnostics",
  },
  {
    image: "/images/lab-technician.png",
    title: "Pathology & Laboratory Tests",
    description:
      "Complete blood tests, routine lab investigations, and accurate pathology reports with quick turnaround.",
    link: "/services/pathology-laboratory-tests",
  },
];

export default function ServicesSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const dotsRef = useRef(null);

  return (
    <>
      <div className={styles["services-section"]}>
        <h2>Our Services</h2>
        {/* Desktop & Tablet Grid */}
        <div className={styles.cardContainer}>
          {cardData.map((item, index) => {
            return (
              <ServiceCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            );
          })}
        </div>
        {/* Mobile Carousel */}
        <div className={styles["card-carousel"]}>
          {/* Custom Previous Arrow */}
          <button
            ref={prevRef}
            className="nav prev"
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true} // infinite scroll
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }} // dots
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.params.pagination.el = dotsRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
          >
            {cardData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ServiceCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* Custom Next Arrow */}
          <button ref={nextRef} className="nav next">
            &#10095;
          </button>
        </div>
        {/* Custom Dots */}
        <div ref={dotsRef} className="custom-dots"></div>
      </div>
    </>
  );
}
