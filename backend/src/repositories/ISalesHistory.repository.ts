import { SalesHistory } from "../entities/SalesHistory";

export interface ISalesHistoryRepository {
  saveMany(data: SalesHistory[]): Promise<boolean>
  list(): Promise<SalesHistory[]>
}