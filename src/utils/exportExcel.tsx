import * as XLSX from "xlsx";
import { Caso } from "../interfaces/Caso";

export function exportJsonToExcel(
  datos: any[],
  nombreArchivo = "datos.xlsx",
  nombreHoja = "Hoja1"
) {
  const worksheet = XLSX.utils.json_to_sheet(datos);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, nombreHoja);
  XLSX.writeFile(workbook, nombreArchivo);
}

export function exportCasosToExcel(datos: Caso[]) {
  const datosFormateados = datos.map((d) => ({
    ID: d.id,
    DNI: d.dni,
    "Nombre completo": d.nombre_completo,
    Género: d.genero,
    Teléfono: d.telefono,
    Nacionalidad: d.nacionalidad,
    Dirección: d.direccion,
    Departamento: d.departamento,
    Provincia: d.provincia,
    Distrito: d.distrito,
    "Lugar del caso": d.lugar_caso,
    Descripción: d.descripcion,
    "Autorización comunicación": d.autorizacion_comunicacion,
    "Autorización copia reporte": d.autorizacion_copia_reporte,
    "Fecha de atención": d.fecha_atencion,
    "Fecha de resolución": d.fecha_resolucion,
    "Asignado a": d.asignado,
    Resolución: d.resolucion,
    "URL de resolución": d.resolucion_url ?? "",
    "Tipo de caso ID": d.tipo_caso.id,
    "Estado ID": d.estado.id,
    "Creado en": d.created_at,
    Estado: d.estado?.nombre ?? "",
    "Descripción del estado": d.estado?.descripcion ?? "",
    "Tipo de caso": d.tipo_caso?.nombre ?? "",
    "Descripción del tipo de caso": d.tipo_caso?.descripcion ?? "",
    "Tipo de caso activo": d.tipo_caso?.activo ?? "",
  }));
  exportJsonToExcel(datosFormateados, "casos.xlsx", "Casos");
}

export function exporContactosToExcel(data: Caso[]) {
  exportJsonToExcel(data, "contactos.xlsx", "Casos");
}
