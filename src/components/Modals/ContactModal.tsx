import { Button, Select } from "antd";
import DefaultModal from "./DefaultModal";
import { useState } from "react";

const ContactModal = ({ open, setOpen }: any) => {
  const [estado, setEstado] = useState("");

  return (
    <DefaultModal open={open} setOpen={setOpen} width={"600px"}>
      <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
        <h3>REGISTRO</h3>
        <div>
          <label>Código de queja:</label>
          <p> me9876001</p>
          <label>Nombre: </label> <p>Melecio</p>
          <label>DNI: </label> <p>98765432</p>
          <label>Teléfono: </label>
          <p>98765432</p>
          <label>Correo Electrónico: </label> <p>Av. Los Dolores</p>
        </div>

        <strong>Mensaje</strong>
        <p>Necesito ayuda para rellenar el formulario</p>
        <p>
          <strong>Estado</strong>
        </p>
        <Select
          style={{ width: "100%" }}
          value={estado || undefined}
          onChange={setEstado}
          placeholder="Seleccione"
        >
          <Select.Option value="recibido">Recibido</Select.Option>
          <Select.Option value="leido">Leído</Select.Option>
          <Select.Option value="atendido">Atenidido</Select.Option>
        </Select>
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <Button
            type="primary"
            style={{ marginRight: 10 }}
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>

          <Button type="primary" onClick={() => setOpen(false)}>
            Guardar
          </Button>
        </div>
      </div>
    </DefaultModal>
  );
};

export default ContactModal;
