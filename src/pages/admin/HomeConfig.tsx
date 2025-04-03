import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import styles from "./MainConfig.module.css";
import SelectFile from "../../components/SelectFile/SelectFile";
import { Input } from "antd";
import ConfirmModal from "../../components/Modals/ConfirmModal";
import { useState } from "react";

const HomeConfig = () => {
  const navigate = useNavigate();
  const [ openModal, setOpenModal ] = useState(false)
  return (
    <>
      <div className={styles.mainConfig}>
        <h1>Inicio</h1>
        <section className={styles.container}>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Titulo de bienvenida</label>
            <input type="text" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Texto de la bienvenida</label>
            <input type="text" />
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Titulo 1</label>
            <input type="text" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Subtitulo 1</label>
            <input type="text" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Descripción</label>
            <Input.TextArea rows={4} placeholder="Escribe aquí..." />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Subtitulo 2</label>
            <input type="text" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Descripción</label>
            <Input.TextArea rows={4} placeholder="Escribe aquí..." />
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Titulo 2</label>
            <input type="text" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Otro titulo</label>
            <input type="text" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Subtitulo 1</label>
            <input type="text" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Descripción</label>
            <Input.TextArea rows={4} placeholder="Escribe aquí..." />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Subtitulo 2</label>
            <input type="text" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Descripción</label>
            <Input.TextArea rows={4} placeholder="Escribe aquí..." />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Imagen 1</label>
            <div className={styles.imageContainer}>
              <img src="./info/1.png" alt="logo" /> <SelectFile />
              <p>(1170 x 1170 px)</p>
            </div>
          </div>
        </section>
        <div className={styles.options}>
          <Button onClick={() => navigate(-1)}>Regresar</Button>
          <Button onClick={() => setOpenModal(true)}>Aplicar Cambios</Button>
        </div>
      </div>
      <ConfirmModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default HomeConfig;
