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
  lugar_caso: string;
  descripcion: string;
  autorizacion_comunicacion: boolean;
  autorizacion_copia_reporte: boolean;
  created_at: string;
  fecha_atencion: string | null;
  fecha_resolucion: string | null;
  asignado: string | null;
  resolucion: string | null;
  resolucion_url: string | null;
  tipo_caso: TipoCaso;
  estado: Estado;
}