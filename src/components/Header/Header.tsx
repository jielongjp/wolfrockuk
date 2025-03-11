import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={40} height={45} />
        </Link>
      </div>

      <div className={styles.navCenter}>
        <Link href="/" className={`${styles.link} ${styles.desktopOnly}`}>
          Home
        </Link>
        <Link href="/media" className={`${styles.link} ${styles.desktopOnly}`}>
          Media
        </Link>
        <div className={styles.brand}>Wolf</div>
        <Link
          href="/about-us"
          className={`${styles.link} ${styles.desktopOnly}`}
        >
          The Band
        </Link>
        <Link
          href="/contact"
          className={`${styles.link} ${styles.desktopOnly}`}
        >
          Contact
        </Link>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link
            href="/"
            className={styles.link}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/media"
            className={styles.link}
            onClick={() => setMenuOpen(false)}
          >
            Media
          </Link>
          <Link
            href="/contact"
            className={styles.link}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/about-us"
            className={styles.link}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
        </div>
      )}
    </header>
  );
}
