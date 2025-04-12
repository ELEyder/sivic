import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import CasesTable from "../../components/Tables/CasesTable";
import ContactsTable from "../../components/Tables/ContactsTable";
import styles from "./Admin.module.css";
import SelectFile from "../../components/SelectFile/SelectFile";
import { useState } from "react";
import useImagenWeb from "../../hooks/useImagenWeb";
import { Image } from "antd";

const Admin = () => {
  const { imagenesWeb, updateImagenesWeb } = useImagenWeb();
  const [imagenes, setImagenes] = useState({
    logo: null,
    carrusel1: null,
    carrusel2: null,
    carrusel3: null,
  });

  const handleFileChange = (key: any, file: any) => {
    setImagenes((prev) => ({ ...prev, [key]: file }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(imagenes).forEach(([key, file]) => {
      if (file) formData.append(key, file);
    });

    try {
      updateImagenesWeb(formData);
      alert("Imágenes actualizadas correctamente");
    } catch (err) {
      alert("Error al subir imágenes");
      console.error(err);
    }
  };
  return (
    <>
      <section className={styles.graphs}>
        <div className={styles.graph}>Gráfico 1</div>
        <div className={styles.graph}>Gráfico 2</div>
        <div className={styles.graph}>Gráfico 3</div>
      </section>
      <section className={styles.cases}>
        <h2>LISTADO DE DATOS DE CASOS</h2>
        <CasesTable />
      </section>
      <section className={styles.cases}>
        <h2>Datos ingresados al formulario de contáctanos</h2>
        <ContactsTable />
      </section>
      <form className={styles.adminPage} onSubmit={handleSubmit}>
        <h1>Administrar web</h1>
        <div className={styles.adminLogo}>
          <h2>Logo de la web</h2>
          <div className={styles.logoConfig}>
            <Image
              src={`${
                import.meta.env.VITE_BACKEND_BASE_URL + imagenesWeb.logo
              }`}
              alt="logo"
              fallback="./loading.gif"
            />
            <SelectFile name="logo" onFileChange={handleFileChange} />
            <p>(80 x 180 px)</p>
          </div>
        </div>

        <div className={styles.adminCarrousel}>
          <h2>Carrusel</h2>
          <div className={styles.carrousel}>
            <div className={styles.carrouselContainer}>
              <Image
                src={
                  import.meta.env.VITE_BACKEND_BASE_URL + imagenesWeb.carrusel1
                }
                alt="logo"
                fallback="./loading.gif"
                width={"290px"}
              />
              <SelectFile name="carrusel1" onFileChange={handleFileChange} />
              <p>(1170 x 2880 px)</p>
            </div>
            <div className={styles.carrouselContainer}>
              <Image
                src={
                  import.meta.env.VITE_BACKEND_BASE_URL + imagenesWeb.carrusel2
                }
                alt="logo"
                fallback="./loading.gif"
                width={"290px"}
              />
              <SelectFile name="carrusel2" onFileChange={handleFileChange} />
              <p>(1170 x 2880 px)</p>
            </div>
            <div className={styles.carrouselContainer}>
              <Image
                src={
                  import.meta.env.VITE_BACKEND_BASE_URL + imagenesWeb.carrusel3
                }
                alt="logo"
                fallback="./loading.gif"
                width={"290px"}
              />
              <SelectFile name="carrusel3" onFileChange={handleFileChange} />
              <p>(1170 x 2880 px)</p>
            </div>
          </div>
        </div>
        <Button>Guardar Imagenes</Button>
      </form>
      <section className={styles.sections}>
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
