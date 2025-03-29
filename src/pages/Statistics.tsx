import Carousel from "../components/Carrousel/Carousel";
import styles from "./Statistics.module.css";

const Statistics = () => {
  return (
    <>
      <section className={styles.home}>
        <Carousel></Carousel>
      </section>
      <section className={styles.stats}>
        <h1>Estadísticas</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Faucibus varius nunc varius
          condimentum nunc consectetur duis ipsum. Duis libero sit porttitor
          arcu in adipiscing. At lorem sed id dolor nisl erat urna. Ac magna
          ullamcorper sagittis euismod rhoncus eget. Ornare amet ut id risus
          ante. Scelerisque non lectus fames velit elit. Porta.
        </p>
        <div className={styles.graphs}>
          <div className={styles.graph}>Grafico 1</div>
          <div className={styles.graph}>Grafico 2</div>
          <div className={styles.graph}>Grafico 3</div>
        </div>
        <h2>Reporte actualizado al 28 de febrero del 2025</h2>
      </section>
    </>
  );
};

export default Statistics;
