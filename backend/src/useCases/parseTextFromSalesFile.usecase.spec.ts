import { ISalesHistoryRepository } from "../repositories/ISalesHistory.repository"
import { ParseTextFromSalesFileUseCase } from "./parseTextFromSalesFile.usecase"

const salesHistoryRepository: ISalesHistoryRepository = {
  save: jest.fn()
}

let sut: ParseTextFromSalesFileUseCase

beforeEach(() => {
  sut = new ParseTextFromSalesFileUseCase(salesHistoryRepository)
})

describe('Test ParseTextFromSalesFileUseCase', () => {
  it('Should be throw error with wrong param', async () => {
    await expect(sut.execute('')).rejects.toThrowError()
  })
})