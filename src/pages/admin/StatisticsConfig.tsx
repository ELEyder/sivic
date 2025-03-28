import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const StatisticsConfig = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Estadisticas</h1>
      <section>
        <div>
          <label htmlFor="title">Titulo 1</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
      </section>
      <div>
        <Button onClick={() => navigate(-1)}>Retroceder</Button>
        <Button>Aplicar Cambios</Button>
      </div>
    </div>
  );
};

export default StatisticsConfig;
