import { Table } from "antd";
import DefaultModal from "./DefaultModal";
import Docs from "../Icons/Docs";

const columns = [
  {
    title: "NOMBRES",
    dataIndex: "nombre",
    key: "nombre",
    align: "center" as "center"
  },
  {
    title: "TIPO DE CASO",
    dataIndex: "tipoCaso",
    key: "tipoCaso",
    align: "center" as "center"
  },
  {
    title: "FECHA DE ATENCIÓN",
    dataIndex: "fechaAtencion",
    key: "fechaAtencion",
    align: "center" as "center"
  },
  {
    title: "FECHA DE RESOLUCIÓN",
    dataIndex: "fechaResolucion",
    key: "fechaResolucion",
    align: "center" as "center"
  },
  {
    title: "DETALLES DE LA RESOLUCIÓN",
    dataIndex: "detalles",
    key: "detalles",
    align: "center" as "center"
  },
  {
    title: "ESTADO",
    dataIndex: "estado",
    key: "estado",
    align: "center" as "center"
  },
  {
    title: "DESCARGAR RESOLUCIÓN",
    key: "descargar",
    align: "center" as "center",
    render: () => (
      <button style={{ background: "none", border: "none", cursor: "pointer" }}>
        <Docs />
      </button>
    ),
  },
];

const data = [
  {
    key: "1",
    nombre: "Melecio",
    tipoCaso: "Demora en la entrega de...",
    fechaAtencion: "10/01/2025",
    fechaResolucion: "1/02/2025",
    detalles: "La queja fue transferida a la dirección de salud Lima Norte.",
    estado: "Resuelto",
  },
  {
    key: "2",
    nombre: "Melecio",
    tipoCaso: "Demora en la entrega de...",
    fechaAtencion: "10/01/2025",
    fechaResolucion: "1/02/2025",
    detalles: "La queja fue transferida a la dirección de salud Lima Norte.",
    estado: "Resuelto",
  },
];

const ConsultModal = ({ open, setOpen }: any) => {
  return (
    <DefaultModal open={open}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "end", gap: "10px"}}>
      <h3 style={{width: "100%", textAlign: "center"}}>RESULTADOS</h3>
      <Table columns={columns} dataSource={data} pagination={false} />
      <button
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setOpen(false)}
        >
        Aceptar
      </button>
        </div>
    </DefaultModal>
  );
};

export default ConsultModal;
