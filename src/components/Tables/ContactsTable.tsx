import { useEffect, useState } from "react";
import { Table, DatePicker, Select } from "antd";
import dayjs from "dayjs";
import styles from "./ContactsTable.module.css";
import ContactModal from "../Modals/ContactModal";
import useContacto from "../../hooks/useContacto";
import { Contacto } from "../../interfaces/Contacto";
import { Estado } from "../../interfaces/Estado";
import Button from "../Buttons/Button";
import { exportContactosToExcel } from "../../utils/exportExcel";
import moment from "moment";

const { RangePicker } = DatePicker;

const ContactsTable = () => {
  const { contactos, loading, getContactos } = useContacto();
  const [contactoSelected, setContactoSelected] = useState<Contacto>(
    {} as Contacto
  );
  const [page, setPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const [filteredData, setFilteredData] = useState(contactos);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setFilteredData(contactos);
  }, [contactos]);

  useEffect(() => {
    if (!openModal) {
      getContactos();
    }
  }, [openModal]);

  // Filtrado por fecha
  const handleDateFilter = (dates: (dayjs.Dayjs | null)[] | null) => {
    if (!dates || dates.length !== 2 || !dates[0] || !dates[1]) {
      setFilteredData(contactos);
      return;
    }

    const [start, end] = dates;

    const filtered = contactos.filter((item) => {
      const fechas = [item.created_at, item.updated_at];

      return fechas.some((fechaStr) => {
        const fecha = dayjs(fechaStr, "YYYY-MM-DD HH:mm:ss");
        return (
          fecha.isSameOrAfter(start.startOf("day")) &&
          fecha.isSameOrBefore(end.endOf("day"))
        );
      });
    });
    setFilteredData(filtered);
  };

  // Función para filtrar por búsqueda en nombre, dni, correo o estado
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = contactos.filter(
      (item) =>
        item.nombre_completo.toLowerCase().includes(value) ||
        item.dni.includes(value) ||
        item.correo.toLowerCase().includes(value) ||
        item.estado?.nombre.toLowerCase().includes(value)
    );

    setFilteredData(filtered);
  };

  const viewMore = (record: any) => {
    console.log(record);
    setContactoSelected(record);
    setOpenModal(true);
  };

  const columns = [
    { title: "DNI", dataIndex: "dni", key: "dni" },
    { title: "NOMBRE COMPLETO", dataIndex: "nombre_completo", key: "nombre" },
    {
      title: "FECHA DE REGISTRO",
      dataIndex: "created_at",
      key: "created_at",
      render: (text: string | null) =>
        text ? moment(text).format("DD/MM/YYYY HH:mm") : "—",
    },
    {
      title: "FECHA DE ATENCIÓN",
      dataIndex: "updated_at",
      key: "updated_at",
      render: (text: string | null) =>
        text ? moment(text).format("DD/MM/YYYY HH:mm") : "—",
    },
    {
      title: "ESTADO",
      dataIndex: "estado",
      key: "estado",
      render: (estado: Estado) => estado.nombre,
      onCell: (record: Contacto) => ({
        style: {
          background:
            record.estado?.nombre === "Recibido"
              ? "#FF9A27"
              : record.estado?.nombre === "Atendido"
              ? "#5FE04E"
              : "#D6E04E",
          color: "black",
        },
      }),
    },
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
          <Select value={page} onChange={setPage}>
            <Select.Option value={5}>5</Select.Option>
            <Select.Option value={10}>10</Select.Option>
            <Select.Option value={15}>15</Select.Option>
          </Select>
          <div className={styles.searchs}>
            <label htmlFor="search">Buscar:</label>
            <input
              type="text"
              className={styles.input}
              value={searchTerm}
              onChange={handleSearch} // Agregar evento onChange
              placeholder="Buscar por DNI, nombre, correo o estado"
            />
            <RangePicker onChange={handleDateFilter} />
          </div>
        </div>
        <Table
          bordered
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          scroll={{ x: "min-content" }}
          pagination={{ pageSize: page }}
          loading={loading}
          rowClassName={(_, index) =>
            index % 2 === 0 ? styles.rowLight : styles.rowDark
          }
          style={{
            width: "100%",
          }}
        />
        <Button onClick={() => exportContactosToExcel(contactos)}>
          Exportar
        </Button>
      </div>
      <ContactModal
        contacto={contactoSelected}
        open={openModal}
        setOpen={setOpenModal}
      />
    </>
  );
};

export default ContactsTable;
