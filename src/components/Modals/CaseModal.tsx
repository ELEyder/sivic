import { Button } from "antd";
import DefaultModal from "./DefaultModal";
import { useEffect, useState } from "react";
import SelectFile from "../SelectFile/SelectFile";
import { Caso } from "../../interfaces/Caso";
import styles from "./CaseModal.module.css";
import useCaso from "../../hooks/useCaso";

interface CaseModalProps {
  caso: Caso;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CaseModal: React.FC<CaseModalProps> = ({ caso, open, setOpen }) => {
  const { updateCaso } = useCaso();
  const [estado, setEstado] = useState<number>(caso.estado?.id);
  const [oat, setOat] = useState<string | null>(caso.asignado || null);
  const [resolucion, setResolucion] = useState<string | null>(
    caso.resolucion || null
  );

  useEffect(() => {
    setEstado(caso.estado?.id);
    setOat(caso.asignado || null);
    setResolucion(caso.resolucion || null);
  }, [caso]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e.target)
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("_method", "PUT");
    await updateCaso(caso.id, formData);
    setOpen(false);
  };

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
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <p>
            <strong>Estado</strong>
          </p>
          <select
            name="estado_id"
            value={estado}
            onChange={(e) => setEstado(Number(e.target.value))}
          >
            <option value={1}>Recibido</option>
            <option value={3}>Atendido</option>
            <option value={4}>Resuelto</option>
          </select>

          <p>
            <strong>Asignar a la OAT</strong>
          </p>
          <select
            name="asignado"
            value={oat || undefined}
            onChange={(e) => setOat(e.target.value)}
          >
            <option value="OAT CEVMT">OAT CEVMT</option>
            <option value="OAT ASAT LV">OAT ASAT LV</option>
            <option value="OAT ASET">OAT ASET</option>
          </select>
          <p>
            <strong>Resolución</strong>
          </p>
          <textarea
            rows={3}
            style={{ width: "100%", padding: "8px", fontFamily: "inherit" }}
            value={resolucion || ""}
            onChange={(e) => setResolucion(e.target.value)}
            name="resolucion"
          />
          <p>
            <strong>Subir archivo (Resolución)</strong>
          </p>
          <div>
            <SelectFile
              name="resolucion_archivo"
              accept={
                ".jpg,.jpeg,.png,.webp,.xls,.xlsx,image/*,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              }
            />
            <p>(Máximo 5 MB, PDF o JPG)</p>
          </div>
          <div style={{ marginTop: 20, textAlign: "center" }}>
            <Button
              type="primary"
              style={{ marginRight: 10 }}
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: 10 }}
            >
              Registrar
            </Button>
          </div>
        </form>
      </div>
    </DefaultModal>
  );
};

export default CaseModal;
