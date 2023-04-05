import { SalesHistory } from "./SalesHistory"

describe('Test SalesHistory entity', () => {
  const salesHistory = new SalesHistory({
    date: new Date(),
    product: 'test',
    sellerName: 'João Silva',
    type: '1',
    value: 50000,
  }, 1)
  it('Should be defined', () => {
    expect(salesHistory).toBeDefined()
  })
})