import { Button, Input, Select } from "antd";
import DefaultModal from "./DefaultModal";
import { useState } from "react";
import SelectFile from "../SelectFile/SelectFile";

const CaseModal = ({ open, setOpen }: any) => {
  const [estado, setEstado] = useState("");
  const [oat, setOat] = useState("");

  return (
    <DefaultModal open={open} setOpen={setOpen} width={"600px"}>
      <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
        <h3>REGISTRO</h3>
        <div>
          <label>Código de queja:</label><p> me9876001</p>
          <label>Nombre: </label> <p>Melecio</p>
          <label>DNI: </label> <p>98765432</p>
          <label>Género: </label> <p>Masculino</p>
          <label>Teléfono: </label><p>98765432</p>
          <label>Nacionalidad: </label> <p>Peruana</p>
          <label>Dirección: </label> <p>Av. Los Dolores</p>
          <label>Departamento: </label> <p>Lima</p>
          <label>Provincia: </label> <p>Lima</p>
          <label>Distrito: </label> <p>Los Olivos</p>
        </div>

        <strong>Tipo de caso de denuncia:</strong>
        <p>Estigma y discriminación</p>
        <h3>DATOS DEL CASO</h3>
        <p>
          <strong>¿Dónde ocurrió el caso a reportar?</strong>
        </p>
        <p>Centro de Salud "San Martín"</p>
        <p>
          <strong>Descripción del caso:</strong>
        </p>
        <p>Demora en la entrega de medicamentos para el tratamiento de la TB</p>
        <p>
          <strong>Autoriza comunicación para atender el caso:</strong> 
        </p>
        <p>Sí</p>
        <p>
          <strong>Pidió una copia del reporte en su correo:</strong> 
        </p>
        <p>Sí</p>
        <p>
          <strong>Estado</strong>
        </p>
        <Select style={{ width: "100%" }} value={estado || undefined} onChange={setEstado} placeholder="Seleccione">
          <Select.Option value="recibido">Recibido</Select.Option>
          <Select.Option value="atendido">Atendido</Select.Option>
          <Select.Option value="resuelto">Resuelto</Select.Option>
        </Select>
        <p>
          <strong>Asignar a la OAT</strong>
        </p>
        <Select style={{ width: "100%" }} value={oat || undefined} onChange={setOat} placeholder="Seleccione">
          <Select.Option value="oat1">OAT CEVMT</Select.Option>
          <Select.Option value="oat2">OAT ASAT LV</Select.Option>
          <Select.Option value="oat3">OAT ASET</Select.Option>
        </Select>
        <p>
          <strong>Resolución</strong>
        </p>
        <Input.TextArea rows={3} />
        <p>
          <strong>Subir archivo (Resolución)</strong>
        </p>
        <div>
        <SelectFile /> <p>(Máximo 5 MB, PDF o JPG)</p>
        </div>
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <Button type="primary" style={{ marginRight: 10 }} onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button type="primary" style={{ marginRight: 10 }}>
            Registrar
          </Button>
          <Button type="primary">Enviar resolución</Button>
        </div>
      </div>
    </DefaultModal>
  );
};

export default CaseModal;
