import Image from "next/image";
import styles from "./Contact.module.css";

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="Contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" id="name" />
          <input type="email" placeholder="Email" id="email" />
          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className={styles.btn} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
