import { useState } from "react";
import { Table, DatePicker } from "antd";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const { RangePicker } = DatePicker;

const data = [
  {
    key: 1,
    dni: "12345678",
    nombre: "Juan Pérez",
    fecha_registro: "2024-03-20",
    fecha_resolucion: "2024-03-25",
    estado: "Resuelto",
    asignado: "María López",
    comentario: "Caso cerrado satisfactoriamente",
    detalles: "Detalles del caso aquí...",
  },
  {
    key: 2,
    dni: "87654321",
    nombre: "Ana González",
    fecha_registro: "2024-03-22",
    fecha_resolucion: "2024-03-27",
    estado: "Pendiente",
    asignado: "Carlos Ramírez",
    comentario: "En revisión",
    detalles: "Detalles del caso aquí...",
  },
  {
    key: 3,
    dni: "11223344",
    nombre: "Pedro Méndez",
    fecha_registro: "2024-03-23",
    fecha_resolucion: "2024-03-29",
    estado: "En proceso",
    asignado: "Luis Torres",
    comentario: "Esperando documentos",
    verMas: true,
  },
];
const ContactTable = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleDateFilter = (dates: (dayjs.Dayjs | null)[] | null) => {
    if (!dates) {
      setFilteredData(data);
      return;
    }

    const [start, end] = dates as [dayjs.Dayjs, dayjs.Dayjs];

    const filtered = data.filter(
      (item) =>
        item.fecha_registro >= start.format("YYYY-MM-DD") &&
        item.fecha_registro <= end.format("YYYY-MM-DD")
    );

    setFilteredData(filtered);
  };

  const columns = [
    { title: "DNI", dataIndex: "dni", key: "dni" },
    { title: "NOMBRE COMPLETO", dataIndex: "nombre", key: "nombre" },
    {
      title: "FECHA DE REGISTRO",
      dataIndex: "fecha_registro",
      key: "fecha_registro",
    },
    {
      title: "FECHA DE ATENCIÓN",
      dataIndex: "fecha_atencion",
      key: "fecha_atencion",
    },
    { title: "ESTADO", dataIndex: "estado", key: "estado" },
    { title: "CORREO", dataIndex: "correo", key: "correo" },
    { title: "MENSAJE", dataIndex: "mensaje", key: "mensaje" },
    {
      title: "DETALLES",
      key: "detalles",
      render: (_: any, record: any) => (
        <Link to={`link/${record.dni}`}>Ver más</Link>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <RangePicker onChange={handleDateFilter} style={{ marginBottom: 16 }} />
      <Table columns={columns} dataSource={filteredData} />
    </div>
  );
};

export default ContactTable;
