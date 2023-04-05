import { prisma } from "../../../prisma/prisma";
import { SalesHistory } from "../../entities/SalesHistory";
import { ISalesHistoryRepository } from "../ISalesHistory.repository";

export class SalesHistoryRepository implements ISalesHistoryRepository {
  saveMany(data: SalesHistory[]): Promise<SalesHistory[]> {
    return Promise.resolve([{
      date: new Date(),
      product: 'Product',
      sellerName: 'Name',
      type: 'type',
      value: 1000
    }])
  }
}