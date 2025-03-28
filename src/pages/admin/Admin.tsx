import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import CasesTable from "../../components/Tables/CasesTable";
import ContactTable from "../../components/Tables/ContactTable";

const Admin = () => {
  return (
    <>

      <section>
        <div>Gráfico 1</div>
        <div>Gráfico 2</div>
        <div>Gráfico 3</div>
      </section>
      <section>
        <h1>LISTADO DE DATOS DE CASOS</h1>
        <CasesTable />
      </section>
      <section>
        <h1>Datos ingresados al formulario de contáctanos</h1>
        <ContactTable />
      </section>
      <section>
        <h1>Administrar web</h1>

        <div>
          <h2>Logo de la web</h2>
          <div>
            <img src="./logo.png" alt="logo" /> <input type="file" /> <p>(80 x 180 px)</p>
          </div>
        </div>

        <div>
          <h2>Carrusel</h2>
          <div>
            <div>
              <img src="./logo.png" alt="logo" /> <input type="file" />{" "}
              <p>(1170 x 2880 px)</p>
            </div>
            <div>
              <img src="./logo.png" alt="logo" /> <input type="file" />{" "}
              <p>(1170 x 2880 px)</p>
            </div>
            <div>
              <img src="./logo.png" alt="logo" /> <input type="file" />{" "}
              <p>(1170 x 2880 px)</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Link to={"/admin/home"}>
          <Button>Inicio</Button>
        </Link>
        <Link to={"/admin/statistics"}>
          <Button>Estadísticas</Button>
        </Link>
        <Link to={"/admin/information"}>
          <Button>Información</Button>
        </Link>
      </section>
    </>
  );
};

export default Admin;
