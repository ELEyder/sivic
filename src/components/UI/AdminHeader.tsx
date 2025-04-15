import { useAuth } from "../../hooks/useAuth";
import styles from "./AdminHeader.module.css";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <h1>ADMINISTRACIÓN</h1>
      <button 
        onClick={handleLogout} 
        className={styles.button}
      >
        Cerrar Sesión
      </button>
    </header>
  );
};

export default AdminHeader;