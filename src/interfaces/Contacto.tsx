import { Estado } from "./Estado";

export interface Contacto {
  id?: number;
  nombre_completo: string;
  dni: string;
  telefono?: string;
  correo: string;
  direccion?: string;
  mensaje?: string;
  estado: Estado;
  created_at: string;
  updated_at?: string;
}