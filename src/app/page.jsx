import Image from "next/image";
import styles from "./home.module.css";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          unde sequi cupiditate, enim non omnis sit quae odio numquam quasi?
        </p>
        <div className={styles.btns}>
          <button className={styles.btn}>Get Started</button>
          <button className={styles.btn}>Learn More</button>
        </div>
        <div className={styles.socials}>
          <Image
            src="/brands.png"
            alt="Socials"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="Home" fill className={styles.heroImage} />
      </div>
    </div>
  );
}

export default Home;
