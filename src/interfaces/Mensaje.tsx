import { Opcion } from "./Opcion"

export interface Mensaje {
  message : String
  options? : Opcion[]
  onClick? : () => void
}