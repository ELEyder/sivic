import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import styles from "./MainConfig.module.css";
import SelectFile from "../../components/SelectFile/SelectFile";
import { Input } from "antd";
import ConfirmModal from "../../components/Modals/ConfirmModal";
import { useState, useEffect } from "react";
import useInformationPage from "../../hooks/useInformationPage"; // ✅ Hook
import { InformationPage } from "../../interfaces/InformationPage";

const InformationConfig = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { informationPage, updateInformationPage } = useInformationPage();
  const [random, setRandom] = useState(Date.now());
  const [formData, setFormData] = useState<any>({ _metod : "PUT"});

  useEffect(() => {
    if (informationPage) {
      setFormData(informationPage);
    }
  }, [informationPage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: InformationPage | null) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData) return;

    try {
      await updateInformationPage(formData);
      console.log("Datos enviados correctamente:");
      setOpenModal(true);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const handleFileChange = async (key: any, file: any) => {
    const formData = new FormData();

    formData.append(key, file);

    try {
      await updateInformationPage(formData);
      setRandom(Date.now());
    } catch (err) {
      alert("Error al subir imágenes");
      console.error(err);
    }
  };

  return (
    <>
      <div className={styles.mainConfig}>
        <h1>Información</h1>

        <section className={styles.container}>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Título</label>
            <input
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="title">Título 2</label>
            <input
              name="title_2"
              value={formData.title_2 || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Subtítulo 1</label>
            <input
              name="subtitle_1"
              value={formData.subtitle_1 || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Descripción</label>
            <Input.TextArea
              name="description_1"
              rows={4}
              value={formData.description_1 || ""}
              onChange={handleChange}
              placeholder="Escribe aquí..."
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Subtítulo 2</label>
            <input
              name="subtitle_2"
              value={formData.subtitle_2 || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Descripción</label>
            <Input.TextArea
              name="description_2"
              rows={4}
              value={formData.description_2 || ""}
              onChange={handleChange}
              placeholder="Escribe aquí..."
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Subtítulo 3</label>
            <input
              name="subtitle_3"
              value={formData.subtitle_3 || ""}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Descripción</label>
            <Input.TextArea
              name="description_3"
              rows={4}
              value={formData.description_3 || ""}
              onChange={handleChange}
              placeholder="Escribe aquí..."
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Imagen 1</label>
            <div className={styles.imageContainer}>
              <img
                src={import.meta.env.VITE_BACKEND_BASE_URL + formData.image_1 +
                  "?" +
                  random}
                alt="logo"
              />
              <SelectFile name="image_1" onFileChange={handleFileChange}/>
              <p>(1170 x 1170 px)</p>
            </div>
          </div>
        </section>

        {/* Sección 2 */}
        <section className={styles.container}>
          <div className={styles.inputContainer}>
            <label>Subtítulo 4</label>
            <input
              name="subtitle_4"
              value={formData.subtitle_4 || ""}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Descripción</label>
            <Input.TextArea
              name="description_4"
              rows={4}
              value={formData.description_4 || ""}
              onChange={handleChange}
              placeholder="Escribe aquí..."
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Imagen 2</label>
            <div className={styles.imageContainer}>
              <img
                src={
                  import.meta.env.VITE_BACKEND_BASE_URL +
                  formData.image_2 +
                  "?" +
                  random
                }
                alt="logo"
              />
              <SelectFile name="image_2" onFileChange={handleFileChange}/>
              <p>(1170 x 1170 px)</p>
            </div>
          </div>
        </section>

        {/* Sección 3 */}
        <section className={styles.container}>
          <div className={styles.inputContainer}>
            <label>Subtítulo 5</label>
            <input
              name="subtitle_5"
              value={formData.subtitle_5 || ""}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Descripción</label>
            <Input.TextArea
              name="description_5"
              rows={4}
              value={formData.description_5 || ""}
              onChange={handleChange}
              placeholder="Escribe aquí..."
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Subtítulo 6</label>
            <input
              name="subtitle_6"
              value={formData.subtitle_6 || ""}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Descripción</label>
            <Input.TextArea
              name="description_6"
              rows={4}
              value={formData.description_6 || ""}
              onChange={handleChange}
              placeholder="Escribe aquí..."
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Subtítulo 7</label>
            <input
              name="subtitle_7"
              value={formData.subtitle_7 || ""}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Descripción</label>
            <Input.TextArea
              name="description_7"
              rows={4}
              value={formData.description_7 || ""}
              onChange={handleChange}
              placeholder="Escribe aquí..."
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Imagen 3</label>
            <div className={styles.imageContainer}>
              <img
                src={import.meta.env.VITE_BACKEND_BASE_URL + formData.image_3 +
                  "?" +
                  random}
                alt="logo" 
              />
              <SelectFile name="image_3" onFileChange={handleFileChange}/>
              <p>(1170 x 1170 px)</p>
            </div>
          </div>
        </section>

        {/* Botones */}
        <div className={styles.options}>
          <Button onClick={() => navigate(-1)}>Regresar</Button>
          <Button onClick={handleSubmit}>Aplicar Cambios</Button>
        </div>
      </div>

      <ConfirmModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default InformationConfig;
