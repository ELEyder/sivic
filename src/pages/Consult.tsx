import Button from "../components/Buttons/Button";
import styles from "./Consult.module.css";

const Consult = () => {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>CONSULTA</h2>
          </div>
          <div className={styles.formContainer}>
            <p>
              Si quiere conocer el estado de su caso registrado, coloque su DNI
              en el siguiente espacio y haga clic en consultar
            </p>
            <div className={styles.inputContainer}>
            <input type="text" className={styles.input} /> <Button type={"secondary"}>Consultar</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consult;
