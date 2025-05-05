import fs from "fs";
import path from "path";
import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/Media.module.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import gigMeta from "@/utils/gigMeta";

interface GigPhotos {
  gigName: string;
  images: string[];
}

interface Props {
  gigs: GigPhotos[];
}

export default function MediaPage({ gigs }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ src: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images.map((img) => ({ src: img })));
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>WOLF Gigs</h1>
        {gigs.length === 0 ? (
          <p className={styles.paragraph}>Coming soon...</p>
        ) : (
          gigs.map((gig) => {
            const imagePaths = gig.images.map(
              (img) => `/gigs/${gig.gigName}/${img}`
            );

            const meta = gigMeta[gig.gigName];
            const title = meta?.title || gig.gigName;
            const youtubeVideos = meta?.youtube || [];

            return (
              <section key={gig.gigName} className={styles.gigSection}>
                <h2 className={styles.gigTitle}>{title}</h2>

                {youtubeVideos.length > 0 && (
                  <div className={styles.videos}>
                    {youtubeVideos.map((url, i) => (
                      <div key={i} className={styles.videoWrapper}>
                        <iframe
                          width="560"
                          height="315"
                          src={url}
                          title={`YouTube video ${i + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className={styles.imageGrid}>
                  {imagePaths.map((imgSrc, i) => (
                    <div
                      key={imgSrc}
                      className={styles.imageCard}
                      onClick={() => openLightbox(imagePaths, i)}
                    >
                      <img
                        src={imgSrc}
                        alt={`Photo ${i + 1}`}
                        className={styles.image}
                      />
                    </div>
                  ))}
                </div>
              </section>
            );
          })
        )}
      </main>
      <Footer />

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={lightboxImages}
          index={currentIndex}
        />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const gigsDir = path.join(process.cwd(), "public/gigs");
  const gigFolders = fs.readdirSync(gigsDir).filter((folder) => {
    const folderPath = path.join(gigsDir, folder);
    return fs.statSync(folderPath).isDirectory();
  });

  const gigs: GigPhotos[] = gigFolders.map((folder) => {
    const folderPath = path.join(gigsDir, folder);
    const images = fs
      .readdirSync(folderPath)
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));
    return { gigName: folder, images };
  });

  return {
    props: {
      gigs,
    },
  };
}
