import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import CasesTable from "../../components/Tables/CasesTable";
import ContactsTable from "../../components/Tables/ContactsTable";
import styles from "./Admin.module.css";
import SelectFile from "../../components/SelectFile/SelectFile";

const Admin = () => {
  return (
    <>
      <section className={styles.graphs}>
        <div className={styles.graph}>Gráfico 1</div>
        <div className={styles.graph}>Gráfico 2</div>
        <div className={styles.graph}>Gráfico 3</div>
      </section>
      <section className={styles.cases}>
        <h2>LISTADO DE DATOS DE CASOS</h2>
        <CasesTable />
      </section>
      <section className={styles.cases}>
        <h2>Datos ingresados al formulario de contáctanos</h2>
        <ContactsTable />
      </section>
      <section className={styles.adminPage}>
        <h1>Administrar web</h1>
        <div className={styles.adminLogo}>
          <h2>Logo de la web</h2>
          <div className={styles.logoConfig}>
            <img src="./logo.png" alt="logo" />
            <SelectFile />
            <p>(80 x 180 px)</p>
          </div>
        </div>

        <div className={styles.adminCarrousel}>
          <h2>Carrusel</h2>
          <div className={styles.carrousel}>
            <div className={styles.carrouselContainer}>
              <img src="./banners/b1.png" alt="logo" /> <SelectFile />
              <p>(1170 x 2880 px)</p>
            </div>
            <div className={styles.carrouselContainer}>
              <img src="./banners/b2.png" alt="logo" /> <SelectFile />
              <p>(1170 x 2880 px)</p>
            </div>
            <div className={styles.carrouselContainer}>
              <img src="./banners/b3.png" alt="logo" /> <SelectFile />
              <p>(1170 x 2880 px)</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sections}>
        <Link to={"/admin/home"}>
          <Button>Inicio</Button>
        </Link>
        <Link to={"/admin/statistics"}>
          <Button>Estadísticas</Button>
        </Link>
        <Link to={"/admin/information"}>
          <Button>Información</Button>
        </Link>
      </section>
    </>
  );
};

export default Admin;
