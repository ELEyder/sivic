import { Link } from "react-router-dom";
import styles from "./AdminHeader.module.css";

const AdminHeader = () => {
  return (
    <header className={styles.header}>
      <h1>ADMINISTRACIÓN</h1>
      <Link to={"/"} className={styles.button}>Cerrar Sesión </Link>
    </header>
  );
};

export default AdminHeader;
