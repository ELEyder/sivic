import { Link } from "react-router-dom";
import Button from "../Buttons/Button";

const AdminHeader = () => {
  return (
    <header>
      <h1>ADMINISTRACIÓN</h1>
      <Link to={"/"}>
        <Button>Cerrar Sesión</Button>
      </Link>
    </header>
  );
};

export default AdminHeader;
