import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";
function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1712097243043-7458dbcaed71?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Post"
            fill
            className={styles.image}
          />
        </div>
        <span className={styles.date}>Posted on 01/01/2023</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Description</p>
        <Link href="/blog/post" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
