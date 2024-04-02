"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

function NavLink({ item }) {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
      href={item.path}
      key={item.title}
    >
      {item.title}
    </Link>
  );
}

export default NavLink;
