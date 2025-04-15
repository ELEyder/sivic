import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import styles from "./MainConfig.module.css";
import { Input } from "antd";
import { useState, useEffect } from "react";
import ConfirmModal from "../../components/Modals/ConfirmModal";
import useStatisticsPage from "../../hooks/useStatisticsPage";
import { StatisticsPage } from "../../interfaces/StatisticsPage";

const StatisticsConfig = () => {
  const navigate = useNavigate();
  const { statisticsPage, updateStatisticsPage } = useStatisticsPage();
  const [openModal, setOpenModal] = useState(false);

  // Estado local para mantener los datos
  const [formData, setFormData] = useState<StatisticsPage>({
    title: '',
    description: ''
  });

  useEffect(() => {
    if (statisticsPage) {
      setFormData({
        title: statisticsPage.title || '',
        description: statisticsPage.description || ''
      });
    }
  }, [statisticsPage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    updateStatisticsPage(formData);
    setOpenModal(true);
  };

  return (
    <>
      <div className={styles.mainConfig}>
        <h1>Estadísticas</h1>
        <section className={styles.container}>
          <div className={styles.inputContainer}>
            <label htmlFor="title">Titulo 1</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="description">Descripción</label>
            <Input.TextArea
              rows={4}
              placeholder="Escribe aquí..."
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
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

export default StatisticsConfig;
