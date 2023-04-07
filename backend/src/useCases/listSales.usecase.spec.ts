import { SalesHistory } from "../entities/SalesHistory"
import { salesHistoryRepositoryMock as salesHistoryRepository } from "../repositories/mocks/ISalesHistory.repository-mock"
import { ListSalesUseCase } from "./listSales.usecase"


const findUniqueParam: SalesHistory[] = [
  {
    type: 'Venda produtor',
    date: new Date('2021-12-03T11:46:02-03:00'),
    product: 'DOMINANDO INVESTIMENTOS',
    value: 50000,
    sellerName: 'MARIA CANDIDA'
  },
  {
    type: 'Comissão recebida',
    date: new Date('2021-12-03T11:46:02-03:00'),
    product: 'DOMINANDO INVESTIMENTOS',
    value: 50000,
    sellerName: 'MARIA CANDIDA'
  }
]

const allSales: SalesHistory[] = [
   {
    type: 'Venda produtor',
    date: new Date('2021-12-03T11:46:02-03:00'),
    product: 'DOMINANDO INVESTIMENTOS',
    value: 50000,
    sellerName: 'MARIA CANDIDA'
  },
  {
    type: 'Comissão recebida',
    date: new Date('2021-12-03T11:46:02-03:00'),
    product: 'DOMINANDO INVESTIMENTOS',
    value: 50000,
    sellerName: 'MARIA CANDIDA'
  },
  {
    type: 'Venda filiado',
    date: new Date('2021-12-03T11:46:02-03:00'),
    product: 'DOMINANDO INVESTIMENTOS',
    value: 50000,
    sellerName: 'JOAO PEREIRA'
  },
  {
    type: 'Comissão paga',
    date: new Date('2021-12-03T11:46:02-03:00'),
    product: 'DOMINANDO INVESTIMENTOS',
    value: 10000,
    sellerName: 'JOAO PEREIRA'
  }
]

let sut: ListSalesUseCase

beforeEach(() => {
  sut = new ListSalesUseCase(salesHistoryRepository)
})

describe('Test listSales usecase', () => {
  it('Should be able to filter unique items by sellers names inside sales array', async () => {
    const result = sut.findUniques(findUniqueParam)
    expect(result).toEqual([findUniqueParam[0]])
    expect(result.length).toBe(1)
  })

  it('Should be able to return sellers table by each seller with total of sales', async () => {
    const uniques = sut.findUniques(allSales)
    const sellersTable = sut.composeSellersTableData(uniques, allSales)

    expect(sellersTable[0].total).toBe(100000)
    expect(sellersTable.length).toBe(2)
  })

  it('Should call SalesHistoryRepository and return sellers table', async () => {
    const spyList = jest.spyOn(salesHistoryRepository, 'list').mockReturnValue(
      Promise.resolve(allSales)
    )
    const result = await sut.execute()

    expect(spyList).toHaveBeenCalledTimes(1)
    expect(result.length).toBe(2)
  })
  it('Should throw error if something went wrong', async () => {
    jest.spyOn(salesHistoryRepository, 'list').mockReturnValue(
      Promise.reject(new Error())
    )
    await expect(sut.execute()).rejects.toThrowError()

  })
})