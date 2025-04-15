import Carousel from "../components/Carrousel/Carousel";
import CasosPorEstado from "../components/Dashboard/CasosPorEstado";
import CasosRegistrados from "../components/Dashboard/CasosRegistrados";
import TotalCasos from "../components/Dashboard/TotalCasos";
import useDashboard from "../hooks/useDashboard";
import useStatisticsPage from "../hooks/useStatisticsPage";
import styles from "./Statistics.module.css";
import moment from "moment";

const Statistics = () => {
  const { statisticsPage } = useStatisticsPage();
  const { data, loading } = useDashboard();

  return (
    <>
      <section className={styles.home}>
        <Carousel></Carousel>
      </section>
      <section className={styles.stats}>
        <h1>{statisticsPage.title}</h1>
        <p>{statisticsPage.description}</p>
        <div className={styles.graphs}>
          <div className={styles.graph}>
            <CasosRegistrados />
          </div>
          <div className={styles.graph}>
            <CasosPorEstado />
          </div>
          <div className={styles.graph}>
            <TotalCasos />
          </div>
        </div>
        {!loading ? (
          <h2>
            Reporte actualizado al{" "}
            {moment(data.ultima_actualizacion)
              .locale("es")
              .format("D [de] MMMM [del] YYYY")}
          </h2>
        ) : null}
      </section>
    </>
  );
};

export default Statistics;
