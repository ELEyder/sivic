import { useState } from "react";
import { Table, DatePicker, Button } from "antd";
import styles from "./CasesTable.module.css";
import dayjs from "dayjs";
import CaseModal from "../Modals/CaseModal";

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
const CasesTable = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [openModal, setOpenModal] = useState(false);

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

  const viewMore = (record : any) => {
    console.log(record)
    setOpenModal(true)
  }

  const columns = [
    { title: "DNI", dataIndex: "dni", key: "dni" },
    { title: "NOMBRE", dataIndex: "nombre", key: "nombre" },
    {
      title: "REGISTRO DE CASO",
      dataIndex: "fecha_registro",
      key: "fecha_registro",
    },
    {
      title: "FECHA DE RESOLUCIÓN",
      dataIndex: "fecha_resolucion",
      key: "fecha_resolucion",
    },
    { title: "ESTADO", dataIndex: "estado", key: "estado" },
    { title: "ASIGNADO", dataIndex: "asignado", key: "asignado" },
    { title: "COMENTARIO", dataIndex: "comentario", key: "comentario" },
    {
      title: "DETALLES",
      key: "detalles",
      render: (_: any, record: any) => (
        <a onClick={() => viewMore(record)}>Ver más</a>
      ),
    },
  ];

  return (
    <>
    <div className={styles.tableContainer}>
      <div className={styles.filters}>
        <div className={styles.pages}>10</div>
        <div className={styles.searchs}>
          <label htmlFor="">Buscar:</label>
          <input type="text" className={styles.input} />
          <RangePicker
            onChange={handleDateFilter}
            style={{ marginBottom: 16 }}
          />
        </div>
      </div>
      <Table
        bordered
        columns={columns}
        dataSource={filteredData}
        scroll={{ x: "min-content" }}
        rowClassName={(_, index) => (index % 2 === 0 ? styles.rowLight : styles.rowDark)}
      />
    </div><Button>Exportar</Button>
    <CaseModal open={openModal} setOpen={setOpenModal}/>
    </>
  );
};

export default CasesTable;
