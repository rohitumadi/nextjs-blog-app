import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.text}>All rights reserved</div>
    </div>
  );
}

export default Footer;
