import { useEffect, useState } from "react";
import { Table, DatePicker, Select } from "antd";
import styles from "./CasesTable.module.css";
import dayjs from "dayjs";
import CaseModal from "../Modals/CaseModal";
import useCaso from "../../hooks/useCaso";
import type { ColumnsType } from "antd/es/table";
import { Caso } from "../../interfaces/Caso";
import { Estado } from "../../interfaces/Estado";
import moment from "moment";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import Button from "../Buttons/Button";
import { exportCasosToExcel } from "../../utils/exportExcel";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const { RangePicker } = DatePicker;

const CasesTable = ({ filtred = "", mode = "admin" }: any) => {
  const { casos, loading, getCasos } = useCaso();
  const [page, setPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState(filtred);
  const [filteredData, setFilteredData] = useState(casos);
  const [openModal, setOpenModal] = useState(false);
  const [casoSelected, setCasoSelected] = useState({} as Caso);

  useEffect(() => {
    if (!openModal) {
      getCasos();
    }
  }, [openModal]);

  useEffect(() => {
    setFilteredData(casos);
  }, [casos]);

  useEffect(() => {
    setSearchTerm(filtred);
  }, [filtred]);

  // Filtrado por fecha
  const handleDateFilter = (dates: (dayjs.Dayjs | null)[] | null) => {
    if (!dates || dates.length !== 2 || !dates[0] || !dates[1]) {
      setFilteredData(casos);
      return;
    }

    const [start, end] = dates;

    const filtered = casos.filter((item) => {
      const fechas = [
        item.created_at,
        item.fecha_atencion,
        item.fecha_resolucion,
      ];

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

  // Filtrado por búsqueda
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = casos.filter(
      (item) =>
        item.nombre_completo.toLowerCase().includes(value) ||
        item.dni.includes(value) ||
        item.estado.nombre.toLowerCase().includes(value) ||
        item.asignado?.toLowerCase().includes(value)
    );

    setFilteredData(filtered);
  };

  const viewMore = (record: Caso) => {
    setCasoSelected(record);
    setOpenModal(true);
  };

  const columns: ColumnsType<Caso> = [
    { title: "DNI", dataIndex: "dni", key: "dni", align: "center" },
    {
      title: "NOMBRE COMPLETO",
      dataIndex: "nombre_completo",
      key: "nombre",
      align: "center" as const,
    },
    {
      title: "REGISTRO DE CASO",
      dataIndex: "created_at",
      key: "created_at",
      align: "center" as const,
      render: (text: string | null) =>
        text ? moment(text).format("DD/MM/YYYY HH:mm") : "—",
    },
    {
      title: "FECHA DE ATENCIÓN",
      dataIndex: "fecha_atencion",
      key: "fecha_atencion",
      align: "center" as const,
      render: (text: string | null) =>
        text ? moment(text).format("DD/MM/YYYY HH:mm") : "—",
    },
    {
      title: "FECHA DE RESOLUCIÓN",
      dataIndex: "fecha_resolucion",
      key: "fecha_resolucion",
      align: "center" as const,
      render: (text: string | null) =>
        text ? moment(text).format("DD/MM/YYYY HH:mm") : "—",
    },
    {
      title: "ESTADO",
      dataIndex: "estado",
      key: "estado.nombre",
      align: "center" as const,
      render: (estado: Estado) => estado.nombre,
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
      title: "ASIGNADO",
      dataIndex: "asignado",
      key: "asignado",
      align: "center" as const,
      render: (text : string) => text ?? "—",
    },
    {
      title: "RESOLUCIÓN",
      dataIndex: "resolucion",
      key: "resolucion",
      align: "center" as const,
      render: (text : string) => text ?? "—",
    },
    {
      title: "DETALLES",
      key: "detalles",
      align: "center" as const,
      render: (_: any, record: any) => (
        <a onClick={() => viewMore(record)}>Ver más</a>
      ),
    },
  ];

  if (mode == "public")
    return (
      <div className={styles.tableContainer}>
        <Table
          bordered
          columns={columns}
          dataSource={filteredData}
          rowKey={"id"}
          scroll={{ x: "min-content" }}
          pagination={{ pageSize: page }}
          loading={loading}
          rowClassName={(_, index) =>
            index % 2 === 0 ? styles.rowLight : styles.rowDark
          }
        />
      </div>
    );
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
              onChange={handleSearch}
              placeholder="DNI, nombre, estado o asignado"
            />
            <RangePicker onChange={handleDateFilter} />
          </div>
        </div>
        <Table
          bordered
          columns={columns}
          dataSource={filteredData}
          rowKey={"id"}
          scroll={{ x: "min-content" }}
          pagination={{ pageSize: page }}
          loading={loading}
          rowClassName={(_, index) =>
            index % 2 === 0 ? styles.rowLight : styles.rowDark
          }
        />
        <Button onClick={() => exportCasosToExcel(casos)}>Exportar</Button>
      </div>
      <CaseModal caso={casoSelected} open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default CasesTable;
