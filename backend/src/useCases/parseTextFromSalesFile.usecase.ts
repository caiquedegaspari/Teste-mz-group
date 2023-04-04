import { SalesHistory } from "../entities/SalesHistory"
import { ISalesHistoryRepository } from "../repositories/ISalesHistory.repository"

export class ParseTextFromSalesFileUseCase {
  constructor(private salesHistoryRepository: ISalesHistoryRepository) {}

  async execute(textFromFile: string): Promise<SalesHistory> {

    if (textFromFile.length === 0) throw new Error('Invalid Params')

    return Promise.resolve({
      id: 1,
      type: 'test',
      date: new Date(),
      product: 'test',
      value: 50,
      sellerName: 'test'
    })
  }

}