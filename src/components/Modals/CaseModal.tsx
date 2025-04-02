import { Button, Input, Select } from "antd";
import DefaultModal from "./DefaultModal";
import { useState } from "react";

const CaseModal = ({ open, setOpen }: any) => {
  const [estado, setEstado] = useState("");
  const [oat, setOat] = useState("");

  return (
    <DefaultModal open={open} width={"600px"}>
      <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
      <h3>REGISTRO</h3>
      <p><strong>Código de queja:</strong> me9876001</p>
      <p><strong>Nombre:</strong> Melecio</p>
      <p><strong>DNI:</strong> 98765432</p>
      <p><strong>Género:</strong> Masculino</p>
      <p><strong>Teléfono:</strong> 987987987</p>
      <p><strong>Nacionalidad:</strong> Peruana</p>
      <p><strong>Dirección:</strong> Av. Los Dolores</p>
      <p><strong>Departamento:</strong> Lima</p>
      <p><strong>Provincia:</strong> Lima</p>
      <p><strong>Distrito:</strong> Los Olivos</p>
      <p><strong>Tipo de caso de denuncia:</strong> Estigma y discriminación</p>
      
      <h3>DATOS DEL CASO</h3>
      <p><strong>¿Dónde ocurrió el caso a reportar?</strong></p>
      <p>Centro de Salud "San Martín"</p>
      <p><strong>Descripción del caso:</strong></p>
      <p>Demora en la entrega de medicamentos para el tratamiento de la TB</p>
      
      <p><strong>Autoriza comunicación para atender el caso:</strong> Sí</p>
      <p><strong>Pidió una copia del reporte en su correo:</strong> Sí</p>
      
      <p><strong>Estado</strong></p>
      <Select style={{ width: "100%" }} value={estado} onChange={setEstado}>
        <Select.Option value="pendiente">Pendiente</Select.Option>
        <Select.Option value="resuelto">Resuelto</Select.Option>
      </Select>
      
      <p><strong>Asignar a la OAT</strong></p>
      <Select style={{ width: "100%" }} value={oat} onChange={setOat}>
        <Select.Option value="oat1">OAT 1</Select.Option>
        <Select.Option value="oat2">OAT 2</Select.Option>
      </Select>
      
      <p><strong>Resolución</strong></p>
      <Input.TextArea rows={3} readOnly />
      
      <p><strong>Subir archivo (Resolución)</strong></p>
      <Input type="file" />
      
      <div style={{ marginTop: 20, textAlign: "center" }}>
        <Button type="primary" style={{ marginRight: 10 }}>Registrar</Button>
        <Button type="primary">Enviar resolución</Button>
      </div>
    </div>
    </DefaultModal>
  );
};

export default CaseModal;
