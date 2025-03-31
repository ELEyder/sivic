import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import styles from "./InformationConfig.module.css";
import SelectFile from "../../components/SelectFile/SelectFile";

const InformationConfig = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.infoConfig}>
      <h1>Información</h1>
      <section className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Titulo </label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Subtitulo 1</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Subtitulo de texto</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Subtitulo de texto</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Subtitulo de texto</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Imagen 1</label>
          <div className={styles.imageContainer}>
            <img src="./info/1.png" alt="logo"/> <SelectFile />
            <p>(1170 x 1170 px)</p>
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Subtitulo 1</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Subtitulo de texto</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Titulo 1</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Subtitulo 1</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Subtitulo 2</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Subtitulo 3</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Titulo</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Subtitulo del texto</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Subtitulo del texto</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Imagen</label>
          <div className={styles.imageContainer}>
            <img src="./info/1.png" alt="logo"/> <SelectFile />
            <p>(1170 x 1170 px)</p>
          </div>
        </div>
      </section>
      <div className={styles.options}>
        <Button onClick={() => navigate(-1)}>Retroceder</Button>
        <Button>Aplicar Cambios</Button>
      </div>
    </div>
  );
};

export default InformationConfig;