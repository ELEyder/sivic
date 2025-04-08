import { Estado } from "./Estado";
import { TipoCaso } from "./TipoCaso";

export interface Caso {
  id: number;
  dni: string;
  nombre_completo: string;
  genero: string;
  telefono: string;
  nacionalidad: string;
  direccion: string;
  departamento: string;
  provincia: string;
  distrito: string;
  tipo_caso: TipoCaso;
  lugar_caso: string;
  descripcion: string;
  autorizacion_comunicacion: boolean;
  autorizacion_copia_reporte: boolean;
  fecha_registro: string;
  fecha_resolucion: string | null;
  estado: Estado;
  asignado: string | null;
  resolucion: string | null;
}