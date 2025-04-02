import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "../Buttons/Button";
import Profile from "../Icons/Profile";

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.nav}>
          <img className={styles.logo} src="./logo.png" alt="logo" />
          <Link
            to="/"
            className={location.pathname === "/" ? styles.active : ""}
          >
            Inicio
          </Link>
          <Link
            to="/statistics"
            className={location.pathname === "/statistics" ? styles.active : ""}
          >
            Estadística
          </Link>
          <Link
            to="/information"
            className={
              location.pathname === "/information" ? styles.active : ""
            }
          >
            Información
          </Link>
          <Link
            to="/consult"
            className={location.pathname === "/consult" ? styles.active : ""}
          >
            Consulta
          </Link>
        </div>
      </nav>
      <nav className={styles.nav}>
        <Link to="/login" className={`${styles.administrador} ${location.pathname === "/login" ? styles.active : ""}`}>
          <Profile />
          Administrador
        </Link>
        <Link to="/register" className={styles.administrador}>
          <Button>Registro de Caso</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
