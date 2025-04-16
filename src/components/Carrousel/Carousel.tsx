import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { Image } from "antd";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    import.meta.env.VITE_BACKEND_BASE_URL + "/storage/imagenes_web/carrusel1.png",
    import.meta.env.VITE_BACKEND_BASE_URL + "/storage/imagenes_web/carrusel2.png",
    import.meta.env.VITE_BACKEND_BASE_URL + "/storage/imagenes_web/carrusel3.png",
  ];
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
      <div className={styles.banner}>
        <Image src={images[index]} preview={false} fallback="./loading.gif" />
      </div>
    </div>
  );
};

export default Carousel;
