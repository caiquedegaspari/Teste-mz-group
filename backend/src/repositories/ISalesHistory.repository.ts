import { SalesHistory } from "../entities/SalesHistory";

export interface ISalesHistoryRepository {
  save(data: SalesHistory): Promise<SalesHistory>
}