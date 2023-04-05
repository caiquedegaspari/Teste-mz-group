import { ISalesHistoryRepository } from "../repositories/ISalesHistory.repository"
import { ParseTextFromSalesFileUseCase } from "./parseTextFromSalesFile.usecase"

const salesHistoryRepository: ISalesHistoryRepository = {
  saveMany: jest.fn()
}

const textFromFileExample = "12022-01-15T19:20:30-03:00CURSO DE BEM-ESTAR            0000012750JOSE CARLOS\n12021-12-03T11:46:02-03:00DOMINANDO INVESTIMENTOS       0000050000MARIA CANDIDA\n"

let sut: ParseTextFromSalesFileUseCase

beforeEach(() => {
  sut = new ParseTextFromSalesFileUseCase(salesHistoryRepository)
})

describe('Test ParseTextFromSalesFileUseCase', () => {
  it('Should be throw error with wrong param', async () => {
    await expect(sut.execute('')).rejects.toThrowError()
  })

  it('Should parse string param to SalesHistory array', async () => {
    const parseSalesHistory = jest.spyOn(sut, 'parseStringToSalesHistory')
    const result = sut.parseStringToSalesHistory(textFromFileExample)
    
    expect(parseSalesHistory).toHaveBeenCalledTimes(1)
    expect(result).toEqual([
      {
        type: 'Venda produtor',
        date: new Date('2022-01-15T19:20:30-03:00'),
        product: 'CURSO DE BEM-ESTAR',
        value: 12750,
        sellerName: 'JOSE CARLOS'
      },
      {
        type: 'Venda produtor',
        date: new Date('2021-12-03T11:46:02-03:00'),
        product: 'DOMINANDO INVESTIMENTOS',
        value: 50000,
        sellerName: 'MARIA CANDIDA'
      }
    ])
  })

  it('Should return nothing when parsing a empty string to SellersHistory array', async () => {
    const parseSalesHistory = jest.spyOn(sut, 'parseStringToSalesHistory')
    const result = sut.parseStringToSalesHistory(textFromFileExample)
    
    expect(parseSalesHistory).toHaveBeenCalledTimes(1)
    expect(result).toEqual([
      {
        type: 'Venda produtor',
        date: new Date('2022-01-15T19:20:30-03:00'),
        product: 'CURSO DE BEM-ESTAR',
        value: 12750,
        sellerName: 'JOSE CARLOS'
      },
      {
        type: 'Venda produtor',
        date: new Date('2021-12-03T11:46:02-03:00'),
        product: 'DOMINANDO INVESTIMENTOS',
        value: 50000,
        sellerName: 'MARIA CANDIDA'
      }
    ])
  })

  it('Should return correct sale type', () => {
    const producerSell = sut.checkSalesType(1)
    const affiliatedCell = sut.checkSalesType(2)
    const paidComission = sut.checkSalesType(3)
    const receivedComission = sut.checkSalesType(4)
    const notFound = sut.checkSalesType(0)
    
    expect(producerSell).toBe('Venda produtor')
    expect(affiliatedCell).toBe('Venda afiliado')
    expect(paidComission).toBe('Comissão paga')
    expect(receivedComission).toBe('Comissão recebida')
    expect(notFound).toBe('Tipo não encontrado')
  })

  it('Should parse params and call repository to save sales history', () => {
    const parseSalesHistory = jest.spyOn(salesHistoryRepository, 'saveMany')
    sut.execute(textFromFileExample)
    expect(parseSalesHistory).toHaveBeenCalled()
  })

})