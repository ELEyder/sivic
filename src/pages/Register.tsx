import { Link } from "react-router-dom";
import Button from "../components/Buttons/Button";
import { Footer } from "../components/UI";
import styles from "./Home.module.css";

const Register = () => {
  styles
  return (
    <div>
      <section>
        <h1>REGISTRO DE CASO</h1>
      </section>
      <section>
        <p>
          SIVICTB protegerá sus datos personales y respetará el derecho a la
          confidencialidad según La Ley de Protección de Datos Personales en
          Perú es la Ley N° 29733, La Ley N° 30287 Ley de Prevención y control
          de TB.
        </p>
        <form>
          <div>
            <label htmlFor="">Nombre y Apellidos</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">DNI</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Género</label>
            <label>
              <input type="radio" name="opcion" value="1" /> Masculino
            </label>
            <br />
            <label>
              <input type="radio" name="opcion" value="2" /> Femenino
            </label>
            <br />
            <label>
              <input type="radio" name="opcion" value="3" /> No binario
            </label>
            <label>
              <input type="radio" name="opcion" value="3" /> Prefiero no
              mencionarlo
            </label>
          </div>
          <div>
            <label htmlFor="">Teléfono fijo o celular</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Correo electrónico</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Nacionalidad</label>
            <label>
              <input type="radio" name="opcion" value="1" /> Peruano(a)
            </label>
            <br />
            <label>
              <input type="radio" name="opcion" value="2" /> Otro
            </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Dirección</label>
            <input type="text" />
          </div>
          <div>
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
          <div>
            <label htmlFor="">Tipo de caso de denuncia</label>
            <div>
              <label>
                <input type="radio" name="opcion" value="1" /> Estigma y
                discriminación(a)
              </label>
              <br />
              <label>
                <input type="radio" name="opcion" value="2" /> Canasta PANTB
              </label>
              <br />
              <label>
                <input type="radio" name="opcion" value="2" /> Tratamiento de TB
              </label>
            </div>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">¿Dónde ocurrió el caso a reportar?</label>
            <div>
              <label>
                <input type="radio" name="opcion" value="1" /> EESS
              </label>
              <br />
              <label>
                <input type="radio" name="opcion" value="2" /> Hospital
              </label>
              <br />
              <label>
                <input type="radio" name="opcion" value="2" /> Centro de
                Estudios
              </label>
              <br />
              <label>
                <input type="radio" name="opcion" value="2" /> Trabajo
              </label>
              <br />
              <label>
                <input type="radio" name="opcion" value="2" /> Comunidad
              </label>
              <br />
              <label>
                <input type="radio" name="opcion" value="2" /> Otro
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="">Lugar donde ocurrio el caso a reportar</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Describa brevemente el caso </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">
              Autorizo comunicarse conmigo con el propósito de atender el caso
              reportado
            </label>
            <label>
              <input type="radio" name="opcion" value="1" /> Si
            </label>
            <br />
            <label>
              <input type="radio" name="opcion" value="2" /> No
            </label>
          </div>
          <div>
            <label htmlFor="">
              Quiero una copia del reporte a mi correo electrónico
            </label>
            <label>
              <input type="radio" name="opcion" value="1" /> Si
            </label>
            <br />
            <label>
              <input type="radio" name="opcion" value="2" /> No
            </label>
          </div>
          <img src="./captcha.png" alt="" />
          <Link to={"/"}>
            <Button>Enviar</Button>
          </Link>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
