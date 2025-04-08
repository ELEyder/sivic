import { Button, Input, Select } from "antd";
import DefaultModal from "./DefaultModal";
import { useEffect, useState } from "react";
import SelectFile from "../SelectFile/SelectFile";
import { Caso } from "../../interfaces/Caso";
import styles from "./CaseModal.module.css";
interface CaseModalProps {
  caso: Caso;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CaseModal: React.FC<CaseModalProps> = ({ caso, open, setOpen }) => {
  const [estado, setEstado] = useState<number>(caso.estado?.id);
  const [oat, setOat] = useState<string | null>(caso.asignado || null);

  useEffect(() => {
    setEstado(caso.estado?.id);
    setOat(caso.asignado || null);
  }, [caso]);
  
  return (
    <DefaultModal open={open} setOpen={setOpen} width={"600px"}>
      <div className={styles.container}>
        <h2>Detalles del caso</h2>
        <div>
          <h3>DATOS PERSONALES</h3>
          <div className={styles.personalDataContainer}>
            <div className={styles.labels}>
              <label>Código de queja:</label>
              <label>Nombre: </label>
              <label>DNI: </label>
              <label>Género: </label>
              <label>Teléfono: </label>
              <label>Nacionalidad: </label>
              <label>Dirección: </label>
              <label>Departamento: </label>
              <label>Provincia: </label>
              <label>Distrito: </label>
            </div>
            <div className={styles.data}>
              <p>{caso.id}</p>
              <p>{caso.nombre_completo}</p>
              <p>{caso.dni}</p>
              <p>{caso.genero}</p>
              <p>{caso.telefono}</p>
              <p>{caso.nacionalidad}</p>
              <p>{caso.direccion}</p>
              <p>{caso.departamento}</p>
              <p>{caso.provincia}</p>
              <p>{caso.distrito}</p>
            </div>
          </div>
        </div>
        <div className={styles.caso}>
          <strong>Tipo de caso de denuncia:</strong>
          <p>{caso.tipo_caso?.nombre}</p>
          <p>
            <strong>¿Dónde ocurrió el caso a reportar?</strong>
          </p>
          <p>{caso.lugar_caso}</p>
          <p>
            <strong>Descripción del caso:</strong>
          </p>
          <p>{caso.descripcion}</p>

          <p>
            <strong>Autoriza comunicación para atender el caso:</strong>
          </p>
          <p>{caso.autorizacion_comunicacion ? "Sí" : "No"}</p>
          <p>
            <strong>Pidió una copia del reporte en su correo:</strong>
          </p>
          <p>{caso.autorizacion_copia_reporte ? "Sí" : "No"}</p>
        </div>

        <p>
          <strong>Estado</strong>
        </p>
        <Select
          style={{ width: "100%" }}
          value={estado}
          onChange={setEstado}
          placeholder="Seleccione"
        >
          <Select.Option value={1}>Recibido</Select.Option>
          <Select.Option value={2}>Atendido</Select.Option>
          <Select.Option value={3}>Resuelto</Select.Option>
        </Select>
        <p>
          <strong>Asignar a la OAT</strong>
        </p>
        <Select
          style={{ width: "100%" }}
          value={oat || undefined}
          onChange={setOat}
          placeholder="Seleccione"
        >
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
          <Button
            type="primary"
            style={{ marginRight: 10 }}
            onClick={() => setOpen(false)}
          >
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
