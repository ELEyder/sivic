import Button from "../components/Buttons/Button";
import Carousel from "../components/Carrousel/Carousel";
import styles from "./Information.module.css";

const Information = () => {
  return (
    <>
      <section className={styles.home}>
        <Carousel></Carousel>
      </section>
      <section>
        <h1>Información</h1>
        <h2>¿QUE ES VIGILANCIA CIUDADANA?</h2>
        <div>
          <div>
            <div>
              <h3>Definición</h3>
              <p>
                Proceso activo y crítico de supervisión por parte de los
                ciudadanos hacia las acciones y políticas de gobiernos,
                instituciones y servicios públicos, que busca garantizar
                transparencia y buen uso de recursos.
              </p>
            </div>
            <div>
              <h3>Relevancia de la vigilancia ciudadana en la salud</h3>
              <ul>
                <li>
                  Constituye de gran Importancia en la lucha contra enfermedades
                  como la tuberculosis y mejora de la calidad del servicio de
                  salud.
                </li>
                <li>
                  Sirve para detección de barreras, debilidades e
                  irregularidades para el aseguramiento de las acciones,
                  estrategias y programas en las comunidades.
                </li>
                <li>
                  Involucra a los ciudadanos organizaciones comunitarias y
                  organizaciones no gubernamentales, medios de comunicación y
                  académicos como actores clave en la exigencia de rendición de
                  cuentas.
                </li>
                <li>
                  Fomenta la corresponsabilidad entre gobierno y sociedad civil.
                </li>
                <li>
                  Crea un entorno colaborativo en la lucha contra la
                  tuberculosis y otras enfermedades.
                </li>
                <li>
                  Permite hacer denuncia de irregularidades (mal uso de fondos,
                  falta de medicamentos, entre otros relacionados a la TB).
                </li>
                <li>
                  Fomenta la colaboración con autoridades para optimizar
                  políticas sanitarias.
                </li>
              </ul>
            </div>
            <div>
              <h3>¿Qué vigilamos?</h3>
              <ul>
                <li>Estigma y discriminación </li>
                <li>Tratamiento de tuberculosis</li>
                <li>Canasta PAN TB </li>
              </ul>
            </div>
          </div>
          <img src="./info/1.png" alt="foto1" />
        </div>
      </section>
      <section>
        <h1>¿QUE ES ESTIGMA Y DISCRIMINACIÓN?</h1>
        <div>
          <img src="./info/2.png" alt="" />
          <div>
            <p>
              El estigma se refiere a un atributo profundamente desacreditador
              que reduce a un individuo de ser una persona completa a alguien
              marcado negativamente en la sociedad. Se puede entender como una
              desaprobación social basada en alguna característica o condición
              considerada desventajosa.
            </p>
            <p>
              La discriminación es la acción negativa que se toma contra un
              individuo o grupo, basándose en el estigma que se les atribuye. Se
              trata de un trato desigual, injusto e inequitativo que limita las
              oportunidades y el acceso a recursos y servicios.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1>¿CÓMO ES EL TRATAMIENTO DE LA TB?</h1>
        <div>
          <div>
            <p>
              El tratamiento de la tuberculosis es un proceso prolongado,
              implica el uso de medicamentos antibióticos durante un período,
              generalmente de seis a nueve meses. El objetivo del tratamiento es
              eliminar las bacterias de la TB del cuerpo y prevenir la
              reaparición de la enfermedad. Los medicamentos antibióticos más
              comunes utilizados para tratar la TB son:
            </p>
            <ul>
              <li>Isoniazida (H)</li>
              <li>Rifampicina (R)</li>
              <li>Pirazinamida (Z)</li>
              <li>Etambutol (E)</li>
            </ul>
            <h3>REGÍMENES DE TRATAMIENTO:</h3>
            <p>
              Los regímenes de tratamiento para la TB varían según la gravedad
              de la enfermedad, la cepa de la bacteria y la respuesta del
              paciente al tratamiento. Los regímenes de tratamiento comunes son:
              Tratamiento de primera línea: Este régimen se utiliza para tratar
              la TB sensible a los medicamentos. Incluye una combinación de
              medicamentos antibióticos que se administran durante seis meses o
              más. Tratamiento de segunda línea: Este régimen se utiliza para
              tratar la TB resistente a los medicamentos. Incluye medicamentos
              antibióticos más fuertes y se administra durante períodos más
              largos, mayor a 6 meses.
            </p>
          </div>
          <div>
            <img src="./info/3.png" alt="logo" />
            <h3>Seguimiento estrictamente observado DOT:</h3>
            <p>
              Es importante que los pacientes sigan estrictamente su régimen de
              tratamiento y se sometan a un seguimiento permanente para
              controlar su progreso y detectar cualquier efecto secundario.
            </p>
            <Button>Quiero registrar un caso</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
