import Button from "../components/Buttons/Button";
import { Footer } from "../components/UI";
import styles from "./Register.module.css";
import Info from "../components/Icons/Info";
import DefaultModal from "../components/Modals/DefaultModal";
import Check from "../components/Icons/Check";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonModal from "../components/Buttons/ButtonModal";

const Register = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (e: any) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <>
      <div className={styles.main}>
        <section className={styles.header}>
          <h2>REGISTRO DE CASO</h2>
        </section>

        <section className={styles.content}>
          <div className={styles.info}>
            <p>
              SIVICTB protegerá sus datos personales y respetará el derecho a la
              confidencialidad según La Ley de Protección de Datos Personales en
              Perú es la Ley N° 29733, La Ley N° 30287 Ley de Prevención y
              control de TB.
            </p>
            <div>
              <Info />
            </div>
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <div>
              <label htmlFor="">Nombre y Apellidos</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">DNI</label>
              <input type="text" />
            </div>

            <div className={styles.select}>
              <label htmlFor="">Género</label>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="genero" value="1" />
                </div>
                <label>Masculino</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="genero" value="2" />
                </div>
                <label>Femenino</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="genero" value="3" />
                </div>
                <label>No Binario</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="genero" value="4" />
                </div>
                <label>Prefiero no decirlo</label>
              </div>
            </div>

            <div>
              <label htmlFor="">Teléfono fijo o celular</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Correo electrónico</label>
              <input type="text" />
            </div>

            <div className={styles.select}>
              <label htmlFor="">Nacionalidad</label>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="nacionnalidad" value="1" />
                </div>
                <label>Peruano</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="nacionnalidad" value="2" />
                </div>
                <label>Otro</label>
              </div>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Dirección</label>
              <input type="text" />
            </div>

            <div className={styles.row}>
              <div>
                <label htmlFor="">Departamento</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Provincia</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Distrito</label>
                <input type="text" />
              </div>
            </div>

            <div className={styles.select}>
              <label htmlFor="">Tipo de caso de denuncia</label>
              <div className={styles.rowOptions}>
                <div className={styles.option}>
                  <div>
                    <input type="radio" name="tipo_caso" value="1" />
                  </div>
                  <label>Estigma y discriminación(a)</label>
                </div>
                <div className={styles.option}>
                  <div>
                    <input type="radio" name="tipo_caso" value="2" />
                  </div>
                  <label>Canasta PANTB</label>
                </div>
                <div className={styles.option}>
                  <div>
                    <input type="radio" name="tipo_caso" value="3" />
                  </div>
                  <label>Tratamiento de TB</label>
                </div>
              </div>
            </div>

            <div className={styles.select}>
              <label htmlFor="">¿Dónde ocurrió el caso a reportar?</label>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="lugar_caso" value="1" />
                </div>
                <label>EESS</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="lugar_caso" value="2" />
                </div>
                <label>Hospital</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="lugar_caso" value="3" />
                </div>
                <label>Centro de Estudios</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="lugar_caso" value="4" />
                </div>
                <label>Trabajo</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="lugar_caso" value="5" />
                </div>
                <label>Comunidad</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="lugar_caso" value="6" />
                </div>
                <label>Otro</label>
              </div>
            </div>

            <div>
              <label htmlFor="">
                Nombre del lugar donde ocurrio el caso a reportar
              </label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Describa brevemente el caso </label>
              <input type="text" />
            </div>

            <div className={styles.select}>
              <label htmlFor="">
                Autorizo comunicarse conmigo con el propósito de atender el caso
                reportado
              </label>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="autorizacion" value="1" />
                </div>
                <label>Si</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="autorizacion" value="2" />
                </div>
                <label>No</label>
              </div>
            </div>

            <div className={styles.select}>
              <label htmlFor="">
                Quiero una copia del reporte a mi correo electrónico
              </label>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="copiaCorreo" value="1" />
                </div>
                <label>Si</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="copiaCorreo" value="2" />
                </div>
                <label>No</label>
              </div>
            </div>
            <div>
              <img src="./captcha.png" alt="" />
            </div>
            <Button className={styles.enviar}>Enviar</Button>
          </form>
        </section>
      </div>
      <Footer />

      <DefaultModal open={openModal} setOpen={setOpenModal} width={"628px"}>
        <div className={styles.modalContainer}>
          <Check />
          <h1>¡Felicidades el registro fue enviado con éxito!</h1>
          <div className={styles.modalFooter}>
            <ButtonModal type={"secondary"} onClick={() => setOpenModal(false)}>
              Completar nuevo formulario
            </ButtonModal>
            <ButtonModal onClick={() => navigate("/")}>
              Volver a la página web
            </ButtonModal>
          </div>
        </div>
      </DefaultModal>
    </>
  );
};

export default Register;
