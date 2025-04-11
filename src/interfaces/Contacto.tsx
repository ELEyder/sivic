import { Estado } from "./Estado";

export interface Contacto {
  id?: number;
  nombre_completo: string;
  correo: string;
  dni: string;
  telefono?: string;
  mensaje?: string;
  estado?: Estado;
  created_at?: string;
  updated_at?: string;
}