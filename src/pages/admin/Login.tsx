import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <section className={styles.home}>
        <form className={styles.form}>
          <h1>BIENVENIDO</h1>
          <input type="text" placeholder="Correo" className={styles.input}/>
          <input type="text" placeholder="Contraseña" className={styles.input}/>
          <Link to={"/admin"} className={styles.button}>
            <button className={styles.button}>INGRESAR</button>
          </Link>
        </form>
      </section>
    </>
  );
};

export default Login;
