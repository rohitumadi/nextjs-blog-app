import Image from "next/image";
import styles from "./about.module.css";
function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>We create the best solutions for you</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          unde sequi cupiditate, enim non omnis sit quae odio numquam quasi?
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image src="/about.png" alt="About" fill />
      </div>
    </div>
  );
}

export default AboutPage;
