import Button from "../components/Buttons/Button";
import styles from "./Consult.module.css";
const Consult = () => {
  return (
    <>
      <section className={styles.home}>
        <div>
          <div>
            <h1>Consulta</h1>
          </div>
          <div>
            <p>
              Si quiere conocer el estado de su caso registrado, coloque su DNI
              en el siguiente espacio y haga clic en consultar
            </p>
            <input type="text" /> <Button>Consultar</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consult;
