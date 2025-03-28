import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "../Buttons/Button";
import Profile from "../Icons/Profile";

const Header = () => {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <img className={styles.logo} src="/logo.png" alt="logo" />
          </li>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/statistics">Estadística</Link>
          </li>
          <li>
            <Link to="/information">Información</Link>
          </li>
          <li>
            <Link to="/consult">Consulta</Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.nav}>
        <Link to="/login" className={styles.administrador}>
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
