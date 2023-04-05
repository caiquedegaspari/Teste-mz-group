export class SalesHistory {
  id?: number
  type: string
  date: Date
  product: string
  value: number
  sellerName: string

   constructor(data: Partial<SalesHistory>, id: number) {
    this.id = id;
    Object.assign(this, data);
  }
}