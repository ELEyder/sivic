import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "../Buttons/Button";
import Profile from "../Icons/Profile";
import { Image } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 990) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Image
              src={
                import.meta.env.VITE_BACKEND_BASE_URL +
                "/storage/imagenes_web/logo.png"
              }
              height={"50px"}
              preview={false}
              fallback="./loading.gif"
            />
          </div>
          <div className={styles.menu} onClick={openMenu}>
            {open ? <CloseOutlined /> : <MenuOutlined />}
          </div>
          <Link
            to="/"
            className={`${styles.pages} ${
              location.pathname === "/" ? styles.active : ""
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/statistics"
            className={`${styles.pages} ${
              location.pathname === "/statistics" ? styles.active : ""
            }`}
          >
            Estadística
          </Link>
          <Link
            to="/information"
            className={`${styles.pages} ${
              location.pathname === "/information" ? styles.active : ""
            }`}
          >
            Información
          </Link>
          <Link
            to="/consult"
            className={`${styles.pages} ${
              location.pathname === "/consult" ? styles.active : ""
            }`}
          >
            Consulta
          </Link>
          <Link
            to="/login"
            className={`${styles.administrador} ${styles.pages} ${
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
      <menu className={open ? styles.menuOpen : styles.menuClose}>
        <Link
          to="/"
          className={`${styles.pages} ${
            location.pathname === "/" ? styles.active : ""
          }`}
        >
          Inicio
        </Link>
        <Link
          to="/statistics"
          className={`${styles.pages} ${
            location.pathname === "/statistics" ? styles.active : ""
          }`}
        >
          Estadística
        </Link>
        <Link
          to="/information"
          className={`${styles.pages} ${
            location.pathname === "/information" ? styles.active : ""
          }`}
        >
          Información
        </Link>
        <Link
          to="/consult"
          className={`${styles.pages} ${
            location.pathname === "/consult" ? styles.active : ""
          }`}
        >
          Consulta
        </Link>
        <Link
            to="/login"
            className={`${styles.administrador} ${styles.pages} ${
              location.pathname === "/login" ? styles.active : ""
            }`}
          >
            <Profile />
            Administrador
          </Link>
      </menu>
    </>
  );
};

export default Header;
