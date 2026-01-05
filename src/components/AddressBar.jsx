import { useState } from "react";
import styles from "./AddressBar.module.css";

export default function AddressBar() {
  const [facebookHover, setFacebookHover] = useState(false);
  const [youtubeHover, setYoutubeHover] = useState(false);
  const [instagramHover, setInstagramHover] = useState(false);
  const [twitterHover, setTwitterHover] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        flexBasis: "30%",
      }}
    >
      <div className={styles["address-container"]}>
        <h2>Get in Touch</h2>
        <div className={styles.address}>
          <div className={styles.addressLogoContainer}>
            <svg
              viewBox="0 0 384 512"
              style={{ height: "100%", width: "100%", fill: "#003f7d" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
            </svg>
          </div>
          <div className={styles.addressContent}>
            <h3>Address</h3>
            <p>Kanth Rd, Mohra Ki Milak, Moradabad, Uttar Pradesh (244105)</p>
          </div>
        </div>
        <div className={styles.address}>
          <div className={styles.addressLogoContainer}>
            <svg
              viewBox="0 0 512 512"
              style={{ height: "100%", width: "100%", fill: "#003f7d" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
            </svg>
          </div>
          <div className={styles.addressContent}>
            <h3>Phone</h3>
            <p className="mt-1 text-gray-600">+91 8800000000</p>
          </div>
        </div>
        <div className={styles.address}>
          <div className={styles.addressLogoContainer}>
            <svg
              viewBox="0 0 512 512"
              style={{ height: "100%", width: "100%", fill: "#003f7d" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
            </svg>
          </div>
          <div className={styles.addressContent}>
            <h3>Email</h3>
            <p>info@healthFirstClinic.com</p>
          </div>
        </div>
        <div className={styles.address}>
          <div className={styles.addressLogoContainer}>
            <svg
              viewBox="0 0 512 512"
              style={{ height: "100%", width: "100%", fill: "#003f7d" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
            </svg>
          </div>
          <div className={styles.addressContent}>
            <h3>Hours</h3>
            <div style={{ width: "100%" }}>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "85%",
                  marginBottom: "5px",
                }}
              >
                <span className="font-medium">Mon-Fri:</span> 8:00 AM - 8:00 PM
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "85%",
                  marginBottom: "5px",
                }}
              >
                <span className="font-medium">Sat:</span> 9:00 AM - 5:00 PM
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "85%",
                }}
              >
                <span>Sun:</span>{" "}
                <span style={{ color: "#f16a6dff" }}>Emergency Only</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialMediaContainer}>
        <h2>Follow Us</h2>
        <div className={styles.iconContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Link"
            className="p-2 rounded-md bg-primary-dark text-white hover:bg-white hover:text-primary-dark transition-colors duration-300 ease-in-out border border-primary-dark"
            href="https://www.facebook.com/wsclinicindia/"
            onMouseEnter={() => setFacebookHover(true)}
            onMouseLeave={() => setFacebookHover(false)}
          >
            <svg
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
              className={`${facebookHover && `${styles.hover}`} ${
                styles.svgIcon
              }`}
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Link"
            className="p-2 rounded-md bg-primary-dark text-white hover:bg-white hover:text-primary-dark transition-colors duration-300 ease-in-out border border-primary-dark"
            href="https://www.instagram.com/wsclinic/"
            onMouseEnter={() => setInstagramHover(true)}
            onMouseLeave={() => setInstagramHover(false)}
          >
            <svg
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              className={`${instagramHover && `${styles.hover}`} ${
                styles.svgIcon
              }`}
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Link"
            className="p-2 rounded-md bg-primary-dark text-white hover:bg-white hover:text-primary-dark transition-colors duration-300 ease-in-out border border-primary-dark"
            href="https://www.linkedin.com/company/ws-clinic/"
            onMouseEnter={() => setTwitterHover(true)}
            onMouseLeave={() => setTwitterHover(false)}
          >
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className={`${twitterHover && `${styles.hover}`} ${
                styles.svgIcon
              }`}
            >
              <path d="M318.6 233.3 432 96h-81.6L274.9 194.7 190.6 96H48l118.9 160.8L48 416h81.6l81.9-98.6L321.4 416H464L318.6 233.3zM256.4 294.5l-37.2-48.4L114.7 110h44.6l84.7 110.2 37.2 48.4L396.8 402h-44.6L256.4 294.5z" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Link"
            className="p-2 rounded-md bg-primary-dark text-white hover:bg-white hover:text-primary-dark transition-colors duration-300 ease-in-out border border-primary-dark"
            href="https://www.youtube.com/@WsClinic"
            onMouseEnter={() => setYoutubeHover(true)}
            onMouseLeave={() => setYoutubeHover(false)}
          >
            <svg
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
              className={`${youtubeHover && `${styles.hover}`} ${
                styles.svgIcon
              }`}
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
