import { Table } from "antd";
import DefaultModal from "./DefaultModal";
import Docs from "../Icons/Docs";
import useCaso from "../../hooks/useCaso";
import { useEffect } from "react";
import { TipoCaso } from "../../interfaces/TipoCaso";
import moment from "moment";
import { Estado } from "../../interfaces/Estado";
import { Caso } from "../../interfaces/Caso";

const columns = [
  {
    title: "NOMBRES",
    dataIndex: "nombre_completo",
    key: "nombre_completo",
    align: "center" as "center",
  },
  {
    title: "TIPO DE CASO",
    dataIndex: "tipo_caso",
    key: "tipo_caso",
    align: "center" as "center",
    render: (text: TipoCaso) => text.nombre,
  },
  {         
    title: "FECHA DE ATENCIÓN",
    dataIndex: "fecha_atencion",
    key: "fecha_atencion",
    align: "center" as "center",
    render: (text: string | null) =>
      text ? moment(text).format("DD/MM/YYYY HH:mm") : "—",
  },
  {
    title: "FECHA DE RESOLUCIÓN",
    dataIndex: "fecha_resolucion",
    key: "fecha_resolucion",
    align: "center" as "center",
    render: (text: string | null) =>
      text ? moment(text).format("DD/MM/YYYY HH:mm") : "—",
  },
  {
    title: "DETALLES DE LA RESOLUCIÓN",
    dataIndex: "resolucion",
    key: "resolucion",
    align: "center" as "center",
    render: (text: String) => text || "-",
  },
  {
    title: "ESTADO",
    dataIndex: "estado",
    key: "estado",
    align: "center" as "center",
    render: (text: Estado) => text.nombre,
    onCell: (record: Caso) => ({
      style: {
        background:
          record.estado.nombre === "Recibido"
            ? "#FF0D0D"
            : record.estado.nombre === "Resuelto"
            ? "#5FE04E"
            : "#D6E04E",
        color: record.estado.nombre === "Recibido" ? "white" : "black",
      },
    }),
  },
  {
    title: "DESCARGAR RESOLUCIÓN",
    dataIndex: "resolucion_url",
    key: "resolucion_url",
    align: "center" as "center",
    render: (text : String) => (
      <button style={{ background: "none", border: "none", cursor: "pointer" }} onClick={()=> {
        if (!text) return alert("No hay resolición subida");
        const url = import.meta.env.VITE_BACKEND_BASE_URL + text
        open(url)
      }}>
        <Docs />
      </button>
    ),
  },
];

const ConsultModal = ({ open, setOpen, dni }: any) => {
  const { casos, getCasos, loading, setCasos } = useCaso();

  useEffect(() => {
    fetchCasos();
  }, []);

  useEffect(() => {
    if (open) fetchCasos();
    else setCasos([]);
  }, [open]);

  const fetchCasos = async () => {
    await getCasos({dni : dni});
  };

  return (
    <DefaultModal open={open} setOpen={setOpen}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          gap: "10px",
        }}
      >
        <h3 style={{ width: "100%", textAlign: "center" }}>RESULTADOS</h3>
        <Table columns={columns} dataSource={casos} pagination={false} rowKey={"id"} loading={loading}/>
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
