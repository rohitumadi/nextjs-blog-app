import Link from "next/link";
import Links from "./links/Links";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div className="">
        <Links />
      </div>
    </div>
  );
}

export default Navbar;
