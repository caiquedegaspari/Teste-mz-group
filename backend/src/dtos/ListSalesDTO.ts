import { SalesHistory } from "../entities/SalesHistory"

export interface SalesListDTO {
  sellerTable: SalesHistory[]
  total: number
}