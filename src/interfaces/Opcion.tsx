
export interface Opcion {
  text : String
  display : "block" | "none" | undefined
  onClick? : () => void
}