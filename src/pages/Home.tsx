import Carousel from "../components/Carrousel/Carousel";
import useHomePage from "../hooks/useHomePage";
import styles from "./Home.module.css";
const Home = () => {
  const { homePage } = useHomePage();

  return (
    <>
      <section className={styles.home}>
        <Carousel></Carousel>
      </section>
      <section className={styles.welcome}>
        <div className={styles.container}>
          <h2>{homePage.welcome_title}</h2>
          <p>
           {homePage.welcome_text}
          </p>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.titleAbout}>{homePage.title}</h1>
          <div className={styles.aboutDescription}>
            <h2>{homePage.subtitle}</h2>
            <p>
              {homePage.description}
            </p>
          </div>
        </div>
      </section>
      <section className={styles.info}>
        <h1>Información</h1>
        <h2>FLUJO DE DENUNCIA</h2>
        <div className={styles.steps}>
          <div className={styles.step1}>
            <p>Usuario TB reporta a la plataforma</p>
          </div>
          <div>
            <img src="./arrow1.png" alt="arrow" />
          </div>
          <div className={styles.step2}>
            <p>
              Administrador de la plataforma levanta información y deriva para
              resolución a OAT, según región de intervención.{" "}
            </p>
          </div>
          <div>
            <img src="./arrow2.png" alt="arrow" />
          </div>
          <div className={styles.step3}>
            <p>
              Monitor comunitario de OAT, inicia proceso de gestión interna y
              utiliza canales de denuncia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
