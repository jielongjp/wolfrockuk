import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Photos</h1>
        <p className={styles.paragraph}>Coming soon...</p>
        <p className={styles.paragraph}>
          Check back later to see images and videos of past gigs.
        </p>
        <div className={styles.imageContainer}>
          {/* <img
            src="/images/about-us.jpg"
            alt="Band members"
            className={styles.image}
          /> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
