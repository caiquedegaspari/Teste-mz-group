import { SalesHistory } from "../entities/SalesHistory"
import { ISalesHistoryRepository } from "../repositories/ISalesHistory.repository"

export class ParseTextFromSalesFileUseCase {
  constructor(private salesHistoryRepository: ISalesHistoryRepository) {}

  private startTypeLength = 0
  private endTypeLength = 1
  private startDateLength = 1
  private endDateLength = 26
  private startProductLength = 26
  private endProductLength = 55
  private startValueLength = 56
  private endValueLength = 66
  private startSellerLength = 66
  private endSellerLength = 85

  checkSalesType(type: number): string {
    switch(type) {
      case 1:
        return 'Venda produtor';
      case 2:
        return 'Venda afiliado';
      case 3:
        return 'Comissão paga'
      case 4:
        return 'Comissão recebida'
      default:
        return 'Tipo não encontrado'
    }
  }

  parseStringToSalesHistory(value: string): SalesHistory[] {
    const stringArray = value.split(/\r?\n/) 
    const parsedSalesHistory: SalesHistory[] = []
    stringArray.forEach((item) => {
      const type = item.slice(this.startTypeLength, this.endTypeLength)
      const date = item.slice(this.startDateLength, this.endDateLength)
      const product = item.slice(this.startProductLength, this.endProductLength)
      const value = item.slice(this.startValueLength, this.endValueLength)
      const sellerName = item.slice(this.startSellerLength, this.endSellerLength)
      if (item === '') return
      const salesHistory: SalesHistory = {
        type: this.checkSalesType(+type),
        date: new Date(date),
        product: product.trimEnd(),
        value: +value,
        sellerName,
      }
      parsedSalesHistory.push(salesHistory)
    })
    return parsedSalesHistory
  }

  async execute(textFromFile: string): Promise<boolean> {
    try {
      if (textFromFile.length === 0) throw new Error('Invalid Params')

      const parsedSalesHistory = this.parseStringToSalesHistory(textFromFile)
      await this.salesHistoryRepository.saveMany(parsedSalesHistory)
      return true
    } catch {
      throw new Error('There was an error creating sales history')
    }
  }

}