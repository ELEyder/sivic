import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const HomeConfig = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Información</h1>
      <section>
        <div>
          <label htmlFor="title">Titulo </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Subtitulo 1</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Subtitulo de texto</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Subtitulo de texto</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Subtitulo de texto</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Imagen 1</label>
          <img src="./logo.png" alt="" />
          <input type="file" />
          <p>(1170 x 1170 px)</p>
        </div>
      </section>
      <section>
        <div>
          <label htmlFor="title">Subtitulo 1</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Subtitulo de texto</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
      </section>
      <section>
        <div>
          <label htmlFor="title">Titulo 1</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Descripción</label>
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
          <label htmlFor="title">Subtitulo 3</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
      </section>
      <section>
        <div>
          <label htmlFor="title">Titulo</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Subtitulo del texto</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Subtitulo del texto</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Descripción</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Imagen</label>
          <img src="./logo.png" alt="" />
          <input type="file" />
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

export default HomeConfig;
