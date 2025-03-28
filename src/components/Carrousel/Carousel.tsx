import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
const images = ["/b1.png", "/b2.png", "/b3.png"];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        “JUNTOS CONTRA LA TB: VIGILANDO Y PROTEGIENDO LA SALUD DE NUESTRA
        COMUNIDAD”
      </h1>
      <img
        src={`./banners/${images[index]}`}
        alt={`Slide ${index}`}
        className={styles.banner}
      />
    </div>
  );
};

export default Carousel;
