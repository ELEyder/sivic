import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const InformationConfig = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Inicio</h1>
      <section>
        <div>
          <label htmlFor="title">Titulo de bienvenida</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Texto de la bienvenida</label>
          <input type="text" />
        </div>
      </section>
      <section>
        <div>
          <label htmlFor="title">Titulo 1</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Subtitulo 1</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Subtitulo 2</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
      </section>
      <section>
        <div>
          <label htmlFor="title">Titulo 2</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Otro titulo</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Subtitulo 1</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Subtitulo 2</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Imagen 1</label>
          <img src="./logo.png" alt="logo" /> <input type="file" />
          <p>(1170 x 1170 px)</p>
        </div>
      </section>
      <div>
        <Button onClick={() => navigate(-1)}>Retroceder</Button>
        <Button>Aplicar Cambios</Button>
      </div>
    </div>
  );
};

export default InformationConfig;
