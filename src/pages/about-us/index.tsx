import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.paragraph}>
          Wolf, not to be confused with their Swedish heavy metal namesakes,
          first formed as a school rock band back in 1976 when part of
          Bridgewater High School still formed Appleton Hall County Grammar
          School, under the watchful eye of physics teacher and guitarist John
          ‘Muskrat’ Muscutt, lead guitarist Ian Harris, drummer Mark Olly, bass
          player Brian Peers, and vocalist Mike ‘Sag’ Sayer.
        </p>
        <p className={styles.paragraph}>
          Join us on our journey as we continue to rock around the UK.
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
