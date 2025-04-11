import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wolf Rock Band UK</title>
        <meta
          name="description"
          content="Wolf, a rock band based in the UK first formed in 1976 and still rocking today."
        />
      </Head>
      <Header />
      <section className={styles.hero}>
        <Image
          src="/rock-concert.webp"
          alt="Hero"
          layout="fill"
          objectFit="cover"
        />
      </section>

      <section className={styles.gradient}></section>

      <section className={styles.section}>
        <h2 className={styles.title}>Upcoming Shows</h2>
        <Image
          src="/PHOTO-2025-02-26-12-36-09.jpg"
          alt="Next Shows"
          width={600}
          height={1000}
          className={styles.image}
        />
      </section>

      <section className={styles.about}>
        <div className={styles.text}>
          <h2>About the Band</h2>
          <p>
            Wolf first formed as a school rock band back in 1976 under the
            watchful eye of physics teacher and guitarist John ‘Muskrat’
            Muscutt, lead guitarist Ian Harris, drummer Mark Olly, bass player
            Brian Peers, and vocalist Mike ‘Sag’ Sayer.
          </p>
        </div>
        <Image
          src="/WOLF-1979.png"
          alt="About the Band"
          width={500}
          height={350}
          className={styles.image}
        />
      </section>
      <Footer />
    </>
  );
}
