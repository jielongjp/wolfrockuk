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
          WOLF first formed as a school rock band back in 1976 under the
          watchful eye of physics teacher and guitarist John ‘Muskrat’ Muscutt,
          lead guitarist Ian Harris, drummer Mark Olly, bass player Brian Peers,
          and vocalist Mike ‘Sag’ Sayer.
        </p>
        <p className={styles.paragraph}>WOLF in 1979:</p>
        <div className={styles.imageContainer}>
          <img
            src="/WOLF-1979.png"
            alt="WOLF band members"
            className={styles.image}
          />
        </div>
        <p className={styles.paragraph}></p>
        <p className={styles.paragraph}>WOLF in 2023:</p>
        <div className={styles.imageContainer}>
          <img
            src="/WOLF-2023.jpeg"
            alt="WOLF band members"
            className={styles.image}
          />
        </div>
        <p className={styles.paragraph}></p>
        <p className={styles.paragraph}>WOLF in 1978 and 2024</p>
        <p className={styles.paragraph}>
          (From top to bottom: vocalist Mike ‘Sag’ Sayer, lead guitarist Ian
          Harris, bass player Brian Peers and drummer Mark Olly)
        </p>
        <img
          src="/WOLF-A3-POSTER-mini.jpg"
          alt="WOLF band members then and now"
          className={styles.image}
        />

        <h2 className={styles.title}>WOLF – 1976 to Today</h2>
        <h2 className={styles.subtitle}>A History Of The Band</h2>

        <h3 className={styles.sectionTitle}>The Early Years (1976–1980)</h3>
        <p className={styles.paragraph}>
          WOLF began, as did a lot of bands back in the 1970’s, with a bunch of
          enthusiastic high school kids that “just wanted to rock”.
        </p>
        <p className={styles.paragraph}>
          Born in the 6th Form mobile of Appleton Hall County Grammar School in
          late 1976, and put together by physics teacher John Muscutt and
          guitarist Ian Harris, the original WOLF line-up almost immediately
          included Brian Peers on bass and Mark Olly on drums with a range of
          other guests and vocalists (something the band still encourages to
          this day).
        </p>
        <p className={styles.paragraph}>
          By some miracle a reel-to-reel tape recording of 14 songs (entitled
          ‘Super Nova’) survives from 1977 and includes many guests who would
          join the band again for the 40th anniversary live reunion.
        </p>
        <p className={styles.paragraph}>
          As Darryl Way of ‘Curved Air’ had already released three albums of
          solo material as ‘Darryl Way’s Wolf’ up to 1974, we cleared permission
          to use the name alone for our band and miraculously got it.
        </p>
        <p className={styles.paragraph}>
          In late September 1979 Ian added vocalist Brian English to the line-up
          and the ‘NWOBHM’ (‘New Wave Of British Heavy Metal’) band WOLF began a
          series of live dates with a first gig on 23rd November 1979 at
          Appleton Hall — the exact same gig repeated as the 40th anniversary
          show. Even at this very early stage the audience insisted on two
          encores.
        </p>
        <p className={styles.paragraph}>
          At some point in 1979 the band acted as a backing group for a singer
          named Paul ‘Wiffa’ Smith who wanted to pursue a career in music but
          was, at this stage, only the same age and experience as the band. Paul
          did indeed eventually spend many years in the 1980’s and 90’s as a
          professional Glam Rock singer in Los Angeles.
        </p>

        <h3 className={styles.sectionTitle}>The Touring Years (1980–1995)</h3>
        <p className={styles.paragraph}>
          The second packed-out show at Lymm Vortex Youth Club early in 1980
          started live performances in earnest with a new PA system, huge
          backstage wolf-head logo, pyrotechnics, occasional dry ice, a full
          time roadie (Graham ‘Attie’ Attwood), official band live recordings
          whenever possible, and in March a surviving 8mm cine film was taken of
          the first track and opening stage show.
        </p>
        <p className={styles.paragraph}>
          Regular vocalists included Bryan English and Michael Sayer (both of
          whom performed live and appear on the recordings), Mr Muscutt (also
          Guitar), Andrew Altman, Phil Tyrer (also Bass), and basically anyone
          else who fancied a go. Other session musicians included Martin Roberts
          (Bass), John Stamp (Guitar), and Colin Crowther (Piano / Mouth Organ).
        </p>
        <p className={styles.paragraph}>
          Bryan became a professional football coach, Martin ended up with a
          television career presenting ‘Homes Under The Hammer’, Mark Olly did
          ‘Lost Treasures’ for ITV/Sky, and John Stamp continues in gospel music
          with many commercial solo albums.
        </p>
        <p className={styles.paragraph}>
          The first WOLF tour ran from November 1979 to September 1980. A break
          followed for academic pursuits. Later rehearsals in 1981 at Appleton
          Thorn Village Hall included Phil Tyrer and Colin Crowther.
        </p>
        <p className={styles.paragraph}>
          Ian moved to China and performed with rock bands in Shanghai; Brian
          worked with American blues bands near Detroit; Mark became a
          professional session drummer and landed record deals; Michael Sayer
          became a professional brewer.
        </p>
        <p className={styles.paragraph}>
          The original members didn’t reunite again until 1st July 1995 when
          they recorded tracks in a Warrington rehearsal studio, just like the
          old days.
        </p>

        <h3 className={styles.sectionTitle}>
          The Performing Years (2016–2025)
        </h3>
        <p className={styles.paragraph}>
          Saturday 11th June 2016 marked a turning point — the final ‘Friday
          Club’ school disco at Appleton Hall (now Bridgewater High), hosted by
          John Muscutt, brought together the original WOLF members again.
        </p>
        <p className={styles.paragraph}>
          That led to the 40th anniversary charity gig on 23rd November 2019 —
          same venue, same band, same songs, even some of the original audience
          and staff returned. Original roadie Graham ‘Attie’ Attwood flew back
          from Australia to join.
        </p>
        <p className={styles.paragraph}>
          Professional sound engineer David Bennett returned to master the gig
          recording for commercial download. WOLF simply had to continue.
        </p>
        <p className={styles.paragraph}>
          From 2020 to 2025 (excluding 2022), WOLF performed one major show a
          year — huge 2-3 hour authentic 70s Classic Rock experiences at The
          Tower Brewery in Burton-On-Trent with original songs, guests, and real
          instruments.
        </p>
        <p className={styles.paragraph}>
          Multi-instrumentalist Andy Farrow became a regular “fifth member”. And
          now — a 50th Anniversary Tour in 2026? Watch this space…
        </p>
      </main>
      <Footer />
    </div>
  );
}
