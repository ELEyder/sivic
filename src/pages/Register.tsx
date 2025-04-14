import Button from "../components/Buttons/Button";
import { Footer } from "../components/UI";
import styles from "./Register.module.css";
import Info from "../components/Icons/Info";
import DefaultModal from "../components/Modals/DefaultModal";
import Check from "../components/Icons/Check";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonModal from "../components/Buttons/ButtonModal";
import ArrowRight from "../components/Icons/ArrowRight";
import useCaso from "../hooks/useCaso";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [tipoNacionalidad, setTipoNacionalidad] = useState("1");
  const [nacionalidad, setNacionalidad] = useState("Peruano");
  const { createCaso } = useCaso();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleTipoChange = (e: any) => {
    const valor = e.target.value;
    setTipoNacionalidad(valor);

    if (valor === "1") {
      setNacionalidad("Peruano");
    } else {
      setNacionalidad("");
    }
  };

  const handleNacionalidadChange = (e: any) => {
    setNacionalidad(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Por favor, completa el captcha.");
      return;
    }
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.lugar_caso = `${data.lugar_caso} - "${data.nombre_lugar_caso}"`;
    createCaso(data);
    setOpenModal(true);
    console.log(data);
  };

  return (
    <>
      <div className={styles.main}>
        <section className={styles.header}>
          <h2>REGISTRO DE CASO</h2>
        </section>

        <section className={styles.content}>
          <a className={styles.regresar} onClick={() => navigate("/")}>
            <ArrowRight />
          </a>
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
              <input type="text" name="nombre_completo" required />
            </div>

            <div>
              <label htmlFor="">DNI</label>
              <input
                type="text"
                name="dni"
                required
                pattern="^\d{8}$"
                title="El DNI debe tener exactamente 8 números"
                maxLength={8}
              />
            </div>

            <div className={styles.select}>
              <label htmlFor="">Género</label>
              <div className={styles.option}>
                <div>
                  <input
                    type="radio"
                    name="genero"
                    value="Masculino"
                    required
                  />
                </div>
                <label>Masculino</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="genero" value="Femenino" required />
                </div>
                <label>Femenino</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input
                    type="radio"
                    name="genero"
                    value="No Binario"
                    required
                  />
                </div>
                <label>No Binario</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input
                    type="radio"
                    name="genero"
                    value="Prefiero no decirlo"
                    required
                  />
                </div>
                <label>Prefiero no decirlo</label>
              </div>
            </div>

            <div>
              <label htmlFor="">Teléfono fijo o celular</label>
              <input
                type="text"
                name="telefono"
                required
                pattern="^\d+$"
                title="El teléfono debe contener solo números"
              />
            </div>

            <div>
              <label htmlFor="">Correo electrónico</label>
              <input
                type="email"
                name="correo"
                required
                title="Por favor, ingresa un correo electrónico válido"
              />
            </div>

            <div className={styles.select}>
              <label htmlFor="">Nacionalidad</label>
              <div className={styles.option}>
                <div>
                  <input
                    type="radio"
                    name="tipo_nacionnalidad"
                    value="1"
                    checked={tipoNacionalidad === "1"}
                    onChange={handleTipoChange}
                    required
                  />
                </div>
                <label>Peruano</label>
              </div>

              <div className={styles.option}>
                <div>
                  <input
                    type="radio"
                    name="tipo_nacionnalidad"
                    value="2"
                    checked={tipoNacionalidad === "2"}
                    onChange={handleTipoChange}
                    required
                  />
                </div>
                <label>Otro</label>
              </div>

              <input
                type="text"
                name="nacionalidad"
                placeholder="Especifique nacionalidad"
                value={nacionalidad}
                onChange={handleNacionalidadChange}
                required={tipoNacionalidad === "2"}
                readOnly={tipoNacionalidad !== "2"}
              />
            </div>

            <div>
              <label htmlFor="">Dirección</label>
              <input
                type="text"
                name="direccion"
                required
                pattern="^[a-zA-Z0-9\s,.\-]+$"
                title="La dirección solo puede contener letras, números, comas, puntos y guiones"
              />
            </div>

            <div className={styles.row}>
              <div>
                <label htmlFor="">Departamento</label>
                <input type="text" name="departamento" required />
              </div>
              <div>
                <label htmlFor="">Provincia</label>
                <input type="text" name="provincia" required />
              </div>
              <div>
                <label htmlFor="">Distrito</label>
                <input type="text" name="distrito" required />
              </div>
            </div>

            <div className={styles.select}>
              <label htmlFor="">Tipo de caso de denuncia</label>
              <div className={styles.rowOptions}>
                <div className={styles.option}>
                  <div>
                    <input
                      type="radio"
                      name="tipo_caso_id"
                      value={1}
                      required
                    />
                  </div>
                  <label>Estigma y discriminación(a)</label>
                </div>
                <div className={styles.option}>
                  <div>
                    <input
                      type="radio"
                      name="tipo_caso_id"
                      value={2}
                      required
                    />
                  </div>
                  <label>Canasta PANTB</label>
                </div>
                <div className={styles.option}>
                  <div>
                    <input
                      type="radio"
                      name="tipo_caso_id"
                      value={3}
                      required
                    />
                  </div>
                  <label>Tratamiento de TB</label>
                </div>
              </div>
            </div>

            <div className={styles.select}>
              <label htmlFor="">¿Dónde ocurrió el caso a reportar?</label>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="lugar_caso" value="EESS" required />
                </div>
                <label>EESS</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input
                    type="radio"
                    name="lugar_caso"
                    value="Hospital"
                    required
                  />
                </div>
                <label>Hospital</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input
                    type="radio"
                    name="lugar_caso"
                    value="Centro"
                    required
                  />
                </div>
                <label>Centro de Estudios</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input
                    type="radio"
                    name="lugar_caso"
                    value="Trabajo"
                    required
                  />
                </div>
                <label>Trabajo</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input
                    type="radio"
                    name="lugar_caso"
                    value="Comunidad"
                    required
                  />
                </div>
                <label>Comunidad</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input type="radio" name="lugar_caso" value="" required />
                </div>
                <label>Otro</label>
              </div>
            </div>

            <div>
              <label htmlFor="">
                Nombre del lugar donde ocurrio el caso a reportar
              </label>
              <input type="text" name="nombre_lugar_caso" required />
            </div>

            <div>
              <label htmlFor="">Describa brevemente el caso </label>
              <input
                type="text"
                name="descripcion"
                required
                minLength={10}
                title="La descripción debe tener al menos 10 caracteres"
              />
            </div>

            <div className={styles.select}>
              <label htmlFor="">
                Autorizo comunicarse conmigo con el propósito de atender el caso
                reportado
              </label>
              <div className={styles.option}>
                <div>
                  <input
                    type="radio"
                    name="autorizacion_comunicacion"
                    value="1"
                    required
                  />
                </div>
                <label>Si</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input
                    type="radio"
                    name="autorizacion_comunicacion"
                    value="0"
                    required
                  />
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
                  <input
                    type="radio"
                    name="autorizacion_copia_reporte"
                    value="1"
                    required
                  />
                </div>
                <label>Si</label>
              </div>
              <div className={styles.option}>
                <div>
                  <input
                    type="radio"
                    name="autorizacion_copia_reporte"
                    value="0"
                    required
                  />
                </div>
                <label>No</label>
              </div>
            </div>
            <div>
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || ""}
                onChange={(value) => setCaptchaValue(value)}
              />
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
            <ButtonModal
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            >
              Volver a la página web
            </ButtonModal>
          </div>
        </div>
      </DefaultModal>
    </>
  );
};

export default Register;
