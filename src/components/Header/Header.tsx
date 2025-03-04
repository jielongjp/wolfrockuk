import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        Home
      </Link>
      <div>Wolf</div>
      <Link href="/about-us" className={styles.link}>
        About Us
      </Link>
    </header>
  );
}
