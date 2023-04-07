import { SalesListDTO } from "../dtos/ListSalesDTO"
import { SalesHistory } from "../entities/SalesHistory"
import { ISalesHistoryRepository } from "../repositories/ISalesHistory.repository"

export class ListSalesUseCase {
  constructor(private salesHistoryRepository: ISalesHistoryRepository) {}

  findUniques(data: SalesHistory[]) {
    const histories = data;
    const uniqueObjects = histories.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.sellerName === value.sellerName),
    );
    return uniqueObjects
  }

  composeSellersTableData(
    uniqueSellers: SalesHistory[], 
    allSales: SalesHistory[], 
  ): SalesListDTO[] {
      let parsedHistories: SalesListDTO[] = [];
      uniqueSellers.forEach((unique) => {
        const allSellerSales = allSales.filter(item => item.sellerName == unique.sellerName)
        const total = allSellerSales.reduce((partialSum, item) => {
          if (item.type == 'Comissão paga') return partialSum - item.value
          return partialSum + item.value
        }, 0)
        parsedHistories.push({sellerTable: allSellerSales, total})
      })
      return parsedHistories
  }

  async execute(): Promise<SalesListDTO[]> {
    try {
      const histories = await this.salesHistoryRepository.list()
      const uniqueSellers = this.findUniques(histories)
      return this.composeSellersTableData(uniqueSellers, histories)
    } catch {
      throw new Error('There was an error listing sales')
    }
  }

}