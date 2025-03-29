import Carousel from "../components/Carrousel/Carousel";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <section className={styles.home}>
        <Carousel></Carousel>
      </section>
      <section className={styles.welcome}>
        <div className={styles.container}>
          <h1>Bienvenidos a SIVIC TB</h1>
          <p>
            Una plataforma para la comunicación y atención de casos relacionados
            al estigma y discriminación de las personas afectadas por TB, así
            como a la atención en TB y canasta PANTB
          </p>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.titleAbout}>Nosotros</h1>
          <div className={styles.aboutDescription}>
            <h1>¿Qué es el SIVIC - TB?</h1>
            <p>
              SIVIC - TB es una herramienta de monitoreo comunitario y ciudadano
              enfocada en la tuberculosis, que facilita la implementación de
              acciones de vigilancia en derechos humanos, con un énfasis en el
              estigma y la discriminación, así como en el tratamiento de la
              tuberculosis y la provisión de la canasta PANTB. Este sistema se
              fundamenta en la participación activa de la comunidad para
              detectar, seguir y abordar los problemas y obstáculos que
              enfrentan las personas afectadas por la tuberculosis.
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
