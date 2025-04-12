import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "../Buttons/Button";
import Profile from "../Icons/Profile";
import useImagenWeb from "../../hooks/useImagenWeb";
import { Image } from "antd";

const Header = () => {
  const location = useLocation();
  const { imagenesWeb } = useImagenWeb();

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Image
              src={
                import.meta.env.VITE_BACKEND_BASE_URL + imagenesWeb.logo 
              }
              height={"50px"}
              preview={false}
              fallback="./loading.gif"
            />
          </div>

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
        <Link
          to="/login"
          className={`${styles.administrador} ${
            location.pathname === "/login" ? styles.active : ""
          }`}
        >
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
