import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>About the Band</h1>
        <p className={styles.paragraph}>
          Wolf first formed as a school rock band back in 1976 under the
          watchful eye of physics teacher and guitarist John ‘Muskrat’ Muscutt,
          lead guitarist Ian Harris, drummer Mark Olly, bass player Brian Peers,
          and vocalist Mike ‘Sag’ Sayer.
        </p>
        <p className={styles.paragraph}>Wolf in 1979:</p>
        <div className={styles.imageContainer}>
          <img
            src="/WOLF-1979.png"
            alt="Wolf band members"
            className={styles.image}
          />
        </div>
        <p className={styles.paragraph}></p>
        <p className={styles.paragraph}>Wolf in 2023:</p>
        <div className={styles.imageContainer}>
          <img
            src="/WOLF-2023.jpeg"
            alt="Wolf band members"
            className={styles.image}
          />
        </div>
        <p className={styles.paragraph}></p>
        <p className={styles.paragraph}>Wolf in 1978 and 2024</p>
        <p className={styles.paragraph}>
          (From top to bottom: vocalist Mike ‘Sag’ Sayer, lead guitarist Ian
          Harris, bass player Brian Peers and drummer Mark Olly)
        </p>
        <img
          src="/WOLF-A3-POSTER-mini.jpg"
          alt="Wolf band members then and now"
          className={styles.image}
        />
      </main>
      <Footer />
    </div>
  );
}
