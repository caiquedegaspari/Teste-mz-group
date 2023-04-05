import { prisma } from "../../../prisma/prisma";
import { SalesHistory } from "../../entities/SalesHistory";
import { ISalesHistoryRepository } from "../ISalesHistory.repository";

export class SalesHistoryRepository implements ISalesHistoryRepository {
  async saveMany(data: SalesHistory[]): Promise<boolean> {
    await prisma.saleHistory.createMany({
      data
    })
    return true
  }
}