import React from "react";
import Button from "../components/Buttons/Button";
import Carousel from "../components/Carrousel/Carousel";
import useInformationPage from "../hooks/useInformationPage";
import styles from "./Information.module.css";

// Función para renderizar saltos de línea
function formatTextWithBreaks(text?: string) {
  if (!text) return null;
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
}

const Information: React.FC = () => {
  const { informationPage } = useInformationPage();
  if (!informationPage) {
    return <div>Cargando información...</div>;
  }
  return (
    <>
      <section className={styles.home}>
        <Carousel />
      </section>

      <section className={styles.info}>
        <h1>{informationPage.title}</h1>
        <h2>{informationPage.title_2}</h2>
        <div className={styles.infoContainer}>
          <div className={styles.infoTexts}>
            <div>
              <h3>{informationPage.subtitle_1}</h3>
              <p>{formatTextWithBreaks(informationPage.description_1)}</p>
            </div>
            <div>
              <h3>{informationPage.subtitle_2}</h3>
              <p>{formatTextWithBreaks(informationPage.description_2)}</p>
            </div>
            <div>
              <h3>{informationPage.subtitle_3}</h3>
              <p>{formatTextWithBreaks(informationPage.description_3)}</p>
            </div>
          </div>
          <img src={"./info/3.png"} alt="Imagen 1" />
        </div>
      </section>

      <section className={styles.infoDark}>
        <h1>{informationPage.subtitle_4}</h1>
        <div className={styles.infoDarkContainer}>
          <img src={"./info/3.png"} alt="Imagen 2" />
          <div className={styles.infoDarkText}>
            <p>{formatTextWithBreaks(informationPage.description_4)}</p>
          </div>
        </div>
      </section>

      <section className={styles.tb}>
        <h1>{informationPage.subtitle_5}</h1>
        <div className={styles.tbContainer}>
          <div className={styles.tbText}>
            <p>{formatTextWithBreaks(informationPage.description_5)}</p>
            <h3>{informationPage.subtitle_6}</h3>
            <p>{formatTextWithBreaks(informationPage.description_6)}</p>
          </div>
          <div className={styles.tbMedia}>
            <div className={styles.imgContainer}>
              <img src={"./info/3.png"} alt="Imagen 3" />
            </div>
            <h3>{informationPage.subtitle_7}</h3>
            <p>{formatTextWithBreaks(informationPage.description_7)}</p>
            <div className={styles.btnContainer}>
              <Button>Quiero registrar un caso</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
