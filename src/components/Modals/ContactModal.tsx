import { Button } from "antd";
import DefaultModal from "./DefaultModal";
import { useEffect, useState } from "react";
import styles from "./CaseModal.module.css";
import { Contacto } from "../../interfaces/Contacto";
import useContacto from "../../hooks/useContacto";

interface CaseModalProps {
  contacto: Contacto;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ContactModal: React.FC<CaseModalProps> = ({
  contacto,
  open,
  setOpen,
}) => {
  const { updateContacto } = useContacto();
  const [estado, setEstado] = useState<number | undefined>(contacto.estado?.id);

  useEffect(() => {
    setEstado(contacto.estado?.id);
  }, [contacto]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("_method", "PUT");
    await updateContacto(contacto.id || 0, formData);
    setOpen(false);
  };

  return (
    <DefaultModal open={open} setOpen={setOpen} width={"600px"}>
      <div className={styles.container}>
        <h2>Detalles del contacto</h2>
        <div>
          <h3>DATOS PERSONALES</h3>
          <div className={styles.personalDataContainer}>
            <div className={styles.labels}>
              <label>Código de queja:</label>
              <label>Nombre:</label>
              <label>Correo: </label>
              <label>DNI: </label>
              <label>Teléfono: </label>
            </div>
            <div className={styles.data}>
              <p>{contacto.id}</p>
              <p>{contacto.nombre_completo}</p>
              <p>{contacto.correo}</p>
              <p>{contacto.dni}</p>
              <p>{contacto.telefono}</p>
            </div>
          </div>
        </div>
        <strong>Resolución</strong>
        <textarea
          rows={3}
          value={contacto.mensaje || ""}
          name="resolucion"
          readOnly
        />
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
            <option value={2}>Leído</option>
            <option value={3}>Atendido</option>
          </select>
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

export default ContactModal;
