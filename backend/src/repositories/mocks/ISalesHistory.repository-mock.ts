import { ISalesHistoryRepository } from "../ISalesHistory.repository";

export const salesHistoryRepositoryMock: ISalesHistoryRepository = {
  saveMany: jest.fn(),
  list: jest.fn()
}