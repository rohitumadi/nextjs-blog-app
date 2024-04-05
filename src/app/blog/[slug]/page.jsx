import Image from "next/image";
import styles from "./SinglePostPage.module.css";
function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1712097245003-626ce4250da8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
          alt="Home"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            alt="avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.info}>
            <p className={styles.authorText}>Author</p>
            <p className={styles.author}>Rohit Umadi</p>
          </div>
          <div className={styles.info}>
            <p className={styles.dateText}>Published</p>
            <p className={styles.date}>01/01/2023</p>
          </div>
        </div>

        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            inventore, voluptatum, voluptates, quibusdam voluptate voluptatem\
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
