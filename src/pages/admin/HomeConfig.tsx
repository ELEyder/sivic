import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import styles from "./MainConfig.module.css";
import ConfirmModal from "../../components/Modals/ConfirmModal";
import { useState, useEffect } from "react";
import { Input } from "antd";
import useHomePage from "../../hooks/useHomePage";
import { HomePage } from "../../interfaces/HomePage";

const HomeConfig = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { homePage, updateHomePage } = useHomePage();
  const [formData, setFormData] = useState<HomePage>({} as HomePage);

  useEffect(() => {
    if (homePage) {
      setFormData(homePage);
    }
  }, [homePage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(formData)
    try {
      await updateHomePage(formData);
      setOpenModal(true);
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  return (
    <>
      <div className={styles.mainConfig}>
        <h1>Inicio</h1>

        <section className={styles.container}>
          <div className={styles.inputContainer}>
            <label>Título de bienvenida</label>
            <input name="welcome_title" value={formData.welcome_title || ""} onChange={handleChange} />
          </div>
          <div className={styles.inputContainer}>
            <label>Texto de la bienvenida</label>
            <Input.TextArea name="welcome_text" value={formData.welcome_text || ""} rows={3} onChange={handleChange} />
          </div>
        </section>

        <section className={styles.container}>
          <div className={styles.inputContainer}>
            <label>Título 1</label>
            <input name="title" value={formData.title || ""} onChange={handleChange} />
          </div>
          <div className={styles.inputContainer}>
            <label>Subtítulo 1</label>
            <input name="subtitle" value={formData.subtitle || ""} onChange={handleChange} />
          </div>
          <div className={styles.inputContainer}>
            <label>Descripción</label>
            <Input.TextArea name="description" value={formData.description || ""} rows={3} onChange={handleChange} />
          </div>
        </section>
        <div className={styles.options}>
          <Button onClick={() => navigate(-1)}>Regresar</Button>
          <Button onClick={handleSubmit}>Aplicar Cambios</Button>
        </div>
      </div>

      <ConfirmModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default HomeConfig;
