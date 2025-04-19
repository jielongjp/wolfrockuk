import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroSlider.module.css";

const images = [
  "/slider/N1QvoGIo.jpeg",
  "/slider/Tv2_-Q-A.jpeg",
  "/slider/7wAoAKV0.jpeg",
  "/slider/DVhzl-oU.jpeg",
  "/slider/W5x7Ucrc.jpeg",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      {images.map((src, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === index ? styles.active : ""}`}
        >
          <Image
            src={src}
            alt={`Hero Mobile ${i + 1}`}
            layout="fill"
            objectFit="cover"
            priority={i === 0} // only the first image gets priority
          />
        </div>
      ))}
    </div>
  );
}
