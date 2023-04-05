import { SalesHistory } from "../entities/SalesHistory";

export interface ISalesHistoryRepository {
  saveMany(data: SalesHistory[]): Promise<SalesHistory[]>
}