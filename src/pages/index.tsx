import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/Home.module.css";
import HeroSlider from "@/components/HeroSlider/HeroSlider";

export default function Home() {
  return (
    <>
      <Head>
        <title>WOLF Rock Band UK</title>
        <meta
          name="description"
          content="WOLF, a rock band based in the UK first formed in 1976 and still rocking today."
        />
      </Head>
      <Header />
      <section className={styles.hero}>
        {/* Desktop Image */}
        <div className={styles.desktopImage}>
          <Image
            src="/z83pWmv4.jpeg"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Mobile Image */}
        <HeroSlider />
      </section>

      {/* <section className={styles.gradient}></section> */}

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

      <section className={styles.section}>
        <h2 className={styles.title}>Past Shows</h2>
        <div className={styles.videoWrapper}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wSxpljGRy9E?si=EBr9fMZqb9v3cEey"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.buttonWrapper}>
          <Link href="/media" className={styles.button}>
            See More Shows
          </Link>
        </div>
      </section>

      <section className={styles.sectionDivide}>
        <h2 className={styles.title}>Merch</h2>
        <p className={styles.paragraph}>
          For band merchandise such as previous gig and festival WOLF shirts
          please get in touch with us <Link href="contact">here.</Link>
        </p>
        <br></br>
        <p className={styles.paragraph}>
          We are currently taking orders for the 2025 WOLF Rock Circus t-shirts
          (see below).
        </p>
        <p className={styles.paragraph}>
          For delivery before the 18th July event, please make sure to order by
          27th June.
        </p>
        <br></br>
        <Image
          src="/WOLF-2025-shirts.webp"
          alt="WOLF 2025 Rock Circus band t-shirts"
          width={500}
          height={350}
          className={styles.image}
        />
      </section>

      <section className={styles.about}>
        <div className={styles.text}>
          <h2>About the Band</h2>
          <p>
            WOLF first formed as a school rock band back in 1976 under the
            watchful eye of physics teacher and guitarist John ‘Muskrat’
            Muscutt, lead guitarist Ian Harris, drummer Mark Olly, bass player
            Brian Peers, and vocalist Mike ‘Sag’ Sayer.
          </p>
          <div className={styles.link}>
            <Link href="about-us">Read more...</Link>
          </div>
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
