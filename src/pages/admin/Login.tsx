import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <section className={styles.home}>
        <div>
          <h1>BIENVENIDO</h1>
          <input type="text" />
          <input type="text" />
          <Link to={"/admin"}>
            <Button>INGRESAR</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Login;
