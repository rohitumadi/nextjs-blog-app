import Image from "next/image";
import styles from "./about.module.css";
function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>We create the best solutions for you</h1>
        <p className={styles.desc}>
          Creative Thoughts Agency is a dynamic creative hub dedicated to
          bringing innovative ideas to life. Specializing in marketing, design,
          and content creation, we merge strategic thinking with artistic flair
          to craft compelling narratives and captivating visuals that resonate
          with audiences. Our collaborative approach fosters creativity, driving
          impactful solutions tailored to meet each client's unique needs and
          objectives.
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
        <Image className={styles.img} src="/about.png" alt="About" fill />
      </div>
    </div>
  );
}

export default AboutPage;
