import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import styles from "./MainConfig.module.css";
import { Input } from "antd";

const StatisticsConfig = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainConfig}>
      <h1>Estadisticas</h1>
      <section className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Titulo 1</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Descripción</label>
          <Input.TextArea
            rows={4}
            placeholder="Escribe aquí..."
          />
        </div>
      </section>
      <div className={styles.options}>
        <Button onClick={() => navigate(-1)}>Retroceder</Button>
        <Button>Aplicar Cambios</Button>
      </div>
    </div>
  );
};

export default StatisticsConfig;
