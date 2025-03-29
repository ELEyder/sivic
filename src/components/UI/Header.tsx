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
        <div className={styles.nav}>
            <img className={styles.logo} src="./logo.png" alt="logo" />
            <Link to="/">Inicio</Link>
            <Link to="/statistics">Estadística</Link>
            <Link to="/information">Información</Link>
            <Link to="/consult">Consulta</Link>
        </div>
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
