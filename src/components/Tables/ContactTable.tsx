import { useState } from "react";
import { Table, DatePicker } from "antd";
import dayjs from "dayjs";
import styles from "./ContactTable.module.css";
import ContactModal from "../Modals/ContactModal";

const { RangePicker } = DatePicker;

const data = [
  {
    key: "1",
    dni: "12345678",
    nombre: "Juan Pérez",
    fecha_registro: "2024-03-01",
    fecha_atencion: "2024-03-05",
    estado: "Pendiente",
    correo: "juan.perez@example.com",
    mensaje: "Solicito información sobre mi trámite.",
  },
  {
    key: "2",
    dni: "87654321",
    nombre: "María López",
    fecha_registro: "2024-03-02",
    fecha_atencion: "2024-03-07",
    estado: "Atendido",
    correo: "maria.lopez@example.com",
    mensaje: "Gracias por la atención brindada.",
  },
  {
    key: "3",
    dni: "11223344",
    nombre: "Pedro Ramírez",
    fecha_registro: "2024-03-03",
    fecha_atencion: "2024-03-08",
    estado: "En proceso",
    correo: "pedro.ramirez@example.com",
    mensaje: "Aún no he recibido respuesta.",
  },
];

const ContactTable = () => {
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
    </div>
    <ContactModal open={openModal} setOpen={setOpenModal}/>
    </>
  );
};

export default ContactTable;
